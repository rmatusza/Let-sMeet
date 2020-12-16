'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Events",
      [
      {
        name: 'Mystical Israel & Timeless Jordan',
        description: "Our journey is spent exploring many corners of this beautiful country. Astounding landscapes, amazing people, surreal history (not only religious), and diverse varieties of local cuisine make for the trip of a lifetime.",
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 1,
        attendes: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'How do experienced founders validate their scale strategies to sustainably grow?',
        description: null,
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 2,
        attendes: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Tuesday 5v5 Co-Ed Indoor/Outdoor Pick Up Soccer!',
        description: "5v5 Indoor Soccer Match.",
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 3,
        attendes: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sunset Yoga with Youniversoul fest at Discovery Green',
        description: null,
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 4,
        attendes: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'DigitalCrafts Open House',
        description: "If you're thinking about enrolling in a coding bootcamp, you probably have a lot of questions. Here's your chance to ask those questions and get to know DigitalCrafts!",
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 5,
        attendes: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Saturday AM run Hermann/Rice run starting at Centennial Gardens',
        description: null,
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 6,
        attendes: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'French converstation from the comfort of your home via Zoom @ 10:00AM!',
        description: null,
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 7,
        attendes: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Puppies for Breakfast/Benefits Local Dog Rescues',
        description: "Puppies for Breakfast is a morning dog festival that works to bring everything “dog” to one place for a few hours. The event usually takes place in April/Mason on a Saturday from 10 am – 3 pm at Market Square Park in Downtown Houston.",
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 8,
        attendes: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'The Austin Python Meetup Monthly Meetup',
        description: "We typically have a main presentation or a series of lightning talks, followed by discussion and Q&A. There is a diversity of domains and experience levels represented, so come with your questions and be prepared to talk about how you use Python!",
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 9,
        attendes: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Hip-Hop',
        description: "Join us on our first Adult Hip Hop class this year. Jared Hale will guide class through Hip Hop choreography and isolations.",
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 10,
        attendes: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Salsa Class and Dance Thursdays',
        description: null,
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 11,
        attendes: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Boating Safety's Five Golden Rules to Know",
        description: "Come and hang out and discuss boating as well as boating safety",
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 12,
        attendes: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Best Friends & Belly Laughs COMMUNITY IMPORV!',
        description: "BFBL Improv is a space curated to help you let loose, have fun, and laugh without limitation in a friendly, engaging, and high-energy environment! This improv meetup is perfect for the beginner - all the way up to the most advanced improv warriors - no experience is required.",
        date_start: new Date('2020','11','09'),
        date_end: new Date('2020','11','10'),
        group_id: 13,
        attendes: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
