import CardProps from "./CradProps"


const Card = ({ title, description }: CardProps) => {
    return (
        <>

            <div>{title}</div>

            <div>{description}</div>
        </>
    )
}

export default Card