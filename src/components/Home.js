import React, { useContext } from 'react';
import { Button, Table} from 'reactstrap';
import { UserContext } from '../userContext/userContext';
import { Link } from 'react-router-dom';

const Home = () => {
    //useContext hook start
    const [users, setUsers] = useContext(UserContext);
    //useContext hook end
    return (
        <div className='container'>
           <Button className='createUserBtn' color="dark">Create User</Button>

           <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Position</th>
      <th>Salary</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {
      users.map(user => 
        <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.position}</td>
        <td>{user.salary}</td>
        <td>
        <Button className='btnThree' color="success">Read</Button>
        <Button className='btnThree' color="info">Edit</Button>
        <Link to={"/delete/"+user.id}>
        <Button className='btnThree' color="danger">Delete</Button>
        </Link>
        </td>
      </tr>
    )
  }
  </tbody>
</Table>
        </div>
    );
};

export default Home;