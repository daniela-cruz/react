import React from 'react';

//Random text colors:
import Rainbow from "../hoc/Rainbow";

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p className="content">
                Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.
            </p>
        </div>
    )
}

export default Rainbow(About)