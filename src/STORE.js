export default {
    links: [{to: '/', name: 'Home'}, {to: '/tech', name: 'Tech'}, {to: '/books', name: 'Books'}, {
        to: '/future',
        name: 'Future'
    }, {
        to: '/about',
        name: 'About'
    }],
    home: {
        header: 'Home',
        youtube:
            {link: 'QrR_gm6RqCo', title: 'Introduction', description: ['Yeet', 'Dope AF', 'Working a bit too well?']}},
    books: {
        header: 'Books', link: 'books', isAbove: true,
        introduction:
            {description: ['Book Club is now']},
        youtube:
            [{link: 'QrR_gm6RqCo', title: 'Fiction', description: ''}],
        conclusion:
            {header: 'Fuck me Papi', externalLink: {link:'https:', name:'Yeet'}, title: 'Nonfiction', description: ['']}},
    tech: {
        header: 'Technology', link: 'tech', isAbove: true,
        introduction:
            {description: ['Dope ', 'As ', 'Fuck'], externalLink: {link: 'https://Checkmeout', name: 'Dope'}},
        youtube:
            [{link: 'QrR_gm6RqCo', title: 'Top #1', description: ['']},
            {link: 'QrR_gm6RqCo', title: 'Top #2', description: ['Already 89% done', 'Super Easy Site FR', 'Gonna Just Hide Pages']},
            {link: 'QrR_gm6RqCo', title: 'Top #3', description: ['sexy as fuck', 'Bro it works so well']}],
        conclusion:
            {header: 'Today is the day!', externalLink: {link: 'https://jonnydeates.com', name: 'Jonny Deates'}}
    },
    future: {
        header: 'Future', link: 'future', isAbove: true,
        introduction: {description: ['Dope ', 'As ', 'Fuck']},
        youtube: [{link: 'QrR_gm6RqCo', title: 'Where we will Go:', description: ['']},
            {link: 'QrR_gm6RqCo', title: 'Aliens', description: ['Already 89% done', 'Super Easy Site FR', 'Gonna Just Hide Pages']},
            {link: 'QrR_gm6RqCo', title: 'New Technologies', description: ['sexy as fuck', 'Bro it works so well']}]},
    about: {
        header: 'About',
        introduction:
            {description: 'The idea is strong with me'},
        conclusion:
            {header: 'The Brand', description: ['Yes', 'Here', 'Data']}
    },
};