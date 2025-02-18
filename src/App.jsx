import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {

  return (
    <>
      <h1>Vite + React</h1>

      <Todo task="Learn React Router" isdone={true}></Todo>
      <Todo task="Practise Everyday" isdone={false}></Todo>
      <Todo task="Explore core concept" isdone={true}></Todo>

      <Student></Student>
      <Developer></Developer>
      <Result grade="9" cgpa="3.89"></Result>
      <Result grade="10" cgpa="3.97"></Result>
      <Result grade="11" cgpa="3.99"></Result>
    </>
  )
}

const {grade, cgpa} = {grade:'9', cgpa:'4.00'};

function Result({grade = 0, cgpa = 0}){
  console.log(grade,cgpa);

  const ResultStyle ={
    border: '4px solid pink',
    borderRadius: '20px',
    padding: '20px',
    margin: '20px',
  }

  return (
    <div style={ResultStyle}>
      <h3>The result is : {grade}</h3>
      <h3>The cgpa is : {cgpa}</h3>
    </div>
  )
}



function Student(){

  const studentStyle = {  
  border: '4px solid tomato',
  borderRadius: '20px',
  padding: '20px',
  margin: '20px',
  }

  return (
    <div style={studentStyle}>
      <h3>Assalamoalaikom, This is me Tarekul Islam</h3>
      <h4>studied in Department of CSE</h4>
      <h4>currently i'm learning react !!!</h4>
    </div>
  )
  
}

function Developer(){
  const age = 20;
  const money = 50000;
  const developerStyle = {
    padding: '20px',
    borderRadius: '20px',
    border: '3px solid green',
    borderRadius: '20px',
    margin: '20px',
  }
  return(
    <div style={developerStyle}>
      <h3>Ahmed Shorif is a frontend developer</h3>
      <h4>He is {age} years old !!</h4>
      <h4>His current salary is aproximately {money} taka !!!</h4>
      <p></p>
    </div>
  )
}

export default App
