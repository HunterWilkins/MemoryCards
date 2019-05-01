import React from "react";
import MemoryCard from "./components/MemoryCard";
import "./components/index.css"

var imageArray = [
    {
        id: 1,
        name: "slug",
        image:"https://cdn.shopify.com/s/files/1/1365/2497/products/12676-BananaSlugMask-Sky_900x.jpg?v=1520535633"
    },
    {
        id: 2,
        name: "mouse",
        image:"https://cdn.shopify.com/s/files/1/1172/9608/products/5560-Mouse-grey.jpeg?v=1464128491"
    },
    {
        id: 3,
        name: "orange",
        image:"https://images-na.ssl-images-amazon.com/images/I/51TcdS9z2fL._SY300_QL70_.jpg"
    },

    {
        id: 4,
        name:"mannequin",
        image:"http://coatl.co/wp-content/uploads/2018/06/mannequin-face-heads-facebook.jpg"
    },
    
    {
        id: 5,
        name:"spider",
        image:"https://i.pinimg.com/736x/ee/ec/0c/eeec0ca4c876780f8cd08cbdbcc5c15c.jpg"
    },

    
    {
        id: 6,
        name:"flower",
        image:"https://cdn.shopify.com/s/files/1/1334/4597/collections/Real-Touch-Silk-Flowers-Landing_1024x1024_cbece69f-9a43-497e-a220-7fec4c82d62b_640x.jpg?v=1488836250"
    },
    
    {
        id: 7,
        name:"lamp",
        image:"https://secure.img2-fg.wfcdn.com/im/77491310/resize-h400-p1-w400%5Ecompr-r85/4974/49743992/Walnut+Grove+30%2522+Table+Lamp.jpg"
    },
    
    {
        id: 8,
        name:"fish",
        image:"https://images-na.ssl-images-amazon.com/images/I/51NLSAJZdnL.jpg"
    },
    
    {
        id: 9,
        name:"almond",
        image:"https://i1.wp.com/markitonutrition.com/community/wp-content/uploads/almonds.jpg?fit=400%2C400&ssl=1"
    },
]

class App extends React.Component{
    

    state = {
        score : 0,
        imageArray: imageArray,
        stateChosenItems: []
    };


    // This function shuffles an array. Totally got it from StackOverflow.
    shuffleArray = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }

    chosenItems = [];

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
    };

    clickedImage = (id) => {

        if (this.state.score !== imageArray.length-1) {

            this.shuffleArray(imageArray);

            if (this.chosenItems.indexOf(id) === -1){
                this.chosenItems.push(id);
                this.setState({score: this.state.score+1, stateChosenItems: this.chosenItems});
            }
    
            else {
                alert("YOU LUOOSOOSOSOOTTST");
                this.setState({score:0, stateChosenItems:[]});
                this.chosenItems = [];
            }

            console.log(this.chosenItems);
    
        }
        else {
            alert("YOU WOOOooOOoOOooOoOoNNNnnNn!!!!!");
            alert("GAHGHAHGHAAAAAAAGAGAgggAaaAaAaaaaAaAaAAAh!!!!!");
        }
        
        console.log(this.chosenItems);
        console.log(this.state.stateChosenItems);
    }

    render() {
        return (
            <div id = "whole-spiel">
                <h1 className = "h-element">Memory 2: Revelations</h1>
                <hr></hr>
                <h2 className = "h-element">By: Hunter Wilkins</h2>
                <h3 id = "score">~ Score: {this.state.score} ~</h3>        
                <div id = "gallery">
                    {this.state.imageArray.map(images  => (
                        <MemoryCard 
                        id={images.id}
                        name={images.name}
                        image={images.image}
                        clickedImage = {this.clickedImage}
                        />
                        )
                    )}
                </div>
            </div>
        )
    }
    
}

export default App;