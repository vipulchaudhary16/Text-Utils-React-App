import React from 'react'

export default function About(props) {
    let myStyle ={
        color:props.mode === 'dark'?'white':'hsl(0, 0%, 7%)',
        backgroundColor:props.mode === 'dark'?'hsl(0, 0%, 7%)':'white',
    }
    let buttonStyle={
        color:props.mode === 'dark'?'white':'hsl(0, 0%, 7%)',
        backgroundColor:props.mode === 'dark'?'hsl(0, 0%, 7%)':'white',
        border:'1px solid white',
    }


    return (
        <div className="container my-3" style={myStyle } >
            <h2 className="my-2 py-2" style={myStyle}>Your Happyness is our goal</h2>
            <div className="accordion" id="accordionExample"style={myStyle}>
                <div className="accordion-item " style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={buttonStyle}>
                            What we can?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                        <div className="accordion-body"style={myStyle}>
                            <p>We provide free tools to help you with your daily tasks. You will find tools for <strong>Convert to Uppercase </strong>, <strong>Copy to Clipboard</strong>, <strong>Remove extra spaces</strong> and <strong>Find and replace</strong> tools for handling text.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-2" style={myStyle}  >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={buttonStyle}>
                            Who we are?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  >
                            <p>We are just <strong>Students</strong> Like you , and the ordinory Stackoverflow fellow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}