// 32 characters 
const sampleData = [
    {
        id: 0,
        keyName: '@$FEG#$T23ret45T',
        squares_description: 'First #vacay of the year',
        img_url: 'https://images.unsplash.com/photo-1710115129740-e882eb8c9e55?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        hashtags: ['vacay']
    },
    {
        id: 1,
        keyName: '',
        squares_description: 'Exploring the neighourhood',
        img_url: 'https://images.unsplash.com/photo-1710692063056-07d0e4c28b4b?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        hashtags: []
    },
    {
        id: 2,
        keyName: '',
        squares_description: 'Buildings and things #architecture',
        img_url: 'https://plus.unsplash.com/premium_photo-1676828656961-cf9caf2d6320?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        hashtags: ['architecture']
    },
    {
        id: 3,
        keyName: '',
        squares_description: 'Vintage #architecture',
        img_url: 'https://images.unsplash.com/photo-1711377785726-47c7dd8773ff?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        hashtags: ['architecture']
    },
    {
        id: 4,
        keyName: '',
        squares_description: `Today's view #vacay`,
        img_url: 'https://images.unsplash.com/photo-1571058008597-e47b641dbd70?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        hashtags: ['vacay']
    },
    {
        id: 5,
        keyName: '',
        squares_description: `Walking walking #travel`,
        img_url: 'https://images.unsplash.com/photo-1693559466120-ef20deff4d0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
        hashtags: ['travel']
    },
    {
        id: 6,
        keyName: '',
        squares_description: `My peaceful spot`,
        img_url: 'https://images.unsplash.com/photo-1624537045742-d75d67c8de40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
        hashtags: []
    },
    {
        id: 7,
        keyName: '',
        squares_description: `New friends`,
        img_url: 'https://images.unsplash.com/photo-1619337924148-58ada7a0092b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
        hashtags: []
    },
    {
        id: 8,
        keyName: '',
        squares_description: "Seashells by the seashore #vacay",
        img_url: 'https://images.unsplash.com/photo-1604348825621-22800b6ed16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
        hashtags: ['vacay']
    },
    {
        id: 9,
        keyName: '',
        squares_description: `Bird's eye view #travel`,
        img_url: 'https://images.unsplash.com/photo-1560178290-43a055ae5106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
        hashtags: ['travel']
    },
    {
        id: 10,
        keyName: '',
        squares_description: "The perfect pool for laps.",
        img_url: 'https://images.unsplash.com/photo-1506812428898-fe5a708f5359?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
        hashtags: []
    },
    {
        id: 11,
        keyName: '',
        squares_description: "When in Miami...",
        img_url: 'https://images.unsplash.com/photo-1530071291164-537d481750f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
        hashtags: []
    },
    {
        id: 12,
        keyName: '',
        squares_description: `Leave a voicemail, I'm not here #vacay`,
        img_url: 'https://images.unsplash.com/photo-1598041072698-794501a5fedf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
        hashtags: ['vacay']
    },
    {
        id: 13,
        keyName: '',
        squares_description: 'Wavy',
        img_url: "https://images.unsplash.com/photo-1562536163-d5bb2c47f4df?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hashtags: []
    },
    {
        id: 14,
        keyName: '',
        squares_description: 'My quiet place #peace',
        img_url: 'https://images.unsplash.com/photo-1644385790082-67c42c598889?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
        hashtags: ['peace']
    },
    


]

export default sampleData