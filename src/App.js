import { useState } from 'react';
import './index.css';
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
              <div className="flex flex-wrap justify-center">
                <Employee name="Riley" role="Intern" img="https://i.mydramalist.com/WB6e5f.jpg"/>
                <Employee name="Dan" role= {role}/>
                <Employee name="Shawn"/>
                <Employee name="Caleb" role="Intern"/>
                <Employee name="Dan" role= {role}/>
                <Employee name="Shawn"/>
                <Employee name="Riley" role="Intern" img="https://i.mydramalist.com/WB6e5f.jpg"/>
                <Employee name="Dan" role= {role}/>
                <Employee name="Shawn"/>
                <Employee name="Caleb" role="Intern"/>
                <Employee name="Dan" role= {role}/>
                <Employee name="Shawn"/>
              </div>
          </>
          ):(
            <p>you cannot see the Employees</p>
          )}
    </div>
  );
}

export default App;
