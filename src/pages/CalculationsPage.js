import React from 'react'

function CalculationsPage(props) {
    return (
        <div className='calc'>
            <h1>small</h1>
            <button onClick={ () => props.changeWord("joey")}
            >
                Click to Change
            </button>
        </div>
    );
}

export default CalculationsPage;

/*

// ABOUT BUTTON FROM EARLIER
import React, {useState} from 'react'
import CalculationsPage from './CalculationsPage'

function About() {
  const[word, setWord] = useState("About")

  return (
    <div className='parent'>
      <h1>{word}</h1>
      <CalculationsPage changeWord={word => setWord(word)}/>
    </div>
  );
}


export default About;
    // Core Unlocks
    MindUnlock: {
        essence: "20",
        cubes: "0"
    },

    BodyUnlock: {
        essence: "150",
        cubes: "250"
    },

    SoulUnlock: {
        essence: "225",
        cubes: "250"
    },

    // SI Levelup info
    // SI0 is technically just mindunlock, maybe si0 == mindunlock
    SI0: {
        description:"1234",
        essence: "0"
    },

    SI1: {
        description:"1234",
        essence: "40"
    },

    SI2: {
        description:"1234",
        essence: "60"
    },

    SI3: {
        description:"1234",
        essence: "80"
    },

    SI4: {
        description:"1234",
        essence: "0"
    },

    SI5: {
        description:"1234",
        essence: "0"
    },

    // SI5 --> Body core unlocked before SI6
    SI6: {
        description:"1234",
        essence: "0",
        cubes: "250"
    },

    SI6: {
        description:"1234",
        essence: "0",
        cubes: "250"
    },

    SI7: {
        description:"1234",
        essence: "0",
        cubes: "250"
    },

    SI8: {
        description:"1234",
        essence: "0",
        cubes: "250"
    },

    SI9: {
        description:"1234",
        essence: "0",
        cubes: "250"
    },

    SI10: {
        description:"1234",
        essence: "0",
        cubes: "250"
    },

    // SI10 --> Soul core unlocked before SI11
    SI11: {
        description:"1234",
        essence: "0",
        cubes: "250"
    },

    SI12: {
        description:"1234",
        essence: "0",
        cubes: "250"
    },

    SI13: {
        description:"1234",
        essence: "0",
        cubes: "250"
    },

    SI14: {
        description:"1234",
        essence: "0",
        cubes: "250"
    },

    SI15: {
        description:"1234",
        essence: "2470",
        cubes: "250"
    }
    */
