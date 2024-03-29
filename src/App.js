import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [ 
      {id: 1, name : "Leo Luo", role : "President", img : "https://i.mydramalist.com/2xOeRc.jpg"},
      {id: 2, name : "Gao Yu", role : "Chief Executive Officer", img : "https://i.mydramalist.com/RbKWV_5f.jpg"},
      {id: 3, name : "Bai Lu", role : "Chief Financial officer", img : "https://i.mydramalist.com/EWokz_5f.jpg"},
      {id: 4, name : "Riley Wang", role : "Chief Technology officer", img : "https://i.mydramalist.com/WB6e5f.jpg"},
      {id: 5, name : "Guan Jing", role : "Director of Operations", img : "https://i.mydramalist.com/085pN_5c.jpg"},
      {id: 6, name : "Ariel Ann", role : "Senior VP of Sales", img : "https://i.mydramalist.com/4Nzpw_5f.jpg"},
      {id: 7, name : "Donnie Wu", role : "Intern", img : "https://media-exp1.licdn.com/dms/image/C4E03AQFn7DuU9UN8yQ/profile-displayphoto-shrink_200_200/0/1602495882730?e=1671062400&v=beta&t=57YAsfNYKpIcPBzDepdo9GoJh-FfzXVkMaHmYHIqYQA"}
    ]
  )

  function updateEmployee(id, newName, newRole, newImg){
      const updatedEmployees = employees.map((employee) => {
        if (id == employee.id){
          return {...employee, name: newName, role: newRole, img: newImg}
        }
        return employee
      });
      setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;
  return (
    <div className="App">
        <Header />
        {showEmployees ? (
          <>
              <div className="flex flex-wrap justify-center">
                {employees.map((employee) => {
                    const editEmployee = (<EditEmployee
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img = {employee.img}
                    updateEmployee={updateEmployee}
                  />
                  )

                  return (
                    <Employee key= {employee.id}
                              id={employee.id} 
                              name = {employee.name} 
                              role = {employee.role} 
                              img= {employee.img} 
                              editEmployee={editEmployee} />
                  );
                })}
              </div>
              <AddEmployee newEmployee={newEmployee}/>
          </>
          ):(
            <p>you cannot see the Employees</p>
          )}
    </div>
  );
}

// test commit
export default App;
