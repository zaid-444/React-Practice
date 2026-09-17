import { Navbar } from "../../controlled-components/navbar"

export function HomeDemo(){

    return(
        <div className="container-fluid">
            <Navbar orientation="horizontal" logo="bi bi-amazon" brand="Amazon" menuitems={['Home', 'Shop', 'Pages', 'Contact']} />
            <Navbar theme="bg-primary text-white" logo="bi bi-facebook" brand="Fashion" menuitems={['Fashion Store', 'Electronics', 'Footwear', 'Offers']} />
        </div>
    )
}