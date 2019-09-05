import React from 'react'
class Binary extends React.Component {
  
  state = {
    num: 0,
    arr : [
      89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 
      14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 
      65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46,
      13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98,
      46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,
    ]
    
  }

  handleSubmit = e => {
    e.preventDefault();
    let num = e.target['binary-num'].value
    let steps= 1;
    let start;
    let end;
    let totalSteps= this.binarySearch([...this.state.arr], num, start, end, steps)
    this.setState({
      num: num,   
      totalSteps: totalSteps      
    })
   e.target['binary-num'].value ='';
  }

  binarySearch = (arr, num, start, end, steps) => {
    
      let sortedArr = arr.sort((a, b) => a - b);          
      start = start === undefined ? 0 : start;
      end = end === undefined ? sortedArr.length : end;
  
      if (start > end) {
          return `No number found. Took ${steps} searches`;
      }
  
      const index = Math.floor((start + end) / 2);
      const item = sortedArr[index];
      
      console.log('start:', start, 'end:',end);
      console.log('steps:', steps)
      console.log('middle:', item)
   
      if (item == num) {        
          return steps;
      }
      else if (item < num) {         
        ++steps;      
          return this.binarySearch(sortedArr, num, index + 1, end, steps);
      }
      else if (item > num) {        
        ++steps;  
          return this.binarySearch(sortedArr, num, start, index - 1, steps);
      } 
    
  }

  render(){
 

    return (
      <div className="binary">
        <form id="binary-search-form" onSubmit={this.handleSubmit}>
        <legend>Binary Search</legend>
        <label>Pick a number:</label>
        <select id="binary-num" name="binary-num">
          {this.state.arr.map((num, index )=> 
            <option key={index}>{num}</option>)}
        </select>   
        <button type="submit">Find</button>
        </form>
        <p>Number of steps: {this.state.totalSteps}</p>
        

      </div>
    );

  }

}

export default Binary;