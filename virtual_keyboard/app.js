const header = document.createElement('h1');
const textarea = document.createElement('textarea');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const kbd = document.createElement('section');

let dataKeyboard = {
    shiftStatus: {
        value: false,
        active: "shiftTrue",
        notActive: "shiftFalse",
    },
    capslockStatus: {
        value: false,
        active: "capslockOn",
        notActive: "capslockOff",
    },
    languageStatus: "en",
    activeKeyBoard: [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
        'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
        'shiftleft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftright', 'up',
        'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
    ],
    lettersList: {
        "ru": {
            "capslockOff": {
                "shiftFalse": [
                    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                    'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
                    'capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'enter',
                    'shiftleft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ],
                "shiftTrue": [
                    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace',
                    'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|',
                    'capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'enter',
                    'shiftleft', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ]
            },
            "capslockOn": {
                "shiftTrue": [
                    'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace',
                    'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '|',
                    'capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'enter',
                    'shiftleft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ],
                "shiftFalse": [
                    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                    'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
                    'capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'enter',
                    'shiftleft', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ]
            }
        },
        "en": {
            "capslockOff": {
                "shiftFalse": [
                    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
                    'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
                    'shiftleft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ],
                "shiftTrue": [
                    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace',
                    'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
                    'capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', "\"", 'enter',
                    'shiftleft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ]
            },
            "capslockOn": {
                "shiftTrue": [
                    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace',
                    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
                    'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
                    'shiftleft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ],
                "shiftFalse": [
                    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                    'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
                    'capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'enter',
                    'shiftleft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ]
            }
        }
    },

    allLetters: [
        "ё","1","2","3","4","5","6","7","8","9","0","-","=","backspace",
        "tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\",
        "capslock","ф","ы","в","а","п","р","о","л","д","ж","э",
        "enter","shiftleft","я","ч","с","м","и","т","ь","б","ю",".",
        "shiftright","up","ctrl","alt"," ","left","down","right","Ё",
        "!",'"',"№",";","%",":","?","*","(",")","_","+","Й","Ц","У",
        "К","Е","Н","Г","Ш","Щ","З","Х","Ъ","/","Ф","Ы","В","А","П",
        "Р","О","Л","Д","Ж","Э","Я","Ч","С","М","И","Т","Ь","Б","Ю",
        ",","`","q","w","e","r","t","y","u","i","o","p","[","]","a",
        "s","d","f","g","h","j","k","l","'","z","x","c","v","b","n",
        "m","~","@","#","$","^","&","Q","W","E","R","T","Y","U","I",
        "O","P","{","}","|","A","S","D","F","G","H","J","K","L","Z",
        "X","C","V","B","N","M","<",">"
    ]
}

header.innerHTML = 'Virtual Keybord';
header.classList.add('header');

textarea.classList.add('text');

p1.classList.add('p');
p1.innerHTML = 'Change language: left SHIFT + ALT';

p2.classList.add('p');
p2.innerHTML = 'Made for: OS Windows';

document.querySelector('body').append(header);
document.querySelector('body').append(textarea);
document.querySelector('body').append(p1);
document.querySelector('body').append(p2);

const ACTION_LIST = {
	SET_SHIFT_STATUS: "SET_SHIFT_STATUS",
	SET_CAPSLOCK_STATUS: "SET_CAPSLOCK_ON",
	SET_KEYBOARD: "SET_KEYBOARD",
	SET_LANGUAGE: "SET_LANGUAGE"
}

const changeLanguage = (data) => data.languageStatus == "en" ? "ru" : "en"

const getActiveKeyBoard = (data) => {
	const shiftStatus = data.shiftStatus.value ? data.shiftStatus.active : data.shiftStatus.notActive;
	const capslockStatus = data.capslockStatus.value ? data.capslockStatus.active : data.capslockStatus.notActive;

	console.log(data, data.lettersList[data.languageStatus][capslockStatus][shiftStatus], data.languageStatus, shiftStatus, capslockStatus);
	
	return data.lettersList[data.languageStatus][capslockStatus][shiftStatus];
}

const updateDataKeyboard = (dataKB = {}, action) => {
	switch(action) {
		case ACTION_LIST.SET_LANGUAGE:
			let languageStatus = changeLanguage(dataKeyboard);

			dataKeyboard  = {
				...dataKB,
				languageStatus
			}
			
			break;

		case ACTION_LIST.SET_SHIFT_STATUS:
			let shiftStatus = {
				value: !dataKeyboard.shiftStatus.value,
				active: "shiftTrue",
				notActive: "shiftFalse",
			}

			dataKeyboard = {
				...dataKB,
				shiftStatus
			}
			break;

		case ACTION_LIST.SET_CAPSLOCK_STATUS:
			let capslockStatus = {
				value: !dataKeyboard.capslockStatus.value,
				active: "capslockOn",
				notActive: "capslockOff",
			}

			dataKeyboard = {
				...dataKB,
				capslockStatus
			}

			break;

		case ACTION_LIST.SET_KEYBOARD:
			activeKeyBoard = getActiveKeyBoard();

			dataKeyboard  = {
				...dataKB,
				activeKeyBoard
			}
			break;
	}
	activeKeyBoard = getActiveKeyBoard(dataKeyboard);

	dataKeyboard = {
		...dataKeyboard,
		activeKeyBoard
	}
}

const keybord = {
	onceAddEvenetOnKeys: true,
	elements: {
		main: null,
		keysContainer: null,
		keys: [],
	},

	eventHendlers: {
		oninput: null,
		onclose: null,
	},

	properties: {
		value: '',
		capslock: false,
		shiftPres: false,
	},

	reload() {
		this.elements.main.innerHTML = "";
		this.elements.keysContainer = document.createElement('div');

		this.elements.keysContainer.classList.add('kbd-keys');
		this.keysLayout = dataKeyboard.activeKeyBoard;
		this.elements.keysContainer.appendChild(this.reCreateKeys());

		this.elements.keys = this.elements.keysContainer.querySelectorAll('.key');

		this.elements.main.appendChild(this.elements.keysContainer);
		document.body.appendChild(this.elements.main);

		const text = document.querySelector('textarea');

		this.show(text.value, (currentValue) => {
			text.value = currentValue;
		});
	},
	
	init() {
		this.elements.main = document.createElement('div');
		this.elements.keysContainer = document.createElement('div');

		this.elements.main.classList.add('kbd');
		this.elements.keysContainer.classList.add('kbd-keys');
		this.elements.keysContainer.appendChild(this.createKeys());
		this.reload();

		this.elements.keys = this.elements.keysContainer.querySelectorAll('.key');

		this.elements.main.appendChild(this.elements.keysContainer);
		document.body.appendChild(this.elements.main);

		const text = document.querySelector('textarea');

		this.show(text.value, (currentValue) => {
			text.value = currentValue;
		});
	},

	keysLayout: dataKeyboard.allLetters,

	reCreateKeys() {
		const fragment = document.createDocumentFragment();

		const createIcon = (iconName) => `<i class="material-icons">${iconName}</i>`;

		this.keysLayout.forEach((key, i) => {
			const keyElem = document.createElement('button');
			const insertBR = ['backspace', '\\', 'enter', 'up', '|'].indexOf(key) !== -1;

			keyElem.setAttribute('type', 'button');
			keyElem.setAttribute('keyname', key);
			keyElem.setAttribute('lowerCaseName', key.toUpperCase());
			keyElem.classList.add('key');
			switch (key) {
			case 'backspace':
				keyElem.classList.add('middle', 'backspase');
				keyElem.innerHTML = createIcon('backspace');

				keyElem.addEventListener('mousedown', () => {
					if(window.getSelection().toString().length > 0){
						this.properties.value = this.properties.value.substring(0, this.properties.value.length - (window.getSelection().toString().length - 1));
						this.triggerEvent('oninput');
					}
					this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
					keyElem.classList.add('active');
					this.triggerEvent('oninput');
				});

				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active');
				});
				
				break;

			case 'capslock':
				keyElem.classList.add('middle', 'light');
				keyElem.innerHTML = '<i>CapsLock</i>';
				keyElem.addEventListener('click', () => {
					// this.toogleCapsLock();
					keyElem.classList.add('active');
					keyElem.classList.toggle('_active', this.properties.capslock);
					updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_CAPSLOCK_STATUS);
					this.keysLayout = dataKeyboard.activeKeyBoard;
					keybord.reload();
				});

				break;

			case 'enter':
				keyElem.classList.add('middle', 'enter');
				keyElem.innerHTML = createIcon('keyboard_return');

				keyElem.addEventListener('mousedown', () => {
					this.properties.value += '\n';
					this.triggerEvent('oninput');
					keyElem.classList.add('active');
				});

				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active');
				});

				break;

			case ' ':
				keyElem.classList.add('big', 'space');
				keyElem.innerHTML = createIcon('space_bar');
				keyElem.setAttribute('keyname', 'Space');

				keyElem.addEventListener('mousedown', () => {
					keyElem.classList.add('active')
				})
				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active')
				})

				break;

			case 'left':
				keyElem.classList.add('key', 'left');
				keyElem.innerHTML = createIcon('arrow_left');
				keyElem.style.width = '60px';
				
				keyElem.addEventListener('mousedown', () => {
					this.properties.value += '◄';
					this.triggerEvent('oninput');
					keyElem.classList.add('active')
				});

				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active')
				});

				break;

			case 'right':
				keyElem.classList.add('key', 'right');
				keyElem.innerHTML = createIcon('arrow_right');
				keyElem.style.width = '60px';
				
				keyElem.addEventListener('mousedown', () => {
					this.properties.value += '►';
					this.triggerEvent('oninput');
					keyElem.classList.add('active')
				});

				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active')
				});

				break;

			case 'up':
				keyElem.classList.add('key', 'up');
				keyElem.innerHTML = createIcon('arrow_right');
				keyElem.style.transform = 'rotate(-90deg)';
				keyElem.style.width = '60px';
				
				keyElem.addEventListener('mousedown', () => {
					this.properties.value += '▲';
					this.triggerEvent('oninput');
					keyElem.classList.add('active')
				});

				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active')
				});

				break;

			case 'down':
				keyElem.classList.add('key', 'down');
				keyElem.innerHTML = createIcon('arrow_right');
				keyElem.style.transform = 'rotate(90deg)';
				keyElem.style.width = '60px';
				
				keyElem.addEventListener('mousedown', () => {
					this.properties.value += '▼';
					this.triggerEvent('oninput');
					keyElem.classList.add('active')
				});

				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active')
				});

				break;

			case 'shiftleft':
				keyElem.classList.add('middle', 'shift');
				keyElem.innerHTML = '<i>Shift</i>';

				keyElem.addEventListener('click', () => {
					this.shiftPres = true;  
					updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_SHIFT_STATUS);
					this.keysLayout = dataKeyboard.activeKeyBoard;
					keybord.reload();
					keyElem.classList.add('active');
				});

				break;

			case 'shiftright':
				keyElem.classList.add('middle', 'shift');
				keyElem.innerHTML = '<i>Shift</i>';
				// let count = 0;
				break;

			case 'alt':
				keyElem.classList.add('key', 'middle', 'alt');
				keyElem.innerHTML = '<i>Alt</i>';

				keyElem.addEventListener('mousedown', (e) => {
					keyElem.classList.add('active')
					if(keyElem.getAttribute('keyname') == 'alt') {
						if(this.shiftPres) {							
							updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_LANGUAGE);
							updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_SHIFT_STATUS);
							this.keysLayout = dataKeyboard.activeKeyBoard;
							keybord.reload();
							this.shiftPres = false;
						}
					}			
				});

				keyElem.addEventListener('mouseup', (e) => {
					keyElem.classList.remove('active')		
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'AltLeft') {
						document.querySelectorAll('.alt')[0].classList.add('active');
						document.querySelectorAll('.alt')[1].classList.remove('active')
						if(this.shiftPres) {
							updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_LANGUAGE);
							this.keysLayout = dataKeyboard.activeKeyBoard;
							keybord.reload();
							this.shiftPres = false;
						}
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'AltLeft') {
						document.querySelectorAll('.alt')[0].classList.remove('active')
					}	
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'AltRight') {
						document.querySelectorAll('.alt')[1].classList.add('active');
						document.querySelectorAll('.alt')[0].classList.remove('active')
						if(this.shiftPres) {
							updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_LANGUAGE);
							this.keysLayout = dataKeyboard.activeKeyBoard;
							keybord.reload();
							this.shiftPres = false;
						}
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'AltRight') {
						document.querySelectorAll('.alt')[1].classList.remove('active')
					}	
				});

				break;

			case 'ctrl':
				keyElem.classList.add('key', 'middle');
				keyElem.innerHTML = '<i>Ctrl</i>';

				keyElem.classList.add('key', 'ctrl');
				keyElem.innerHTML = '<i>Ctrl</i>';

				keyElem.addEventListener('mousedown', () => {
					keyElem.classList.add('active');
				});

				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active');
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ControlLeft'){
						document.querySelectorAll('.ctrl')[0].classList.add('active');
						document.querySelectorAll('.ctrl')[1].classList.remove('active');
					}
					if(e.code === 'ControlRight'){
						document.querySelectorAll('.ctrl')[0].classList.remove('active');
						document.querySelectorAll('.ctrl')[1].classList.add('active');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ControlLeft'){
						document.querySelectorAll('.ctrl')[0].classList.remove('active');
					}
					if(e.code === 'ControlRight'){
						document.querySelectorAll('.ctrl')[1].classList.remove('active');
					}
				});

				break;

			case 'tab':
				keyElem.classList.add('middle', 'tab');
				keyElem.innerHTML = '<i>Tab</i>';

				keyElem.addEventListener('mousedown', () => {
					this.properties.value += ' ' + ' ';
					this.triggerEvent('oninput');
					keyElem.classList.add('active');
				});

				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active');
				});

				break;

			default:
				keyElem.textContent = key;

					keyElem.addEventListener('mousedown', () => {
						this.properties.value += key;
						this.triggerEvent('oninput');
						keyElem.classList.add('active');
					});

					keyElem.addEventListener('mouseup', () => {
						keyElem.classList.remove('active');
					});

					window.addEventListener('keydown', (e) => {
						let ind = dataKeyboard.allLetters.indexOf(e.key);
						if(ind != -1 && dataKeyboard.allLetters[ind] == keyElem.getAttribute('keyname')) {
							keyElem.classList.add('active');
						}
					});
	
					window.addEventListener('keyup', (e) => {
						let ind = dataKeyboard.allLetters.indexOf(e.key);
						if(ind != -1 && dataKeyboard.allLetters[ind] == keyElem.getAttribute('keyname')) {
							keyElem.classList.remove('active');
						}
					});

				break;
			}

			fragment.appendChild(keyElem);

			if(insertBR) {
				fragment.appendChild(document.createElement('br'));
			}
		});
		
		if(this.onceAddEvenetOnKeys && dataKeyboard.languageStatus == "ru")  this.onceAddEvenetOnKeys = false;

		return fragment;
	},

	createKeys() {
		const fragment = document.createDocumentFragment();

		const createIcon = (iconName) => `<i class="material-icons">${iconName}</i>`;

		this.keysLayout.forEach((key, i) => {
			const keyElem = document.createElement('button');
			const insertBR = ['backspace', '\\', 'enter', 'up', '|'].indexOf(key) !== -1;

			keyElem.setAttribute('type', 'button');
			keyElem.setAttribute('keyname', key);
			keyElem.setAttribute('lowerCaseName', key.toUpperCase());
			keyElem.classList.add('key');
			console.log(keyElem);
			switch (key) {
			case 'backspace':
				keyElem.addEventListener('mousedown', () => {
					if(window.getSelection().toString().length > 0){
						this.properties.value = this.properties.value.substring(0, this.properties.value.length - (window.getSelection().toString().length - 1));
						this.triggerEvent('oninput');
					}
					this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
					this.triggerEvent('oninput');
					keyElem.classList.add('active');
				});

				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active');
				});

				document.addEventListener('keydown', (e) => {
					if(e.code === 'Backspace') {
						if(window.getSelection().toString().length > 0){
							this.properties.value = this.properties.value.substring(0, this.properties.value.length - (window.getSelection().toString().length - 1));
							this.triggerEvent('oninput');
						}
						document.querySelector('.backspase').classList.add('active');
						this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
						this.triggerEvent('oninput');
					}
				});

				document.addEventListener('keyup', (e) => {
					if(e.code === 'Backspace') {
						document.querySelector('.backspase').classList.remove('active');
					}
				});

				break;

			case 'capslock':
				keyElem.classList.add('middle', 'light');
				keyElem.innerHTML = '<i>CapsLock</i>';

				keyElem.addEventListener('click', (e) => {
					// this.toogleCapsLock();
					console.log('e.target')
					keyElem.classList.add('active');
					keyElem.classList.toggle('_active', this.properties.capslock);
					updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_CAPSLOCK_STATUS);
					this.keysLayout = dataKeyboard.activeKeyBoard;
					keybord.reload();
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'CapsLock') {
						document.querySelector('.capslock').classList.toggle('active');
						// this.toogleCapsLock();
						keyElem.classList.add('active');
						keyElem.classList.toggle('_active', this.properties.capslock);

						updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_CAPSLOCK_STATUS);
						keyElem.classList.toggle('_active', this.properties.capslock);
						this.keysLayout = dataKeyboard.activeKeyBoard;
						keybord.reload();

					}
				});


				break;

			case 'enter':
				keyElem.classList.add('middle', 'enter');
				keyElem.innerHTML = createIcon('keyboard_return');

				keyElem.addEventListener('click', () => {
					keyElem.classList.add('active');
					this.properties.value += '\n';
					this.triggerEvent('oninput');
				});

				document.addEventListener('keydown', (e) => {
					if(e.code === 'Enter') {
						document.querySelector('.enter').classList.add('active');
						this.properties.value += '\n';
						this.triggerEvent('oninput');
					}
				});

				document.addEventListener('keyup', (e) => {
					if(e.code === 'Enter') {
						document.querySelector('.enter').classList.remove('active');
					}
				});

				break;

			case ' ':
				keyElem.classList.add('big', 'space');
				keyElem.innerHTML = createIcon('space_bar');
				keyElem.setAttribute('keyname', 'Space');

				keyElem.addEventListener('click', () => {
					this.properties.value += ' ';
					this.triggerEvent('oninput');
				});

				document.addEventListener('keydown', (e) => {
					if(e.code === 'Space') {
						document.querySelector('.space').classList.add('active');
						this.properties.value += ' ';
						this.triggerEvent('oninput');
					}
				});

				document.addEventListener('keyup', (e) => {
					if(e.code === 'Space') {
						document.querySelector('.space').classList.remove('active');
					}
				});

				break;

			case 'left':
				keyElem.classList.add('key', 'left');
				keyElem.innerHTML = createIcon('arrow_left');
				keyElem.style.width = '60px';

				keyElem.addEventListener('mousedown', () => {
					this.properties.value += '◄';
					this.triggerEvent('oninput');
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ArrowLeft') {
						document.querySelector('.left').classList.add('active');
						this.properties.value += '◄';
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ArrowLeft') {
						document.querySelector('.left').classList.remove('active');
					}
				});

				break;

			case 'right':
				keyElem.classList.add('key', 'right');
				keyElem.innerHTML = createIcon('arrow_right');
				keyElem.style.width = '60px';

				keyElem.addEventListener('mousedown', () => {
					this.properties.value += '►';
					this.triggerEvent('oninput');
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ArrowRight') {
						document.querySelector('.right').classList.add('active');
						this.properties.value += '►';
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ArrowRight') {
						document.querySelector('.right').classList.remove('active');
					}
				});

				break;

			case 'up':
				keyElem.classList.add('key', 'up');
				keyElem.innerHTML = createIcon('arrow_right');
				keyElem.style.transform = 'rotate(-90deg)';
				keyElem.style.width = '60px';

				keyElem.addEventListener('mousedown', () => {
					this.properties.value += '▲';
					this.triggerEvent('oninput');
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ArrowUp') {
						document.querySelector('.up').classList.add('active');
						this.properties.value += '▲';
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ArrowUp') {
						document.querySelector('.up').classList.remove('active');
					}
				});

				break;

			case 'down':
				keyElem.classList.add('key', 'down');
				keyElem.innerHTML = createIcon('arrow_right');
				keyElem.style.transform = 'rotate(90deg)';
				keyElem.style.width = '60px';



				window.addEventListener('keydown', (e) => {
					if(e.code === 'ArrowDown') {
						document.querySelector('.down').classList.add('active');
						this.properties.value += '▼';
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ArrowDown') {
						document.querySelector('.down').classList.remove('active');
					}
				});

				break;

			case 'shiftleft':
				keyElem.classList.add('middle', 'shift');
				keyElem.innerHTML = '<i>Shift</i>';

				let count = 0;
				keyElem.addEventListener('click', () => {
					this.shiftPres = true;  
					keyElem.classList.add('active');
					updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_SHIFT_STATUS);
					this.keysLayout = dataKeyboard.activeKeyBoard;
					keybord.reload();
					// count++;
					// this.toogleCapsLock();
					// this.triggerEvent('oninput');
					
					// if(count % 2 === 0) {
					// 	keyElem.classList.remove('active');
					// }
										
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ShiftLeft') {
						this.shiftPres = true;  

						if(e.repeat) {
							e.stopPropagation();
    						e.preventDefault();
						} else {
							document.querySelectorAll('.shift')[0].classList.add('active');
							// this.toogleCapsLock();
							this.triggerEvent('oninput');

							updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_SHIFT_STATUS);
							this.keysLayout = dataKeyboard.activeKeyBoard;
							keybord.reload();
						}
					}
					if(e.key === keyElem.getAttribute('keyname') || e.key === keyElem.getAttribute('lowerCaseName') && this.shiftPres) {
						keyElem.classList.add('active');
						this.properties.value += this.properties.capslock ? key.toUpperCase() : key;
						this.triggerEvent('oninput');

					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ShiftLeft') {
						this.shiftPres = false;  

						document.querySelectorAll('.shift')[0].classList.remove('active');
						
						// this.toogleCapsLock();
						// this.triggerEvent('oninput');

						updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_SHIFT_STATUS);
						this.keysLayout = dataKeyboard.activeKeyBoard;
						keybord.reload();
					}
				});

				break;

			case 'shiftright':
				keyElem.classList.add('middle', 'shift');
				keyElem.innerHTML = '<i>Shift</i>';
				// let count = 0;
				keyElem.addEventListener('click', () => {
					// count++;
					keyElem.classList.add('active');
					this.toogleCapsLock();
					this.triggerEvent('oninput');
					if(count % 2 === 0) {
						keyElem.classList.remove('active');
					}
					updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_SHIFT_STATUS);
					this.keysLayout = dataKeyboard.activeKeyBoard;
					keybord.reload();
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ShiftRight') {
						this.shiftPres = true;
						if(e.repeat) {
							e.stopPropagation();
    						e.preventDefault();
						} else {
							document.querySelectorAll('.shift')[1].classList.add('active');
							this.toogleCapsLock();
							this.triggerEvent('oninput');
						}
					}
					if(e.key === keyElem.getAttribute('keyname') && this.shiftPres) {
						this.shiftPres = false;
						keyElem.classList.add('active');
						this.properties.value += this.properties.capslock ? key.toUpperCase() : key;
						this.triggerEvent('oninput');
						
						updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_SHIFT_STATUS);
						this.keysLayout = dataKeyboard.activeKeyBoard;
						keybord.reload();
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ShiftRight') {
						document.querySelectorAll('.shift')[1].classList.remove('active');
						this.toogleCapsLock();
						this.triggerEvent('oninput');
						updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_SHIFT_STATUS);
						this.keysLayout = dataKeyboard.activeKeyBoard;
						keybord.reload();
					}
				});

				break;

			case 'alt':
				keyElem.classList.add('key');
				keyElem.innerHTML = '<i>Alt</i>';

				keyElem.addEventListener('mousedown', (e) => {
					keyElem.classList.add('active')	
					if(keyElem.getAttribute('keyname') == 'alt') {
						if(this.shiftPres) {
							updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_LANGUAGE);
							this.keysLayout = dataKeyboard.activeKeyBoard;
							keybord.reload();
							this.shiftPres = false;
						}
					}			
				});
				
				keyElem.addEventListener('mouseup', (e) => {
					keyElem.classList.remove('active')		
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'AltLeft') {
						keyElem.classList.add('active')
						if(this.shiftPres) {
							updateDataKeyboard(dataKeyboard, ACTION_LIST.SET_LANGUAGE);
							this.keysLayout = dataKeyboard.activeKeyBoard;
							keybord.reload();
							this.shiftPres = false;
						}
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'AltLeft') {
						keyElem.classList.remove('active')
					}
							
				});

				break;

			case 'ctrl':
				keyElem.classList.add('key', 'ctrl');
				keyElem.innerHTML = '<i>Ctrl</i>';

				keyElem.addEventListener('mousedown', () => {
					keyElem.classList.add('active');
				});

				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active');
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'ControlLeft'){
						document.querySelectorAll('.ctrl')[0].classList.add('active');
						document.querySelectorAll('.ctrl')[1].classList.remove('active');
					}
					if(e.code === 'ControlRight'){
						document.querySelectorAll('.ctrl')[0].classList.remove('active');
						document.querySelectorAll('.ctrl')[1].classList.add('active');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'ControlLeft'){
						document.querySelectorAll('.ctrl')[0].classList.remove('active');
					}
					if(e.code === 'ControlRight'){
						document.querySelectorAll('.ctrl')[1].classList.remove('active');
					}
				});

				break;

			case 'tab':
				keyElem.classList.add('middle', 'tab');
				keyElem.innerHTML = '<i>Tab</i>';

				keyElem.addEventListener('mousedown', () => {
					this.properties.value += ' ' + ' ';
					this.triggerEvent('oninput');
					keyElem.classList.add('active');
				});

				keyElem.addEventListener('mouseup', () => {
					keyElem.classList.remove('active');
				});

				window.addEventListener('keydown', (e) => {
					if(e.code === 'Tab') {
						document.querySelector('.tab').classList.add('active');
						this.properties.value += ' ' + ' ';
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					if(e.code === 'Tab') {
						document.querySelector('.tab').classList.remove('active');
					}
				});

				break;

			default:
				keyElem.textContent = key;

				keyElem.addEventListener('click', () => {
					this.properties.value += key;
					this.triggerEvent('oninput');
				});

				window.addEventListener('keydown', (e) => {
					let ind = dataKeyboard.allLetters.indexOf(e.key);
					if(ind != -1 && dataKeyboard.allLetters[ind] == keyElem.getAttribute('keyname')) {
						keyElem.classList.add('active');
						this.properties.value += key;
						this.triggerEvent('oninput');
					}
				});

				window.addEventListener('keyup', (e) => {
					let ind = dataKeyboard.allLetters.indexOf(e.key);
					if(ind != -1 && dataKeyboard.allLetters[ind] == keyElem.getAttribute('keyname')) {
						keyElem.classList.remove('active');
					}
				});

				break;
			}

			fragment.appendChild(keyElem);

			if(insertBR) {
				fragment.appendChild(document.createElement('br'));
			}
		});

		return fragment;
	},

	triggerEvent(handlerName) {
		if(typeof this.eventHendlers[handlerName] === 'function') {
			this.eventHendlers[handlerName](this.properties.value);
		}
	},

	toogleCapsLock() {
		this.properties.capslock = !this.properties.capslock;

		// for (const key of this.elements.keys) {
		// 	if(key.childElementCount === 0) {
		// 		key.textContent = this.properties.capslock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
		// 	}
		// }
	},

	show(initialValue, oninput, onclose) {
		this.properties.value = initialValue || '';
		this.eventHendlers.oninput = oninput;
		this.eventHendlers.onclose = onclose;
		this.elements.main.classList.remove('_hide');
	},

	hide() {
		this.properties.value = '';
		this.eventHendlers.oninput = oninput;
		this.eventHendlers.onclose = onclose;
		this.elements.main.classList.add('_hide');
	},
};

window.addEventListener('DOMContentLoaded', () => {
	keybord.init();
});
