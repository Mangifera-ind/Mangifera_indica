import { Component } from "react";
/*import mountain1 from "../assets/Taalvolc.jpg"
import mountain2 from "../assets/Taalvolc2.jpg"
import mountain3 from "../assets/Taalvolc.jpg"
import mountain4 from "../assets/Taalvolc.jpg"
*/
import "./Destinationstyle.css"
import Destination from "./Destination";

class Destinationdata extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>
                        {this.props.text}
                    </p>
                </div>

                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/> 
                </div>
            </div>
        )
    }
}

export default Destinationdata;