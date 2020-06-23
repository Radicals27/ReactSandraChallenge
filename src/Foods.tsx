import React from "react"

interface FoodProps {
    name: string
    image: string
    time: string
    place: string
}

export default ({name, image, time, place}: FoodProps): JSX.Element => {
    return (
        <div>
            <h4>{name}</h4>
            <img src={image} alt={`Some tasty ${name}`} />
            <p>Best time to eat: <span>{time}</span></p>
            <p>Best place: <span>{place}</span></p>
        </div>
)
}