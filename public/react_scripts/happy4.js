var happy = [
{
  "key": 1,
  "name": "Life",
  "phrase": "The sunshine always comes.",
  "img": "http://cdn.playbuzz.com/cdn/822c79c7-e2ad-4735-86e7-e67e896bef85/329acad3-d75a-4246-a009-4854944eb808.jpg",
},
  {
  "key": 2,
  "name": "Your Family",
  "phrase": "You are worth it.",
  "img": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSZ-6DOpquDxvTbc7fvIdB9yhjgYS_jeAPEPzs3bc2jcmjU0sgZg",
},
  {
  "key": 3,
  "name": "Every Person You meet",
  "phrase": "You are beautiful.",
  "img": "https://d186wpps44egzl.cloudfront.net/2015/12/Interesting---Beautiful-Laguna-de-Los-Tres-in-Patagonia--Argentina-__1449463744_208-58-216-253.jpg",
}]

var Card = React.createClass({

  render: function(){
    return (
        <div>
          <h2>{this.props.phrase}</h2>
          <h3>-From  {this.props.name}</h3>
          <img src={this.props.img} alt="Pic based on text"/><br />
          <button onClick={this.props.onClick}>Yes, it is all true, no need to tell me this again.</button>
        </div>
      )
  }
})


var App = React.createClass({

  deleteHappy: function (happy) {
    this.state.happy.splice(this.state.happy.indexOf(happy), 1);
    this.setState({happy: this.state.happy});
  },

  getInitialState: function() {
    return {
      // happy: this.props.happy.splice(0)
      happy: happy
    }
  },
  render: function (){
    var that = this;
    return(
      <div>
        {this.state.happy.map(function (happy){
          return (
            <Card onClick={that.deleteHappy.bind(null, happy)} name={happy.name} phrase={happy.phrase} img={happy.img} key={happy.key}></Card>
            )
        })}
      </div>
    )
  }
})

ReactDOM.render(<App></App>, document.getElementById('happy'))

