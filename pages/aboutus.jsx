import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"

export default function AboutUs(){
    const [height, setHeight] = useState("0vh");
    const [shown, setShown] = useState("none");
    return(
        <div>
            <Head>
                <title>About Us</title>
            </Head>
            <main>
            <div id="mobileNav" style={{ display: shown, height: height }}>
          <div
            id="mobclose"
            onClick={() => {
              setHeight("0vh");
              setShown("none");
            }}
          >
            <Image src="/assets/x.svg" height={30} width={30} />
          </div>
          <div id="mobileInner">
            <Link href="/"  onClick={() => {
              setHeight("0vh");
              setShown("none");
            }}>
              <div className="mobele">Home</div>
            </Link>
            <Link href="/services"  >
              <div className="mobele">Services</div>
            </Link>
            <Link href="/contactus"  >
              <div className="mobele">Contact Us</div>
            </Link>
          </div>
        </div>
        <nav>
          <div id="navLeft"><Image src='/GR.svg' height={70} width={90}/></div>
          <div id="navRight">
            <Link href="/">
              <div className="navEle">Home</div>
            </Link>
            <Link href="/services">
              <div className="navEle">Services</div>
            </Link>
            <Link href="#who">
              <div className="navEle">About Us</div>
            </Link>
           <Link href='/contactus'>
           <div className="navEle" id="contactUs">
              Contact Us
            </div>
            </Link>
          </div>
          <div
            id="navMobileRight"
            onClick={() => {
              setHeight("100vh");
              setShown("flex");
            }}
          >
            <Image src="/assets/menu.svg" height={30} width={30} />
          </div>
        </nav>
            </main>
        </div>
    )
}