import { Component } from "react";
import "./App.css"
import FoodData from "./resources/FoodData";
import Foodbox from "./components/FoodBox"

class App extends Component{


  constructor(){
    super();
    this.state = {
      filteredData : [...FoodData],
    }
  }

  render(){
   
  let handleChange = (event)=>{

      // toLowerCase is used to convert all input to lower case tp match the array elements
      let searchText = event.target.value.toLowerCase();    

      let searchResults = FoodData.filter((element)=>{
        return element.name.includes(searchText)
  })

      this.setState({
        filteredData:searchResults,
  })

  }    

    return(
      <>
        <div className="input">
          <input type="text" placeholder="Search Here" onChange={handleChange} />
        </div>
        {this.state.filteredData.map((element,i)=>(
          <Foodbox fooditem = {element} key ={i}/>
        ))

        }
      </>
    )

  }
}

export default App