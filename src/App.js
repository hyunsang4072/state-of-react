import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
      <Counter />
    </div>
  );
}


function Counter() {
  const [steps, setSteps] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function minusStep() {
    setSteps((curr) => curr - 1);
  }

  function plusStep() {
    setSteps((curr) => curr + 1);
  }

  function stepCountInc() {
    setCount((count) => count + steps);
  }

  function stepCountDec() {
    setCount((count) => count - steps);
  }

  return (
    <div>
      <button
        style={{ backgroundColor: '#7950f2', color: '#fff' }}
        onClick={minusStep}>
        -
      </button>
      Step: {steps}
      <button
        style={{ backgroundColor: '#7950f2', color: '#fff' }}
        onClick={plusStep}>
        +
      </button>

      <button
        style={{ backgroundColor: '#7950f2', color: '#fff' }}
        onClick={stepCountDec}>
        -
      </button>
      Count: {count}
      <button
        style={{ backgroundColor: '#7950f2', color: '#fff' }}
        onClick={stepCountInc}>
        +
      </button>
      <p>
        `{count} days from today is {date.toDateString()}.`
      </p>
    </div>
  );
}


function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // eventHandler
  function handlePrevious() {
    if (step > 1) {
      setStep((curr) => curr - 1);
    };
  }

  // eventHandler
  function handleNext() {
    if (step < 3) {
      setStep((curr) => curr + 1);
      // setStep((curr) => curr + 1);
    };
  }


  return (
    <div>
      <button className='close' onClick={() => setIsOpen((is) => !is)}>&times;</button>

      {isOpen && (<div className='steps'>
        <div className='numbers'>
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className='message'>
          Step {step}: {messages[step - 1]}
        </p>

        <div className='buttons'>
          <button
            style={{ backgroundColor: '#7950f2', color: '#fff' }}
            onClick={handlePrevious}>
            Previous
          </button>
          <button
            style={{ backgroundColor: '#7950f2', color: '#fff' }}
            onClick={handleNext}>
            Next
          </button>
        </div>
      </div>)}
    </div>
  );
}

