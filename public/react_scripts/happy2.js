var happyWords = [
{
  "name": "Life",
  "phrase": "The sunshine always comes.",
  "img": "http://cdn.playbuzz.com/cdn/822c79c7-e2ad-4735-86e7-e67e896bef85/329acad3-d75a-4246-a009-4854944eb808.jpg",
},
  {
  "name": "Your Family",
  "phrase": "You are worth it.",
  "img": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSZ-6DOpquDxvTbc7fvIdB9yhjgYS_jeAPEPzs3bc2jcmjU0sgZg",
},
  {"name": "Every Person You meet",
  "phrase": "You are beautiful.",
  "img": "https://d186wpps44egzl.cloudfront.net/2015/12/Interesting---Beautiful-Laguna-de-Los-Tres-in-Patagonia--Argentina-__1449463744_208-58-216-253.jpg",
}]

var Card = React.createClass({
  getInitialState: function(){
    return happyWords[2]
  },

  render: function(){
    return (
      <li>
        <div>
          <h2>{this.state.phrase}</h2>
          <h3>- {this.state.name}</h3>
          <img src={this.state.img} />
          Magic stores still exist.
        </div>
      </li>
      )
  }
})

var HappyThoughtList = React.createClass({
  render: function (){
    return(
      <div>
        <Card name={"Your Family"}></Card>
      </div>
      )
  }

})

ReactDOM.render(<HappyThoughtList/>, document.getElementById('happy'))

