var HappyThought = React.createClass({
  render: function(){
    return (
      <li>
        <div>
        This is a happy list with only one component.
        </div>
      </li>
      );
  }
});

ReactDOM.render(
  <HappyThought />,
  document.getElementById('happy')
  );