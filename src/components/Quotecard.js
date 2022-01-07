const Quotecard = (props) => {
    return(
        <div>
            {console.log('Dans la props : ',props.quote)}
            <h2>{props.character}</h2>
            <img src={props.image} alt={props.character} />
            <p>{props.quote}</p>

        </div>
    )
}

export default Quotecard;