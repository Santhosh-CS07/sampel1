import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly m-20'>
        <div className='text-blue-900 font-bold text-4xl'>Ekathrass</div>
        <div>
          welcome to GITHUB
        </div>
    </div>
    // <div style={{display:"flex", justifyContent:"space-between"}}>
    //     <div style={{marginLeft: 30, marginTop: 20}}>Ekathrass</div>
    //     <div style={{marginRight:"30px"}}>
    //         <ul style={{listStyleType:"none", display:"flex" }}>
    //             <li style={{marginRight:"20px"}}>
    //                 <a href='/'>Home</a>
    //             </li>
    //             <li style={{marginRight:"20px"}}>
    //                 <a href='/about'>About</a>
    //             </li>
    //             <li style={{marginRight:"20px"}}>
    //                 <a href='/services'>Services</a>
    //             </li>
    //             <li style={{marginRight:"20px"}}>
    //                 <a href='/contact'>Contact</a>
    //             </li>
    //         </ul>
    //     </div>
    // </div>
  )
}

export default Navbar