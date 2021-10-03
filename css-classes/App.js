import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
    return ( // at this point, I can apply rules to the div but not the components directly
        <div className="something"> 
            <Header />
            <MainContent />
            <Footer /> 
        </div> 
    )
};

export default App;