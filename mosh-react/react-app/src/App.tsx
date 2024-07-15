import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} />
  //   </div>
  // );

  // return (
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>
  //     </Alert>
  //   </div>
  // )

  const [alertVisible, setAlertVisible] =  useState(false);
  
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
