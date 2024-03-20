import React from "react";
import './Slot.css';

function Slot() {

    const icon_width = 79,
          icon_height = 79,
          num_icons = 9,
          time_per_icon = 100,
          iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"],
          indexes = [0,0,0];
    
    const roll = (reel, offset = 0) => {
        const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);
        const style = getComputedStyle(reel),
            backgroundPositionY = parseFloat(style["background-position-y"]);

            return new Promise((resolve, reject)=> {

                // reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
                // reel.style.backgroundPositionY = `${backgroundPositionY + delta*icon_height}px`;
                const targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
                normTargetBackgroundPositionY = targetBackgroundPositionY%(num_icons * icon_height);
                console.log("bg = " + reel.style.backgroundPositionY);
                console.log("ms = " + reel.style.transition)
                //delay time out

                setTimeout(() => { 
                    // Set transition properties ==> https://cubic-bezier.com/#.41,-0.01,.63,1.09
                    reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
                    // Set background position
                    reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
                }, offset * 150);

                // setTimeout(() => {
                //     // Reset position, so that it doesn't get higher without limit
                //     reel.style.transition = `none`;
                //     reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
                //     // Resolve this promise
                //     resolve(delta%num_icons);

                
                // }, (8 + 1 * delta) * time_per_icon + offset * 150);
            })
    };


    function rollAll(){
        const reelsList = document.querySelectorAll('.slots > .reel');

        Promise
            .all( [...reelsList].map((reel, i) => roll(reel, i)) )
            .then((deltas) => console.log(deltas))
        // [...reelsList].map((reel, i) => {
        //     console.log(reel, i)
        //     roll(reel, i).then((delta => { console.log(delta)}))
        // })
    


    }
    rollAll(); // ออกมา 6 รอบ
    return (
        <div className="slots">
            <div className="reel"></div>
            <div className="reel"></div>
            <div className="reel"></div>
            <img className="side-slot" src="https://assets.codepen.io/439000/slotreel.webp"/>
        </div>
        
        
    )
}
export default Slot