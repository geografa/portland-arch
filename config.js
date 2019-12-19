var config = {
    style: 'mapbox://styles/grafa/ck4by36yt2qzd1cln7nxt58jm',
    accessToken: 'pk.eyJ1IjoiZ3JhZmEiLCJhIjoiY2sybW10bHRnMDI4azNibG55czJrOHdxNCJ9.6elwTFMXNsRaVy4WO4halA',
    showMarkers: true,
    theme: 'yellow',
    alignment: 'left',
    title: 'Space & Place',
    subtitle: 'An architectural tour of Portland',
    byline: '- @geografa',
    footer: 'Source: Rafa Gutierrez',
    chapters: [
        {
            id: 'id-fhd',
            title: 'The Fair-haired Dumb Bell',
            image: './images/pdx/fhd.jpg',
            description: 'The Fair-Haired Dumbbell is a building located at 11 Northeast Martin Luther King Jr. Blvd., in Portland, Oregon\'s Kerns neighborhood, in the United States. Its exterior design was created by Los Angeles artist James Jean, and was selected by the Regional Arts & Culture Council, the city, and Guerrilla Development. Dan Cohen painted the artwork in June 2017. - Wikipedia, https://en.wikipedia.org/wiki/Fair-Haired_Dumbbell',
            location: {
                center: [-122.66186, 45.52359],
                zoom: 18.78,
                pitch: 60.00,
                bearing: -137.60
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
            id: 'id-kex',
            title: 'KEX',
            image: './images/pdx/kex.jpg',
            description: 'KEX first started in 2012, when a businessman and a set designer met at an abandoned biscuit factory in a strange corner of Reykjavík while scouting a location for an upcoming film. While the movie never got made, the vision for the set remained.',
            location: {
                center: [-122.66169, 45.52370],
                zoom: 18.36,
                pitch: 48.50,
                bearing: 42.83
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
            id: 'id-ch',
            title: 'US Customs House',
            image: './images/pdx/wework.jpg',
            description: 'US Customs House | Wework ',
            location: {
                center: [-122.67761, 45.52458],
                zoom: 18.67,
                pitch: 59.00,
                bearing: -36.00            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'id-port',
            title: 'The Portland Building',
            image: './images/pdx/portlandia.jpg',
            description: 'The Portland Building',
            location: {
                center: [-122.67843, 45.51526],
                zoom: 17.35,
                pitch: 51.50,
                bearing: -20.67
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'id-vmc',
            title: 'Veterans Memorial Coliseum',
            image: './images/pdx/vmc.jpg',
            description: 'Veterans Memorial Coliseum',
            location: {
                center: [-122.66871, 45.53283],
                zoom: 18.48,
                pitch: 60.00,
                bearing: -160.00            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
