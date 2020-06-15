import React from 'react';
import ReactDOM from 'react-dom';

function Hi(props) {
  return <div>Hello {props.name}!</div>;
}

ReactDOM.render(<Hi name="Arsi" />, document.querySelector('#root'));

const MediaCard = function({ title, body, imageUrl }) {
  return <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <img src={imageUrl} alt = "A pic"/>
  </div>
}

ReactDOM.render(<MediaCard title= "Cat" body={<strong>Catss are awesome!</strong>}  imageUrl="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg" />, document.querySelector('#root'));

const Gate = function({ isOpen }) {
  return <div>
    {isOpen === true ? "open" : "closed"};
  </div>
}

ReactDOM.render(<Gate isOpen= {true} />, document.querySelector('#root'));