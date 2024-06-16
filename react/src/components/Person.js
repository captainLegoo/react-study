import PropTypes from 'prop-types';

export const Person = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h1> {props.email} </h1>
      <h1> {props.age} </h1>
      <h1> This person {props.isMarried ? 'is' : 'is not'} married </h1>
      {
        props.friends.map((friend) => <h1> {friend} </h1> )
      }
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
}