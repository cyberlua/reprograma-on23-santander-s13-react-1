function Image(props) {
    return (
        <>
        <img className={props.class} src={props.image}/>
        <p>{props.caption}</p>
        </>
    )
}  

export default Image;