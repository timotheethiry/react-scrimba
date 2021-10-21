import React from "react";

function Joke(props) {
    return (
        <div>
            <p className={!props.question ? "noQuestion" : "question"}> Question: {props.question}</p>
            <p className={!props.question ? "punchLine" : ""}>
                <div className={!props.question ? "noQuestion" : "question"}>Answer: </div>
                {props.punchLine}
            </p>
        </div>
    )
};

export default Joke;