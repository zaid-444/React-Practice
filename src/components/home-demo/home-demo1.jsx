import { useState } from "react";
import { DataGrid } from "../../controlled-components/data-grid";


export function HomeDemo1(){
    const [products] = useState([{Name:'TV', Price:34444}, {Name:'Mobile', Price:69655}])
    const [employees] = useState([{FirstName: 'Rohit', LastName:'Sharma', Designation:'Cricketer', Salary: 45000},{FirstName: 'Virat', LastName:'Kohli', Designation:'Cricketer', Salary: 18000},{FirstName: 'Ronaldo', LastName:'cristiano', Designation:'Footballer', Salary: 60000},{FirstName: 'Rohit', LastName:'Sharma', Designation:'Cricketer', Salary: 45000}])

    return(
        <div>
        <DataGrid caption="Products Table" data={products} />
        <DataGrid caption="Employee Table" data={employees} />
        </div>        
    )
}