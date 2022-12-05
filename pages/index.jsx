import Head from "next/head";
import Image from "next/image";
import s from "../styles/Home.module.css";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useInView, InView } from "react-intersection-observer";

export default function Home() {
  // const {ref1,inView}=useInView();
  const [height, setHeight] = useState("0vh");
  const [shown, setShown] = useState("none");
  //loading animation
  const [loading, setLoafing] = useState(true);
  var [num1, changeNum1] = useState(0);

  useEffect(() => {
    Aos.init();
    Aos.refresh();

    setTimeout(() => {
      setLoafing(false);
    }, 90);
  });

  return (
    <div className={s.container}>
      <Head>
        <title>Grid Reputation</title>
        <meta
          name="description"
          content="The official website for Grid Reputation organization"
        />
        <link rel="icon" href="/grLogo.ico"/>
      </Head>
      {loading ? (
        <div id="loader">
          <Image src="/GR.svg" height={500} width={500} id="aniIm" />
        </div>
      ) : (
        <main>
          <div
            id="mobileNav"
            style={{ display: shown, height: height }}
            data-aos="fade-up"
          >
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
                <div className="mobele">About Us</div>
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
                <div className="navEle">About Us</div>
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
          <div id={s.header}>
            <div id={s.headerText}>
              <div id={s.headerContent}>
                Your first choice when it comes to chosing the best Marketing
                Agency!
              </div>
              <h1>GRID REPUTATION.</h1>
              <div id={s.a}>A Digital Marketing Agency.</div>
              <div>
                <Marquee gradientWidth={0} id={s.mar} speed="40">
                  <div className={s.marEle}>Android Development |</div>
                  <div className={s.marEle}>Online Rep Management | </div>
                  <div className={s.marEle}>Seo Buidling |</div>
                  <div className={s.marEle}>Content Writing |</div>
                </Marquee>
              </div>
              <div id={s.discover}>Discover</div>
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
          <section id="who">
            <div id={s.who}>
              <div id={s.servicesHead}>
                Why us?
                <div id={s.serviveSub}>Because we offer:</div>
              </div>
              <div id={s.whoBack}>
                <div className={s.us} id={s.adj}>
                  <div className={s.te} data-aos="fade-right">
                    <span> The best SEO practises</span> <br /> You&apos;ll get
                    a You&apos;ll get a customised mix of on-page and off-page SEO
                    that will take your company to new heights!
                    <br /> <br />
                    <span>Remarkable digital marketing</span> <br /> Get social
                    media, guest blogging, email marketing, and other tactics to
                    work for you rather than against you!
            

                  </div>
                  <div className={s.im} data-aos="fade-left">
                    <Image
                      src="/assets/whyus1.svg"
                      height={500}
                      width={500}
                      className={s.usIM}
                    />
                  </div>
                </div>
                <div className={s.us}>
                  <div className={s.im} data-aos="fade-right">
                    <Image
                      src="/assets/whyus2.svg"
                      height={500}
                      width={500}
                      className={s.usIM}
                    />
                  </div>
                  <div className={s.te} data-aos="fade-left">
                    <span>Real time stats and ORM</span>
                    <br /> You will be able to keep tabs on how customers view
                    your business every single day with the help of our online
                    reputation management solution. <br /> <br />
                    <span>Amazing websites</span>
                    <br /> Our staff is always ready to come to your rescue when
                    you become weary of the dated styles, layouts, and features.
                  </div>
                </div>
              </div>
              <div id={s.int}>
                <div id={s.interested}>
                  Interested? We are happy to get talking :)
                  <Link href="/contactus">
                    <div id={s.contactusButton} data-aos="flip-right">
                      Let&apos;s talk!
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section id={s.services}>
            <div id={s.servicesHead}>
              What do we offer?
              <div id={s.serviveSub}>Explore our services</div>
            </div>
            <div id={s.servicesback}>
              <div id={s.servicesImage} data-aos="fade-right">
                <Image
                  src="/assets/services.svg"
                  width={400}
                  height={400}
                  id={s.servImage}
                />
              </div>
              <div id={s.serviceContent}>
                <Link href="/services">
                  <div className={s.serviceCard} data-aos="fade-up">
                    <div className={s.serviceCardImage}>
                      <Image src="/assets/apps.svg" width={50} height={50} />
                    </div>
                    <div className={s.serviceCardText}>
                      <div className={s.serviceCardHeading}>
                        Android Development
                      </div>
                      <div className={s.serviceCardDetails}>
                        Get the best android Development support from our staff!
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/services">
                  <div className={s.serviceCard} data-aos="fade-up">
                    <div className={s.serviceCardImage}>
                      <Image src="/assets/web.svg" width={50} height={50} />
                    </div>
                    <div className={s.serviceCardText}>
                      <div className={s.serviceCardHeading}>
                        Web Development
                      </div>
                      <div className={s.serviceCardDetails}>
                        Get the best websites, that boost your business to
                        skies!
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/services">
                  <div className={s.serviceCard} data-aos="fade-up">
                    <div className={s.serviceCardImage}>
                      <Image src="/assets/rep.svg" width={50} height={50} />
                    </div>
                    <div className={s.serviceCardText}>
                      <div className={s.serviceCardHeading}>Rep Management</div>
                      <div className={s.serviceCardDetails}>
                        Rep management is meant to help you towards success
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/services">
                  <div className={s.serviceCard} data-aos="fade-up">
                    <div className={s.serviceCardImage}>
                      <Image src="/assets/seo.svg" width={50} height={50} />
                    </div>
                    <div className={s.serviceCardText}>
                      <div className={s.serviceCardHeading}>
                        Seo Building Tools
                      </div>
                      <div className={s.serviceCardDetails}>
                        SEO, that makes you known to the world!
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section id={s.numbers}>
            <div id={s.innerNum}>
              <div className={s.in} data-aos="flip-left">
                <div className={s.inHead}>#1</div>
                <div className={s.subHeadIn}>
                  Top Best ORM Company
                </div>
              </div>
              <div className={s.in} data-aos="flip-left">
                <div className={s.inHead}>
                  99%
                </div>
                <div className={s.subHeadIn}>Customer Satisfaction</div>
              </div>
              <div className={s.in} data-aos="flip-left">
                <div className={s.inHead}>100+</div>
                <div className={s.subHeadIn}>Projects Completed</div>
              </div>
              <div className={s.in} data-aos="flip-left">
                <div className={s.inHead}>20+</div>
                <div className={s.subHeadIn}>Industries we worked for</div>
              </div>
              <div className={s.in} data-aos="flip-left">
                <div className={s.inHead}>5+</div>
                <div className={s.subHeadIn}>Years of experience</div>
              </div>
              <div className={s.in} data-aos="flip-left">
                <div className={s.inHead}>50+</div>
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
                <div className={s.testiText} data-aos="fade-right">
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
                <div className={s.testiText} data-aos="fade-right">
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
                <div className={s.testiText} data-aos="fade-right">
                  Hands down the best services!
                  <div className={s.testPerson}>Kevin</div>
                </div>
              </div>
            </div>
          </section>
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
      )}
    </div>
  );
}
