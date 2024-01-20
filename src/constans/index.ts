export interface Campaign {
  campaignId: number;
  clicks: number;
  cost: number;
  date: string;
}

export interface Profile {
  profileId: number;
  country: string;
  marketplace: string;
  campaigns: Campaign[];
}

export interface Account {
  accountId: number;
  email: string;
  authToken: string;
  creationDate: string;
  profiles: Profile[];
}

export const accountsData: Account[] = [
  {
    accountId: 1,
    email: 'john@example.com',
    authToken: 'abc123',
    creationDate: '2023-01-01',
    profiles: [
      {
        profileId: 101,
        country: 'USA',
        marketplace: 'Amazon',
        campaigns: [
          { campaignId: 1001, clicks: 150, cost: 500, date: '2023-01-02' },
          { campaignId: 1002, clicks: 120, cost: 450, date: '2023-01-03' },
          { campaignId: 1003, clicks: 150, cost: 500, date: '2023-01-02' },
          { campaignId: 1004, clicks: 150, cost: 500, date: '2023-01-02' },
          { campaignId: 1005, clicks: 150, cost: 500, date: '2023-01-02' },
          { campaignId: 1006, clicks: 150, cost: 500, date: '2023-01-02' },
          { campaignId: 1007, clicks: 150, cost: 500, date: '2023-01-02' },
        ],
      },
      {
        profileId: 102,
        country: 'Canada',
        marketplace: 'Etsy',
        campaigns: [
          { campaignId: 1008, clicks: 200, cost: 600, date: '2023-01-05' },
          { campaignId: 1009, clicks: 180, cost: 550, date: '2023-01-07' },
          { campaignId: 1010, clicks: 200, cost: 600, date: '2023-01-05' },
          { campaignId: 1011, clicks: 180, cost: 550, date: '2023-01-07' },
          { campaignId: 1012, clicks: 200, cost: 600, date: '2023-01-05' },
          { campaignId: 1013, clicks: 180, cost: 550, date: '2023-01-07' },
          { campaignId: 1014, clicks: 200, cost: 600, date: '2023-01-05' },
          { campaignId: 1015, clicks: 180, cost: 550, date: '2023-01-07' },
        ],
      },
      {
        profileId: 103,
        country: 'Canada',
        marketplace: 'Etsy',
        campaigns: [
          { campaignId: 1016, clicks: 200, cost: 600, date: '2023-01-05' },
          { campaignId: 1017, clicks: 180, cost: 550, date: '2023-01-07' },
          { campaignId: 1018, clicks: 200, cost: 600, date: '2023-01-05' },
          { campaignId: 1019, clicks: 180, cost: 550, date: '2023-01-07' },
          { campaignId: 1020, clicks: 200, cost: 600, date: '2023-01-05' },
          { campaignId: 1021, clicks: 180, cost: 550, date: '2023-01-07' },
        ],
      },
      {
        profileId: 104,
        country: 'USA',
        marketplace: 'Amazon',
        campaigns: [
          { campaignId: 1022, clicks: 150, cost: 500, date: '2023-01-02' },
          { campaignId: 1023, clicks: 120, cost: 450, date: '2023-01-03' },
          { campaignId: 1024, clicks: 150, cost: 500, date: '2023-01-02' },
          { campaignId: 1025, clicks: 120, cost: 450, date: '2023-01-03' },
        ],
      },
      {
        profileId: 105,
        country: 'Canada',
        marketplace: 'Etsy',
        campaigns: [
          { campaignId: 1026, clicks: 200, cost: 600, date: '2023-01-05' },
          { campaignId: 1027, clicks: 180, cost: 550, date: '2023-01-07' },
          { campaignId: 1028, clicks: 200, cost: 600, date: '2023-01-05' },
          { campaignId: 1029, clicks: 180, cost: 550, date: '2023-01-07' },
          { campaignId: 1030, clicks: 200, cost: 600, date: '2023-01-05' },
          { campaignId: 1031, clicks: 180, cost: 550, date: '2023-01-07' },
        ],
      },
      {
        profileId: 106,
        country: 'USA',
        marketplace: 'Amazon',
        campaigns: [
          { campaignId: 1032, clicks: 150, cost: 500, date: '2023-01-02' },
          { campaignId: 1033, clicks: 120, cost: 450, date: '2023-01-03' },
        ],
      },
    ],
  },
  {
    accountId: 2,
    email: 'alice@example.com',
    authToken: 'def456',
    creationDate: '2023-01-03',
    profiles: [
      {
        profileId: 201,
        country: 'UK',
        marketplace: 'Tesco',
        campaigns: [
          { campaignId: 2001, clicks: 100, cost: 300, date: '2023-01-10' },
          { campaignId: 2002, clicks: 80, cost: 250, date: '2023-01-12' },
          { campaignId: 2003, clicks: 100, cost: 300, date: '2023-01-10' },
          { campaignId: 2004, clicks: 80, cost: 250, date: '2023-01-12' },
          { campaignId: 2005, clicks: 100, cost: 300, date: '2023-01-10' },
          { campaignId: 2006, clicks: 80, cost: 250, date: '2023-01-12' },
        ],
      },
      {
        profileId: 202,
        country: 'Germany',
        marketplace: 'Zalando',
        campaigns: [
          { campaignId: 2007, clicks: 120, cost: 400, date: '2023-01-15' },
          { campaignId: 2008, clicks: 90, cost: 350, date: '2023-01-17' },
          { campaignId: 2009, clicks: 120, cost: 400, date: '2023-01-15' },
          { campaignId: 2010, clicks: 90, cost: 350, date: '2023-01-17' },
          { campaignId: 2011, clicks: 120, cost: 400, date: '2023-01-15' },
          { campaignId: 2012, clicks: 90, cost: 350, date: '2023-01-17' },
        ],
      },
      {
        profileId: 203,
        country: 'UK',
        marketplace: 'Tesco',
        campaigns: [
          { campaignId: 2013, clicks: 100, cost: 300, date: '2023-01-10' },
          { campaignId: 2014, clicks: 80, cost: 250, date: '2023-01-12' },
          { campaignId: 2015, clicks: 100, cost: 300, date: '2023-01-10' },
          { campaignId: 2016, clicks: 80, cost: 250, date: '2023-01-12' },
          { campaignId: 2017, clicks: 100, cost: 300, date: '2023-01-10' },
          { campaignId: 2018, clicks: 80, cost: 250, date: '2023-01-12' },
        ],
      },
      {
        profileId: 204,
        country: 'Germany',
        marketplace: 'Zalando',
        campaigns: [
          { campaignId: 2019, clicks: 120, cost: 400, date: '2023-01-15' },
          { campaignId: 2020, clicks: 90, cost: 350, date: '2023-01-17' },
          { campaignId: 2021, clicks: 120, cost: 400, date: '2023-01-15' },
          { campaignId: 2022, clicks: 90, cost: 350, date: '2023-01-17' },
          { campaignId: 2023, clicks: 120, cost: 400, date: '2023-01-15' },
          { campaignId: 2024, clicks: 90, cost: 350, date: '2023-01-17' },
        ],
      },
    ],
  },
  {
    accountId: 3,
    email: 'german@example.com',
    authToken: 'fde456',
    creationDate: '2021-03-25',
    profiles: [
      {
        profileId: 301,
        country: 'UA',
        marketplace: 'Rozetka',
        campaigns: [
          { campaignId: 3001, clicks: 50, cost: 200, date: '2023-01-11' },
          { campaignId: 3002, clicks: 60, cost: 210, date: '2023-01-13' },
          { campaignId: 3003, clicks: 60, cost: 210, date: '2023-01-13' },
          { campaignId: 3004, clicks: 60, cost: 210, date: '2023-01-13' },
        ],
      },
      {
        profileId: 302,
        country: 'UA',
        marketplace: 'OLX',
        campaigns: [
          { campaignId: 3005, clicks: 220, cost: 4320, date: '2022-01-15' },
          { campaignId: 3006, clicks: 2230, cost: 3220, date: '2022-01-17' },
          { campaignId: 3007, clicks: 2230, cost: 3220, date: '2022-01-17' },
        ],
      },
      {
        profileId: 303,
        country: 'UA',
        marketplace: 'Rozetka',
        campaigns: [
          { campaignId: 3008, clicks: 50, cost: 200, date: '2023-01-11' },
          { campaignId: 3009, clicks: 60, cost: 210, date: '2023-01-13' },
          { campaignId: 3010, clicks: 60, cost: 210, date: '2023-01-13' },
          { campaignId: 3011, clicks: 60, cost: 210, date: '2023-01-13' },
        ],
      },
      {
        profileId: 304,
        country: 'UA',
        marketplace: 'OLX',
        campaigns: [
          { campaignId: 3012, clicks: 220, cost: 4320, date: '2022-01-15' },
          { campaignId: 3013, clicks: 2230, cost: 3220, date: '2022-01-17' },
          { campaignId: 3014, clicks: 2230, cost: 3220, date: '2022-01-17' },
        ],
      },
      {
        profileId: 305,
        country: 'UA',
        marketplace: 'Rozetka',
        campaigns: [
          { campaignId: 3015, clicks: 50, cost: 200, date: '2023-01-11' },
          { campaignId: 3016, clicks: 60, cost: 210, date: '2023-01-13' },
          { campaignId: 3017, clicks: 60, cost: 210, date: '2023-01-13' },
          { campaignId: 3018, clicks: 60, cost: 210, date: '2023-01-13' },
        ],
      },
      {
        profileId: 306,
        country: 'UA',
        marketplace: 'OLX',
        campaigns: [
          { campaignId: 3019, clicks: 220, cost: 4320, date: '2022-01-15' },
          { campaignId: 3020, clicks: 2230, cost: 3220, date: '2022-01-17' },
          { campaignId: 3021, clicks: 2230, cost: 3220, date: '2022-01-17' },
        ],
      },
    ],
  },
  {
    accountId: 4,
    email: 'david@example.com',
    authToken: 'bca123',
    creationDate: '2023-02-01',
    profiles: [
      {
        profileId: 401,
        country: 'USA',
        marketplace: 'Amazon',
        campaigns: [
          { campaignId: 4001, clicks: 2150, cost: 500, date: '2023-01-02' },
          { campaignId: 4002, clicks: 2120, cost: 450, date: '2023-01-03' },
          { campaignId: 4003, clicks: 2120, cost: 450, date: '2023-01-03' },
          { campaignId: 4004, clicks: 2120, cost: 450, date: '2023-01-03' },
          { campaignId: 4005, clicks: 2120, cost: 450, date: '2023-01-03' },
        ],
      },
      {
        profileId: 402,
        country: 'Canada',
        marketplace: 'Etsy',
        campaigns: [
          { campaignId: 4006, clicks: 2200, cost: 600, date: '2023-01-05' },
          { campaignId: 4007, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4008, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4009, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4010, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4011, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4012, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4013, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4014, clicks: 2180, cost: 550, date: '2023-01-07' },
        ],
      },
      {
        profileId: 403,
        country: 'Canada',
        marketplace: 'Etsy',
        campaigns: [
          { campaignId: 4015, clicks: 2200, cost: 600, date: '2023-01-05' },
          { campaignId: 4016, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4017, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4018, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4019, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4020, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4021, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4022, clicks: 2180, cost: 550, date: '2023-01-07' },
          { campaignId: 4023, clicks: 2180, cost: 550, date: '2023-01-07' },
        ],
      },
    ],
  },
  {
    accountId: 5,
    email: 'alice@example.com',
    authToken: 'd2ef456',
    creationDate: '2023-01-03',
    profiles: [
      {
        profileId: 501,
        country: 'UK',
        marketplace: 'Tesco',
        campaigns: [
          { campaignId: 5001, clicks: 100, cost: 300, date: '2023-01-10' },
          { campaignId: 5002, clicks: 80, cost: 250, date: '2023-01-12' },
        ],
      },
      {
        profileId: 502,
        country: 'Germany',
        marketplace: 'Zalando',
        campaigns: [
          { campaignId: 5003, clicks: 120, cost: 400, date: '2023-01-15' },
          { campaignId: 5004, clicks: 90, cost: 350, date: '2023-01-17' },
        ],
      },
      {
        profileId: 503,
        country: 'Germany',
        marketplace: 'Zalando',
        campaigns: [
          { campaignId: 5005, clicks: 120, cost: 400, date: '2023-01-15' },
          { campaignId: 5006, clicks: 90, cost: 350, date: '2023-01-17' },
          { campaignId: 5007, clicks: 90, cost: 350, date: '2023-01-17' },
        ],
      },
    ],
  },
  {
    accountId: 6,
    email: 'german@example.com',
    authToken: 'fd3e456',
    creationDate: '2021-03-25',
    profiles: [
      {
        profileId: 601,
        country: 'UA',
        marketplace: 'Rozetka',
        campaigns: [
          { campaignId: 6001, clicks: 50, cost: 200, date: '2023-01-11' },
          { campaignId: 6002, clicks: 60, cost: 210, date: '2023-01-13' },
          { campaignId: 6003, clicks: 60, cost: 210, date: '2023-01-13' },
          { campaignId: 6004, clicks: 60, cost: 210, date: '2023-01-13' },
        ],
      },
      {
        profileId: 602,
        country: 'UA',
        marketplace: 'OLX',
        campaigns: [
          { campaignId: 6005, clicks: 220, cost: 4320, date: '2022-01-15' },
          { campaignId: 6006, clicks: 2230, cost: 3220, date: '2022-01-17' },
        ],
      },
      {
        profileId: 603,
        country: 'UA',
        marketplace: 'OLX',
        campaigns: [
          { campaignId: 6005, clicks: 220, cost: 4320, date: '2022-01-15' },
          { campaignId: 6006, clicks: 2230, cost: 3220, date: '2022-01-17' },
          { campaignId: 6007, clicks: 2230, cost: 3220, date: '2022-01-17' },
          { campaignId: 6008, clicks: 2230, cost: 3220, date: '2022-01-17' },
        ],
      },
    ],
  },
];
