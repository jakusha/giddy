import theme from "@themes/index"

export const persolnalize = [
    {id: 1, name: "Health"},
    {id: 2, name: "Music"},
    {id: 3, name: "Fashion"},
    {id: 4, name: "Food"},
    {id: 5, name: "Physical Activity"},
    {id: 6, name: "Politics"},
    {id: 7, name: "Technology"},
    {id: 8, name: "Travel"},
    {id: 9, name: "Entertainment"},
    {id: 10, name: "Education"},
    {id: 11, name: "Gaming"},
    {id: 12, name: "Business"},
    {id: 13, name: "Lifestyle"},
    {id: 14, name: "News"},
    {id: 15, name: "Art"},
    {id: 16, name: "Sports"},
    {id: 17, name: "Relationships"},
    {id: 18, name: "Science"},
    {id: 19, name: "Environment"},
    {id: 20, name: "DIY"},
    {id: 21, name: "Personal Development"}
]


export const stories = [
    {
        id: 0,
        image: theme.images.pexels1,
        title: 'gaby',
        noOfStreams: 'hahahk',
        avatar: theme.images.pexels5
    },
    {
        id: 1,
        image: theme.images.pexels1,
        title: 'gaby',
        noOfStreams: '4.4k',
        avatar: theme.images.avatar2
    },
    {
        id: 2,
        image: theme.images.pexels2,
        title: 'gaby',
        noOfStreams: '4.4k',
        avatar: theme.images.avatar3
    },
    {
        id: 3,
        image: theme.images.pexels3,
        title: 'gaby',
        noOfStreams: '4.4k',
        avatar: theme.images.avatar
    },
    {
        id: 4,
        image: theme.images.pexels4,
        title: 'gaby',
        noOfStreams: '4.4k',
        avatar: theme.images.avatar3
    },
]

export const Feed = [
    {
        id: 1,
        opAvatar: theme.images.avatar,
        opUsername: 'Tommy Snooze',
        opHandle: '@refoigs',
        opContentImage: theme.images.pexels3,
        opHearts: 100,
        opComments: 12,
        txtContent: 'lorem ipsum bla bla bla',
        userAvatar: theme.images.avatar2,
        opPostTime: '10 minutes ago'
    },
    {
        id: 2,
        opAvatar: theme.images.avatar2,
        opUsername: 'Jane Doe',
        opHandle: '@janedoe',
        opContentImage: theme.images.pexels4,
        opHearts: 230,
        opComments: 34,
        txtContent: 'Exploring the beautiful landscapes of New Zealand!',
        userAvatar: theme.images.avatar3,
        opPostTime: '2 hours ago'
    },
    {
        id: 3,
        opAvatar: theme.images.avatar3,
        opUsername: 'John Smith',
        opHandle: '@johnsmith',
        opContentImage: theme.images.pexels5,
        opHearts: 175,
        opComments: 29,
        txtContent: 'Had an amazing time at the tech conference!',
        userAvatar: theme.images.avatar,
        opPostTime: '1 day ago'
    },
    {
        id: 4,
        opAvatar: theme.images.avatar4,
        opUsername: 'Alice Johnson',
        opHandle: '@alicej',
        opContentImage: theme.images.pexels6,
        opHearts: 340,
        opComments: 45,
        txtContent: 'Sunset at the beach is the best!',
        userAvatar: theme.images.avatar2,
        opPostTime: '3 days ago'
    },
    {
        id: 5,
        opAvatar: theme.images.avatar5,
        opUsername: 'Mike Brown',
        opHandle: '@mikebrown',
        opContentImage: theme.images.pexels7,
        opHearts: 410,
        opComments: 50,
        txtContent: 'Just cooked a delicious meal! #foodie',
        userAvatar: theme.images.avatar3,
        opPostTime: '5 days ago'
    },
    {
        id: 6,
        opAvatar: theme.images.avatar6,
        opUsername: 'Emma Wilson',
        opHandle: '@emmawilson',
        opContentImage: theme.images.pexels8,
        opHearts: 275,
        opComments: 20,
        txtContent: 'Reading a great book today!',
        userAvatar: theme.images.avatar,
        opPostTime: '1 week ago'
    },
    {
        id: 7,
        opAvatar: theme.images.avatar7,
        opUsername: 'Oliver Davis',
        opHandle: '@oliverdavis',
        opContentImage: theme.images.pexels9,
        opHearts: 320,
        opComments: 28,
        txtContent: 'Cycling through the mountains!',
        userAvatar: theme.images.avatar2,
        opPostTime: '2 weeks ago'
    },
    {
        id: 8,
        opAvatar: theme.images.avatar8,
        opUsername: 'Sophia Moore',
        opHandle: '@sophiamoore',
        opContentImage: theme.images.pexels10,
        opHearts: 190,
        opComments: 15,
        txtContent: 'Baking some cookies today!',
        userAvatar: theme.images.avatar3,
        opPostTime: '3 weeks ago'
    },
    {
        id: 9,
        opAvatar: theme.images.avatar9,
        opUsername: 'Liam Taylor',
        opHandle: '@liamtaylor',
        opContentImage: theme.images.pexels11,
        opHearts: 380,
        opComments: 42,
        txtContent: 'Visited a new coffee shop today!',
        userAvatar: theme.images.avatar,
        opPostTime: '1 month ago'
    },
    {
        id: 10,
        opAvatar: theme.images.avatar10,
        opUsername: 'Mia Martin',
        opHandle: '@miamartin',
        opContentImage: theme.images.pexels12,
        opHearts: 500,
        opComments: 60,
        txtContent: 'Traveling to Paris for the first time!',
        userAvatar: theme.images.avatar2,
        opPostTime: '2 months ago'
    }
];


export const NotificationList = [
    {
        id: 1,
        text: 'arnold indicated that he likes your post',
        time: '10 minutes ago',
        icontype: 'filledHeart',
        notiImage: theme.images.avatar4
    },
    {
        id: 2,
        text: 'bob liked your comment',
        subText: 'I really like this!',
        time: '10 minutes ago',
        icontype: 'filledHeart',
        notiImage: theme.images.avatar2
    },
    {
        id: 3,
        text: 'tom commented on your post',
        time: '10 minutes ago',
        icontype: 'messageFilled',
        notiImage: theme.images.avatar3
    },
    {
        id: 4, 
        text: 'tom has started following you',
        time: '10 minutes ago',
        icontype: 'profileFilled',
        notiImage: theme.images.avatar
    }
]

