import { Navbar } from "./navbar/Navbar"
import "./style.css"

export const Header=()=>{
    return(<>
         <div className="container-header">
          
        <svg className='App-logo'
          xmlns="http://www.w3.org/2000/svg"
          width="41.02"
          height="62.046"
          viewBox="0 0 41.02 62.046"
        >
          <g
            id="Group_1"
            data-name="Group 1"
            transform="translate(-46.977 -48.019)"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M-107.609,90.326c3.224,0,16.753-3.514,16.753,0v12.23s-27.318.157-29.14-4.807.525-7.681,1.614-26.014,36.9-6.4,36.9-6.4"
              transform="translate(169 -12)"
              fill="none"
              stroke="#6f1212"
             
              strokeWidth="3"
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M-91.615,107.724c-.22,17.883,0,19.274,0,19.274"
              transform="translate(169.768 -17.167)"
              fill="none"
              strokeWidth="3"
            />
          </g>
        </svg>
        <Navbar/>
        </div>
       
        </>
    )
}