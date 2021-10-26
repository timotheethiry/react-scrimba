import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
    const jokesList = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    // it is clearer to write <Joke key={joke.id} data={joke} /> to pass the data in a single prop
    return (
        <div>
            {jokesList}
        </div>
    )
};

export default App;