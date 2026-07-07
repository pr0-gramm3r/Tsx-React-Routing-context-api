import type { FC } from "react"

interface WorkingCardData {
  id: number
  image: string
  name: string
  founderName: string
  details: string
}

interface WorkingCardProps{
    props: WorkingCardData;
}

const WorkingCard :FC<WorkingCardProps> = ({props}) => {

    const {image, name, founderName, details} = props;

    return (
        <div className="userCard">
            <img src={image} alt={name} />
            <p className="name">{name}</p>
            <p className="post">{founderName}</p>
            <p className="desc">{details}</p>
            <button>Visit now <i className="fas fa-arrow-right"></i></button>
        </div>
    )
}

export default WorkingCard
