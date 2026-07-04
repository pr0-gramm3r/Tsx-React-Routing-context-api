
interface UserCardProps {
    img: string
    alt: string
    name: string
    post: string
    desc: string
}

const UserCard = ({ img, alt, name, post, desc }: UserCardProps) => {
    return (
        <div className="userCard">
            <img src={img} alt={alt} />
            <p className="name">{name}</p>
            <p className="post">{post}</p>
            <p className="desc">{desc} <i className="fas fa-chart-line"></i></p>
        </div>
    )
}

export default UserCard
