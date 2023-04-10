import React from 'react'
import Link from 'next/link'



const Home = () => {
  return (
    <div>
      hello11 main
    <br/>
     <Link href={"/products/ssr"}>Products of SSR</Link> <br/>
     <Link href={"/products/ssg"}>Products of SSG</Link> <br/>
     <Link href={"/products/isr"}>Products ISR</Link><br/>
     <Link href={"/user/csr"}>Products CSR</Link><br/>
     {/* <Link href={"/products/isr"}>Products ISR</Link><br/> */}
    </div>
  )
}

export default Home


