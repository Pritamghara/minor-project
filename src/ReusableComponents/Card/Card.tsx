// Card.tsx
import CardProps from './CardProps';
import './Card.css';

const Card = ({ title, description, image, className, icon, titleIcon }: CardProps) => {
    return (
        <div className={`cardMain ${className}`}>
            {icon && <div className={`${className ? `${className}__icon` : ''}`}>{icon}</div>}
            {image && <img className={`${className ? `${className}__image` : ''}`} src={image} alt={title} />}
            {title && (
                <div className={`${className ? `${className}__title` : ''}`}>
                    {title} {titleIcon && <span className={`${className ? `${className}__titleIcon` : ''}`}>{titleIcon}</span>}
                </div>
            )}
            {description && (
                <div className={`${className ? `${className}__description` : ''}`}>
                    {description}
                </div>
            )}
        </div>
    );
}

export default Card;
