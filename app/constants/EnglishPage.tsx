import { Project, Activity } from "@/constants/Types";
import Image from "next/image";
import ACBA from "../../public/images/ACBA.webp";
import CodeQuest from "../../public/images/CodeQuestLogo.jpg";
import CSClub from "../../public/images/CSClubLogo.png";
import CyberQuest from "../../public/images/CyberQuestLogo.png";
import CyberStart from "../../public/images/CyberStartAmericaLogo.png";
import GSMST from "../../public/images/GSMSTSeal.png";
import HackGwinnett from "../../public/images/HackGwinnettLogo.png";
import Inspirit from "../../public/images/InspiritAI.png";
import NCSScholar from "../../public/images/NCSScholar.png";
import USACO from "../../public/images/USACOLogo.png";

export const ENG_navLinks = [
  { _id: 1, title: "About", href: "#about" },
  { _id: 2, title: "Projects", href: "#projects" },
  { _id: 3, title: "Activities", href: "#activities" },
  { _id: 4, title: "Awards", href: "#awards" },
];

export const ENG_activitiesList: Array<Activity> = [
  {
    image: () => {
      return <Image src={ACBA} alt="ACBA Logo" />;
    },
    eventName: "Atlanta Contemporary Basketball Association",
    eventLink: "https://www.acba-us.com/about/",
    roles: [
      {
        title: "Coding II Tutor",
        time: "10th grade",
        description:
          "I created a projected-based computer science course that is based on, and extends, the CSA curriculum. In our weekly sessions, students delve into topics ranging from data types to inheritance and polymorphism.",
      },
      {
        title: "Coordinator",
        time: "Summer of 9th grade",
        description:
          "I coordinated ACBA's 2023 summer program, oversaw the classes, and mediated disagreements that arose during the program.",
      },
      {
        title: "Chinese Tutor",
        time: "Summer of 9th grade - 10th grade",
        description:
          "I pioneered a unique Chinese program at ACBA, centered around sparking student interest in Chinese through the recitation of renowned Chinese poetry and engaging tongue twisters.",
      },
      {
        title: "Math Tutor",
        time: "9th grade - 10th grade",
        description:
          "Since the beginning of my second semester in ninth grade, I have been actively tutoring mathematics to elementary and middle school students. The curriculum I employ is partially rooted in Singapore math principles, but I also adapt it to cater to the unique needs of each student.",
      },
      {
        title: "Writer",
        time: "Summer of 9th grade",
        description:
          "I wrote three essays promoting ACBA's programs and interviewed over twenty people in the process.",
      },
    ],
  },
  {
    image: () => {
      return <Image src={CSClub} alt="GSMST CS Club Logo" />;
    },
    eventName: "GSMST CS Club",
    eventLink: "https://gsmstcsclub.wixsite.com/gsmstcsc",
    roles: [
      {
        title: "Assistant Algorithmic Programming Head",
        time: "10th grade",
        description:
          "I curate weekly problem sets and deliver presentations that explore a variety of algorithmic programming topics, including dynamic programming, graph theory, and greedy algorithms. I spend around three hours each week creating the problem set and preparing the slides.",
      },
      {
        title: "CyberPatriot Team Psi",
        time: "10th grade",
        description:
          "As a member of a six-person team, I participated in the state competition within the platinum division of the CyberPatriot competition. My specific role in the team was to solve networking portions of CyberPatriot challenges.",
      },
    ],
  },
  {
    image: () => {
      return <Image src={CyberStart} alt="Cyber Start America Logo" />;
    },
    eventName: "Cyber Start America",
    eventLink: "https://www.cyberstartamerica.org/",
    roles: [
      {
        title: "National Cyber Scholar",
        time: "10th grade",
        description:
          "I participated in the world renowned cybersecurity game CyberStart America and received over 60,000 points on the platform. I am one of the 2000 or so students receiving the award in 2024.",
      },
    ],
  },
  {
    image: () => {
      return <Image src={Inspirit} alt="Inspirit AI Scholars Program Logo" />;
    },
    eventName: "Inspirit AI Scholars Program",
    eventLink: "https://www.inspiritai.com/",
    roles: [
      {
        title: "Inspirit AI Scholar",
        time: "10th",
        description:
          "I immersed myself in an intensive two-week program that covered the fundamentals of machine learning and artificial intelligence. During this time, I created a project that aimed to identify the primary facial emotions and achieved an accuracy of 68.8%.",
      },
    ],
  },
];

export const ENG_awardsList: Array<Activity> = [
  {
    image: () => {
      return <Image src={CodeQuest} alt="Code Quest Logo" />;
    },
    eventName: "Code Quest",
    eventLink:
      "https://www.lockheedmartin.com/en-us/who-we-are/communities/codequest.html",
    roles: [
      {
        title: "4th place at 2023 Code Quest",
        time: "",
        description:
          "Code Quest, an annual computer programming competition hosted by Lockheed Martin, stands as a prestigious platform for high school students. In the 2023 edition of Code Quest, my team represented GSMST at the Marietta location. We achieved an impressive score of 160 points, securing first place in the novice division and tying for fourth place overall.",
      },
      {
        title: "4th place at 2024 Code Quest",
        time: "",
        description:
          "In the 2023 edition of Code Quest, my team represented GSMST at the Marietta location. We achieved a score of 270 points, securing fourth place overall.",
      },
    ],
  },
  {
    image: () => {
      return <Image src={NCSScholar} alt="National Cyber Scholar Badge" />;
    },
    eventName: "National Cyber Scholar",
    eventLink:
      "https://www.nationalcyberscholarship.org/scholarships-and-awards/awards-2024",
    roles: [
      {
        title: "",
        time: "2024",
        description:
          "The National Cyber Scholar scholarship, awarded by the National Cyber Scholarship Foundation, is bestowed upon the most accomplished CyberStart players. It encompasses a $3,000 allocation for training materials, and I am honored to have been a recipient of this scholarship.",
      },
    ],
  },
  {
    image: () => {
      return <Image src={GSMST} alt="GSMST Seal" />;
    },
    eventName: "School Awards",
    eventLink: "",
    roles: [
      {
        title: "Fall Awards",
        time: "2023",
        description: "Recognition of academic excellence in the fall semester.",
      },
      {
        title: "Academic Leter",
        time: "2023",
        description:
          "Academic letter recognizes academic excellence (NGA > 94).",
      },
    ],
  },
  {
    image: () => {
      return <Image src={HackGwinnett} alt="Hack Gwinnett Logo" />;
    },
    eventName: "Hack Gwinnet",
    eventLink: "https://hackgwinnett.github.io/",
    roles: [
      {
        title: "2nd place at 2023 Hack Gwinnet",
        time: "",
        description:
          "Second palace in 28 projects for the project we developed during the hackathon.",
      },
      {
        title: "3rd place at 2022 Hack Gwinnet",
        time: "",
        description:
          "Third place in 45 teams for the project which we developed during the hackathon.",
      },
    ],
  },
  {
    image: () => {
      return <Image src={USACO} alt="USACO Logo" />;
    },
    eventName: "USACO",
    eventLink: "https://usaco.org/",
    roles: [
      {
        title: "USACO Silver Medalist",
        time: "2024",
        description: "I am a USACO silver medalist.",
      },
    ],
  },
  {
    image: () => {
      return <Image src={CyberQuest} alt="Cyber Quest Logo" />;
    },
    eventName: "Cyber Quest",
    eventLink:
      "https://www.lockheedmartin.com/en-us/who-we-are/communities/cyber-quest.html",
    roles: [
      {
        title: "1st place at Cyber Quest",
        time: "2024",
        description:
          "In a team with four other people, I primarily focused on solving the web exploitation, simple problems, and some multi-step problems.",
      },
    ],
  },
];

export const ENG_projects: Array<Project> = [
  {
    name: "Number Guessing Game",
    videoSrc: "../../public/videos/GameOfLife.mp4",
    description: () => {
      return (
        <p>
          This was my first ever programming project and I created it during
          seventh grade summer when I in a five day programming boot camp. I
          learned about Python&apos;s syntax and some foundational knowledge then
          went on to create a number guessing game with various modes. The
          different modes were different functions which were only called to
          give a hint to the player based on their guess. The main loop of
          validating player input and checking that input against the target
          number was not rewritten in the various functions, but was part of the
          main function and used a tag to know which function should be called.
        </p>
      );
    },
  },
  {
    name: "Minesweeper",
    videoSrc: "",
    description: () => {
      return (
        <p>
          I created a minesweeper clone which has helpful methods to make
          clearing the minefield less of a hassle. For example, middle clicking
          on an exposed cell will plant flags on or uncover surrounding tiles so
          long as all uncovered neighbors of the exposed cell are all guaranteed
          to be mines or safe to be revealed. There are two versions of the
          game, one is classic minesweeper and the other is a variant called
          knightsweeper which uses the moveset of a chess knight to determine
          which cells are neighbors. I made this project because I could focus
          on developing my skills in Python and designing a game instead of
          being bogged down in the aesthetic or game idea.
        </p>
      );
    },
  },
  {
    name: "Tetris",
    videoSrc: "",
    description: () => {
      return (
        <p>
          I created a Tetris clone as my first foray into Python classes and
          sprites in Pygame. I learned a lot from this project, most notably the
          purpose of using OOP to make the code easier to understand and
          components should be separated so they can be reused. I learned this
          when creating a method to split one Tetris piece sprite into sprites
          of the individual blocks so that they could be removed individually
          when a line was cleared. If I made a Tetris piece a class with each
          containing many smaller blocks, the code would have been less
          confusing and the many problems I ran up against when attempting to
          create hard drops and piece placement preview could have been
          resolved.
        </p>
      );
    },
  },
  {
    name: "Choose Your own Adventure Game***",
    videoSrc: "",
    description: () => {
      return (
        <p>
          As the first project in CSA, I created a choose your own adventure
          story game with a custom parser to extract scenes of a story which
          were written in a txt file. Although using a json or xml file would
          have been more conventional and faster since there already are parsers
          for them, I choose to create a custom one to gain a foundational
          understanding of parsing and challenge myself to create an effective
          system to represent information. While creating the choose your own
          adventure story, I learned far more of Java than was and would be
          covered in CSA, such as Enumerators, file input/output, and ...
        </p>
      );
    },
  },
  {
    name: "Conway's Game of Life",
    videoSrc: "",
    description: () => {
      return (
        <p>
          While in middle school, I was inspired to create a Conway&apos;s game of
          life simulator after reading about it from a AoPS book. Through this
          project, I was introduced to Pygame, algorithm efficiency, and
          foundational game development concepts (such as the game loop, frames,
          and keyboard input).
        </p>
      );
    },
  },
  {
    name: "Typing Piano",
    videoSrc: "",
    description: () => {
      return (
        <p>
          I worked with Minh in the summer of eighth grade to start making this
          game. In the first iteration of the game, I designed the system we
          would use to change between screens and the UI elements in our
          application. Minh created a parser to transform the notes we wrote
          down by hand into a system that was more easily understood by our
          program. We returned to this project during winter break and started
          using git, github, and learning about conventional commits. First we
          focused on overhauling the previous app design by separating the
          screens into different classes and a system to inject dependencies
          into the screens whenever needed. After this, we transitioned from
          using the previous system of writing each note to be played in the
          game by hand, we processed the midi files of the songs that were part
          of our game to game notes and stored them in a csv. I noticed that the
          game was starting to run slowly on the school laptops and started
          making adjustments to optimize the memory and CPU use of our game. I
          noticed most of the elements on each screen were static across many
          frames, so I separated rendering from drawing to screen so that I
          could draw them without rendering them multiple times. This increase
          the games performance a lot, playing the Rush E level on the school
          computer still causes lag.
        </p>
      );
    },
  },
  {
    name: "Number Cruncher",
    videoSrc: "",
    description: () => {
      return (
        <p>
          Over the summer of ninth grade, I created an application to calculate
          all ways of reaching a certain score (such as 24) with a constant
          number of operators and operands after playing a similar calculation
          game with my cousins. During this time, I started diving into
          competitive programming, so I tried making the most efficient
          algorithm for this problem. After learning about it while preparing
          for the ACSL competition, I used prefix notation to create all
          possible combinations of equations. I then used Sympy to cut down on
          repeated equations, creating templates for each of the unique
          equations. Lastly I plugged the numbers into the templates and checked
          it to see if it reached the target number. One of the problems I ran
          into was repeated division by zero and overflow errors. I eventually
          minimized this problem by extracting the operation performed by the
          operators into different functions which would check if for overflow
          and division by zero errors.
        </p>
      );
    },
  },
  {
    name: "X in a Row",
    videoSrc: "",
    description: () => {
      return (
        <p>
          For my CSP create PT task, I created a game based off of{" "}
          <a
            href="https://en.wikipedia.org/wiki/Gomoku"
            className="text-sky-400 hover:text-sky-500"
          >
            Gomoku, or five in a row
          </a>
          . I created a system where the player could choose whatever board size
          they wanted and the number of pieces in a row needed for victory. For
          example, someone could choose a board size of 3x3 and a win condition
          of three in a row to mimic tic tac toe, or they could choose a 15x15
          board with a win condition of five in a row to play Gomoku. The
          program only checks the last placed piece for five in a row, ensuring
          the application would not lag if the players choose a large board
          size.
        </p>
      );
    },
  },
  {
    name: "Wordle",
    videoSrc: "",
    description: () => {
      return (
        <p>
          I created this project in CSA when learning about 2D arrays and I
          learned about coloring text in the terminal and applied the quick sort
          and binary search algorithms to quickly check if a inputted word was
          part of the world list.
        </p>
      );
    },
  },
  {
    name: "Emotion Detector*****",
    videoSrc: "",
    description: () => {
      return (
        <p>
          Part of Inspirit AI&apos;s AI scholars program, I collaborated with four
          other people during winter break to create an emotion detector AI
          model. The AI model had an accuracy of around 65% when detecting
          between five emotions and had a precision of ... and recall of ... .
          Though this model is not very accurate, I got to establish a strong
          foundation in machine learning and gain some experience creating
          models.
        </p>
      );
    },
  },
  // project_snake: "",
  // project_botsAndTiles: "",
];
