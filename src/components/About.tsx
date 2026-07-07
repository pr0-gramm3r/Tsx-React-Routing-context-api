import type { FC } from "react"
import frontEnd from "../asset/frontend.png"
import backEnd from "../asset/backend.png"
import founderLogo from "../asset/founder-logo.png"
import MquvTech from "../asset/founder-image.png"
import WorkingCard from "./cards/WorkingCard"
import FounderCard from "./cards/FounderCard"
import './About.css'

interface workingCards{
  id: number;
  image: string;
  name: string;
  founderName: string;
  details: string;
}

interface founderCard{
    id: number;
    img: string;
    alt: string;
    name: string;
    post: string;
    desc: string;
}

const About:FC = () => {
  const workingCards:workingCards[] = [
    {
      id: 1,
      image: "https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-28.png",
      name: "Bhaarat Ranjan",
      founderName: "Senior Engineer",
      details: "Lead architect focused on building scalable, high-performance systems and innovative tech solutions.",
    },
    {
      id: 2,
      image: "https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-28.png",
      name: "Isha Rani Sahu",
      founderName: "Full-stack Engineer",
      details: "Creative developer bridging the gap between sophisticated design and robust full-stack logic.",
    },
    {
      id: 3,
      image: "https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-28.png",
      name: "Dharmesh Kumar",
      founderName: "Junior Engineer",
      details: "Logic-driven developer focused on component architecture and building seamless web experiences.",
    },
    {
      id: 4,
      image: "https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-28.png",
      name: "Divyanshu Pathak",
      founderName: "Intern",
      details: "professionalises in Frontend Development, with Better User Interface handeling.",
    },
    {
      id: 5,
      image: "https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-28.png",
      name: "Kumar Ayush",
      founderName: "Intern",
      details: "professionalises in Backend Development, Believes in Scalable Architecture.",
    },
  ];

  const founderCard: founderCard = {
    id: 1,
    img: founderLogo,
    alt: "Vinit Sir",
    name: "Vinit Pratap Singh",
    post: "Founder",
    desc: "Handels a Company, Filled with absolute Creativity.",
  }
  return (
    <div className="about">
      <h1>About</h1>
      <div className="intro">
        <div className="left">
          <FounderCard props={founderCard}/>
        </div>
        <div className="right">
          <img src={MquvTech} alt="MQUV-TECH" />
        </div>
      </div>
      <div className="context">
        <div className="top">
          <h2>We are a team of <br />Visionaries, Designers, and Engineers.</h2>
          <hr />
        </div>
        <div className="main">
          <p>
            MQUV Tech has always redefs what it means to build technology with purpose. Rooted in a passion for solving real-world problems through code, design, and strategy, the company was built on a simple belief: every business, regardless of size, deserves access to world-class software solutions.At the heart of MQUV Tech lies a vision to bridge the gap between complex technology and practical business needs. What began as a small team of developers with a shared ambition has grown into a full-fledged creative technology and digital transformation agency, serving startups, enterprises, and organizations across multiple industries. The journey has been driven by a relentless focus on quality, innovation, and client success — values that continue to shape every project undertaken.With a strong background in software engineering and a deep understanding of modern digital ecosystems, the leadership at MQUV Tech brings together technical expertise and creative vision. This combination allows the company to move beyond simply writing code — instead, crafting complete digital experiences that are functional, scalable, and visually compelling. From custom software development to mobile applications, websites, and automation systems, every solution is designed with the end user in mind, ensuring that technology serves people, not the other way around.What sets MQUV Tech apart is its commitment to building long-term partnerships rather than one-off projects. Understanding that every client's needs are unique, the approach at MQUV Tech emphasizes collaboration, transparency, and adaptability. Whether working with an early-stage startup looking to bring an idea to life or an established enterprise seeking to modernize its operations through automation, the goal remains the same: delivering solutions that create measurable impact.The philosophy driving MQUV Tech is centered on three core principles — innovation, precision, and reliability. Innovation ensures that the solutions built today are ready for the challenges of tomorrow. Precision reflects a meticulous attention to detail in both design and development, ensuring every workingCard is polished and production-ready. Reliability speaks to the trust clients place in MQUV Tech, knowing that deadlines will be met and quality will never be compromised.Beyond technical skills, there is a genuine passion for mentorship and team growth. Building a company isn't just about delivering projects — it's about cultivating a culture where visionaries, designers, and engineers can thrive together. This collaborative spirit has become a defining trait of MQUV Tech's internal culture, fostering creativity and pushing the boundaries of what's possible in software development.Looking ahead, the mission is clear: to continue expanding MQUV Tech's reach, helping more businesses harness the power of technology to achieve their goals. With a foundation built on trust, expertise, and a genuine desire to create meaningful digital solutions, MQUV Tech is positioned not just as a service provider, but as a long-term technology partner for organizations navigating the ever-evolving digital landscape.
          </p>
        </div>
      </div>
      <div className="pallates">
        <h3>Meet Our Experts</h3>
        <div className="userCards">
          {workingCards.map(workingCard =>{
            return <WorkingCard key={workingCard.id} props={workingCard} />
          })}
        </div>
      </div>
      <div className="musical">
        <div className="bg">
          <img src="https://img.magnific.com/premium-photo/digital-technology-background-with-connecting-nodes-plexus-lines-clean-white-backdrop-symbolizing-big-data-futuristic-networks_1354780-5512.jpg?w=1060" alt="Musical bg" />
        </div>
        <div className="Frontend">
          <h2>FRONTEND</h2>
          <div className="structureFront">
            <img src={frontEnd} alt="FRONTEND" />
          </div>
          <div className="desc">
            <h3>Frontend architecture</h3>
            <p>"Illustrates how the browser handles UI components, state management, rendering, and styling — all coordinated through build tooling and connected to the backend via network requests."</p>
          </div>
        </div>
        <div className="Backend">
          <h1>BACKEND</h1>
          <div className="structureBack">
            <img src={backEnd} alt="BACKEND" />
          </div>
          <div className="desc">
            <h3>Backend Architecture</h3>
            <p>"Shows how the server processes requests through the API layer, authentication middleware, and business logic, accessing data via the data layer — bridging the client and database."</p>
          </div>
        </div>
      </div>
      <div className="thankYou-Note">
        <p>We appreciate you taking the time to explore what we do. Whether you're here to learn more about our services, discuss a project, or simply say hello, we're glad you stopped by. Our team is committed to building thoughtful, reliable software solutions that help businesses grow and adapt in an ever-changing digital world. We look forward to the opportunity to work together and turn your ideas into impactful, real-world results. Reach out anytime — we're always happy to talk.</p>
      </div>
    </div>
  )
}

export default About
