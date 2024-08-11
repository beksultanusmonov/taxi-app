import { useState } from 'react'
import './Register.scss'
import { Link } from 'react-router-dom';

function Register() {

    const [menu, setMenu] = useState('sign-up');
    const [messages, setMessages] = useState('')

    const getMessage = (text) => {
        setMessages(text)
        setTimeout(() => {
            setMessages('')
        }, 4000)
    }

    const FormSubmit = (e) => {
        e.preventDefault();
        setMenu('sms');
        e.target.reset();
    }

    const checkCode = (e) => {
        e.preventDefault();
        getMessage('This code is incorrect !')
        e.target.reset();
    }

  return (
    <div className="register">
        <div className="container">
            <h1 className="title">Sign Up</h1>
            {menu == 'sign-up' && 
                <form onSubmit={FormSubmit}>
                    <label>
                        <span>Enter your name :</span>
                        <input type="text" placeholder='Type' required/>
                    </label>
                    <label>
                        <span>Enter your surname :</span>
                        <input type="text" placeholder='Type' required/>
                    </label>
                    <label>
                        <span>Enter your phone number :</span>
                        <input type="number" placeholder='Type' required/>
                    </label>
                    <label>
                        <span>Enter your experience:</span>
                        <input type="text" placeholder='Type' required/>
                    </label>
                    <button>Continue</button>
                </form>
            }
            {menu == 'sms' && 
                <form onSubmit={checkCode}>
                    <label>
                        <span>Check your phone and write your code :</span>
                        <input type="number" placeholder='Type' required/>
                    </label>
                    {messages && <p className='errorMessages'>{messages}</p>}
                    <button>Continue</button>
                    <Link onClick={() => setMenu('sign-up')}><i class="fa-solid fa-arrow-left"></i> Edit</Link>
                </form>
            }
        </div>
    </div>
  )
}

export default Register
