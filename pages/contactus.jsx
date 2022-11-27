import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "../styles/contactus.module.css"
export default function ContactUs(){
    const [height, setHeight] = useState("0vh");
    const [shown, setShown] = useState("none");
    return(
        <div>
            <Head>
                <title>Contact Us</title>
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
            <Link href="/contactus"  onClick={() => {
              setHeight("0vh");
              setShown("none");
            }}>
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
        <div id={s.contact}>
           <div id={s.mainForm}>
           <div id={s.contactHeading}>
            Contact Us
            </div>
            <form action="https://formsubmit.co/diptanshumahish2016@gmail.com" method="POST">
                <label htmlFor="Name">
                    <div className={s.formEle}>
                        Name
                    </div>
                    <input type="text" name="name" id="" className={s.inp} placeholder='enter your name' required />
                </label>
                <label htmlFor="Email">
                    <div className={s.formEle}>
                        Email
                    </div>
                    <input type="email" name="email" id="" className={s.inp} placeholder='enter your email' required />
                </label>
                <label htmlFor="Message">
                    <div className={s.formEle}>
                        Your Message
                    </div>
                    <textarea type="text" name="message" id="" className={s.inp} placeholder='enter your message' required />
                </label> <br />
                <input type="hidden" name="_subject" value="Grid Reputation Submission!"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_template" value="table"></input>
                <button type="submit" id={s.submit}>Submit </button>
            </form>
           </div>
           <div id={s.img}>
            <Image src='/assets/contact.svg' height={400} width={400} id={s.con}/>
           </div>
        </div>
        <footer>
          &copy; Grid Reputation 2022 <br />
          <Link href="/">Contact Us</Link>
        </footer>
            </main>
        </div>
    )
}