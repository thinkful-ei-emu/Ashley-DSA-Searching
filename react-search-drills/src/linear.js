import React from 'react'
class Linear extends React.Component {
  
  state = {
    num: 0,
    arr: [
      89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 
      14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 
      65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46,
      13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98,
      46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,
    ]
    
  }

  handleSubmit = e => {
    e.preventDefault();
    let num = e.target['linear-num'].value
    let steps= this.linearSearch(this.state.arr, num)
    this.setState({
      num: num, 
      steps: steps      
    })
   e.target['linear-num'].value ='';
  }

  linearSearch = (arr, num) => {
    // let arr = [
    //   89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 
    //   14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 
    //   65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46,
    //   13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98,
    //   46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,
    // ]
    let steps = 0;
      for (let i = 0; i < arr.length; i++) {
          steps++
          if (arr[i] == num) {
              return steps;
          }
      }
      return `No number found. Took ${steps} searches`;
  
  }

  render(){


    return (
      <div className="linear">
        <legend>Linear Search</legend>
        <form id="search-form" onSubmit={this.handleSubmit}>
        <label>Pick a number:</label>
        <select id="linear-num" name="linear-num">
          {this.state.arr.map((num, index )=> 
            <option key={index}>{num}</option>)}
        </select>      
        <button type="submit">Find</button>
        </form>
        <p>Number of steps: {this.state.steps}</p>        

      </div>
    );

  }

}

export default Linear;