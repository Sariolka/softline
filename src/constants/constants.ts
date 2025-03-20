import img1 from '../images/tech.png';
import img2 from '../images/сybersecurity.png';
import img3 from '../images/import_substitution.png';
import img4 from '../images/cloud_solutions.png';
import img5 from '../images/transform.png';
import img6 from '../images/solutions.png';
//------------------------------------------
import med from '../images/icons/med.svg';
import bd from '../images/icons/bday.svg';
import phone from '../images/icons/phone.svg';
import fit from '../images/icons/fit.svg';
import hands from '../images/icons/hands.svg';
import house from '../images/icons/house.svg';
import tech from '../images/icons/tech.svg';
//------------------------------------------
import slide1 from '../images/Слайд1.png';
import slide2 from '../images/Слайд2.png';
import slide3 from '../images/Слайд3.png';
import slide4 from '../images/Слайд4.png';
import slide5 from '../images/Слайд5.png';
//------------------------------------------
import all from '../images/all.png';
import moscow from '../images/moscow.png';
import centre from '../images/centre.png';
import volga from '../images/volga.png';
import fareast from '../images/thefareast.png';
import south from '../images/south.png';
import ural from '../images/ural.png';
import siberia from '../images/siberia.png';
import north from '../images/northwest.png';

export const TRENDS_DATA = [
    {
        image: img6,
        title: 'Решения Softline',
        description:
            'ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.'
    },
    {
        image: img2,
        title: 'Кибербезопасность',
        description:
            'Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации. '
    },
    {
        image: img3,
        title: 'Импортозамещение',
        description:
            'ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.'
    },
    {
        image: img4,
        title: 'Облачные решения',
        description:
            'Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.'
    },
    {
        image: img5,
        title: 'Цифровая трансформация и\u00A0разработка ПО',
        description:
            'Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.'
    },
    {
        image: img1,
        title: 'Техническая поддержка Softline',
        description:
            '200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.'
    }
];

export const COMPENSATION_DATA = [
    {
        image: med,
        caption: 'ДМС'
    },
    {
        image: bd,
        caption: 'Выходной\nв день рождения'
    },
    {
        image: phone,
        caption: 'Корпоративная мобильная связь'
    },
    {
        image: fit,
        caption: 'Корпоративные скидки на спорт'
    },
    {
        image: hands,
        caption: 'LTI'
    }
];

export const ADDITIONAL_DATA = [
    {
        image: tech,
        caption: 'Оргтехники'
    },
    {
        image: med,
        caption: 'ДМС'
    },
    {
        image: house,
        caption: 'Ипотеки'
    }
];

export const SLIDE_DATA = [slide2, slide1, slide3, slide4, slide5];

export const MAP_DATA = [
    {
        image: all,
        text: 'Офисы во всех регионах',
        select: 'all'
    },
    {
        image: moscow,
        text: 'Офисы в Москве',
        select: 'Moscow'
    },
    {
        image: centre,
        text: 'Офисы в Центральном регионе',
        select: 'Centre'
    },
    {
        image: north,
        text: 'Офисы на Северо-Западе',
        select: 'northwest'
    },
    {
        image: south,
        text: 'Офисы на Юге',
        select: 'south'
    },
    {
        image: volga,
        text: 'Офисы на Волге',
        select: 'Volga'
    },
    {
        image: ural,
        text: 'Офисы на Урале',
        select: 'Ural'
    },
    {
        image: siberia,
        text: 'Офисы в Сибири',
        select: 'Siberia'
    },
    {
        image: fareast,
        text: 'Офисы на Дальнем востоке',
        select: 'The Far East'
    }
];

export const CITIES_DATA = {
    Москва: [],
    Центр: ['Воронеж', 'Ярославль', 'Белгород'],
    'Северо-Запад': ['Санкт-Петербург', 'Калининград'],
    Юг: ['Ростов-на-Дону', 'Краснодар', 'Волгоград'],
    Волга: ['Казань', 'Самара', 'Уфа', 'Оренбург', 'Нижний Новгород'],
    Урал: ['Екатеринбург', 'Челябинск', 'Пермь', 'Сургут', 'Тюмень', 'Ижевск'],
    Сибирь: ['Новосибирск', 'Омск', 'Томск', 'Красноярск', 'Иркутск'],
    'Дальний Восток': ['Хабаровск', 'Владивосток']
};
