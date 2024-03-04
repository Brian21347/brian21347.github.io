import Navbar from "@/components/Navbar";
import EventListing from "@/components/EventListing";

export default function Home() {
  type Role = {title: string, time: string, description: string}
  type Activity = { imgSrc: string, imgAlt: string, eventName: string, eventLink: string, roles: Array<Role> }
  let activities: Array<Activity> = [
    {
      imgSrc: "./ACBA.webp",
      imgAlt: "Atlanta Contemporary Basketball Association Logo",
      eventName: "Atlanta Contemporary Basketball Association",
      eventLink: "https://www.acba-us.com/about/",
      roles: [
        {
          title: "Coding II Tutor",
          time: "10th grade",
          description: "I created a projected-based computer science course that is based on, and extends, the CSA curriculum. In our weekly sessions, students delve into topics ranging from data types to inheritance and polymorphism."
        },
        {
          title: "Coordinator",
          time: "Summer of 9th grade",
          description: "I coordinated ACBA’s 2023 summer program, oversaw the classes, and mediated disagreements that arose during the program."
        },
        {
          title: "Chinese Tutor",
          time: "Summer of 9th grade - 10th grade",
          description: "I pioneered a unique Chinese program at ACBA, centered around sparking student interest in Chinese through the recitation of renowned Chinese poetry and engaging tongue twisters."
        },
        {
          title: "Math Tutor",
          time: "9th grade - 10th grade",
          description: "Since the beginning of my second semester in ninth grade, I have been actively tutoring mathematics to elementary and middle school students. The curriculum I employ is partially rooted in Singapore math principles, but I also adapt it to cater to the unique needs of each student."
        },
        {
          title: "Writer",
          time: "Summer of 9th grade",
          description: "I wrote three essays promoting ACBA’s programs and interviewed over twenty people in the process."
        }
      ]
    },
    {
      imgSrc: "./CSClubLogo.png",
      imgAlt: "GSMST CS Club Logo",
      eventName: "GSMST CS Club",
      eventLink: "https://gsmstcsclub.wixsite.com/gsmstcsc",
      roles: [
        {
          title: "Assistant Algorithmic Programming Head",
          time: "10th grade",
          description: "I curate weekly problem sets and deliver presentations that explore a variety of algorithmic programming topics, including dynamic programming, graph theory, and greedy algorithms. I spend around three hours each week creating the problem set and preparing the slides."
        },
        {
          title: "CyberPatriot Team Psi",
          time: "10th grade",
          description: "As a member of a six-person team, I participated in the state competition within the platinum division of the CyberPatriot competition. My specific role in the team was to solve networking portions of CyberPatriot challenges."
        }
      ]
    },
    {
      imgSrc: "./CyberStartAmericaLogo.png",
      imgAlt: "Cyber Start America Logo",
      eventName: "Cyber Start America",
      eventLink: "https://www.cyberstartamerica.org/",
      roles: [
        {
          title: "National Cyber Scholar",
          time: "10th grade",
          description: "I participated in the world renowned cybersecurity game CyberStart America and received over 60,000 points on the platform."
        }
      ]
    },
    {
      imgSrc: "./InspiritAI.png",
      imgAlt: "Inspirit AI Scholars Program Logo",
      eventName: "Inspirit AI Scholars Program",
      eventLink: "https://www.inspiritai.com/",
      roles: [
        {
          title: "Inspirit AI Scholar",
          time: "10th",
          description: "I immersed myself in an intensive two-week program that covered the fundamentals of machine learning and artificial intelligence. During this time, I created a project that aimed to identify the primary facial emotions and achieved an accuracy of 68.8%."
        }
      ]
    }
  ]
  
  return (
    <>
    <head>
      <title>Home</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" href="./favicon.ico"/>
    </head>
    <body>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 h-max">
        <Navbar/>
        <div className="p-20">
        {/* Short description */}
        <div className="flex flex-col justify-center items-center gap-x-4 text-slate-600 font-semibold text-center">
          <h1 className="text-3xl mt-10 text-slate-800">
            Hi! I am Brian Zhou
          </h1>
          <p className="text-lg mt-2">
            I am a sophmore at GSMST and I am extremely passionate about programming.
          </p>
        </div>
      </div>

      <div className="p-20 bg-slate-200">
        {/* Activities */}
        <div className="flex items-center">
          <div className="flex-1 border-t-2 border-slate-400"></div>
          <span className="px-3 text-slate-700 text-m">Activities</span>
          <div className="flex-1 border-t-2 border-slate-400"></div>
        </div>
        <div className="justify-center">
          <EventListing activities={activities}/>
        </div>

          {/* Awards */}
          {/*
  1st place at Lockheed Martin’s Code Quest -- 9
  Code Quest, an annual computer programming competition hosted by Lockheed Martin, stands as a prestigious platform for high school students. In the 2023 edition of Code Quest, my team represented GSMST at the Marietta location. We achieved an impressive score of 160 points, securing first place in the novice division and tying for third place overall.

  National Cyber Scholar -- 10
  The National Cyber Scholar scholarship, awarded by the National Cyber Scholarship Foundation, is bestowed upon the most accomplished CyberStart players. It encompasses a $3,000 allocation for training materials, and I am honored to have been a recipient of this scholarship.

  Fall Awards -- 10
  Recognition of academic excellence in the fall semester.

  Hack Gwinnett 2023: 2nd place -- 10
  Second palace in 28 projects for the project we developed during the hackathon.

  Hack Gwinnett 2022: 3rd place -- 9
  Third place in 45 teams for the project which we developed during the hackathon.

  3rd place in school fair -- 10
  Third in the material science category of GSMST’s research symposium. The research project was “Using Kudzu as a Substitute for Straw in the Production of Adobe.”

  Academic letter -- 10
  Academic letter recognizes academic excellence (NGA > 94).
          */}
          <div className="flex justify-center">
          </div>
        </div>

      </div>
    </body>
    </>
  );
}
