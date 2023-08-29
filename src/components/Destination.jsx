import mountain1 from "../assets/Taalvolc.jpg"
import mountain2 from "../assets/Taalvolc2.jpg"
import Brazil1 from "../assets/Brazil1.jpg"
import Brazil2 from "../assets/Brazil2.jpg"
import Paris1 from "../assets/Paris1.jpg"
import Paris2 from "../assets/Paris2.jpg"
import Destinationdata from "./Destinationdata"

import "./Destinationstyle.css"

const Destination =()  =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see alot. within a time frame</p>
            
            <Destinationdata
            className="first-des"
            heading = "Taal, volcano, Batangas"
            text =  {"One of the most iconic views in luzan, MT. Taal boasts a volcano inside a lake inside an island, if you fancy a" +
            "closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you"+
            "most of the way, and you'll see the peculiar enviroment found on an active volcano including volcanic rocks and steam vents."+
            "The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulado before heading back home."}
            img1 = {mountain1}
            img2 = {mountain2}
            />
            <Destinationdata
            className="first-des-reverse"
            heading = "Brazil, Rio De janiro"
            text =  {"Brazil is a destination that is sure to impress. With its vibrant cities, stunning natural landscapes,"+ 
            "and rich cultural heritage, it offers something for every type of traveler. Visitors can explore the lively streets of Rio de Janeiro,"+
            "go on a wildlife adventure in the Amazon rainforest, relax on the beautiful beaches of Bahia, or immerse themselves"+
            "in the colonial charm of towns like Salvador and Ouro Preto. Brazil is also known for its delicious food,"+
            "lively music and dance scene, and friendly locals."+
            "Don't miss out on this incredible country and its endless possibilities for adventure and relaxation."}
            img1 = {Brazil1}
            img2 = {Brazil2}
            />
            <Destinationdata
            className="first-des-vorse"
            heading = "France, Paris"
            text =  {"Paris is one of the most beautiful and iconic cities in the world, known for its stunning architecture, rich culture,"+
            "and lush gardens. From the Eiffel Tower to the Louvre museum, there are countless iconic attractions to explore. Visitors can"+
            "also enjoy world-class cuisine, wonderful shopping, and vibrant nightlife. While in Paris, be sure to take a stroll along"+
            "the Seine river, visit charming neighborhoods like Montmartre, and savor a café au lait in one of the many cozy cafes."+
            "A trip to Paris promises to be an unforgettable experience."}
            img1 = {Paris1}
            img2 = {Paris2}
            />
        </div>
    )
}

export default Destination