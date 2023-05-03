const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const PHOTO_DESCRIPTIONS = [
	'Класс!!!',

];

const COMMENT_MESSAGES = [
	'спасибо большое',
    
];

const NAMES = [
	'Абрам',
	'Гевор',
	'Геворг',
	'Геннадий',
	'Генри',
	'Генрих',
	'Георгий',
	'Геральд',
	'Герасим',
    'Ангелина',
    'Ерениса',
    'Алексия',
    'Стефания',
    'Елизавета',
    'Евгения',
    'Фаина',
    'Галина',
    'Маргарита',
    'Izabella-Vinishechkina'
];

const createComment = () => {
    const photoId = getRandomInt(1, 250);

    const avatarIndex = getRandomInt(1, 6);
    const avatar = 'img/avatar-' + avatarIndex + '.jpg';

    let randomIndex = getRandomInt(0, COMMENT_MESSAGES.length - 1);
    const message = COMMENT_MESSAGES[randomIndex];

    randomIndex = getRandomInt(0, NAMES.length - 1);
    const name = NAMES[randomIndex];

	return {
		id: photoId,
		avatar: avatar,
		message: message,
		name: name,
	};
};

const createPhoto = commentCount => {
    const comments = [];

    let i = 0;

    while (i < commentCount) {
        comments.push(createComment());
        i++;
    }

	return {
		id: getRandomInt(1, 250),
		url: `photos/${getRandomInt(1, 25)}.jpg`,
		description: '',
		likes: '',
		comments: []
	};
};

const generatePhotos = photoCount => {
	const photos = [];

	let i = 0;

	while (i < photoCount) {
		photos.push(createPhoto());
		i++;
	}
	
	return photos;
}; 


// const photos = generatePhotos(13);
// console.log(photos);

// const fragment = document.createDocument








//const photo = {
//    id: 13,
//    url: 'photo/13.jpg',
//    desription: null, 
//    likes: 200,
//    comment: []
//};

//}
//const createComments = function () {
// return {
//  id: 666, 
//   url: 'img/avatar-5.svg',
//  message: 'Делай всё так, чтобы потом  сказать себе спасибо',
//  name: 'Izabella-Vinishechkina'
//   }
//}






// const rootElement = document.querySelector('main .container');
// const photos = generatePhotos(10);
// const templateElement = document.getElementById('picture-template');
// const fragment = templateElement.content;
// const picture = fragment.querySelector('.picture');

// for (const photo of photos) {
//     const pictureElement = picture.cloneNode(true);
//     const imgElement = pictureElement.querySelector('img');
//     console.log(imgElement);
//     imgElement.setAttribute('src', photo.url);
//     rootElement.append(pictureElement);
// }

// console.log(photos);
// console.log(fragment);
// console.log(picture);
// console.log(rootElement);

// const elems = document.querySelectorAll('.elem');

// for (const elem of elems) {
//     elem.addEventListener('click', () => {
//         console.log(elem);
//     });
// }