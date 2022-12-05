import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import s from "../styles/aboutus.module.css";

export default function AboutUs() {
  const [height, setHeight] = useState("0vh");
  const [shown, setShown] = useState("none");
  return (
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
            <Link
              href="/"
              onClick={() => {
                setHeight("0vh");
                setShown("none");
              }}
            >
              <div className="mobele">Home</div>
            </Link>
            <Link href="/services">
              <div className="mobele">Services</div>
            </Link>
            <Link href="/aboutus">
                <div className="mobele"  onClick={() => {
              setHeight("0vh");
              setShown("none");
            }}>About Us</div>
              </Link>
            <Link href="/contactus">
              <div className="mobele">Contact Us</div>
            </Link>
            
          </div>
        </div>
        <nav>
          <div id="navLeft">
            <Image src="/GR.svg" height={70} width={90} />
          </div>
          <div id="navRight">
            <Link href="/">
              <div className="navEle">Home</div>
            </Link>
            <Link href="/services">
              <div className="navEle">Services</div>
            </Link>
            
            <Link href="/aboutus">
              <div className="navEle" onClick={() => {
              setHeight("0vh");
              setShown("none");
            }}>About Us</div>
            </Link>
            <Link href="/contactus">
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

        <div id={s.head}>About us</div>
        <div id={s.abtContent}>
          <div className={s.abtCard}>
            <div className={s.abtText}>
              Since 2021, when we began as a team of three in <span>Kolkata</span>, Grid
              Reputation has existed solely online. We are a full-service
            <span>  digital and commerce agency</span> today, and we have a solid track
              record of developing integrated, transformative strategies across
              the whole digital landscape. The same people who founded us are
              still in charge of us, and we take pride in our independence. It
              implies that we can act more swiftly, audaciously, and
              <span> successfully</span>. A collection of diverse and <span>knowledgeable</span> minds that
              are aware that in order to gain consumers&apos; trust, brands must
              delight and reward them.
            </div>
            <div className={s.abtImage}>
              <Image
                className={s.img}
                src="/assets/abt1.svg"
                height={400}
                width={400}
                alt="image"
              />
            </div>
          </div>

          <div className={s.abtCard} id={s.adj}>
          <div className={s.abtImage}>
              <Image
                src="/assets/abt2.svg" className={s.img}
                height={400}
                width={400}
                alt="image"
              />
            </div>
            <div className={s.abtText}>
              Since we take a <span>data-driven</span> and entirely audience-focused
              approach, we can provide our clients with the most significant and
              measurable solutions to their challenges. Of course, none of this
              would be possible without our <span>fantastic staff</span>. Some of the most
              talented, enthusiastic, and curious individuals in the business
              make up our teams. People who actually care about making a
              difference and with whom our clients value doing business. We&apos;re a
              company of committed and curious people. We <span>collaborate</span> with
              individuals that share our instinctual conviction and audacity in
              vision. People who are aware that in order to stand out, you must
              be unique.
            </div>
          
          </div>
        </div>
        <footer>
            <div id="footerMain">
              <div id="footerLeft">
                <Image src="/GR.svg" width={120} height={120} />
                <div id="footName">Grid Reputation.</div>
                <div id="footSub">A digital marketing agency</div>
              </div>
              <div id="footerRight">
                <div id="footerRightHead">Grid Reputation</div>
                <div id="footEm">
                  <Link href="mailto:support@gridreputation.com">
                    support@gridreputation.com
                  </Link>
                </div>
                <div id="socials">
                  <Link href="https://www.linkedin.com/company/grid-reputation/">
                    <Image src="/assets/linkedin.png" width={35} height={35} />
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=100087967937908&mibextid=ZbWKwL">
                    <Image src="/assets/fb.png" width={35} height={35} />
                  </Link>
                  <Link href="https://twitter.com/GridReputation">
                    <Image src="/assets/twit.png" width={35} height={35} />
                  </Link>
                  <Link href="https://www.instagram.com/gridreputation/">
                    <Image src="/assets/insta.png" width={35} height={35} />
                  </Link>
                </div>
              </div>
            </div>
            <div id="footerBottom">&copy; Grid Reputation 2022</div>
          </footer>
      </main>
    </div>
  );
}
