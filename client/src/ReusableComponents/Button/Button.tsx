import { ButtonProps } from "./ButtonProps"


const Button = ({text,className,onClick}:ButtonProps) => {
  return (
    <button onClick={onClick} className={` ${className? `${className}` :''}`}>{text}</button>
  )
}

export default Button