export const Task = (props) => {
  return (
    <div className='taskList'>
      <h1 style={{color: props.complete ? 'green' : 'black'}}>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}> X </button>
    </div>
  );
}