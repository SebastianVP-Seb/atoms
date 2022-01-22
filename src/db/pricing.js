import { v4 as uuidv4 } from 'uuid';

const PRICING=[
    {
        id: uuidv4(),
        title: 'FREE',
        cost: '$ 0 / month',
        items: [
            '1 User Account',
            '10 Team Members',
            'Unlimited Emails Accounts',
            'Set And Manage Permissions',
            'API & extension support',
            'Developer support',
            'A / B Testing'
        ]
    },
    {
        id: uuidv4(),
        title: 'STARTUP',
        cost: '$ 29 / month',
        items: [
            '10 User Account',
            '100 Team Members',
            'Unlimited Emails Accounts',
            'Set And Manage Permissions',
            'API & extension support',
            'Developer support',
            'A / B Testing'
        ]
    },
    {
        id: uuidv4(),
        title: 'PRO',
        cost: '$ 49 / month',
        items: [
            '50 User Account',
            '500 Team Members',
            'Unlimited Emails Accounts',
            'Set And Manage Permissions',
            'API & extension support',
            'Developer support',
            'A / B Testing'
        ]
    },
    {
        id: uuidv4(),
        title: 'ULTRA',
        cost: '$ 99 / month',
        items: [
            'Unlimited User Account',
            'Unlimited Team Members',
            'Unlimited Emails Accounts',
            'Set And Manage Permissions',
            'API & extension support',
            'Developer support',
            'A / B Testing'
        ]
    }
];

export default PRICING;

export const PRICING_SUBMENU=['Monthly', 'Yearly'];