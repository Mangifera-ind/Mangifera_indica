import "./Tripstyle.css"
import Tripdata from "./Tripdata"
import Trip1 from "../assets/Trip1.jpg"
import Trip2 from "../assets/Trip2.jpg"
import Trip3 from "../assets/Trip3.jpg" 

function Trip(){
    return(
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>The way is paved to you, A click will change your life to better.</p>
        <div className="tripcard">
            <Tripdata
            img = {Trip1}
            heading = "Trip in New Orleans"
            text = {"New Orleans is a vibrant city located on the Mississippi River in Louisiana, known for its food, music,"+ 
            "and cultural heritage. It is home to numerous historical landmarks and attractions, such as the French Quarter,"+
            "the National WWII Museum, and St. Louis Cathedral. The city is also famous for its Mardi Gras celebrations,"+
            "jazz music, and Creole and Cajun cuisine. Despite facing natural disasters like Hurricane Katrina,"+
            "New Orleans has managed to revive itself and continues to attract visitors from all over the world."}
            />
            <Tripdata
            img = {Trip2}
            heading = "Trip in Bali"
            text = {"Bali is a popular island located in Indonesia known for its stunning beaches, ancient temples, and vibrant culture."+
            "It is a top tourist destination in Southeast Asia, with millions of visitors each year."+
            "The island is home to beautiful resorts, fine dining restaurants, and a thriving nightlife scene."+
            "Bali is also recognized for its scenic rice terrace fields, lush forests, and cascading waterfalls."+
            "It is an ideal destination for adventure seekers, nature lovers, and anyone seeking a luxurious tropical getaway."}
            />
            <Tripdata
            img = {Trip3}
            heading = "Trip in Japan, Tokyo"
            text = {"Japan is a country located in East Asia, consisting of four main islands and many smaller ones."+
            "It has a population of approximately 126 million people, with the capital city being Tokyo."+
            "Japan is known for its unique culture, technology advancements, and delicious cuisine such as sushi and ramen."+
            "Tourist attractions include Mount Fuji, historic shrines and temples, and the bustling streets of Tokyo."+
            "It has a well-developed economy, with industries such as automotive manufacturing, electronics, and robotics."+
            "Japanese people are known for their politeness, respect towards others, and strong work ethic."}
            />
        </div>
    </div>
    )
}

export default Trip