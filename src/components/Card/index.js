import React from 'react';
import './styles.scss'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom'


function Card() {
    const { id } = useParams();
    const { data } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!data) {
        return <p>Carregando...</p>
    }

    return (
        <div className="card_employee">
            <p>Name: <span>{data.name}</span></p>
            <p>E-mail: <span>{data.email}</span></p>
            <p>Phone: <span>{data.phone}</span></p>
            <h2>Address</h2>
            <div>
                <p>City: <span>{data.address.city}</span></p>
                <p>Street: <span>{data.address.street}</span></p>
            </div>
            <div>
                <p>Zipcode: <span>{data.address.zipcode}</span></p>
                <p>Suite: <span>{data.address.suite}</span></p>
            </div>
            <Link to='/'>Back</Link>
        </div>
    );
}

export default Card;