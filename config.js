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
            description: 'The Fair-Haired Dumbbell is a building located at 11 Northeast Martin Luther King Jr. Blvd., in Portland, Oregon\'s Kerns neighborhood, in the United States. Its exterior design was created by Los Angeles artist James Jean, and was selected by the Regional Arts & Culture Council, the city, and Guerrilla Development. Dan Cohen painted the artwork in June 2017. - Wikipedia, https://en.wikipedia.org/wiki/Fair-Haired_Dumbbell <img src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-122.662,45.5231,13.35/375x200?access_token=pk.eyJ1IjoiZ3JhZmEiLCJhIjoiY2ptYjNtZWxnMDBrdDNwbnVicGJzOWg2NyJ9.9OulyCe3kEqMAXPbx1mKUA" />',
            location: {
                center: [-122.66187, 45.52352],
                zoom: 17.10,
                pitch: 53.00,
                bearing: -129.97
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
                center: [-122.66164, 45.52371],
                zoom: 17.55,
                pitch: 46.00,
                bearing: 45.23
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
        },
        {
            id: 'id-keller',
            title: 'Keller Fountain Park',
            image: './images/pdx/keller.jpg',
            description: 'Keller Fountain Park is a city park in downtown Portland, Oregon.[1] Originally named Forecourt Fountain or Auditorium Forecourt, the 0.92-acre (0.37 ha) park opened in 1970 across Third Avenue from what was then Civic Auditorium. In 1978, the park was renamed after Ira C. Keller, head of the Portland Development Commission (PDC) from 1958–1972.[1][2] Civic Auditorium was renamed as Keller Auditorium in 2000, but is named in honor of Ira\'s son, Richard B. Keller. The central feature of the park is the concrete water fountain. Keller Fountain is often noted as a memorable feature of the public landscape in downtown Portland, and in 1999 was awarded a medallion from the American Society of Landscape Architects. The fountain was designed by Angela Danadjieva using inspiration from waterfalls in the Columbia River Gorge located east of Portland. While the park is named Keller Fountain Park, the fountain itself is named Ira Keller Fountain. The fountain\'s pools hold 75,000 US gallons (280,000 l; 62,000 imp gal) of water, while the waterfalls pump 13,000 US gallons (49,000 l; 11,000 imp gal) per minute over the cascade.',
            location: {
                center: [-122.67889, 45.51248],
                zoom: 17.94,
                pitch: 58.50,
                bearing: -19.57
         },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'id-hollywood',
            title: 'Hollywood Theater',
            image: './images/pdx/hollywood.jpg',
            description: 'Hollywood Theater',
            location: {
                center: [-122.62082, 45.53567],
                zoom: 17.52,
                pitch: 59.00,
                bearing: 142.03
         },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
