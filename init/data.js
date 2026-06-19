const sampleListings = [
        {
            /* TRENDING */ 
    title: "Maldives Water Villa",
    description:
        "Experience luxury above crystal-clear waters in this private overwater villa with breathtaking ocean views, premium amenities, and unforgettable sunsets.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=60",
    },
    price: 25000,
    location: "Maldives",
    country: "Maldives",
    category: "Trending",
    },

    {
    title: "Santorini Cliff Villa",
    description:
        "Enjoy stunning views of the Aegean Sea from this elegant whitewashed villa perched on the famous cliffs of Santorini.",
    image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dilpxours/image/upload/v1781762178/michael-lock-5H_zYTgTE3s-unsplash_dgrbo6.jpg",
    },
     price: 18000,
    location: "Santorini",
    country: "Greece",
    category: "Trending",
    },
     {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Trending",
  },

    {
    title: "Dubai Marina Penthouse",
    description:
        "Stay in a luxurious penthouse with panoramic skyline views, modern interiors, and world-class facilities in Dubai Marina.",
    image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dilpxours/image/upload/v1781762433/timo-volz-Of8qUpuUkjQ-unsplash_znggaq.jpg",
    },
    price: 22000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Trending",
    },
    {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Trending",
  },

    {
    title: "Goa Beach Luxury Villa",
    description:
        "Relax in a beautiful beachside villa featuring private spaces, tropical surroundings, and easy access to Goa's famous beaches.",
    image: {
        filename: "listingimage",
        url:"https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781763396/vivek-gFjcUF_2Pr4-unsplash_zlrrgb.jpg",
    },
    price: 12000,
    location: "Goa",
    country: "India",
    category: "Trending",
    },
     {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Trending",
  },

    /*ROOMS */
    {
    title: "Modern City Studio",
    description:
        "A stylish and comfortable studio apartment located in the heart of the city with all modern amenities for a perfect stay.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Bengaluru",
    country: "India",
    category: "Rooms",
    },

    {
    title: "Cozy Downtown Room",
    description:
        "Enjoy a peaceful and affordable stay in this beautifully designed room located close to major attractions.",
    image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781762796/siddhant-rane-jv6mPgwrh18-unsplash_j3ce1x.jpg",
        
    },
    price: 2500,
    location: "Kolkata",
    country: "India",
    category: "Rooms",
    },

    {
    title: "Executive Business Suite",
    description:
        "A premium business suite offering luxury interiors, workspace facilities, and a comfortable environment for professionals.",
    image: {
        filename: "listingimage",
        url:"https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781762732/christopher-limon-yfhFyi2fYag-unsplash_zopexj.jpg",
    },
    price: 6500,
    location: "Mumbai",
    country: "India",
    category:"Rooms",
    },
    {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Rooms",
  },

    {
    title: "Luxury Hotel Room",
    description:
        "Experience a five-star stay with elegant interiors, exceptional service, and premium facilities.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "Paris",
    country: "France",
    category: "Rooms",
    },
    {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Rooms",
  },
    

    /* ICONIC CITIES */

    {
    title: "Times Square Loft",
    description:
        "Live in the heart of New York with amazing city views, modern interiors, and walking access to iconic landmarks.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "New York City",
    country: "United States",
    category: "Iconic Cities",
    },
    {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
  },
    {
    title: "Eiffel View Apartment",
    description:
        "Wake up to breathtaking views of the Eiffel Tower from this elegant Parisian apartment.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    },
    price: 17000,
    location: "Paris",
    country: "France",
    category: "Iconic Cities",
    },

    {
    title: "Tokyo Skyline Apartment",
    description:
        "Experience the energy of Tokyo from this modern apartment surrounded by shopping, culture, and nightlife.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=60",
    },
    price: 14000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
    },
      
    /* MOUNTAINS */
    {
    title: "Himalayan View Cabin",
    description:
        "A peaceful wooden cabin surrounded by the majestic Himalayan ranges, offering breathtaking sunrise views and a cozy mountain experience.",
    image: {
        filename: "himalayan-view-cabin.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781762871/rohan-shah-HS0WDT0cpNE-unsplash_mrryez.jpg",
    },
    price: 4500,
    location: "Manali",
    country: "India",
    category: "Mountains",
    },
     {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Mountains",
  },
    {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Mountains",
  },

    {
    title: "Snow Peak Chalet",
    description:
        "Enjoy a luxurious stay near snow-covered peaks with warm interiors, fireplaces, and spectacular winter scenery.",
    image: {
        filename: "snow-peak-chalet.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781762924/aliaksei-antropau-9D4hQT9R0AA-unsplash_oddrzv.jpg",
    },
    price: 8000,
    location: "Gulmarg",
    country: "India",
    category: "Mountains",
    },
      {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },

    {
    title: "Alpine Escape Lodge",
    description:
        "Experience the beauty of the Swiss Alps in a charming lodge with panoramic mountain views and premium amenities.",
    image: {
        filename: "alpine-escape-lodge.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781763027/fabrizio-conti-K94HiVOKjZE-unsplash_kbya6p.jpg",
    },
    price: 18000,
    location: "Interlaken",
    country: "Switzerland",
    category: "Mountains",
    },

    {
    title: "Valley Mist Cottage",
    description:
        "Wake up among clouds and green valleys in this charming hillside cottage perfect for nature lovers.",
    image: {
        filename: "valley-mist-cottage.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781763766/nunzio-guerrera-sxey-IXs65M-unsplash_nla5rq.jpg",
    },
    price: 3500,
    location: "Darjeeling",
    country: "India",
    category: "Mountains",
    },

    {
    title: "Rocky Mountain Retreat",
    description:
        "A premium mountain retreat surrounded by forests and scenic landscapes, ideal for hiking and peaceful vacations.",
    image: {
        filename: "rocky-mountain-retreat.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781763909/dipankar-bailung-haA_CbEDcDg-unsplash_povyzq.jpg",
    },
    price: 9000,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
    },
     {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Mountains",
  },


    /* CASTLES */

    {
    title: "Royal Highland Castle",
    description:
        "Live like royalty inside a magnificent Scottish castle featuring historic architecture, grand halls, and beautiful gardens.",
    image: {
        filename: "royal-highland-castle.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781766839/rachel-davis-tn2rBnvIl9I-unsplash_h9ppky.jpg",
    },
    price: 25000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles",
    },

    {
    title: "Medieval Stone Manor",
    description:
        "Travel back in time with a stay at this beautifully preserved medieval manor surrounded by scenic countryside.",
    image: {
        filename: "medieval-stone-manor.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781766917/rita-burza-wH7Q603NhmM-unsplash_twzxrz.jpg",
    },
    price: 20000,
    location: "Bavaria",
    country: "Germany",
    category: "Castles",
    },

    {
    title: "Loire Valley Palace",
    description:
        "Experience French elegance in a luxurious palace featuring royal interiors, historic charm, and vineyard surroundings.",
    image: {
        filename: "loire-valley-palace.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781766974/hannah-wright-OlbCWO7068Y-unsplash_izt8ew.jpg",
    },
    price: 22000,
    location: "Loire Valley",
    country: "France",
    category: "Castles",
    },


    /* CAMPING */

    {
    title: "Forest Camping Haven",
    description:
        "Disconnect from the busy world and enjoy a peaceful camping experience surrounded by dense forests and fresh air.",
    image: {
        filename: "forest-camping-haven.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781767159/dave-hoefler-a3e7yEtQxJs-unsplash_cua9q3.jpg",
    },
    price: 2000,
    location: "Jim Corbett",
    country: "India",
    category: "Camping",
    },
      {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Camping",
  },
    {
    title: "Lakeside Tent Retreat",
    description:
        "Sleep under the stars beside a serene lake while enjoying bonfires, kayaking, and breathtaking natural scenery.",
    image: {
        filename: "lakeside-tent-retreat.jpg",
        url:"https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781767211/victor-larracuente-JQfYGhUcDSg-unsplash_oegyrq.jpg",
       
    },
    price: 2500,
    location: "Nainital",
    country: "India",
    category: "Camping",
    },
    {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "Camping",
  },
    {
    title: "Wilderness Adventure Camp",
    description:
        "An unforgettable outdoor escape with hiking trails, wildlife experiences, and comfortable camping facilities.",
    image: {
        filename: "wilderness-adventure-camp.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781768691/scott-goodwill-y8Ngwq34_Ak-unsplash_ozkuky.jpg",
    },
    price: 3500,
    location: "Yellowstone",
    country: "United States",
    category: "Camping",
    },

    {
    title: "Mountain Sky Camp",
    description:
        "Enjoy a unique camping experience under a sky full of stars with breathtaking mountain landscapes around you.",
    image: {
        filename: "mountain-sky-camp.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781767437/jonathan-forage-1azAjl8FTnU-unsplash_tpyolr.jpg",
    },
    price: 3000,
    location: "Ladakh",
    country: "India",
    category: "Camping",
    },


    /* AMAZING POOLS */

    {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "Amazing Pools",
  },
    {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Amazing Pools",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
   category: "Amazing Pools",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Amazing Pools",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Amazing Pools",
  },
    {
    title: "Ocean Breeze Resort",
    description:
        "Enjoy a refreshing seaside stay with a  modern amenities, and beautiful ocean views.",
    image: {
        filename: "ocean-breeze-resort.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781767733/julie-bounseng-h9YwsVkHYME-unsplash_xsy7r8.jpg",
    },
    price: 9000,
    location: "Goa",
    country: "India",
    category: "Amazing Pools",
    },

    {
    title: "Palm Paradise Villa",
    description:
        "Escape to a tropical villa surrounded by palm trees, offering a stunning poolside experience and complete privacy.",
    image: {
        filename: "palm-paradise-villa.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781767789/thor-schroeder-T91WhuBxDec-unsplash_dm4lqy.jpg",
    },
    price: 12000,
    location: "Phuket",
    country: "Thailand",
    category: "Amazing Pools",
    },

    {
    title: "Skyline Pool Penthouse",
    description:
        "Experience luxury living with a rooftop infinity pool and spectacular city skyline views.",
    image: {
        filename: "skyline-pool-penthouse.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781767859/will-truettner-7ZZ_FmVelQY-unsplash_r9ta8l.jpg",
    },
    price: 20000,
    location: "Singapore",
    country: "Singapore",
    category: "Amazing Pools",
    },


    /* FARMS */

    {
    title: "Green Meadow Farmstay",
    description:
        "Wake up to fresh countryside air in this peaceful farmstay surrounded by green fields and organic gardens.",
    image: {
        filename: "green-meadow-farmstay.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781768039/frances-gunn-QcBAZ7VREHQ-unsplash_bpvt0a.jpg",
    },
    price: 3500,
    location: "Punjab",
    country: "India",
    category: "Farms",
    },

    {
    title: "Tuscan Vineyard Cottage",
    description:
        "Experience the beauty of Italian vineyards with a charming cottage surrounded by rolling hills and grape gardens.",
    image: {
        filename: "tuscan-vineyard-cottage.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781768100/werner-sevenster-JuP0ZG0UNi0-unsplash_ppwyg5.jpg",
    },
    price: 11000,
    location: "Tuscany",
    country: "Italy",
    category: "Farms",
    },

    {
    title: "Organic Village Retreat",
    description:
        "A relaxing eco-friendly stay with traditional architecture, organic food, and beautiful natural surroundings.",
    image: {
        filename: "organic-village-retreat.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781768138/tomasz-filipek-CUWC-6MRcNg-unsplash_drfahf.jpg",
    },
    price: 4500,
    location: "Kerala",
    country: "India",
    category: "Farms",
    },


    /* ARCTIC */

    {
    title: "Northern Lights Cabin",
    description:
        "Witness the magical Aurora Borealis from a warm wooden cabin surrounded by snowy landscapes.",
    image: {
        filename: "northern-lights-cabin.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781768187/sean-c-davis-EwwVAaxZ4DM-unsplash_vrwbli.jpg",
    },
    price: 25000,
    location: "Tromsø",
    country: "Norway",
    category: "Arctic",
    },

    {
    title: "Snow Igloo Resort",
    description:
        "Stay inside a beautifully designed ice igloo and experience a once-in-a-lifetime snowy adventure.",
    image: {
        filename: "snow-igloo-resort.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781768212/marc-wieland-Xd8Li5VQ5jI-unsplash_xn1oew.jpg",
    },
    price: 22000,
    location: "Lapland",
    country: "Finland",
    category: "Arctic",
    },


    /* DOMES */

    {
    title: "Stargazer Glass Dome",
    description:
        "Sleep beneath a sky full of stars in this transparent luxury dome located in the serene mountains.",
    image: {
        filename: "stargazer-glass-dome.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781768281/dario-wagner-v9vxcW_FXyg-unsplash_lnctoi.jpg",
    },
    price: 8000,
    location: "Ladakh",
    country: "India",
    category: "Domes",
    },

    {
    title: "Desert Dome Escape",
    description:
        "Experience the beauty of the desert from a premium dome stay with stunning sunset views and modern comforts.",
    image: {
        filename: "desert-dome-escape.jpg",
        url: "https://res.cloudinary.com/dilpxours/image/upload/q_auto/f_auto/v1781768337/ganapathy-kumar-L75D18aVal8-unsplash_nmzigf.jpg",
    },
    price: 7000,
    location: "Jaisalmer",
    country: "India",
    category: "Domes",
    },
    {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Domes",
  },
]

module.exports = { data: sampleListings };