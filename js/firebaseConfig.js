
var config = {
  apiKey: "AIzaSyB_EZihDoWDCprEHFObN6_ZBV-k_uUZfh0",
  authDomain: "trabalho-de-recuperacao-e1c95.firebaseapp.com",
  databaseURL: "https://trabalho-de-recuperacao-e1c95-default-rtdb.firebaseio.com",
  projectId: "trabalho-de-recuperacao-e1c95",
  storageBucket: "trabalho-de-recuperacao-e1c95.appspot.com",
  messagingSenderId: "646522915725",
  appId: "1:646522915725:web:fa2754148641abc659cbc4",
  measurementId: "G-NM55HXPM58"
}
  firebase.initializeApp(config);

  // Verifica se o Firebase já foi inicializado
if (!firebase.apps.length) {
  // Se não foi, inicializa
  
  const app= firebase.initializeApp(firebaseConfig)

  const database = getDatabase (app)

  console.log(database)

}