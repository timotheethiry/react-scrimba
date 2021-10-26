import React from "react";
import ContactCard from "./ContactCard";

function App() {
    let user4 = {name:"Monica", phone:"951", email:"monica.bing", imgUrl:""};

    return (
        // it is clearer to pass all data in a single prop
        // eventually, real data is not hard written in the prop but imported in an object such as user4
        <div>
            <ContactCard contact={{name:"Joey", phone:"123", email:"joey.tribbiani", imgUrl:""}} />
            <ContactCard contact={{name:"Chandler", phone:"456", email:"chandler.bing", imgUrl:""}} />
            <ContactCard contact={{name:"Ross", phone:"789", email:"ross.geller", imgUrl:""}} />
            <ContactCard contact={user4} />
        </div>
    )
};

export default App;