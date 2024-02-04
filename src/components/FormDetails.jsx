import React from "react";
import axios from "axios";
import * as stylex from "@stylexjs/stylex";
//import { PDFDownloadLin,Page, Text, View, Document,StyleSheet } from "@react-pdf-viewer/core";




const FormDetails = () => {

    const styles = stylex.create({
        fonts:{
            fontSize:"20px",
            fontFamily: "Ubuntu, sans-serif"
        },
        color:{
            color:"green",
            marginLeft:"10px"
        },
        btn:{
            padding:"0.5rem 0.8rem",
            backgroundColor: "crimson",
            color:"white",
            cursor:"pointer"
        }
    })

    const [inspection,setInspection] = React.useState(null)

    React.useEffect(()=>{
        axios.get("http://localhost:5000/inspection-details")
            .then(response => {
                setInspection(response.data.inspection)
            })
            .catch((error)=>console.error(error))
    },[])
    console.log(inspection)

    return(
        <main>
           <section>
               {inspection ? (
                    <div {...stylex.props(styles.fonts)}>
                        <h1>Financer Name:<span {...stylex.props(styles.color)}>{inspection.financerName}</span></h1>
                        <h3>CLIENT NAME:<span {...stylex.props(styles.color)}>{inspection.clientName}</span></h3>
                        <h3>Is hypothecation exists :<span {...stylex.props(styles.color)}>{inspection.hypothecation}</span></h3>
                        <h2>price : &#8377;<span {...stylex.props(styles.color)}>{inspection.price}</span> lakhs</h2>
                    </div>
                    )  : (<p>Loading inspection details....</p>)
                }
           </section>

           <section>
                <button {...stylex.props(styles.btn)}>
                    hello
                </button>
           </section>
        </main>
    )
}
export default FormDetails;