import { Project, Activity } from "@/constants/Types";
import Image from "next/image";

export const ENG_navLinks = [
  { _id: 1, title: "About", href: "#about" },
  { _id: 2, title: "Projects", href: "#projects" },
  { _id: 3, title: "Activities", href: "#activities" },
  { _id: 4, title: "Awards", href: "#awards" },
  { _id: 5, title: "Contacts", href: "#contacts" },
];

export const ENG_activitiesList: Array<Activity> = [
  {
    imgSrc: "/images/ACBA.webp",
    imgAlt: "ACBA Logo",
    eventName: "Atlanta Contemporary Basketball Association",
    eventLink: "https://www.acba-us.com/about/",
    roles: [
      {
        title: "Coding II Tutor",
        time: "First semester of 10th grade",
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
        time: "Summer of 9th grade - End of first semester of 10th grade",
        description:
          "I pioneered a unique Chinese program at ACBA, centered around sparking student interest in Chinese through the recitation of renowned Chinese poetry and engaging tongue twisters.",
      },
      {
        title: "Math Tutor",
        time: "Second semester of 9th grade - First semester of 10th grade",
        description:
          "Since the beginning of my second semester in ninth grade, I have tutored mathematics to elementary and middle school students. The curriculum is partially based on the Singapore math text books, but I also adapt it to cater to the unique needs of each student.",
      },
      {
        title: "Writer",
        time: "Summer of 9th grade",
        description:
          "I wrote three reports promoting ACBA's programs and interviewed over twenty people to gather the information for the reports.",
      },
    ],
  },
  {
    imgSrc: "/images/CSClubLogo.png",
    imgAlt: "GSMST CS Club Logo",
    eventName: "GSMST CS Club",
    eventLink: "https://gsmstcsclub.wixsite.com/gsmstcsc",
    roles: [
      {
        title: "Assistant Algorithmic Programming Head",
        time: "10th grade",
        description:
          "I curate weekly problem sets and deliver presentations that explore a variety of algorithmic programming topics, including dynamic programming, graph theory, and greedy algorithms. In addition to traditional algorithms, the algorithmic programming curriculum also covers content from the American Computer Science League (ACSL).",
      },
      {
        title: "CyberPatriot Team Psi",
        time: "10th grade",
        description:
          "As a member of a six-person team, I participated in the state competition within the platinum division of the CyberPatriot competition. My role in the team was to solve Cisco networking portions of CyberPatriot challenges. This involved submitting a quiz cover networking components and finishing a Cisco Packet Tracer module according to the specifications.",
      },
    ],
  },
  {
    imgSrc: "/images/CyberStartAmericaLogo.png",
    imgAlt: "Cyber Start America Logo",
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
    imgSrc: "/images/InspiritAI.png",
    imgAlt: "Inspirit AI Scholars Program Logo",
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
    imgSrc: "/images/GFACTBadge.png",
    imgAlt: "GFACT Badge",
    eventName: "GFACT certification",
    eventLink:
      "https://www.credly.com/badges/8547bc28-07df-4e57-bd88-353bef6d4538/public_url",
    roles: [
      {
        title: "GFACT certification",
        time: "June 2024",
        description:
          "I got the GFACT certification after receiving a scholarship from the NCSF (National Cyber Scholarship Foundation) for the SANS Foundations course and an attempt at GIAC Foundational Cybersecurity Technologies (GFACT) exam. I am very grateful that NCSF awarded me this scholarship and it is a shame that Cyber Start America ended because I really enjoyed the challenging CTF style puzzles.",
      },
    ],
  },
  {
    imgSrc: "/images/CodeQuestLogo.jpg",
    imgAlt: "Code Quest Logo",
    eventName: "Code Quest",
    eventLink:
      "https://www.lockheedmartin.com/en-us/who-we-are/communities/codequest.html",
    roles: [
      {
        title: "4th place at 2023 Code Quest",
        time: "",
        description:
          "James, Minh, and I went to Code Quest, an computer programming competition hosted by Lockheed Martin, representing GSMST at Marietta and scored of 160 points, getting first place in the novice division and fourth place overall. It was very fun to apply the algorithms I learned about in competition and it felt extremely rewarding to be rewarded for my hard work.",
      },
      {
        title: "4th place at 2024 Code Quest",
        time: "",
        description:
          "In Code Quest 2024, we (James, Minh, and me) represented GSMST at Marietta. This time we scored 270 points, getting fourth place overall. We definitely improved significantly since the last competition, but South Forsyth dominated and a single person team nearly doubled our score. I hope we will do better next year.",
      },
    ],
  },
  {
    imgSrc: "/images/NCSScholar.png",
    imgAlt: "National Cyber Scholar Badge",
    eventName: "National Cyber Scholar",
    eventLink:
      "https://www.nationalcyberscholarship.org/scholarships-and-awards/awards-2024",
    roles: [
      {
        title: "",
        time: "2024",
        description:
          "The National Cyber Scholar scholarship, awarded by the National Cyber Scholarship Foundation, is given to the best scoring CyberStart players. It pays $3,000 for training materials, and I am exited to be one of the 2000 or so students to get it this year.",
      },
    ],
  },
  {
    imgSrc: "/images/GSMSTSeal.png",
    imgAlt: "GSMST Seal",
    eventName: "School Awards",
    eventLink: "",
    roles: [
      {
        title: "Fall Awards",
        time: "2023",
        description:
          "The fall awards are given to one to two students per class. I received the award for AP World History.",
      },
      {
        title: "Academic Letter",
        time: "2023, 2024",
        description:
          "The academic letter is given to students with a weighted NGA greater than 94 to recognize academic excellence.",
      },
    ],
  },
  {
    imgSrc: "/images/HackGwinnettLogo.png",
    imgAlt: "Hack Gwinnett Logo",
    eventName: "Hack Gwinnett",
    eventLink: "https://hackgwinnett.github.io/",
    roles: [
      {
        title: "2nd place at 2023 Hack Gwinnett",
        time: "",
        description:
          "I worked with Minh to create the game called Net Zero Hero under the theme of environment in Hack Gwinnett 2023, securing second place out of the 28 projects developed during the hackathon.",
      },
      {
        title: "3rd place at 2022 Hack Gwinnett",
        time: "",
        description:
          "I worked with Minh to create the for the maze game. This was the first time Minh and I competed in a hackathon and we were very happy that we podiumed.",
      },
    ],
  },
  {
    imgSrc: "/images/USACOLogo.png",
    imgAlt: "USACO Logo",
    eventName: "USACO",
    eventLink: "https://usaco.org/",
    roles: [
      {
        title: "USACO Silver Medalist",
        time: "2024",
        description:
          "I scored a perfect score in the bronze division of USACO in January!",
      },
    ],
  },
  {
    imgSrc: "/images/CyberQuestLogo.png",
    imgAlt: "Cyber Quest Logo",
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
    repo: "",
    videoSrc: "",
    description: () => {
      return (
        <p>
          This was my first ever programming project and I created it during the
          seventh grade summer when I was in a five-day programming boot camp. I
          learned about Python&apos;s syntax and some foundational knowledge
          then went on to create a number guessing game with various modes. The
          different modes were different functions that were only called to give
          a hint to the player based on their guess. The main loop of validating
          player input and checking that input against the target number was not
          rewritten in the various functions but was part of the main function
          and used a tag to know which function should be called.
        </p>
      );
    },
  },
  {
    name: "Minesweeper",
    repo: "https://github.com/Brian21347/Minesweeper-Clone",
    videoSrc: "/videos/Minesweeper.mp4",
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
    repo: "https://github.com/Brian21347/Tetris-Clone",
    videoSrc: "/videos/Tetris.mp4",
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
    name: "Choose Your own Adventure Game",
    repo: "https://github.com/Brian21347/Choose-Your-Own-Adventure",
    videoSrc: "/videos/CYOA.mp4",
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
          covered in CSA, such as Enumerators and file input/output. I made a
          similar version of this project for my coding II students and hope
          they will find it interesting too.
        </p>
      );
    },
  },
  {
    name: "Conway's Game of Life",
    repo: "https://github.com/Brian21347/Game-of-Life",
    videoSrc: "/videos/GameOfLife.mp4",
    description: () => {
      return (
        <p>
          While in middle school, I was inspired to create a Conway&apos;s game
          of life simulator after reading about it from a AoPS book. Through
          this project, I was introduced to Pygame, algorithm efficiency, and
          foundational game development concepts (such as the game loop, frames,
          and keyboard input).
        </p>
      );
    },
  },
  {
    name: "Typing Piano",
    repo: "https://github.com/legitminh/typingPiano",
    videoSrc: "/videos/TypingPiano.mp4",
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
    name: "24 Game Calculator",
    repo: "https://github.com/Brian21347/24-Game-Calculator/",
    videoSrc: "/videos/24GameCalc.mp4",
    description: () => {
      return (
        <p>
          Over the summer of ninth grade, I created an application to calculate
          all ways of reaching a certain score (traditionally 24) with a
          constant number of operators and operands after playing a similar
          calculation game with my cousins. During this time, I started diving
          into competitive programming, so I tried making the most efficient
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
    repo: "https://github.com/Brian21347/X-in-a-Row",
    videoSrc: "/videos/XInARow.mp4",
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
    repo: "https://github.com/Brian21347/Wordle-Clone",
    videoSrc: "/videos/Wordle.mp4",
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
    name: "Emotion Detector",
    repo: "",
    videoSrc: "/videos/CNNModel.mp4",
    description: () => {
      return (
        <>
          <p>
            Part of Inspirit AI&apos;s AI scholars program, I collaborated with
            four other people during winter break to create an emotion detector
            AI model. The AI model had an accuracy of around 50% when detecting
            between five emotions. Though this model is not very accurate, I got
            to establish a strong foundation in machine learning and gain some
            experience creating models.
          </p>
          <Image
            src="/images/ConfusionMatrix.png"
            alt="Confusion Matrix for the MLP model"
            width="360"
            height="360"
          />
        </>
      );
    },
  },
  //   {
  //     name: "Net Zero Hero",
  //     repo: "https://github.com/legitminh/Net-Zero-Hero",
  //     videoSrc: "",
  //     description: () => {
  //         return (
  //             <>
  //             <p>
  //                 I worked with Minh to create a game focused on environmental conservation efforts as part of
  //                 HackGwinnett v3, held in 2023.
  //             </p>
  //             </>
  //         );
  //     }
  //   },
  //   {
  //     name: "Maze Game",
  //     repo: "https://github.com/Brian21347/MazeGame",
  //     videoSrc: "",
  //     description: () => {
  //         return (
  //             <>
  //             <p>
  //                 I worked
  //             </p>
  //             </>
  //         );
  //     }
  //   },
  // Non trivial finalist
  // ACSL bronze
  // Update tetris
];
