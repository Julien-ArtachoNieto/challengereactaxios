const Quotecard = (props) => {
    return(
        <div>
            <h2>{props.character}</h2>
            <img src={props.image} alt={props.character} />
            <p>{props.quote}</p>
        </div>
    )
}

export default Quotecard;