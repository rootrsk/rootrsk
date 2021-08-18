import React from 'react'

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <div className='get-in-touch'>
                    <div className="form-div">
                        <h2>Get in Touch</h2>
                       <form>
                            <input 
                                type="text" 
                                name="name" id="" 
                            />
                            <input 
                                type="text" 
                                name="Email" 
                                id="" 
                            />
                            <input 
                                type="text" 
                                name="Subject" 
                                id="" 
                            />
                            <textarea 
                                type='text' 
                                name='message' 
                                rows='7' 
                            />
                            <button>Send</button>
                        </form> 
                    </div>
                    
                </div>
                <div className='socila-media_container'>
                    <div className="contacts">
                        <p>Email : rootrsk@gmail.com</p>
                        <p>Contact: +916201004131</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
