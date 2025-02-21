
// export default function Todo({task}){
//       return( 
//             <h4>Task: {task}</h4>
//       )
// }


// export default function Todo({task,isdone}){
//       if(isdone === true)
//       {
//             return <li>finished: {task}</li>
//       }
//       else{
//             return <li>Work on:   {task}</li>
//       }
// }


// // ternary operator...........
// export default function Todo({task, isdone}){

//       return(
//             <li>{isdone ? 'Finished': 'Work on'} : {task}</li>
//       )
// }

//  ternary operator ............
// export default function Todo({task, isdone}){
//       return(
//             <li>{isdone ? 'Finished already' : 'Work on it'} : {task}</li>
//       )
// }

//  conditional rendering 04..........

// export default function Todo({task, isdone}){
//       return(
//             <li>{task} {isdone && ':Done'}</li>
//       )
// }

// conditional rendering 05........

// export default function Todo({task, isdone}){

//       return(
//             <li> {task} : {isdone || 'you have to work on it'}</li>
//       )
// }

// conditional rendering 05........

// export default function Todo({task, isdone}){

//       let listItem;
//       if(isdone){
//             listItem = <li>Finished already  : {task}</li>
//       }
//       else{
//             listItem = <li>work on : {task}</li>
//       }
//       return listItem;
// }

