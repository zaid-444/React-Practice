import './register.css'

export function RegisterDemo(){

    return(
        <div className="register-container">
            <form className='form-container p-3 w-25 alert alert-dismissible alert-warning'>
            <h3 className='bi bi-person-circle'>User Register</h3>
            <button data-bs-dismiss="alert" className='btn btn-close'></button>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" className='form-control' /></dd>
                <dt>Email</dt>
                <dd><input type="email" className="form-control" /></dd>
                <dt>Password</dt>
                <dd><input type="password" className='form-control' /></dd>
                <dt>Confirm Password</dt>
                <dd><input type="password" className='form-control' /></dd>
            </dl>
            <button className='btn btn-warning w-100'>Register</button>
        </form>
        </div>
    )
}