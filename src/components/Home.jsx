import React from "react";
import * as stylex from "@stylexjs/stylex"
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Home = () => {

    const styles = stylex.create({
        fontFam:{
            fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        },
        row:{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            
        },
        btn:{
            padding:"0.5rem 0.8rem",
            backgroundColor: "crimson",
            color:"white",
            cursor:"pointer"
        }
    })

    const [details,setDetails] = React.useState({
        vehicleName:"",
        price:"",
        registerNumber:"",
        manufacturingDate:"",
        registrationDate:"",
        noOfOwner:"",
        odometerReading:"",
        transmission:"",
        fuelType:"",
        colour:"",
        vehicleType:"",
        engineNumber:"",
        chasisNumber:"",
        loanNumber:"",
        rcAvailable:"",
        insurance:"",
        hypothecation:"",
        financerName:"",
        roadTax:"",
        customerName:"",
        clientName:""
    })

    const navigate = useNavigate();

    const submit = async() =>{
        try {
            const response = await axios.post("http://localhost:5000/",details);
            console.log(response.data)
            if(response.data){
                navigate("/form-details")
            }
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <div {...stylex.props(styles.fontFam)}>
            <section {...stylex.props(styles.row)}>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div>
                    <h3>Vehicle Inspection Report</h3>
                </div>
            </section>

            <section>
                <label htmlFor="vehicleName">Vehicle Name: </label>
                <input 
                    id="vehicleName"
                    placeholder="vehicle name"
                    type="text"
                    onChange={(e)=>setDetails({...details,vehicleName:e.target.value})}
                    value={details.vehicleName}

                />
            </section>
            <br/>

            <section>
                <label htmlFor="price">Price: </label>
                <input 
                    id="price"
                    placeholder="price"
                    type="text"
                    onChange={(e)=>setDetails({...details,price:e.target.value})}
                    value={details.price}

                />
            </section>
            <br/>

            <section>
                <label htmlFor="registerNumber">Registered no: </label>
                <input 
                    id="registerNumber"
                    placeholder="Register Number"
                    type="text"
                    onChange={(e)=>setDetails({...details,registerNumber:e.target.value})}
                    value={details.registerNumber}

                />
            </section>
            <br/>

            <section>
                <label htmlFor="manufacturingDate">Manufacturing date: </label>
                <input 
                    id="manufacturingDate"
                    type="date"
                    onChange={(e)=>setDetails({...details,manufacturingDate:e.target.value})}
                    value={details.manufacturingDate}

                />
            </section>
            <br/>

            <section>
                <label htmlFor="reigstrationDate">Registration date: </label>
                <input 
                    id="registrationDate"
                    type="date"
                    onChange={(e)=>setDetails({...details,registrationDate:e.target.value})}
                    value={details.registrationDate}

                />
            </section>
            <br/>

            <section>
                <label htmlFor="noOfOwner">No Of Owners: </label>
                <input 
                    id="noOfOwner"
                    type="number"
                    placeholder="no of owners"
                    onChange={(e)=>setDetails({...details,noOfOwner:e.target.value})}
                    value={details.noOfOwner}

                />
            </section>
            <br/>

            <section>
                <label htmlFor="odometerReading">Odometer Reading #: </label>
                <input 
                    id="odometerReading"
                    type="number"
                    placeholder="odometer reading"
                    onChange={(e)=>setDetails({...details,odometerReading:e.target.value})}
                    value={details.odometerReading}

                />
            </section>
            <br/>

            <section>
                Transmission: 
                <input 
                    id="automatic" 
                    type="radio" 
                    name="transmission"
                    checked={details.transmission === "Automatic"}
                    onChange={()=>{setDetails({...details, transmission:"Automatic"})}}
                />
                <label htmlFor="automatic"> Automatic</label>
                
                <input 
                    htmlFor="manual" 
                    type="radio" 
                    name="transmission"
                    checked={details.transmission === "Manual"}
                    onChange={()=>{setDetails({...details, transmission:"Manual"})}}

                />
                <label htmlFor="manual">Manual</label>
            </section>
            <br/>

            <section>
                Fuel Type:
                
                <input 
                    id="petrol" 
                    type="radio" 
                    name="fuelType"
                    checked={details.fuelType === "Petrol"}
                    onChange={()=>{setDetails({...details, fuelType:"Petrol"})}}
                />
                <label htmlFor="petrol"> Petrol</label>
                
                <input 
                    htmlFor="diesel" 
                    type="radio" 
                    name="fuelType"
                    checked={details.fuelType === "Diesel"}
                    onChange={()=>{setDetails({...details, fuelType:"Diesel"})}}
                />
                <label htmlFor="diesel">Diesel</label>

                <input 
                    htmlFor="cng" 
                    type="radio" 
                    name="fuelType"
                    checked={details.fuelType === "CNG"}
                    onChange={()=>{setDetails({...details, fuelType:"CNG"})}}
                />
                <label htmlFor="cng">CNG</label>
            </section>
            <br/>

            <section>
                <label htmlFor="colour">Colour: </label>
                <input 
                    id="colour"
                    type="text"
                    placeholder="colour"
                    onChange={(e)=>setDetails({...details,colour:e.target.value})}
                    value={details.colour}

                />
            </section>
            <br/>    

            <section>
                <label htmlFor="vehicleType">Vehicle Type: </label>
                <input 
                    id="vehicleType"
                    type="text"
                    placeholder="vehicle type"
                    onChange={(e)=>setDetails({...details,vehicleType:e.target.value})}
                    value={details.vehicleType}

                />
            </section>
            <br/>  

            <section>
                <label htmlFor="engineNumber">Engine Number: </label>
                <input 
                    id="engineNumber"
                    type="number"
                    placeholder="enginer number"
                    onChange={(e)=>setDetails({...details,engineNumber:e.target.value})}
                    value={details.engineNumber}

                />
            </section>
            <br/>  

            <section>
                <label htmlFor="chasisNumber">Chasis Number: </label>
                <input 
                    id="chasisNumber"
                    type="number"
                    placeholder="chasis number"
                    onChange={(e)=>setDetails({...details,chasisNumber:e.target.value})}
                    value={details.chasisNumber}

                />
            </section>
            <br/>  

            <section>
                <label htmlFor="loanNumber">Loan Number: </label>
                <input 
                    id="loanNumber"
                    type="number"
                    placeholder='loan number'
                    onChange={(e)=>setDetails({...details,loanNumber:e.target.value})}
                    value={details.loanNumber}

                />
            </section>
            <br/>  

            <section>
                RC Available: 
               
                <input 
                    id="rcYes" 
                    type="radio" 
                    name="rcAvailble"
                    checked={details.rcAvailable === "Yes"}
                    onChange={()=>{setDetails({...details,rcAvailable:"Yes"})}}
                />
                <label htmlFor="rcYes">Yes </label>
                
                <input 
                    id="rcNo" 
                    type="radio" 
                    name="rcAvailble"
                    checked={details.rcAvailable === "No"}
                    onChange={()=>{setDetails({...details,rcAvailable:"No"})}}    
                />                
                <label htmlFor="rcNo">No </label>
            </section>
            <br/>  

            <section>
                Type of Insurance: 
               
                <input 
                    id="insuranceAvailable" 
                    type="radio" 
                    name="insurance"
                    checked={details.insurance === "Available"}
                    onChange={()=>{setDetails({...details,insurance:"Available"})}}    
                />
                <label htmlFor="insuranceAvailable">Available </label>
                <input 
                    id="insuranceNotAvailable" 
                    type="radio" 
                    name="insurance"
                    checked={details.insurance === "Not-Available"}
                    onChange={()=>{setDetails({...details,insurance:"Not-Available"})}}    
                />                
                <label htmlFor="insuranceNotAvailable">Not-Available </label>
            </section>
            <br/>  

            <section>
                Is the car under Hypothecation:

                <input 
                    id="hypothecationYes" 
                    type="radio" 
                    name="hypothecation"
                    checked={details.hypothecation === "Yes"}
                    onChange={()=>{setDetails({...details,hypothecation:"Yes"})}}
                />
                <label htmlFor="hypothecationYes">Yes </label>
                
                <input 
                    id="hypothecationNo" 
                    type="radio" 
                    name="hypothecation"
                    checked={details.hypothecation === "No"}
                    onChange={()=>{setDetails({...details,hypothecation:"No"})}}
                />                
                <label htmlFor="hypothecationNo">No </label>
            </section>
            <br/>

            <section>
                <label htmlFor="financerName">Financer Name: </label>
                <input 
                    id="financerName"
                    type="text"
                    placeholder="financer name"
                    onChange={(e)=>setDetails({...details,financerName:e.target.value})}
                    value={details.financerName}
                />
            </section>
            <br/>  

            <section>
                Road Tax:

                <input 
                    id="roadTaxYes" 
                    type="radio" 
                    name="roadTax"
                    checked={details.roadTax === "Yes"}
                    onChange={()=>setDetails({...details,roadTax:"Yes"})}
                />
                <label htmlFor="roadTaxYes">Yes </label>               
                <input 
                    id="roadTaxNo" 
                    type="radio" 
                    name="roadTax"
                    checked={details.roadTax === "No"}
                    onChange={()=>setDetails({...details,roadTax:"No"})}
                />                
                <label htmlFor="roadTaxNo">No </label>
            </section>
            <br/>

            <section>
                <label htmlFor="customerName">Customer Name: </label>
                <input 
                    id="customerName"
                    type="text"
                    placeholder="customer name"
                    onChange={(e)=>setDetails({...details,customerName:e.target.value})}
                    value={details.customerName}
                />
            </section>
            <br/>  

            <section>
                <label htmlFor="clientName">Client Name: </label>
                <input 
                    id="clientName"
                    type="text"
                    placeholder="client name"
                    onChange={(e)=>setDetails({...details,clientName:e.target.value})}
                    value={details.clientName}

                />
            </section>
            <br/>  

            <button 
                onClick={submit}
                {...stylex.props(styles.btn)}
            >
                Submit
            </button>
            
        </div>
    )
}
export default Home;