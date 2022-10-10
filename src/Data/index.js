/* eslint-disable no-unused-vars */
const channel = {
  imageSrc:
    'https://votvapps-ng-test.tvaas.com/RTEFacade/images/attachments/TV2.png',
  id: 1895201,
  externalChannelId: 'LuxeTV',
  name: 'Luxe TV',
  url: '',
  description: '',
  category: '',
  extrafields: [
    {
      responseElementType: 'Extrafield',
      name: 'static-playback',
      value: 'false',
    },
  ],
  number: 12,
  npvrEnabled: false,
  isNpvrActivated: false,
  isCatchupActivated: false,
  catchupEnabled: false,
  favouriteEnabled: false,
  isFavouriteActivated: false,
  purchaseEnabled: false,
  isPurchaseActivated: false,
};

const program = {
  id: 12966715,
  name: 'Los milagros de la rosa',
  shortName: '',
  serisName: '',
  description: '',
  imageSrc: 'https://votvapps-ng-test.tvaas.com/RTEFacade/images/12055411.jpg',
  prName: 'APT',
  startDate: 1641769200000, //(timestamp)
  endDate: 1641776400000, //(timestamp)
  startDateAdjusted: 1641769200000, // default equal to startDate (timestamp), adjusted to fix start of day (00:00:00)
  endDateAdjusted: 1641776400000, // default equal to endDate (timestamp), adjusted to fix end of day (23:59:59)
  referanceProgramId: '2466657917202201091800120',
  flags: 0,
  seriesSeasion: '',
  responseElementType: 'Program',
  price: 0.0,
  genres: [],
  prLevel: 0,
};

export const channeList = [
  {
    ...channel,
  },
  {
    ...channel,
  },
  {
    ...channel,
  },
  {
    ...channel,
  },
  {
    ...channel,
  },
  {
    ...channel,
  },
  {
    ...channel,
  },
];

export const programList = [
  {
    channelExternalId: 'France24Fr2',
    programs: [program],
  },
  {
    channelExternalId: 'ArteLoop',
    programs: [program],
  },
  {
    channelExternalId: 'Arte',
    programs: [program],
  },
  {
    channelExternalId: 'ArteLoop',
    programs: [program],
  },
  {
    channelExternalId: 'Arte',
    programs: [program],
  },
  {
    channelExternalId: 'ArteLoop',
    programs: [program],
  },
  {
    channelExternalId: 'Arte',
    programs: [program],
  },
];
