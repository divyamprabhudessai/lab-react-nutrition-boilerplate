import { Component } from "react";
import "./FoodBox.css"

export default class FoodBox extends Component {
  constructor(fooditem) {
    super(fooditem);
    this.state = {
      filteredData: fooditem,
      clickCount: 0,
      calCount: 0,
    };
  }

  render() {

    // console.log(this.state.filteredData.fooditem.img)
    let handleInput = (event)=>{
        this.setState({
            clickCount: event.target.value
    })}
    
    let handleButton = ()=>{
        this.setState({
            calCount : this.state.clickCount * this.state.filteredData.fooditem.cal

        })
    }

    return (
      <>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img src={this.state.filteredData.fooditem.img} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.state.filteredData.fooditem.name}</strong> <br />
                  <small> {this.state.filteredData.fooditem.cal} calories</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" onChange={handleInput} />
                </div>
                <div className="control">
                  <button className="button is-info"  onClick={handleButton}>+</button>
                  <p>{this.state.clickCount}</p>
                  <p>{this.state.calCount}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </>
    );
  }
}
