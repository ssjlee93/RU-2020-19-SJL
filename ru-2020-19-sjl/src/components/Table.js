import React from 'react';

const Table = (props) => {
    console.log(props.results[0]);
    return (
        <div className="container">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Date of Birth</th>
                    </tr>
                </thead>
                <tbody>

                    {props.results.map(user => (
                        <tr key={user.id.value}>,
                            <th scope="row"><img alt={user.name.last} src={user.picture.thumbnail}></img></th>,
                            <td>{user.name.first} {user.name.last}</td>,
                            <td>{user.phone}</td>,
                            <td>{user.email}</td>,
                            <td>{new Date(user.dob.date)}</td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default Table;