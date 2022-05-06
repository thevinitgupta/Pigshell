import React, {useContext} from 'react'
import "../Css/Dashboard.css"
import AuthUserContext from '../context/sessions'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const {authUser} = useContext(AuthUserContext);
    const navigate = useNavigate();

  return (
    <div className='Dashboard'>
        {!authUser && 
            <div className='UnAuth' onClick={()=>{
                navigate("/login")
            }}>
                <p><span className='highlight-text'>Login</span> to access your photos from anywhere!</p>
            </div>
        }
        {authUser && 
            <div className='AuthUser'>
            Welcome {authUser?.name}!
            </div>
        }
    </div>
  )
}

export default Dashboard