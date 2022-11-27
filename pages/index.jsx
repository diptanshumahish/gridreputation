import Head from "next/head";
import Image from "next/image";
import s from "../styles/Home.module.css";
import Marquee from "react-fast-marquee";
import { useState,useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [height, setHeight] = useState("0vh");
  const [shown, setShown] = useState("none");
  useEffect(()=>{

  })
  return (
    <div className={s.container}>
      <Head>
        <title>Grid Reputation</title>
        <meta
          name="description"
          content="The official website for Grid Reputation organization"
        />
        <link rel="icon" href="/favicon.ico" />
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
        <div id={s.header}>
          <div id={s.headerText}>
          <div id={s.headerContent}>
             Your first choice when it comes to chosing the best marketing Agency!
            </div>
            <h1>GRID REPUTATION.</h1>
            
            <div>
              <Marquee gradientWidth={0} id={s.mar} speed="40">
                <div className={s.marEle}>Android Development </div>
                <div className={s.marEle}>Online Rep Management </div>
                <div className={s.marEle}>Seo Buidling </div>
              </Marquee>
            </div>
            <div id={s.discover}>
              Discover
            </div>
           
          </div>
          <div id={s.headerImage}>
            <Image
              src="/GR.svg"
              width={400}
              height={600}
              id={s.welcomeImage}
            />
          </div>
        </div>
        <section id={s.who}>
          <div id={s.servicesHead}>
            Who are we?
            <div id={s.serviveSub}>know us</div>
          </div>
          <div id={s.whoBack}>
            <div id={s.whoContent}>
              We are a <span>digital marketing agency</span> established in
              2022. <br />
              Digital Marketing, SEO, Web Development and ofcourse , Exceptional
              brand reputation management is what has gotten the protogy on the
              top in such a short period! <br /> <br />
              <div className={s.abt}>
                <span>Real time stats and ORM</span> With our online reputation
                management service, you will be able to monitor 24/7 how
                consumers perceive your company. This eases out the whole
                process of taking strategic action when necessary to improve
                your brand&apos;s image.
              </div>
              <br />
              <div className={s.abt}>
                <span>Amazing websites</span> Keeping your customers&apos; attention
                in fast-moving markets can be quite the challenge, especially if
                your site doesn&apos;t follow web design and development trends.
                That&apos;s why our team is always here to save the day when you get
                sick and tired of the outdated styles, layouts, and features.
              </div>
              <br />
              <div className={s.abt}>
                <span>The best SEO practises With SEO</span>, there are no
                shortcuts, and here at The Protogy, you&apos;ll get a personalized
                blend of off-page SEO, on-page SEO that will make your business
                touch the sky​!
              </div>
              <br />
              <div className={s.abt}>
                <span>Remarkable digital marketing</span> Get the email
                marketing, content, guest blogging, and social media to work for
                you instead of against you!
              </div>
              <br />
              <div className={s.abt}>
                Monitor your <span>brand reputation</span>, quickly identify any
                changes in sentiment and see how perceptions of your brand shift
                over time
              </div>
            </div>
            <div id={s.servicesImage}>
              <Image
                src="/assets/about.svg"
                width={400}
                height={400}
                id={s.servImage}
              />
            </div>
          </div>
        </section>
      
        <section id={s.services}>
          <div id={s.servicesHead}>
            What do we offer?
            <div id={s.serviveSub}>Explore our services</div>
          </div>
          <div id={s.servicesback}>
            <div id={s.servicesImage}>
              <Image
                src="/assets/services.svg"
                width={400}
                height={400}
                id={s.servImage}
              />
            </div>
            <div id={s.serviceContent}>
              <div className={s.serviceCard}>
                <div className={s.serviceCardImage}>
                  <Image src="/assets/apps.svg" width={50} height={50} />
                </div>
                <div className={s.serviceCardText}>
                  <div className={s.serviceCardHeading}>
                    Android Development
                  </div>
                  <div className={s.serviceCardDetails}>
                    Get the best android Development support!
                  </div>
                </div>
              </div>

              <div className={s.serviceCard}>
                <div className={s.serviceCardImage}>
                  <Image src="/assets/web.svg" width={50} height={50} />
                </div>
                <div className={s.serviceCardText}>
                  <div className={s.serviceCardHeading}>Web Development</div>
                  <div className={s.serviceCardDetails}>
                    Get the best websites, that boost your business to skies!
                  </div>
                </div>
              </div>

              <div className={s.serviceCard}>
                <div className={s.serviceCardImage}>
                  <Image src="/assets/rep.svg" width={50} height={50} />
                </div>
                <div className={s.serviceCardText}>
                  <div className={s.serviceCardHeading}>Rep Management</div>
                  <div className={s.serviceCardDetails}>
                    REP management to help you with stuff!
                  </div>
                </div>
              </div>

              <div className={s.serviceCard}>
                <div className={s.serviceCardImage}>
                  <Image src="/assets/seo.svg" width={50} height={50} />
                </div>
                <div className={s.serviceCardText}>
                  <div className={s.serviceCardHeading}>SEO</div>
                  <div className={s.serviceCardDetails}>
                    SEO, that makes you known to the world!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id={s.int}>
            <div id={s.interested}>
              Feeling Interested? We are happy to get talking :)
             <Link href='/contactus'>
             <div id={s.contactusButton}>Let&apos;s talk!</div></Link>
            </div>
          </div>
        </section>
        <section id={s.numbers}>
          <div id={s.innerNum}>
            <div className={s.in}>
              <div className={s.inHead}>
                #1
              </div>
              <div className={s.subHeadIn}>
                Asia&apos;s Top Best ORM Company
              </div>
            </div>
            <div className={s.in}>
              <div className={s.inHead}>
                99%
              </div>
              <div className={s.subHeadIn}>
                Customer Satisfaction
              </div>
            </div>
            <div className={s.in}>
              <div className={s.inHead}>
                100+
              </div>
              <div className={s.subHeadIn}>
                Projects Completed
              </div>
            </div>
            <div className={s.in}>
              <div className={s.inHead}>
                20+
              </div>
              <div className={s.subHeadIn}>
               Industries we worked for
              </div>
            </div>
            <div className={s.in}>
              <div className={s.inHead}>
                5+
              </div>
              <div className={s.subHeadIn}>
                Years of experience
              </div>
            </div>
            <div className={s.in}>
              <div className={s.inHead}>
                50+
              </div>
              <div className={s.subHeadIn}>
                Highly qualified ORM expert Team
              </div>
            </div>
          </div>

          
        </section>
        
        <section id={s.testi}>
        <div id={s.servicesHead}>
            Testimonials
            <div id={s.serviveSub}>See what others say about us</div>
          </div>
          <div id={s.testiomials}>
              <div className={s.testCard}>
                <Image
                  src="https://images.unsplash.com/photo-1550682290-d071c75759f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  width={50}
                  height={50}
                  className={s.testiImage}
                />
                <div className={s.testiText}>
                  The place where everything makes sense
                  <div className={s.testPerson}>Katty</div>
                </div>
              </div>
              <div className={s.testCard}>
                <Image
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                  width={50}
                  height={50}
                  className={s.testiImage}
                />
                <div className={s.testiText}>
                  My first choice when going for digital marketing, the best
                  services indeed!
                  <div className={s.testPerson}>John</div>
                </div>
              </div>
              <div className={s.testCard}>
                <Image
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  width={50}
                  height={50}
                  className={s.testiImage}
                />
                <div className={s.testiText}>
                  Hands down the best services!
                  <div className={s.testPerson}>Kevin</div>
                </div>
              </div>
            </div>
        </section>
        <footer>
            &copy; Grid Reputation 2022 <br />
          <Link href="/contactus">Contact Us</Link>
        </footer>
      </main>
    </div>
  );
}
