import React from "react"
import Food from "./Foods"

export default () => {
    return (
        <section id="fav-foods">
        <h2>Favourite Foods</h2>
        <Food 
            name="Pizza"
            image={"https://bit.ly/2rJ4rnn"}
            time="All the time"
            place="Queen Margharitas"
         />
         <Food 
            name="Quesadillas"
            image={"https://bit.ly/2ryI6bZ"}
            time="Afternoon Siesta"
            place="Mejico"
         />
         <Food 
            name="Icecream Pancakes"
            image={"https://bit.ly/2zUznp2"}
            time="Breaky"
            place="Pancakes on the Rocks"
         />
         <Food 
            name="Loaded Frie"
            image={"https://bit.ly/2GdfYVK"}
            time="During the game"
            place="My House"
         />
    </section>
)
}