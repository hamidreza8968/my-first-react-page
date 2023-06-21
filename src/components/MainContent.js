import React from "react";

const MainContent = function () {
    // const styles = {
    //     fontSize : "48px",
    // };
    const date = new Date;
    const hours = date.getHours();
    const classColor = hours < 12 ? "red" : "blue";
    return (
        <main>
            {classColor}
        </main>
    )
};

export default MainContent;