import { v4 as uuidv4 } from 'uuid';

const LATERAL=[
    {
        id: uuidv4(),
        title: 'Company',
        it1: 'About',
        it2: 'Carrers',
        it3: 'Awards',
        it4: 'Users Program',
        it5: 'Locations'
    },
    {
        id: uuidv4(),
        title: 'Products',
        it1: 'Integrations',
        it2: 'API',
        it3: 'Pricing',
        it4: 'Documentation',
        it5: 'Release Notes'
    },
    {
        id: uuidv4(),
        title: 'Support',
        it1: 'Contact',
        it2: 'FAQ',
        it3: 'Press'
    }
];

export default LATERAL;

export const LATERAL_IMG=[
    {
        id: uuidv4(),
        imgUrl: './assets/social/black/facebook.png'
    },
    {
        id: uuidv4(),
        imgUrl: './assets/social/black/twitter.png'
    },
    {
        id: uuidv4(),
        imgUrl: './assets/social/black/linkedin.png'
    }
];