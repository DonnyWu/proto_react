import { useState } from 'react';
import './App.css';
import Employee from './components/Employee';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
        {showEmployees ? (
          <>
            <input
              type = "text"
              onChange={(e) =>{
                console.log(e.target.value);
                setRole(e.target.value);
              }
              }/>
            <Employee name="Caleb" role="Intern"/>
            <Employee name="Dan" role= {role}/>
            <Employee name="Shawn"/>
          </>
          ):(
            <p>you cannot see the Employees</p>
          )}
    </div>
  );
}

export default App;
