import React from 'react'
import AnimatedCursor from "react-animated-cursor"
export default function AnimationCursor() {
  return (
    <>

    <AnimatedCursor
    innerSize={12}
    outerSize={8}
    color='0, 162, 139'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    clickables={[
      'a',
      'button',
      '.link'
    ]}
  />
      
    </>
  )
}

