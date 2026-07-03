import { useMsg } from "../context/Provider"

const Notify = () => {
  const { msg_no } = useMsg();
  return (
    <div className="notification">
      <i className="fas fa-bell"></i>
      <p>{msg_no}</p>
    </div>
  )
}

export default Notify
