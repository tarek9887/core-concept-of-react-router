
// export default function Todo({task}){
//       return( 
//             <h4>Task: {task}</h4>
//       )
// }


export default function Todo({task,isdone}){
      if(isdone === true)
      {
            return <li>finished: {task}</li>
      }
      else{
            return <li>Work on:   {task}</li>
      }
}