import "./Card.scss";

const Card = ({name, tagline, description, image_url, abv, first_brewed, ph}) => {

    const shortenedText = description.length < 200 ? description : description.substring(0, description.lastIndexOf(".", 200)) + ".";

    return (
        <div className="card">
            <div className="card__top">
            <img className="card__card-img" src = {image_url} alt={name} />
            </div>
                <h1 className="card__card-title">{name}</h1>
                <h3 className="card__card-tagline">{tagline}</h3>
                <p className="card__card-description">{shortenedText}</p>
                <p>ABV: {abv}</p>
                <p>First Brewed: {first_brewed}</p>
                <p>pH: {ph}</p>
        </div>
    )
}


export default Card;