

import './RestaurantCard.css'

const RestaurantCard = (props) => {
  const starRating =(rating) =>{
    const stars = [];

    for(let i=1; i<=5; i++){
      stars.push(
        <span key={i} style={{ color:i<=rating ? "#ffcc00" : "#ddd"}} >
        &#9733;
        </span>
      )
    }

    return(
      <>
        {stars} {rating} /5
      </>
    )

  }


  return (
    <div className='restaurantCard'>
        <h2>{props.name}</h2>
        <span>{props.rating}</span>
        <span>{starRating(props.rating)}</span>
        <span>{props.address}</span>
        <div className="divBottom">
        <span style={{
          color:"#00ff00"
        }}>{props.type_of_food}</span>
        <br />
        <span style={{
          color:"#00f",
          textDecoration:"underline"
        }}>Visit Menu</span>
        </div>
    </div>
  )
}

export default RestaurantCard