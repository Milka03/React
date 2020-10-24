import React from 'react';
import logo from './logo.svg';
import './App.css';

function StudentList() {
    const students_array = ["John","Mark","Stephanie","Martha","Vlad"]
    const numbers = [2, 5, 8, 10]
    return (
      <div>
          Student List:
          <div>{Show_Students_List(students_array)}</div>
          <br></br>
          <button onClick={() => M_names(students_array)}>Show M names</button>
          <br></br><br></br>
          <label>Square Roots</label>
          <br></br>
          <button onClick={() => Square_roots(numbers)}>Show roots</button>
      </div>
    );
}

function M_names(s_array){
    const result = []
    s_array.forEach(element => {
        if(element[0]==='M')
        {
            result.push(element);
            //console.log(element);
        }
    });
    console.log(result);
    return result
}

function Square_roots(num){
    const result = []
    num.forEach(element => {
        result.push(Math.sqrt(element))
    });
    console.log(result);
    return result
}

function Show_Students_List(list)
{
  const result=[];
  list.forEach(element =>{
    result.push(<li>{element}</li>)
  });
  return <ol>{result}</ol>
}

export default StudentList;