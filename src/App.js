import React from 'react';


class App extends React.Component {


    render() {
        return (
            <div className="main-app">
                <main className="main-content">
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default App;
