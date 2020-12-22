import React, { useEffect, useState } from "react";
import Employee from "./Employee";
function EmployeeList ({StudentListData}){
let [Employees, setEmployees] = useState([
    {
name: "Christer Holm",
email: "ch@star78.se",
phone: "0700000001",
skills:"HTML,CSS",
avatar: "https://i.imgur.com/t9HFQvX.png",
    },
{
name: "Anna Svensson",
email: "anna.svensson@star78.se",
phone: "07560000001",
skills:"HTML,CSS,JavaScript",
avatar: "https://i.imgur.com/TUhCrsY.png",
},
{
    name: "Aren Dhal",
    email: "arne.da@star78.se",
    phone: "07650003401",
    skills:"HTML,CSS,JAVA",
    avatar: "https://i.imgur.com/t9HFQvX.png",
},
]);
  /* CHALLENGE 1 -*/
  useEffect(function () {
    let input = JSON.parse(localStorage.getItem("EmployeeData"));
    if (input) {
      setEmployees(input);
    }
  }, []); 

  useEffect(
    function () {
      localStorage.setItem("EmployeeData", JSON.stringify(Employees));
    },
    [Employees] 
  );


function handleAddEmployee() {
    setEmployees(function (prevState) {
     
      return [
        ...prevState,
        {
          name: "Triss Merigold",
          email: "yazeenj@outlook.com",
          phone: "070000000",
          skills: "Vue, firebase, git, c#",
          avatar: "https://i.imgur.com/TUhCrsY.png",
        },
      ];
    });
  }

  return (
    <>
      <h3>Employee List</h3>
      <button className="button" onClick={handleAddEmployee}>
        Add Employee
      </button>
      {Employees.map(function ({ name, email, phone, skills, avatar }) {
        return (
          <Employee
            key={Math.random() * Date.now()} //should be unique
            name={name}
            email={email}
            phone={phone}
            skills={skills}
            avatar={avatar}
          />
        );
      })}
    </>
  );
}

export default EmployeeList;