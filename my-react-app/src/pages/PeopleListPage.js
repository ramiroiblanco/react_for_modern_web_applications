import React from 'react'
import { PeopleList } from '../PeopleList'

const people = [{
  name: 'John',
  age: 40,
  hairColor: 'brown'
},
  {
    name: 'Helga',
    age: 25,
    hairColor: 'red'
  },
  {
    name: 'Dwayne',
    age: 55,
    hairColor: 'blonde'
  }]

export const PeopleListPage = () => (
  <>
    <h1>The PeopleL List Page</h1>
    <PeopleList people={people}/>
  </>
)