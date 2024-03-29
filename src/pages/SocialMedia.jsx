import React, { useState} from 'react'

 const SocialMedia = () => {
    const [show, setShow] = useState(false)

   const toggleShow = () => {
        setShow(prevShow => !prevShow)
    }

     return (
    <div>
         <button className="btn-media" onClick={toggleShow}> {show ? "Hide" : "Show"} Social Media Contacts</button>
         <div className='social-media' style={{display: show ? "block" : "none"}} >
                <ul className="social_list">
                                                                
                            <li className="social_item">
                                <a className="whatsapp" href="https://wa.me/0027761272025">
                                    <i className="fab fa-whatsapp"></i>
                                </a></li>
                                
                            <li className="social_item">
                                <a className="twitter" href="https://twitter.com/abitondev?ref_src=twsrc%5Etfw">
                                    <i className="fab fa-twitter"></i>
                                </a></li>
                                
                            <li className="social_item">
                                <a className="github" href="https://github.com/Abiton198">
                                    <i className="fab fa-github"></i>  
                                </a></li>

                                <li className='social-item'>
                                <a className='linked-in' href='https://www.linkedin.com/in/abiton-padera-232a6a9a/'>
                                     <i className="fab fa-linkedin"></i> 
                                </a></li>

                        </ul>
        </div>

    </div>
  )
}
export default SocialMedia