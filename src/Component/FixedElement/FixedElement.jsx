import React, { useEffect, useState } from 'react'

export default function FixedElement() {



    let [showArrow , setShowArrow] = useState(false);

  useEffect(() => {
    function handleArrow() {

        if(window.scrollY > 100) {
            setShowArrow(true);
        }
        else {
            setShowArrow(false);
        }
    }

    window.addEventListener('scroll', handleArrow)
     return () => {window.removeEventListener('scroll', handleArrow);}

  },[])


  function scrollTop() {
    window.scrollTo({
        top :0 ,
        behavior : 'smooth'
    })
}


  return (
    <>

    {showArrow && (
        <button onClick={scrollTop} className="Up-section fw-bold text-white position-fixed z-1  d-flex  justify-content-center align-items-center  ">
        <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
      
    </>
  )
}
