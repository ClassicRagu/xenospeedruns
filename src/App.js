import React from 'react';
import logo from './logo.svg';
import './App.css';
import firestore from './firebase';

const db = firestore.firestore()
db.collection("Users")
.get()
.then(querySnapshot => {
  const data = querySnapshot.docs.map(doc => doc.data());
  console.log(data); // array of cities objects
});
//db.collection("Users").add({Username:"Test", Twitch:"Test"})


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
