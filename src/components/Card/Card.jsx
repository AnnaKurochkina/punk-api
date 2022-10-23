import "./Card.scss";

const Card = (props) => {

    const {name, tagline, description, image_url, abv, first_brewed, ph, } = props;



    return (
    <div className="card">
        <img className="card__card-img" src = {image_url} alt="beer" />
        {/* <div className="card__card-body"> */}
            <h1 className="card__card-title">{name}</h1>
            <h2 className="card__card-tagline">{tagline}</h2>
            <p className="card__card-description">{description}</p>
            <h4>abv: {abv}   first_brewed: {first_brewed}   ph: {ph}</h4>
            {/* <p className="card__abv">{abv}</p>
            <p className="card__first-brewed">{first_brewed}</p>
            <p className="card__ph">{ph}</p> */}
        {/* </div> */}
    </div>
    )
}


export default Card;