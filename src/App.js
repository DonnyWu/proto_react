import './App.css';
import Employee from './components/Employee';
const showEmployees = true;
function App() {
  return (
    <div className="App">
        {showEmployees ? (
          <>
            <Employee name="Caleb" role="Intern"/>
            <Employee name="Dan" role= "Associate"/>
            <Employee name="Shawn"/>
          </>
          ):(
            <p>you cannot see the Employees</p>
          )}
    </div>
  );
}

export default App;
