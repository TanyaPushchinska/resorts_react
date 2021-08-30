resorts = Resort.create([
    {
      name: 'Mallorca',
      image_url: 'https://marakuya.kiev.ua/images/spain/resorts/mallorca_big.jpg',
      slug: 'mallorca'
    },
    {
      name: 'Corfu',
      image_url: 'https://theworldpursuit.com/wp-content/uploads/2021/03/things-to-do-in-corfu-greece.jpg',
      slug: 'corfu'
    },
    {
      name: 'Corsica',
      image_url: 'https://i2.wp.com/thegoodlifefrance.com/wp-content/uploads/2021/02/corsica-island.jpg?w=800&ssl=1',
      slug: 'corsica'
    },
    {
      name: 'Hawaii',
      image_url: 'https://cdn.travelpulse.com/images/54aaedf4-a957-df11-b491-006073e71405/ee952e9e-f09c-49c2-bc5d-4303c880173a/630x355.jpg',
      slug: 'hawaii'
    },
    {
      name: 'Capri',
      image_url: 'https://a.cdn-hotels.com/gdcs/production196/d1937/52aee957-8699-46a1-bb2a-3aeaf65fcf7e.jpg?impolicy=fcrop&w=800&h=533&q=high',
      slug: 'capri'
    },
    {
      name: 'Maldives',
      image_url: 'http://aristeya.com.ua/wp-content/uploads/2021/04/lw2853_113271594_720x450.jpg',
      slug: 'maldives'
    }
  ]
)
reviews = Review.create([
    {
      title: 'Amazing time',
      description: 'Wanna spend all my life there',
      score: 5,
      resort: Resort.find_by(name: 'Mallorca')
    },
    {
      title: 'Glad to stay alive',
      description: 'Many of savage mosquitoes live in paradize. Take care yourself',
      score: 3,
      resort: Resort.find_by(name: 'Mallorca')
    }
  ]
)
