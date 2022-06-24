import React from "react";
import { Component } from "react";
import './card-list.style.css'
import Card from "../card/card.component";

class CardList extends Component {
    render(){
        // The function of Cardlist component is only to display list of filtered results

        const {monsters} = this.props;

        return(
            <div className="card-list">
                {
                    monsters.map((monster) => {
                        return (
                            <Card           className="card-container"                      monster={monster}
                            />
                        );
                })}
            </div>
            
        )
                
                       
    }
}

export default CardList;