import React from "react";
import './Slot.css';
import { useState } from "react";
import Swal from 'sweetalert2'



function Slot() {
    const icon_width = 79,
        icon_height = 79,
        num_icons = 9,
        time_per_icon = 100,
        iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"];
    let indexes = [0, 0, 0];


    const roll = (reel, offset = 0) => {

        // คำนวณ delta โดยเพิ่มค่า num_icons * 3 เพื่อให้เกินขอบเขตของ num_icons
        const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons * 3);
        const style = getComputedStyle(reel);
        const backgroundPositionY = parseFloat(style["background-position-y"]);

        return new Promise((resolve, reject) => {
            const targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
                normTargetBackgroundPositionY = targetBackgroundPositionY % (num_icons * icon_height);
            // console.log("delta: " + delta);
            // console.log("resolve :" + resolve); // native code


            //delay time out
            setTimeout(() => {
                // Set transition properties ==> https://cubic-bezier.com/#.41,-0.01,.63,1.09
                reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
                // Set background position
                reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
                resolve(delta % num_icons);
            }, offset * 150);
            // after time out
        })

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
            };

    

    function rollAll() {
        // let indexAll = [];  
        const reelsList = document.querySelectorAll('.slots > .reel');

        Promise
            .all([...reelsList].map((reel, i) => roll(reel, i)))

            .then((deltas) => {
                deltas.forEach((delta, i) => {
                    // เพิ่ม delta และ num_icons * 3 เพื่อป้องกันการเกินขอบเขตของ num_icons
                    indexes[i] = (indexes[i] + delta + num_icons * 3) % num_icons;
                    console.log("Indexes In:", indexes);
                    // indexAll[i] = (indexes[i]);
                });
                console.log("Indexes s:", indexes.map((i) => iconMap[i]).join(' - '));
                //check win
                if (indexes[0] === indexes[1] || indexes[1] === indexes[2] || indexes[0] === indexes[2]) {
                    const winGame = indexes[0] === indexes[1] ===indexes[2] ? "allWin" : "someWin";
                    Swal.fire({
                        title: "เริ่ด วันนี้มงลงแน่ เริ่มเลอ",
                        width: 600,
                        padding: "3em",
                        color: "#e8bd4b",
                        background: "#fff url(https://media.istockphoto.com/id/1256442975/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B9%84%E0%B8%AA%E0%B8%A2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%A7%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C-%E0%B8%94%E0%B8%A7%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%97%E0%B8%B4%E0%B8%95%E0%B8%A2%E0%B9%8C-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%94%E0%B8%A7%E0%B8%87%E0%B8%94%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=uIMXJGXSeFYPVggLXNH-4hS_rbPRlLyz37sjJjPXHsc=)",
                        backdrop: `
                                rgba(0,0,123,0.4)
                                url("https://sweetalert2.github.io/#usageimages/nyan-cat.gif")
                                center top
                                repeat
                                `,
                        showClass: {
                            popup: `
                              animate__animated
                              animate__fadeInUp
                              animate__faster
                            ` 
                        },
                        hideClass: {
                            popup: `
                              animate__animated
                              animate__fadeOutDown
                              animate__faster
                            `
                        }
                    });  
                    console.log("wingame"+winGame)
                    document.querySelector(".slots").classList.add(winGame);
                    //reset win game to normal by 2 second
                    setTimeout(() => document.querySelector(".slots").classList.remove(winGame), 2000);
                }

            });
        }

      
    
   



    // const handleRoll = () => {
    //     const [rolling, setRolling] = useState(false);
    //     setRolling(true);

    //     setTimeout(() => {
    //         setRolling(false)
    //     }, 2500); //2.5 sec
    // };


    return (
        <div className="slot-layout">
            <div className="slots">
                <div className="reel"></div>
                <div className="reel"></div>
                <div className="reel"></div>
                <img className="side-slot" src="https://assets.codepen.io/439000/slotreel.webp" />
            </div>
            <div className="slot-button">
                <button className="slot-button-class" onClick={rollAll} >Start</button>
            </div>
        </div>
    )
}
export default Slot