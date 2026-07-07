import type { FC } from "react"

interface Data{
    id: number;
    img: string;
    alt: string;
    name: string;
    post: string;
    desc: string;
}

interface Prop{
    props: Data;
}

const FounderCard:FC<Prop> = ({props}) => {

  const {img, alt, name, post, desc} = props;
  
  return (
    <div className="userCard">
        <img src={img} alt={alt} />  
        <p className="name">{name}</p>
        <p className="post">{post}</p>
        <p className="desc">{desc}<i className="fas fa-chart-line"></i></p>
    </div>
  )
}

export default FounderCard
