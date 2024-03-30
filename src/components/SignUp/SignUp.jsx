import React, { useEffect } from 'react'
import './SignUp.scss';
import { RxTextAlignJustify } from "react-icons/rx";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import Aos from 'aos';
import 'aos/dist/aos.css';

const SignUp = ({ handleCloseModal }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="SignUp container" onClick={handleCloseModal}>
            <div className="modal-content container" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={handleCloseModal}>&times;</span>
                <div className="secTitle">
                    <h3 data-aos='fade-up'>Sign Up</h3>
                </div>
                <div className="signup-container flex" data-aos='fade-up'>
                       <span data-aos='fade-up'>Name: </span>
                    <div className="inputField flex">
                        <RxTextAlignJustify className='icon' />
                        <input type="text" placeholder='Enter Your Full Name' />
                    </div>

                    <div className="inputField flex" data-aos='fade-up'>
                        <MdOutlineMail className='icon' />
                        <input type="email" placeholder='Enter Your Email' />
                    </div>

                    <div className="inputField flex" data-aos='fade-up'>
                        <RiLockPasswordLine className='Enter' />
                        <input type="password" placeholder='Enter Password' />
                    </div>

                    <button className='btn flex' data-aos='fade-up'>
                        <IoMdAddCircleOutline className='icon' />
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignUp