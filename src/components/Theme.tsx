import { useTheme } from "../context/Provider";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme">
      <div
        className={`light ${theme === "light" ? "active" : ""}`}
        onClick={() => setTheme("light")}
      >
        Light
      </div>
      <div
        className={`dark ${theme === "dark" ? "active" : ""}`}
        onClick={() => setTheme("dark")}
      >
        Dark
      </div>
    </div>
  );
};

export default Theme;