import React from "react";
import ContactCard from "./ContactCard";

function App() {
    return (
        <div>
            <ContactCard name="joey" phone="+33 1 23 45 67 89" email="joey.tribbiany@gmail.com" imgUrl=""/>
            <ContactCard name="chandler" phone="+33 4 53 65 18 22" email="chandler.bing@gmail.com" imgUrl=""/>
            <ContactCard name="Ross" phone="+33 blabla" email="ross.geller@gmail.com" imgUrl=""/>
            <ContactCard name="Monica" phone="+33 bliblu" email="monica.bing@gmail.com" imgUrl=""/>
        </div>
    )
};

export default App;