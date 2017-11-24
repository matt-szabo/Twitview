import React from 'react';
import MyTweet from './MyTweet';
import Toggle from './Toggle';
import './Twitter.css';
var Infinite = require('react-infinite');






class Twitter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            page: 1,
            loading: false,
            spinner:100,
            stop: false,
            repo: [],
            id: 'realDonaldTrump'
        }

        this.fetchData = this.fetchData.bind(this);
        this.onClick = this.onClick.bind(this);

    }

    onClick = (name) => {
      let tweetName = '';
      (name === 'realDonaldTrump') ? tweetName = 'HillaryClinton' : tweetName ='realDonaldTrump';
      this.setState({id: tweetName});
      this.fetchData(tweetName);

    };


    fetchData(tweetName) {


        if (!this.state.stop) {
            this.setState({loading: true});


          let query = tweetName || this.state.id;
          let url = `http://localhost:4000/?id=${query}`;


          fetch(url)
            .then(response => response.json())
            .then(data => {


              if (data.length === 0) {
                this.setState({loading: false, stop: true, spinner:undefined})

              }



              if (data.length > 0) {


                this.setState({
                  repo: data,
                  loading: false,
                  page: this.state.page + 1
                });
              }



            }, function(err, response) {
              console.log(err);
            })




        }


    }




    render() {

        return (
          <div>
            <header className="main-header">
              {
                <div>
                <h1>{this.state.id}</h1>

                  <span> <h5>vs</h5> <h5>{(this.state.id === 'realDonaldTrump') ? 'HillaryClinton': 'realDonaldTrump'}</h5></span>
                </div>

              }

            </header>
            <div className="repo-page">
              <Toggle name={this.state.id}  click={this.onClick}></Toggle>
                <Infinite
                    isInfiniteLoading={this.state.loading} onInfiniteLoad={this.fetchData} useWindowAsScrollContainer
                    elementHeight={200} infiniteLoadBeginEdgeOffset={this.state.spinner}
                    loadingSpinnerDelegate={<div>LOADING TWEETS</div>} className="infinit">
                  {this.state.repo.map((item) => {
                    return <MyTweet key={item.id} data={item}/>})}
                </Infinite>
            </div>
          </div>
        );


    }
};

export default Twitter;

