import React from 'react'
import footer_logo from '../../assets/logo.png'



const Footer = () => {
    return (
        <div className="footer text-xs flex flex-col py-20 md:px-32 px-8 gap-10 bg-white/5">
            <hr />
            <p className="footer-bottom-left text-center">
                &copy; {new Date(Date.now()).getFullYear()} &nbsp;
                Made with ❤️ by Saikat Saha
            </p>

        </div>
    )
}

export default Footer