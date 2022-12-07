'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/kruppab/cl9v8e9hc004614miirbxljwt',
  accessToken:
    'pk.eyJ1Ijoia3J1cHBhYiIsImEiOiJjano4aTYwNnkwbTFnM21ueXJpOW95amprIn0.kO8jFp__dZHodqvqWRfS2w',
  CSV: './ds_processors.csv',
  center: [16.36203, 48.21367],
  zoom: 5.48,
  title: 'Donau Soja processors map',
  description:
    'Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.',
  sideBarInfo: ['Company', 'Location', 'Type'],
  popupInfo: ['Company'],
  filters: [
    {
      type: 'dropdown',
      title: 'Countries: ',
      columnHeader: 'Country',
      listItems: [
        'Austria',
        'Belarus',
'Croatia',
'Finland',
'France',
'Germany',
'Hungary',
'Italy',
'Lithuania',
'Luxembourg',
'Netherlands',
'Poland',
'Romania',
'Russia',
'Serbia',
'Spain',
'Switzerland',
'Ukraine',
      ],
    },
    {
      type: 'dropdown',
      title: 'Type: ',
      columnHeader: 'Type', // Case sensitive - must match spreadsheet entry
      listItems: ['compound feed producer',
'oil mill',
'primary collector',
'primary processor',], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    
  ],
};
