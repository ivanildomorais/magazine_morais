
const user_info = document.getElementById('user_info');

const settings = document.getElementById('settings');
const logout = document.getElementById('logout');
const login = document.getElementById('login');
const signUp = document.getElementById('signUp');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

      user_info.innerHTML = user.email;
      settings.style.display = 'block';
      logout.style.display = 'block';
      login.style.display = 'none';
      signUp.style.display = 'none';

  }else {
    user_info.innerHTML = 'Entrar';
    settings.style.display = 'none';
    logout.style.display = 'none';
    login.style.display = 'block';
    signUp.style.display = 'block';
    
  }
});

logout.addEventListener('click', e => {
  firebase.auth().signOut();
});
