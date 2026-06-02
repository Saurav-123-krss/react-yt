
const Card = (props) => {
  return (
    <div className="Card">
        <img src= {props.img}/>
        
        <h1>{props.user}{props.age}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          atque voluptas, illo similique unde aliquam sapiente laudantium hic
          velit rem.
        </p>
        <button>View Profile</button>
      </div>
  )
}

export default Card;