import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  Brazil = 'Brezil',
  Canada = 'Canada',
  USA = 'USA'
}

export const Person = (props: Props) => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <h1> {props.name} </h1>
      <h1> {props.email} </h1>
      <h1> {props.age} </h1>
      <h1> This person {props.isMarried ? 'is' : 'is not'} married </h1>
      {
        props.friends.map((friend: string) => <h1> {friend} </h1> )
      }

      <h1> Country: {props.country} </h1>
    </div>
  )
}