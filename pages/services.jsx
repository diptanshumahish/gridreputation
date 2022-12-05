import Head from "next/head";
import { useState } from "react";
import s from "../styles/services.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Services() {
  const [height, setHeight] = useState("0vh");
  const [shown, setShown] = useState("none");
  const [service, ShowService] = useState("none");
  return (
    <div>
      <Head>
        <title>Services</title>
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
                <div className="mobele">About Us</div>
              </Link>
            <Link href="/contactus">
              <div className="mobele">Contact Us</div>
            </Link>
          </div>
        </div>
        <div id={s.serviceAvail} style={{ display: service }}>
          <div id={s.servIn}>
            <div
              id={s.close}
              onClick={() => {
                ShowService("none");
              }}
            >
              <Image src="/assets/x.svg" height={30} width={30} />
            </div>
            <div id={s.serHeadIn}>
              <div id={s.getSerHead}>Get This service</div>
              Fill up this form and we will get back to you asap!
            </div>
            <form
              action="https://formsubmit.co/diptanshumahish2016@gmail.com"
              method="POST"
            >
              <label htmlFor="Name">
                <div className={s.ele}>Your Name</div>
                <input
                  type="text"
                  placeholder="Enter you name"
                  name="name"
                  required
                  className={s.inp}
                />
              </label>

              <label htmlFor="Email">
                <div className={s.ele}>Your Email</div>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  required
                  className={s.inp}
                />
              </label>

              <label htmlFor="Email">
                <div className={s.ele}>Your Organization</div>
                <input
                  type="text"
                  placeholder="Enter your Organization"
                  name="organization"
                  required
                  className={s.inp}
                />
              </label>

              <label htmlFor="Service">
                <div className={s.ele}>Service You want to avail</div>
                <input
                  type="text"
                  placeholder="Enter the service"
                  name="service"
                  required
                  className={s.inp}
                />
              </label>

              <label htmlFor="Comments">
                <div className={s.ele}>Comments</div>
                <textarea
                  type="text"
                  placeholder="Tell us more about your project"
                  name="comments"
                  required
                  className={s.inp}
                  id={s.long}
                />
              </label>
              <input
                type="hidden"
                name="_subject"
                value="Grid Reputation Service Submission!"
              ></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_template" value="table"></input>
              <button type="submit" id={s.submit}>
                Submit
              </button>
            </form>
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
        <div id={s.ser}>
          Services we offer
          <div id={s.sub}>Browse our services</div>
        </div>
        <div id={s.cards}>
          <div className={s.card}>
            <div className={s.cardHead}>UI/UX designing</div>
            <div className={s.content}>
              <div className={s.text}>
                Get the best UI/UX designs for your next project, We provide the
                best in class deisgns that take your next projects to greater
                heights. We make sure the deisgns are both eye candy and
                developer friendly at the same time.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/web.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>
            <div className={s.options}>
              <div className={s.option}>
                Website Designs
                <div className={s.subh}>
                  The best website designs, that take your customer experience
                  to next levels
                </div>
              </div>
              <div className={s.option}>
                App designs
                <div className={s.subh}>
                  The best App designs, that will surely increase your app
                  downnloads
                </div>
              </div>
            </div>
            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardHead}>ORM management</div>
            <div className={s.content}>
              <div className={s.text}>
                In the modern world, customers research your company online
                before deciding whether or not to use your services. We work to
                establish a favourable online reputation for your brand as we
                are one of the most reputable Online Reputation Management (ORM)
                companies in India. Get the service
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/rep.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardHead}>SEO</div>
            <div className={s.content}>
              <div className={s.text}>
                Any successful SEO strategy is built on thorough keyword
                research. We can find short-tail and long-tail keywords that
                will send the highest-quality, money-making traffic by learning
                what your clients are searching for. We also keep an eye on your
                rivals, analysing their strategy and methods to inform your own.
                To ensure transparent supervision and coordination across your
                SEO and PPC efforts, everything is recorded in a single
                document.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/seo.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardHead}>Web and App Development</div>
            <div className={s.content}>
              <div className={s.text}>
                A website must be carefully thought out in order to be
                effective. We begin by designing your user experiences and user
                journeys for your website based on a thorough understanding of
                your target audience. Then, in order to improve the experience,
                we analyse the websites of your rivals.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/apps.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardHead}>Content Writing</div>
            <div className={s.content}>
              <div className={s.text}>
                With the help of our continuing content marketing, you have
                access to a steady stream of reliable and interesting resources
                that you can use to connect with your target market and increase
                brand recognition. After all, you have to outperform the
                material that is currently dominating if you want to rank #1 for
                a term.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/rep.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
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
