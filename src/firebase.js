import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDSx--M507LuuqaAhIwuvo5pFXnfH_PbdU",
    authDomain: "elokira-voting.firebaseapp.com",
    projectId: "elokira-voting",
    storageBucket: "elokira-voting.appspot.com",
    messagingSenderId: "937156690313",
    appId: "1:937156690313:web:117abcac76f9cdf532a158",
    measurementId: "G-XL7HMLQ1F6"
};
// Initialize Firebase
firebase.initializeApp(config);
export default firebase