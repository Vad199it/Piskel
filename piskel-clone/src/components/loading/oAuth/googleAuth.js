export default function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  const profileContainer = document.querySelector('.profile-container');
  const profileUsername = document.querySelector('.profile-container .profile-username');
  const siginIn = document.querySelector('.g-signin2');
  profileUsername.innerText = profile.getName();
  profileContainer.style.display = 'flex';
  profileContainer.parentNode.removeChild(siginIn);
}
