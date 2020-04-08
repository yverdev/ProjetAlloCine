// Films à l'affiche

var moviesData = [
	{
		id: 1,
		title: 'Bloodshot',
		originaltitle: 'Bloodshot',
		bkgimage: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg',
		image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6VRhjfA495M6viOPL4aF1cIlGfE.jpg',
		resume: 'Ray Garrison un soldat mort au combat ressuscité par l\'entrepreneur en armement Rising Spirit Technologies grâce à la nanotechnologie. Souffrant d\'une perte totale de mémoire mais désormais doté de toute une gamme de nouvelles capacités, Ray a du mal à renouer avec qui il était tout en apprenant quelle sorte d\'arme il est devenu... Aidé par une équipe de camarades combattants augmentés sous le nom de code Chainsaw.',
		duration: 110,
		traileryt: 'https://www.youtube.com/embed/JIJ07pCTCWY',
		genre: 'Action',
		langage: 'Anglais',
		actors: ['Vin Diesel', 'Eiza González', 'Sam Heughan', 'Toby Kebbell', 'Lamorne Morris'],
		director: 'Dave Wilson',
		date: '25-03-2020',
		comments: [],
		nearly: true
	},
	{
		id: 2,
		title: 'En Avant',
		originaltitle: 'En Avant',
		bkgimage: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg',
		image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/z0tFBcpm9z8im67u1FUwt2n1S5P.jpg',
		resume: 'Il y a bien longtemps, le monde était magique... Mais les temps changent. Dans la banlieue d\'un univers imaginaire, deux frères elfes se lancent dans une quête extraordinaire pour découvrir s\'il reste encore un peu de magie dans le monde.',
		duration: 102,
		traileryt: 'https://www.youtube.com/embed/XRF6uuubGcI',
		genre: 'Dessin animé',
		langage: 'Anglais',
		actors: ['Tom Holland', 'Chris Pratt', 'Julia Louis-Dreyfus', 'Octavia Spencer', 'Kyle Bornheimer'],
		director: 'Dan Sanlon',
		date: '04-03-2020',
		comments: [],
		nearly: true
	},
	{
		id: 3,
		title: 'Invisible Man',
		originaltitle: 'Bloodshot',
		bkgimage: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/uZMZyvarQuXLRqf3xdpdMqzdtjb.jpg',
		image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5FFtYEXXnQ3jEN4eFywXxb17PFS.jpg',
		resume: 'Cecilia Kass est en couple avec un brillant et riche scientifique. Ne supportant plus son comportement violent et tyrannique, elle prend la fuite une nuit et se réfugie auprès de sa sœur, leur ami d\'enfance et sa fille adolescente. Mais quand l\'homme se suicide en laissant à Cecilia une part importante de son immense fortune, celle-ci commence à se demander s\'il est réellement mort. Tandis qu\'une série de coïncidences inquiétantes menace la vie des êtres qu\'elle aime, Cecilia cherche désespérément à prouver qu\'elle est traquée par un homme que nul ne peut voir. Peu à peu, elle a le sentiment que sa raison vacille…',
		duration: 125,
		traileryt: 'https://www.youtube.com/embed/Eh86yTZqLRU',
		genre: 'Horreur',
		langage: 'Anglais',
		actors: ['Vin Diesel', 'Eiza González', 'Sam Heughan', 'Toby Kebbell', 'Lamorne Morris'],
		director: 'Leigh Whannell',
		date: '26-02-2020 ',
		comments: [],
		nearly: true
	},
	{
		id: 4,
		title: 'Ca',
		originaltitle: 'It',
		bkgimage: null,
		image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/3SUz0F0I2Bodcj9Ev2pYSWnE9zp.jpg',
		resume: 'À Derry, dans le Maine, sept gamins ayant du mal à s\'intégrer se sont regroupés au sein du "Club des Ratés". Rejetés par leurs camarades, ils sont les cibles favorites…',
		duration: 135,
		traileryt: 'https://www.youtube.com/embed/Tw3yT-qAbvc',
		genre: 'Horreur',
		langage: 'Anglais',
		actors: ['Jaeden Lieberher', 'Bill Skarsgård', 'Jeremy Ray Taylor', 'Sophia Lillis', 'Finn Wolfhard'],
		director: 'Andy Muschietti',
		date: '2017-09-05',
		comments: [],
		nearly: false
	},

	{
		id: 5,
		title: 'Les nouveaux héros',
		originaltitle: 'Big Hero 6',
		bkgimage: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/wXBCE6sS94zb8IlnQ51OPApgfhC.jpg',
		image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7jAXeNgTPUY00txdsc5JloGCMBN.jpg',
		resume: 'Un génie de la robotique nommé Hiro Hamada, se retrouve embarqué dans un complot criminel qui menace de détruire la paisible ville high-tech de San Fransokyo. Avec l’aide d’un de ses plus proche compagnon – un robot nommé Baymax –, Hiro s’associe à une équipe de jeunes amateurs qui s’est donnée pour mission de sauver la population.',
		duration: 82,
		traileryt: 'https://www.youtube.com/embed/POxF0vTtbys',
		genre: 'Dessin animé',
		langage: 'Anglais',
		actors: ['Scott Adsit-Baymax voice', 'Ryan Potter-Hiro voice', 'Daniel Henney-Tadashi voice'],
		director: 'Chris Williams',
		date: '2014-10-25',
		comments: [{ firstname: 'fred', avis: 'Film cool!', date: '13/04/2020', score: 3 }],
		nearly: false
	},

	{
		id: 6,
		title: 'Paddington 2',
		originaltitle: 'Paddington 2',
		bkgimage: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/mxIrSooBPUoPBukIRFBxjYudQoT.jpg',
		image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qXFEXAJq1gnF9A7wFbTu1OlgSOn.jpg',
		resume: 'Installé dans sa nouvelle famille à Londres. Paddington est devenu un membre populaire de la communauté locale. A la recherche du cadeau parfait pour le 100e anniversaire de sa chère Tante Lucy, Paddington tombe sur un livre animé exceptionnel. Il se met à multiplier les petits boulots dans le but de pouvoir l’acheter. Mais quand le livre est soudain volé, Paddington et la famille Brown vont devoir se lancer à la recherche du voleur…',
		duration: 103,
		traileryt: 'https://www.youtube.com/embed/pqTZEkYshTg',
		genre: 'Comédie',
		langage: 'Anglais',
		actors: ['Ben Whishaw', 'Sally Hawkins', 'Hugh Bonneville', 'Samuel Joslin', 'Madeleine Harris'],
		director: 'Paul King',
		date: '2017-11-10',
		comments: [],
		nearly: false
	},
	{
		id: 7,
		title: 'Daddy Cool',
		originaltitle: 'Daddy Cool',
		bkgimage: null,
		image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hrvJ9udxSMSy3GhJeDWuYTZB93x.jpg',
		resume: 'Adrien, 40 ans et totalement immature, se fait larguer par Maude, 35 ans, désireuse d’enfin fonder une famille. Pour tenter de reconquérir l’amour de sa vie, Adrien décide de monter dans le futur ex-appartement conjugal: une crèche à domicile… Le début, d\'une improbable expérience éducative...',
		duration: 97,
		traileryt: 'https://www.youtube.com/embed/w8m-7E1a2C0',
		genre: 'Comédie',
		langage: 'Français',
		actors: ['Vincent Elbaz', 'Laurence Arné', 'Grégory Fitoussi', 'Jean-François Cayrey', 'Andy Raconte'],
		director: 'Maxime Govare',
		date: '2017-09-08',
		comments: [],
		nearly: false
	},
	{
		id: 8,
		title: 'Blade Runner 2049',
		originaltitle: 'Blade Runner 2049',
		bkgimage: null,
		image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/c0jCZGc0XMW1TpRP2nRCrwY3Tex.jpg',
		resume: 'En 2049, la société est fragilisée par les nombreuses tensions entre les humains et leurs esclaves créés par bioingénierie. L’officier K est un Blade Runner : il fait partie d’une force d’intervention d’élite chargée de trouver et d’éliminer ceux qui n’obéissent pas aux ordres des humains. Lorsqu’il découvre un secret enfoui depuis longtemps et capable de changer le monde, les plus hautes instances décident que c’est à son tour d’être traqué et éliminé. Son seul espoir est de retrouver Rick Deckard, un ancien Blade Runner qui a disparu depuis des décennies...',
		duration: 164,
		traileryt: 'https://www.youtube.com/embed/2XYOae4Wp44',
		genre: 'Science-fiction',
		langage: 'Anglais',
		actors: ['Ryan Gosling', 'Harrisson Ford', 'Ana de Armas', 'Syvlia Hoeks', 'Robin Wright'],
		director: 'Denis Villeneuve',
		date: '2017-10-04',
		comments: [],
		nearly: false
	},
	{
		id: 9,
		title: 'La Planète des Singes - Suprématie',
		originaltitle: 'War for the Planet of the Apes',
		bkgimage: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/ulMscezy9YX0bhknvJbZoUgQxO5.jpg',
		image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4Ar01t6sW1ZZBcbz2R1wqjzIBdr.jpg',
		resume: 'César et les Singes sont contraints de mener un combat dont ils ne veulent pas contre une armée d\'Humains dirigée par un Colonel impitoyable. Les Singes connaissent des pertes considérables et César, dans sa quête de vengeance, va devoir lutter contre ses instincts les plus noirs. Au terme d’un périple qui le conduira à un face à face avec le Colonel, les Singes et les Humains vont se livrer une guerre sans merci à l\’issue de laquelle une seule des deux espèces survivra - et dominera la planète.',
		duration: 142,
		traileryt: 'https://www.youtube.com/embed/vILRRtrFV68',
		genre: 'Science-fiction',
		langage: 'Anglais',
		actors: ['Andy Serkis', 'Woody Harrelson', 'Steve Zahn', 'Karin Konoval', 'Terry Notary'],
		director: 'Matt Reeves',
		date: '2017-07-11',
		comments: [],
		nearly: false
	},


];


function getMoviesFromLocalStorage() {
	var moviesInStorage = JSON.parse(localStorage.getItem('movies'));
	if (moviesInStorage != undefined) {
		return moviesInStorage;
	}
	else {
		return moviesData;
	}
}

function saveMoviesInLocalStorage() {
	localStorage.setItem('movies', JSON.stringify(movies));
}

var movies = getMoviesFromLocalStorage();