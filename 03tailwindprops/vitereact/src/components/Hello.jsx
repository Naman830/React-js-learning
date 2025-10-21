// function Hello(props) {
//     return <h2>Hello, {props.name} your age is {props.age} and you live in {props.city}</h2>
// }

function Hello({name, age, city, dream ="billionare"}) {

    return(
        <>
        <h1>Hello, {name}</h1>
        <h4>Age: {age}</h4>
        <h6>City: {city}</h6>
        <p>Dream: {dream}</p> */ this is default value /*
        </>
    )
}

export default Hello