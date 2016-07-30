var React = require('react');
var ReactDOM = require('react-dom');

var Card = function() {
	var cardTitle= "Something To Do";
	var cardDescription= "Something to do";
	return (
		<li className="card">
			<h4 className="title">{cardTitle}</h4>
		</li>
	);
};

// statefull
var List = React.createClass({
	render: function() {
		var newCard;
		var cards = [];
		for ( var i=0; i<5; i++) {
			cards.push(<Card key={i} /> );
		}
		return (
			<ul className="list-to">
				<h2>To Do</h2>
				{cards}
			</ul>
		);
	}
});

var Board = React.createClass({
	render: function() {
		var listTo = [];
		for ( var i= 0; i<1; i++) {
			listTo.push(<List key={i} />)
		}
		var listDoing = [];
		for ( var i= 0; i<=0; i++) {
			listDoing.push(<List key={i} />)
		}
		var listDone = [];
		for ( var i= 0; i<=0; i++) {
			listDone.push(<List key={i} />)
		}

		return(
			<div className= "board">
				<div className="col-md-4">
					{listTo}
				</div>
				<div className="col-md-4">
					{listDoing}
				</div>
				<div className="col-md-4">
					{listDone}
				</div>
			</div>
		);
	}
});


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board/>, document.getElementById('board'));
});