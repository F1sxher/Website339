/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/links',
        destination: '/',
        permanent: true,
      },
      {
        source: '/links/facebook',
        destination: 'https://facebook.com/kilroyrobotics',
        permanent: true,
      },
      {
        source: '/links/fb',
        destination: 'https://facebook.com/kilroyrobotics',
        permanent: true,
      },
      {
        source: '/links/github',
        destination: 'https://github.com/FIRST-TEAM-339',
        permanent: true,
      },
      {
        source: '/links/gh',
        destination: 'https://github.com/FIRST-TEAM-339',
        permanent: true,
      },
      {
        source: '/links/thebluealliance',
        destination: 'https://thebluealliance.com/team/339',
        permanent: true,
      },
      {
        source: '/links/tba',
        destination: 'https://thebluealliance.com/team/339',
        permanent: true,
      },
      {
        source: '/links/twitter',
        destination: 'https://twitter.com/kilroyrobotics',
        permanent: true,
      },
      {
        source: '/links/firstinspires',
        destination: 'https://firstinspires.org',
        permanent: true,
      },
      {
        source: '/links/usfirst',
        destination: 'https://firstinspires.org',
        permanent: true,
      },
      {
        source: '/links/first',
        destination: 'https://firstinspires.org',
        permanent: true,
      },
      {
        source: '/links/frc',
        destination: 'https://firstinspires.org',
        permanent: true,
      },
    ]
  },
};
