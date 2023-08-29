import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Trip from "../components/Trip";
import Footer from "../components/Footer"

function Home() {
    return(
        <>
        <Navbar />
          <Hero
          cName="hero"
          heroImg="./assets/home.jpg"
          title="Life Is Short, World Is Wide."
          text="Choose You Favorite Destination."
          buttonText="Travel Plan"
          url="/"
          btnClass="Show"
          />
          <Destination/>
          <Trip/>
          <Footer/>
        </>
    );
}


export default Home;