import React from "react";
import * as stylex from "@stylexjs/stylex"
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Signup = () => {

    const styles = stylex.create({
        input: {
            color: "white",
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
        password: "",
        email:"",
        confirmPassword:""
    })

    const navigate = useNavigate();

    const onSignup = async() => {
        try {
            const response = await axios.post("http://localhost:5000/signup",details);
            
            console.log(response.data)
            
            if(response.data){
                navigate("/login");
            }
        } catch (error) {
            console.error(error)
        }
    }
    
    return(
        <div>

            <div>
                <h1>Sign-Up</h1>
            </div>
            <br/>

            <div {...stylex.props(styles.hello)} >
                <label htmlFor="username">Username:</label>
                <br/>
                <input 
                    id="username"
                    type="text"
                    placeholder="username"
                    value={details.username}
                    onChange={(e)=>setDetails({...details,username:e.target.value})}
                    {...stylex.props(styles.input)}
                />
                <br/>
            </div>

            <div {...stylex.props(styles.hello)} >
                <label htmlFor="email">Email:</label>
                <br/>
                <input 
                    id="email"
                    type="email"
                    placeholder="email"
                    value={details.email}
                    onChange={(e)=>setDetails({...details,email:e.target.value})}
                    {...stylex.props(styles.input)}
                />
                <br/>
            </div>

            <div {...stylex.props(styles.hello)}>
                <label htmlFor="Password">Password:</label>
                <br/>
                <input 
                    id="Password"
                    type="password"
                    placeholder="Password"
                    value={details.password}
                    onChange={(e)=>setDetails({...details,password:e.target.value})}
                    {...stylex.props(styles.input)}
                />
                <br/>
            </div>

            <div {...stylex.props(styles.hello)} >
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <br/>
                <input 
                    id="confirmPassword"
                    type="password"
                    placeholder="confirm Password"
                    value={details.confirmPassword}
                    onChange={(e)=>setDetails({...details,confirmPassword:e.target.value})}
                    {...stylex.props(styles.input)}
                />
                <br/>
            </div>

            <button {...stylex.props(styles.button)} onClick={onSignup}>
                Signup
            </button>

        </div>
    )
}
export default Signup;