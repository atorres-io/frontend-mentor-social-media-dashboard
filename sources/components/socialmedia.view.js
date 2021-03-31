class SocialMediaView {
	constructor() {
		this.GUI = {
			toggle: document.getElementById('toggle'),
		};
	}

	initListeners = () => {
		this.GUI.toggle.addEventListener('change', this._colorMode);
	};

	_colorMode = () => {
		this.GUI.toggle.checked
			? document.documentElement.setAttribute('data-theme', 'dark')
			: document.documentElement.setAttribute('data-theme', 'light');
	};
}
