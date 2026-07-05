// src/utils/auth.ts

interface StoredUser {
  email: string;
  password: string; 
  name?: string;
}

interface UserValidate {
    ok:boolean;
    message?: string;
}

const USERS_KEY = "app_users";
const SESSION_KEY = "auth_session";

const getUsers =(): StoredUser[] => {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export const registerUser = (user: StoredUser):UserValidate => {
  const users = getUsers();
  if (users.some((u) => u.email === user.email)) {
    return { ok: false, message: "Account already exists with this email." };
  }
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return { ok: true };
}

export const loginUser = ({ email, password }: StoredUser): UserValidate => {
  const users = getUsers();
  const found = users.find((u) => u.email === email);

  if (!found || found.password !== password) {
    return { ok: false, message: "Invalid email or password." };
  }

  const session = {
    email: found.email,
    name: found.name,
    token: btoa(`${found.email}:${Date.now()}`), // fake token for demo
    loggedInAt: Date.now(),
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return { ok: true };
}

export function logoutUser(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function isAuthenticated(): boolean {
  return !!getSession();
}