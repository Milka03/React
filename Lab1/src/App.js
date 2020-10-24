import React from 'react';
import logo from './logo.svg';
import './App.css';
import './StudentList';
import StudentList from './StudentList';
import StudentsTeachers from './StudentsTeachers';

function MyApp() {
  // let url = 'https://pw2020.react.edu.pl/wp-content/uploads/2019/10/example.txt';
  // const data = fetch(url).then(response => response.json()).then((out) => 
  //   console.log('Checkout this JSON! ', out)).catch(err => { throw err });

  const data = 
  [
    {
      "teacherName": "Jan Nowak",
      "teacherAge": 36,
      "active": true,
      "students": [
        {
          "name": "Maciej Janosz",
          "age": 12
        },
        {
          "name": "Wojciech Kowalski",
          "age": 15
        },
        {
          "name": "Wioletta PoznaĹska",
          "age": 1000000
        }
      ]
    },
    {
      "teacherName": "Mariusz Flasinski",
      "teacherAge": 56,
      "active": true,
      "students": [
        {
          "name": "Jan Kot",
          "age": 12
        },
        {
          "name": "Jan Ziobro",
          "age": 15
        },
        {
          "name": "Adam Malysz",
          "age": 41
        }
      ]
    },
    {
      "teacherName": "Wojciech Kuzak",
      "teacherAge": 44,
      "active": false,
      "students": [
        {
          "name": "Janina Wronska",
          "age": 22
        },
        {
          "name": "John Dover",
          "age": 7
        },
        {
          "name": "Emil Petterson",
          "age": 46
        }
      ]
    }
  ]

  return (
    <div className="MyApp">
      <label>New window</label>
      <StudentList></StudentList>
      <br></br>
      <br></br>
      <label>Studenci: </label>
      <StudentsTeachers DANE = {data}></StudentsTeachers>
    </div>
  );
}


export default MyApp;
