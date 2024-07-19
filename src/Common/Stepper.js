import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent 
        item={content.at(activeTab)} 
        key={content.at(activeTab).summary} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(likes + 1);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button>Undo</button>
        <button>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}



//Component is a function that returns a piece of UI
























































































// import { useState } from "react";
// import Counter from "./Counter";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   return (
//     <div>
//       <Steps />
//       <StepMessage step={2}>
//         <p>Pass in content</p>
//         <p>✌️</p>
//       </StepMessage>
//       <StepMessage>
//         <p>Read children prop</p>
//         <p>😎</p>
//       </StepMessage>
//       {/* <Steps /> */}


//     </div>
//   );
// }

// function Steps() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   // const [test, setTest] = useState({ name: "Jonas" });

//   function handlePrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }

//   function handleNext() {
//     if (step < 3) {
//       setStep((s) => s + 1);
//       // setStep((s) => s + 1);
//     }

//     // BAD PRACTICE
//     // test.name = "Fred";
//     // setTest({ name: "Fred" });
//   }

//   return (
//     <div>
//       <Counter />
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         &times;
//       </button>

//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <StepMessage step={step}>
//             {messages[step - 1]}
//             <div className="buttons">
//               <Button
//                 bgColor="#e7e7e7"
//                 textColor="#333"
//                 onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
//               >
//                 Learn how
//               </Button>

//               <Button textColor="#fff" bgColor="#13044e">
//                   Click me now!
//               </Button>
//             </div>
//           </StepMessage>

//           <div className="buttons">
//             <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
//             <span>👈</span> Previous
//             </Button>

//             <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
//               Next <span>👉</span>
//               <span>🤓</span>
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function StepMessage({ step, children }) {
//   return (
//     <div className="message">
//       <h3>Step {step}</h3>
//       {children}
//     </div>
//   );
// }

// function Button({ textColor, bgColor, onClick, children }) {
//   return (
//     <button
//       style={{ backgroundColor: bgColor, color: textColor }}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }










