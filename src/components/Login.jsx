import React from "react";
import * as stylex from "@stylexjs/stylex"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {

    
    const styles = stylex.create({
        input: {
            color: "black",
            padding: "0.8rem",
            border: "2px solid #ccc",
            borderRadius: "4px",
            outline: "none",
        },
        hello:{
        
            margin: "15px"
        },
        button:{
            backgroundColor:"blue",
            margin: "1rem",
            color:'white',
            border:"5px solid red"
        }   
    })

    const [details,setDetails] = React.useState({
        username:"",
        password: ""
    })

    const navigate = useNavigate();

    const onLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/login",details);
            console.log(response.data)
            if(response.data){
                navigate("/")
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    return(
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <br/>
            <div {...stylex.props(styles.hello)} >
                <label htmlFor="username">Username:</label>
                <br/>
                <input 
                    id="username"
                    placeholder="username"
                    value={details.username}
                    onChange={(e)=>setDetails({...details,username:e.target.value})}
                    {...stylex.props(styles.input)}
                />
                <br/>
            </div>
            <div{...stylex.props(styles.hello)}>
                <label htmlFor="password">Password:</label>
                <br/>
                <input 
                    id="password"
                    placeholder="Password"
                    value={details.password}
                    onChange={(e)=>setDetails({...details,password:e.target.value})}
                    {...stylex.props(styles.input)}
                />
                <br/>
            </div>
            <button {...stylex.props(styles.button)} onClick={onLogin}>
                Login
            </button>
        </div>
    )
}
export default Login;