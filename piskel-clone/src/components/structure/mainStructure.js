export default class MainStructure {
  static render() {
    const { body } = document;

    const container = document.createElement('div');
    container.className = 'container';
    document.body.insertBefore(container, body.firstChild);

    const header = document.createElement('header');
    header.className = 'page-header';
    container.appendChild(header);

    const newSpan = document.createElement('img');
    newSpan.className = 'piskel-clone';
    newSpan.src = '../src/source/image/logo_transparent_small_compact.png';
    header.appendChild(newSpan);

    const span1 = document.createElement('span');
    span1.className = 'piskel-clone-span';
    span1.innerText = 'New Piskel';
    header.appendChild(span1);

    const auth = document.createElement('div');
    auth.className = 'auth';
    header.appendChild(auth);

    const profile = document.createElement('div');
    profile.className = 'profile-container';
    auth.appendChild(profile);

    const signIn = document.createElement('div');
    signIn.className = 'g-signin2';
    signIn.width = '100';
    signIn.height = '31';
    signIn.onsuccess = 'onSignIn';
    auth.appendChild(signIn);

    const profileName = document.createElement('span');
    profileName.className = 'profile-username';
    profile.appendChild(profileName);

    const profileImage = document.createElement('div');
    profileImage.className = 'profile-image';
    profile.appendChild(profileImage);

    const main = document.createElement('main');
    container.appendChild(main);

    const tools = document.createElement('div');
    tools.className = 'tools-container';
    main.appendChild(tools);

    const frames = document.createElement('div');
    frames.className = 'frames-select';
    main.appendChild(frames);

    const layers = document.createElement('div');
    layers.className = 'layers-container';
    main.appendChild(layers);

    const menu = document.createElement('div');
    menu.className = 'menu';
    main.appendChild(menu);
  }
}
