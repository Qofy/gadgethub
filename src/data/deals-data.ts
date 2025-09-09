const dealProducts = {
  AllDeals:[
    {
      id: 1,
      name: "Smart Thermostat",
      description: "Control your home's temperature remotely with this smart thermostat.",
      price: 99.99,
      discountPrice: 79.99,
      imageUrl: "https://www.bringer-germany.de/cdn/shop/files/1-min_284ce243-34dd-4344-9564-2a70428c0489-171506.png?v=1737134947&width=1000",
      rating: 4.5,
      reviews: 120
    },
    {
      id: 2,
      name: "Smart Light Bulb",
      description: "Energy-efficient LED light bulb that can be controlled via smartphone.",
      price: 19.99,
      discountPrice: 14.99,
      imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HQGL2_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=WXA3dFhkMVNSMk5aTHFOKzNpbEhERlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUXVXSVFHMFA1aDYyclMwL2kwTXlzc0E",
      rating: 4.0,
      reviews: 85
    },
    {
      id: 3,
      name: "Smart Door Lock",
      description: "Secure your home with this keyless smart door lock.",
      price: 149.99,
      discountPrice: 129.99,
      imageUrl: "https://www.auslock.net/wp-content/uploads/2021/03/slim-smart-door-locks-black-fingerprint.jpeg",
      rating: 4.7,
      reviews: 200
    },
    {
      id: 4,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with this high-definition security camera.",
      price: 89.99,
      discountPrice: 69.99,
      imageUrl: "https://rukminim2.flixcart.com/image/704/844/jsnjbm80/home-security-camera/q/w/k/sxj02zm-mi-original-imafe6hfnjqgvf7u.jpeg?q=90&crop=false",
      rating: 4.3,
      reviews: 150
    },
    {
      id: 5,
      name: "Smart Plug",
      description: "Turn any device into a smart device with this Wi-Fi enabled smart plug.",
      price: 29.99,
      discountPrice: 24.99,
      imageUrl: "https://solarkontor.de/media/image/product/9112/md/ecoflow-powerstream-smartplug.jpg",
      rating: 4.1,
      reviews: 95
    },
    {
      id: 6,
      name: "Robot Vacuum Cleaner",
      description: "Automate your cleaning with this intelligent robot vacuum cleaner.",
      price: 299.99,
      discountPrice: 249.99,
      imageUrl: "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-robot-vacuum-e5/M/c27a4e16da39c5f625a7c8ef5d855612.jpg",
      rating: 4.6,
      reviews: 180
    },
    {
      id: 7,
      name: "Smart Home Hub",
      description: "Control all your smart devices from one central hub.",
      price: 129.99,
      discountPrice: 109.99,
      imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25289933/247023_Echo_Hub_JTuohy_0018.jpg?quality=90&strip=all&crop=0,0,100,100",
      rating: 4.4,
      reviews: 110
    },
    {
      id: 8,
      name: "Smart Smoke Detector",
      description: "Get alerts on your phone in case of smoke or fire with this smart smoke detector.",
      price: 79.99,
      discountPrice: 59.99,
      imageUrl: "https://media.licdn.com/dms/image/v2/C4E12AQE2XESewKtfZw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520227465358?e=2147483647&v=beta&t=e9wP_ZA5R6PUM6hwbthXZrkv4qoOoM_JgKUCQfkjhb4",
      rating: 4.2,
      reviews: 75
    },
    {
      id: 9,
      name: "Smart Water Leak Sensor",
      description: "Protect your home from water damage with this smart leak sensor.",
      price: 39.99,
      discountPrice: 29.99,
      imageUrl: "https://m.media-amazon.com/images/I/61NQCRQShvL.jpg",
      rating: 4.0,
      reviews: 60
    },
    {
      id: 10,
      name: "Smart Garage Door Opener",
      description: "Open and close your garage door remotely with this smart opener.",
      price: 199.99,
      discountPrice: 179.99,
      imageUrl: "https://m.media-amazon.com/images/I/71vMOjjTsVL._SL1500_.jpg",
      rating: 4.5,
      reviews: 130
    }, 
  ],
  FlashSales: [
    {
      id: 11,
      name: "Smartwatch",
      description: "Stay connected and track your fitness with this stylish smartwatch.",
      price: 199.99,
      discountPrice: 149.99,
      imageUrl: "https://kuus.shop/wp-content/uploads/2023/05/blue-gps-small.png",
      rating: 4.3,
      reviews: 140
    },
    {
      id: 12,
      name: "Wireless Earbuds",
      description: "Enjoy high-quality sound with these wireless earbuds.",
      price: 99.99,
      discountPrice: 69.99,
      imageUrl: "https://m.media-amazon.com/images/I/61Mn590rlnL.jpg",
      rating: 4.2,
      reviews: 110
    },
    {
      id: 13,
      name: "Fitness Tracker",
      description: "Monitor your health and activity levels with this fitness tracker.",
      price: 59.99,
      discountPrice: 39.99,
      imageUrl: "https://xlyne.de/wp-content/uploads/2022/07/XCOAST-CADIZ-570435-Taupe-shop-e1658823364930.jpg",
      rating: 4.0,
      reviews: 90
    },
    {
      id: 14,
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with excellent sound quality.",
      price: 49.99,
      discountPrice: 29.99,
      imageUrl: "https://lh5.googleusercontent.com/proxy/CiZrUSvae_Ya8ZvwkTxh7pvBXy9YBn18iaOE3YLFDzhTtP24lUZLmL5Bjjriq2C7bxNtm1zmUNjBpv6z5iqw1Khr7qhV-1bNIClSyPDgWjozqtOCx2l3RD3MEg8SKpOyeaqYngd8XN825hh2F2zuLiXaw74GXnMmWSWhyTxBcZqSj5tL1hhdCL_UWue0juim9xyDocjDL01zfSpngZWuDMV2g_TwGKOFTH-1qXXe",
      rating: 4.1,
      reviews: 80
    },
    {
      id: 15,
      name: "E-Reader",
      description: "Read your favorite books on this lightweight e-reader.",
      price: 129.99,
      discountPrice: 99.99,
      imageUrl: "https://static.independent.co.uk/2022/04/01/16/Amazon%20Kindle%20paperwhite%20signature%20edition%20indybest.jpg",
      rating: 4.4,
      reviews: 100
    },
    {
      id: 16,
      name: "Action Camera",
      description: "Capture your adventures with this durable action camera.",
      price: 249.99,
      discountPrice: 199.99,
      imageUrl: "https://m.media-amazon.com/images/I/81Lf573y4aL._UF894,1000_QL80_.jpg",
      rating: 4.5,
      reviews: 120
    },
    {
      id: 17,
      name: "Gaming Headset",
      description: "Immersive gaming experience with this high-quality headset.",
      price: 89.99,
      discountPrice: 59.99,
      imageUrl: "https://www.pcworld.com/wp-content/uploads/2025/04/Wireless-gaming-headset_edited.jpg?quality=50&strip=all",
      rating: 4.3,
      reviews: 95
    },
  ],
  DailyDeals: [
    {
      id: 18,
      name: "4K Action Camera",
      description: "Record your adventures in stunning 4K resolution with this action camera.",
      price: 299.99,
      discountPrice: 249.99,
      imageUrl: "https://m.media-amazon.com/images/I/71VGXX-+RVL._UF894,1000_QL80_.jpg",
      rating: 4.6,
      reviews: 130
    },
    {
      id: 19,
      name: "Noise-Cancelling Headphones",
      description: "Experience immersive sound with these noise-cancelling headphones.",
      price: 199.99,
      discountPrice: 149.99,
      imageUrl: "https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg",
      rating: 4.5,
      reviews: 115
    },
    {
      id: 20,
      name: "Portable Charger",
      description: "Keep your devices charged on the go with this high-capacity portable charger.",
      price: 49.99,
      discountPrice: 39.99,
      imageUrl: "https://www.phonesuit.com/cdn/shop/files/3292.jpg?v=1684793337",
      rating: 4.2,
      reviews: 85
    },
    {
      id: 21,
      name: "Smart Home Security System",
      description: "Comprehensive security system to protect your home.",
      price: 399.99,
      discountPrice: 349.99,
      imageUrl: "https://smarthomeworks.com.au/wp-content/uploads/2018/03/4-1.jpg",
      rating: 4.7,
      reviews: 140
    },
    {
      id: 22,
      name: "VR Headset",
      description: "Experience virtual reality with this comfortable VR headset.",
      price: 299.99,
      discountPrice: 249.99,
      imageUrl: "https://pl.static.webuy.com/product_images/Gry%20i%20Konsole/Playstation4%20Akcesoria/SPS4PSVR003_l.jpg",
      rating: 4.4,
      reviews: 110
    },
    {
      id: 23,
      name: "Smart Light Switch",
      description: "Control your lights remotely with this smart light switch.",
      price: 39.99,
      discountPrice: 29.99,
      imageUrl: "https://m.media-amazon.com/images/I/51mu+h-LP6L._UF894,1000_QL80_.jpg",
      rating: 4.1,
      reviews: 70
    },
    {
      id: 24,
      name: "Wireless Charging Pad",
      description: "Conveniently charge your devices with this wireless charging pad.",
      price: 59.99,
      discountPrice: 49.99,
      imageUrl: "https://cdn.shopify.com/s/files/1/1520/4366/files/qi2-trio-wireless-charging-pad-satechi-884515.webp?v=1729820489",
      rating: 4.3,
      reviews: 90
    },
  ],
  WeeklySpecials:[
    {
      id: 25,
      name: "Smart Home Assistant",
      description: "Voice-controlled smart home assistant to manage your devices.",
      price: 129.99,
      discountPrice: 99.99,
      imageUrl: "https://heise.cloudimg.io/width/610/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/6/8/7/2/dashboard-aad3281db08e9e56.jpeg",
      rating: 4.5,
      reviews: 125
    },
    {
      id: 26,
      name: "Smart Coffee Maker",
      description: "Brew your perfect cup of coffee with this smart coffee maker.",
      price: 149.99,
      discountPrice: 119.99,
      imageUrl: "https://smarter.am/cdn/shop/products/Shopify-Product-Coffee-FC-3DCoffee-2_1600x.png?v=1647597918",
      rating: 4.4,
      reviews: 100
    },
    {
      id: 27,
      name: "Smart Air Purifier",
      description: "Improve your indoor air quality with this smart air purifier.",
      price: 199.99,
      discountPrice: 159.99,
      imageUrl: "https://m.media-amazon.com/images/I/61960jUZMJL._UF1000,1000_QL80_.jpg",
      rating: 4.6,
      reviews: 110
    },
    {
      id: 28,
      name: "Smart Robot Mop",
      description: "Keep your floors clean with this intelligent robot mop.",
      price: 249.99,
      discountPrice: 199.99,
      imageUrl: "https://m.media-amazon.com/images/I/51c6wk08N8L._UF894,1000_QL80_.jpg",
      rating: 4.3,
      reviews: 95
    },
    {
      id: 29,
      name: "Smart Baby Monitor",
      description: "Monitor your baby remotely with this smart baby monitor.",
      price: 179.99,
      discountPrice: 139.99,
      imageUrl: "https://m.media-amazon.com/images/I/716hRgWouTL._UF894,1000_QL80_.jpg",
      rating: 4.5,
      reviews: 85
    },
    {
      id: 30,
      name: "Smart Outdoor Camera",
      description: "Weather-resistant outdoor camera for home security.",
      price: 149.99,
      discountPrice: 119.99,
      imageUrl: "https://yalehome.de/media/wysiwyg/smart-outdoor-camera2_1_.jpg",
      rating: 4.4,
      reviews: 90
    },
    {
      id: 31,
      name: "Smart Sleep Tracker",
      description: "Track and improve your sleep patterns with this smart sleep tracker.",
      price: 79.99,
      discountPrice: 59.99,
      imageUrl: "https://m.media-amazon.com/images/I/61BKxwTrJhL.jpg",
      rating: 4.2,
      reviews: 75
    },
  ],
  MegaDeals:[
    {
      id: 32,
      name: "Smart Refrigerator",
      description: "Keep your food fresh and organized with this smart refrigerator.",
      price: 1199.99,
      discountPrice: 999.99,
      imageUrl: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:281,cw:938,ch:938,q:80,w:938/XJt8jxNnRWMm9uiYB3JZzf.jpg",
      rating: 4.6,
      reviews: 150
    },
    {
      id: 33,
      name: "Smart Oven",
      description: "Cook delicious meals with this smart oven featuring advanced cooking modes.",
      price: 899.99,
      discountPrice: 749.99,
      imageUrl: "https://juneoven.com/cdn/shop/files/ProductGridShots_On_600x.jpg?v=1615320002",
      rating: 4.5,
      reviews: 130
    },
    {
      id: 34,
      name: "Smart Washing Machine",
      description: "Efficient and convenient washing machine with smart features.",
      price: 799.99,
      discountPrice: 649.99,
      imageUrl: "https://shop.haierindia.com/blog/wp-content/uploads/2024/11/Guide-to-Smart-Washing-Machines-3.jpg.webp",
      rating: 4.4,
      reviews: 120
    },
    {
      id: 35,
      name: "Smart Dishwasher",
      description: "Save time and water with this energy-efficient smart dishwasher.",
      price: 699.99,
      discountPrice: 549.99,
      imageUrl: "https://www.pcrichard.com/dw/image/v2/BFXM_PRD/on/demandware.static/-/Sites-pcrichard-master-product-catalog/default/dwb2a3c240/images/hires/AZ1_DWHD640EFP.jpg?sw=800&sh=800&sm=fit",
      rating: 4.3,
      reviews: 110
    },
    {
      id: 36,
      name: "Smart TV",
      description: "Enjoy your favorite shows and movies on this high-definition smart TV.",
      price: 1299.99,
      discountPrice: 1099.99,
      imageUrl: "https://m.media-amazon.com/images/I/71lnWov0-NL.jpg",
      rating: 4.7,
      reviews: 160
    },
    {
      id: 37,
      name: "Smart Soundbar",
      description: "Enhance your TV audio experience with this smart soundbar.",
      price: 399.99,
      discountPrice: 299.99,
      imageUrl: "https://www.sg-akustik.de/shop/media/image/43/8a/g0/Canton_Smart_Soundbar_10_1_600x600.jpg",
      rating: 4.5,
      reviews: 100
    },
    {
      id: 38,
      name: "Smart Projector",
      description: "Project your favorite content anywhere with this portable smart projector.",
      price: 499.99,
      discountPrice: 399.99,
      imageUrl: "https://m.media-amazon.com/images/I/716sN+XiLSL.jpg",
      rating: 4.4,
      reviews: 90
    },
  ]
}
export default dealProducts;


export interface DealProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  imageUrl: string;
  rating: number;
  reviews: number;
}

export interface DealProducts {
  AllDeals: DealProduct[];
  FlashSales: DealProduct[];
  DailyDeals: DealProduct[];
  WeeklySpecials: DealProduct[];
  MegaDeals: DealProduct[];
}

export type DealCategory = keyof DealProducts;

export interface ButtonsProps {
  activeCategory: DealCategory;
  onCategoryChange: (category: DealCategory) => void;
}

export interface DealItemsProps {
  products: DealProduct[];
}

