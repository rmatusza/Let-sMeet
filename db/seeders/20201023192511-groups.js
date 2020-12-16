'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Groups",
      [
        {
          name: 'Houtston Travel Buddies',
          description: 'Our travel club hosts adventures locally in Houston and around the world for all things travel, culture, adventure, & photography! Join us on a local photo walk, or travel talk during happy hour, and then meet new travel buddies for future adventures! This is a the perfect group for those looking to make new friends in Houston and find compatible travel & photography partners for life!',
          city: 'Houston',
          category: 'Travel',
          organizer_id: 1,
          members: 5,
          createdAt: new Date(),
          updatedAt: new Date(),

        },

        {
          name: 'Houston Lean Startup Circle',
          description: 'Houston Lean Startup Circle is your local community to learn together and apply the best Lean Startup tips, tricks and tools. As the LARGEST and FASTEST growing lean startup circle in the world, we’ve helped thousands of founders avoid mistakes that cost time and money to build a sustainable, thriving business.',
          city: 'Houston',
          category: 'Business',
          organizer_id: 2,
          members: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Soccer - Indoor Pickup Games',
          description: 'Pick up games at a brand new indoor / outdoor soccer facility downtown ($8- $10 per person) find more info at www.mainstreetsoccer.com',
          city: 'Houston',
          category: 'Sports',
          organizer_id: 3,
          members: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Free Yoga in Houston',
          description: "Let's get together and do yoga (for free!). There are so many amazing yoga instructors in Houston, and YOUniverSOUL Fest is bringing you some of the best through the CommUNITY Yoga series at Midtown Park on the first Saturday of every month. We will also post some more amazing free yoga events around town as well. These classes are open to all levels and ages - all are welcome! :)",
          city: 'Houston',
          category: 'Fitness',
          organizer_id: 4,
          members: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'DigitalCrafts | Learn to Code in Houston',
          description: "Learning to code? DigitalCrafts (http://digitalcrafts.com/) is the top-rated coding bootcamp in Atlanta and Houston, and we're launching in Tampa in early 2020! Our Immersive Program (https://www.digitalcrafts.com/immersive-web.html) is a 16-week intensive classroom experience, transforming beginners into full-stack software engineers with cutting-edge skill sets, polished portfolios, interview training, and career support. We also offer rotating, evening electives for current students and alumni as an additional perk of joining our network.  If you want to learn to code in the evenings and on weekends, we also offer a 26-week Flex Program (https://www.digitalcrafts.com/full-stack-flex.html). You get the same great education and benefits of being a student, at the hours that are more convenient for you.  We also offer staffing services for corporate clients, placing elite talent at all levels of your organization. If you need to train your existing team, our top-notch instructors are ready to teach your engineers the skills they need to help you deliver on your company's goals.  We're always looking to help creative and motivated builders breathe life into their ideas. If that's you, be sure to reach out to hello@digitalcrafts.com or give us a ring at 833-327-2387.",
          city: 'Houston',
          category: 'Technology',
          organizer_id: 5,
          members: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Active Houston Runners',
          description: "Our objective is to gather fitness-oriented people of all fitness levels and provide activities in a nice, social and friendly environment. Our questions aren’t meant to be intimidating, but informative, so that we can better understand your expectations. More information about Active Houston is available in Desktop view (scroll down on mobile) by clicking Discussions tab on home page.",
          city: 'Houston',
          category: 'Fitness',
          organizer_id: 6,
          members: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'The Houston French Language and Culture Meetup Group',
          description: "Hello and welcome to our French conversation and culture group!  We have French conversation group meetings all over the Houston Metro area, and also parties and get-togethers. Sometimes we go see French films and dine in French restaurants as well as those of other Francophone parts of the world (Canada, Haiti, North Africa, the Antilles, Belgium, Switzerland, Cajun country, Vietnam, etc.) We provide you with the latest information and announcements from Francophile/Francophone organizations and merchants in the Houston area and beyond: check our calendar often to stay informed",
          city: 'Houston',
          category: 'Language',
          organizer_id: 7,
          members: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Houston Active Dogs',
          description: "The Houston Active Dogs Meetup Group is open for active, non-aggressive, well-socialized dogs of all ages and breeds. HAD Members enjoy meeting and getting together with their social canine companions! We meet at various locations - dog parks, dog-friendly restaurants taverns and events - around the Houston-area to allow our dogs to play and socialize, and to give us the opportunity to make new friends within the *HAD* Group. We are dedicated to the on-going well-being of our canine companions through socialization and recreation. Please utilize this site for an up-to-date info on, and listing of, Dog Parks in the Houston-area: http://www.houstondogpark.org/",
          city: 'Houston',
          category: 'Animals',
          organizer_id: 8,
          members: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'The Austin Python Meetup',
          description: "Meet other local Python programming language enthusiasts! Ask your questions about any aspect of Python development, including 'how do I start learning Python?'",
          city: 'Austin',
          category: 'Technology',
          organizer_id: 9,
          members: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Keep Austin Fit',
          description: "We will keep Austin Fit. Working toward a healthy life style for people who want to exercise in a group setting. Meet other people who share your fitness goals. Spread the fitness fever and invite all of your family, friends and coworkers. It doesn't matter where you start from. Everyone is welcome here.",
          city: 'Austin',
          category: 'Fitness',
          organizer_id: 10,
          members: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'International Multicultural Community',
          description: "This is a group for fun people who have traveled around the world. sharing multicultural and international experiences, the love of food, music, books, fashion, languages, culture etc etc As we are having fun and develop friendship we will be trying to help different charities. Please bring your fun, humble self to this wonderful community. Thanks.",
          city: 'Austin',
          category: 'Culture',
          organizer_id: 11,
          members: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Austin Area Paddlers',
          description: "This group is all about safety, fun, and adventure on the water. Austin Canoe and Kayak, ACK.COM, dropped out as our Sponsor as of 12/31/2019, and there is NO MU MEMBER DISCOUNT at their Burnet Road Store. LET ME KNOW ANY SUGGESTIONS FOR MU SPONSORS GOING FORWARD. Central TX is blessed with many Spring-fed and Dam-release rivers & creeks. The majority of trips are BYO boat/paddle/PFD. If rentals are available, I will note that on the event posting. I’m glad you joined this group, P.S. See previous MU Event - Central TX River Maps For Your Use, NOT an Event - to build your own paddle trips & maps.",
          city: 'Austin',
          category: 'Outdoors',
          organizer_id: 12,
          members: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Austin Improv Connection Meetup',
          description: "Improv Connection is a space curated to help you let loose, have fun, and laugh without limitation in a friendly, engaging, and high-energy environment! This improv meetup is perfect for the beginner - all the way up to the most advanced improv warriors - no experience is required.",
          city: 'Austin',
          category: 'Social',
          organizer_id: 13,
          members: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
