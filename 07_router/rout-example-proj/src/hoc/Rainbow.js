import React from 'react';

const Rainbow = (WarapperdComponent) => {
    const colors = ['red', 'pink', 'orange', 'green', 'blue', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WarapperdComponent {...props} />
            </div>
        )
    }
}

export default Rainbow