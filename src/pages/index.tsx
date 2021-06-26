import React from 'react';
import firestore from '../firebase';

const db = firestore.firestore()
db.collection("Users")
    .get()
    .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data); // array of cities objects
    });
//db.collection("Users").add({Username:"Test", Twitch:"Test"})

function HomePage() {
    return (
        <div>Welcome to Next.js!</div>
    )
}

export default HomePage;
