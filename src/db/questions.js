import { v4 as uuidv4 } from 'uuid';

const QUESTIONS=[
    {
        id: uuidv4(),
        title:'Help & Support',
        imrUrl:'./assets/icons/icons-64-violet/support-64.png',
        parrafo: 'Our 24/7 support team is here to help you and make sure our product is up to date.',
        btn_title: 'support@supportemail.com'
    },
    {
        id: uuidv4(),
        title:'Media & Press',
        imrUrl:'./assets/icons/icons-64-violet/globe-64.png',
        parrafo: 'Online awards and publications. Get our media resources and learn about our company.',
        btn_title: 'media@youremail.com'
    },
    {
        id: uuidv4(),
        title:'Sales',
        imrUrl:'./assets/icons/icons-64-violet/wallet-64.png',
        parrafo: 'Have a presale question about our products and features? Or loooking for a refund?',
        btn_title: 'sales@salesmail.com'
    }
];

export default QUESTIONS;

export const QUESTIONS_LIST =[
    {
        id: uuidv4(),
        par: 'Installing the app on all devices'
    },
    {
        id: uuidv4(),
        par: 'How to implement and manage API key'
    },
    {
        id: uuidv4(),
        par: 'How to set uo and optimize your account'
    },
    {
        id: uuidv4(),
        par: 'Manage your account acccedd and security settings'
    },
    {
        id: uuidv4(),
        par: 'API integration basic overview'
    },
    {
        id: uuidv4(),
        par: 'Deactivating or deleting your account'
    },
];

export const CLIENTS=[
    {
        id: uuidv4(),
        imageUrl: './assets/clients/clients-logo1.png'
    },
    {
        id: uuidv4(),
        imageUrl: './assets/clients/clients-logo2.png'
    },
    {
        id: uuidv4(),
        imageUrl: './assets/clients/clients-logo3.png'
    },
    {
        id: uuidv4(),
        imageUrl: './assets/clients/clients-logo4.png'
    },
    {
        id: uuidv4(),
        imageUrl: './assets/clients/clients-logo5.png'
    }
];

export const LIST_QUESTIONS=[
    'Simple and Smart HTML code',
    'Works reintegrated in any part of the layout',
    'Reuse the elements from one design to another'
];