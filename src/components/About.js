import React from 'react'
// import { useState } from 'react'

export default function About(props) {

    // const [mystyle, setMystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104' : 'white'
    }
    // const [btntext, setBtnText] = useState('Enable Dark mode')
    // const toggleStyle = () => {
    //     if (mystyle.color === 'black') {
    //         setMystyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid white'
    //         })

    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMystyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }


    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            Textutils gives you a way to analyse your text quickly and efficiently. Be it word count, Character Count
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong> Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            Textutils  is a free character counter tool that provide instant character count and word count statistics for a given text. Textutils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong> Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            The word counter software work in any web browser such as chrome, firefox, internetexplorer, safari, opera. It suits to count character in facebook, blog, books, excel documents, pdf documents, essays etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
            </div> */}
        </div>
    )
}
