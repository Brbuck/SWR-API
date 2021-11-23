import React from 'react';
import './styles.scss';

import { Link } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import Loading from '../Loading'


function Register() {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/users')

  if (!data) return <Loading />

  return (
    <div className="card_register">
      <h1>list of employees</h1>
      {
        data.map((user) => {
          return (
            <ul>
              <li key={user.id}><Link to={`users/${user.id}`}>{user.name}</Link></li>
            </ul>
          )
        })
      }

    </div>
  );
}

export default Register;