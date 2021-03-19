var config = {
    style: 'mapbox://styles/grafa/ckdhx8rpo01b61ip8o9e8fth3',
    accessToken: 'pk.eyJ1IjoiZ3JhZmEiLCJhIjoiY2tkb3ZoNzZrMDZyMzMxbGo0YTF3ZHk2ZyJ9.u6m6_Sxxu5ITBuomsTyA3g',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Fave SUP spots in the PNW',
    subtitle: 'A biased opinion of great places to paddle',
    byline: 'by Rafa Gutierrez',
    footer: 'Source: Rafa Gutierrez',
    chapters: [
        {
            id: 'id-ri',
            title: 'Ross Island',
            image: './images/spots/ross-island.jpg',
            staticMap: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec nunc at neque lacinia pharetra.',
            location: {
                center: [ -122.66577,45.47073],
                zoom: 13.18,
                pitch: 60.00,
                bearing: -41.60
        },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'id-merwin',
            title: 'Merwin Lake (Yale Bridge)',
            image: './images/spots/merwin.jpg',
            staticMap: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec nunc at neque lacinia pharetra. Integer tempus sagittis metus.',
            location: {
                center: [ -122.36715, 45.95728 ],
                zoom: 13.57,
                pitch: 0.00,
                bearing: 0.00
        },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'id-estacada',
            title: 'Estacada Lake',
            image: './images/spots/estacada-lake.jpg',
            staticMap: true,
            description: 'Estacada Lake (aka Timber Park, Milo McIver)',
            location: {
                center: [-122.34706,45.29564],
                zoom: 12.92,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
