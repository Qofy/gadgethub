const dealProducts = {
  AllDeals:[
    {
      id: 1,
      name: "Smart Thermostat",
      description: "Control your home's temperature remotely with this smart thermostat.",
      price: 99.99,
      discountPrice: 79.99,
      imageUrl: "/images/thermostat.jpg",
      rating: 4.5,
      reviews: 120
    },
    {
      id: 2,
      name: "Smart Light Bulb",
      description: "Energy-efficient LED light bulb that can be controlled via smartphone.",
      price: 19.99,
      discountPrice: 14.99,
      imageUrl: "/images/lightbulb.jpg",
      rating: 4.0,
      reviews: 85
    },
    {
      id: 3,
      name: "Smart Door Lock",
      description: "Secure your home with this keyless smart door lock.",
      price: 149.99,
      discountPrice: 129.99,
      imageUrl: "/images/doorlock.jpg",
      rating: 4.7,
      reviews: 200
    },
    {
      id: 4,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with this high-definition security camera.",
      price: 89.99,
      discountPrice: 69.99,
      imageUrl: "/images/securitycamera.jpg",
      rating: 4.3,
      reviews: 150
    },
    {
      id: 5,
      name: "Smart Plug",
      description: "Turn any device into a smart device with this Wi-Fi enabled smart plug.",
      price: 29.99,
      discountPrice: 24.99,
      imageUrl: "/images/smartplug.jpg",
      rating: 4.1,
      reviews: 95
    },
    {
      id: 6,
      name: "Robot Vacuum Cleaner",
      description: "Automate your cleaning with this intelligent robot vacuum cleaner.",
      price: 299.99,
      discountPrice: 249.99,
      imageUrl: "/images/robotvacuum.jpg",
      rating: 4.6,
      reviews: 180
    },
    {
      id: 7,
      name: "Smart Home Hub",
      description: "Control all your smart devices from one central hub.",
      price: 129.99,
      discountPrice: 109.99,
      imageUrl: "/images/smarthomehub.jpg",
      rating: 4.4,
      reviews: 110
    },
    {
      id: 8,
      name: "Smart Smoke Detector",
      description: "Get alerts on your phone in case of smoke or fire with this smart smoke detector.",
      price: 79.99,
      discountPrice: 59.99,
      imageUrl: "/images/smokedetector.jpg",
      rating: 4.2,
      reviews: 75
    },
    {
      id: 9,
      name: "Smart Water Leak Sensor",
      description: "Protect your home from water damage with this smart leak sensor.",
      price: 39.99,
      discountPrice: 29.99,
      imageUrl: "/images/waterleaksensor.jpg",
      rating: 4.0,
      reviews: 60
    },
    {
      id: 10,
      name: "Smart Garage Door Opener",
      description: "Open and close your garage door remotely with this smart opener.",
      price: 199.99,
      discountPrice: 179.99,
      imageUrl: "/images/garagedooropener.jpg",
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
      imageUrl: "/images/smartwatch.jpg",
      rating: 4.3,
      reviews: 140
    },
    {
      id: 12,
      name: "Wireless Earbuds",
      description: "Enjoy high-quality sound with these wireless earbuds.",
      price: 99.99,
      discountPrice: 69.99,
      imageUrl: "/images/wirelessearbuds.jpg",
      rating: 4.2,
      reviews: 110
    },
    {
      id: 13,
      name: "Fitness Tracker",
      description: "Monitor your health and activity levels with this fitness tracker.",
      price: 59.99,
      discountPrice: 39.99,
      imageUrl: "/images/fitnesstracker.jpg",
      rating: 4.0,
      reviews: 90
    },
    {
      id: 14,
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with excellent sound quality.",
      price: 49.99,
      discountPrice: 29.99,
      imageUrl: "/images/bluetoothspeaker.jpg",
      rating: 4.1,
      reviews: 80
    },
    {
      id: 15,
      name: "E-Reader",
      description: "Read your favorite books on this lightweight e-reader.",
      price: 129.99,
      discountPrice: 99.99,
      imageUrl: "/images/ereader.jpg",
      rating: 4.4,
      reviews: 100
    },
    {
      id: 16,
      name: "Action Camera",
      description: "Capture your adventures with this durable action camera.",
      price: 249.99,
      discountPrice: 199.99,
      imageUrl: "/images/actioncamera.jpg",
      rating: 4.5,
      reviews: 120
    },
    {
      id: 17,
      name: "Gaming Headset",
      description: "Immersive gaming experience with this high-quality headset.",
      price: 89.99,
      discountPrice: 59.99,
      imageUrl: "/images/gamingheadset.jpg",
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
      imageUrl: "/images/4kactioncamera.jpg",
      rating: 4.6,
      reviews: 130
    },
    {
      id: 19,
      name: "Noise-Cancelling Headphones",
      description: "Experience immersive sound with these noise-cancelling headphones.",
      price: 199.99,
      discountPrice: 149.99,
      imageUrl: "/images/noisecancellingheadphones.jpg",
      rating: 4.5,
      reviews: 115
    },
    {
      id: 20,
      name: "Portable Charger",
      description: "Keep your devices charged on the go with this high-capacity portable charger.",
      price: 49.99,
      discountPrice: 39.99,
      imageUrl: "/images/portablecharger.jpg",
      rating: 4.2,
      reviews: 85
    },
    {
      id: 21,
      name: "Smart Home Security System",
      description: "Comprehensive security system to protect your home.",
      price: 399.99,
      discountPrice: 349.99,
      imageUrl: "/images/smarthomesecurity.jpg",
      rating: 4.7,
      reviews: 140
    },
    {
      id: 22,
      name: "VR Headset",
      description: "Experience virtual reality with this comfortable VR headset.",
      price: 299.99,
      discountPrice: 249.99,
      imageUrl: "/images/vrheadset.jpg",
      rating: 4.4,
      reviews: 110
    },
    {
      id: 23,
      name: "Smart Light Switch",
      description: "Control your lights remotely with this smart light switch.",
      price: 39.99,
      discountPrice: 29.99,
      imageUrl: "/images/smartlightswitch.jpg",
      rating: 4.1,
      reviews: 70
    },
    {
      id: 24,
      name: "Wireless Charging Pad",
      description: "Conveniently charge your devices with this wireless charging pad.",
      price: 59.99,
      discountPrice: 49.99,
      imageUrl: "/images/wirelesschargingpad.jpg",
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
      imageUrl: "/images/smarthomeassistant.jpg",
      rating: 4.5,
      reviews: 125
    },
    {
      id: 26,
      name: "Smart Coffee Maker",
      description: "Brew your perfect cup of coffee with this smart coffee maker.",
      price: 149.99,
      discountPrice: 119.99,
      imageUrl: "/images/smartcoffeemaker.jpg",
      rating: 4.4,
      reviews: 100
    },
    {
      id: 27,
      name: "Smart Air Purifier",
      description: "Improve your indoor air quality with this smart air purifier.",
      price: 199.99,
      discountPrice: 159.99,
      imageUrl: "/images/smartairpurifier.jpg",
      rating: 4.6,
      reviews: 110
    },
    {
      id: 28,
      name: "Smart Robot Mop",
      description: "Keep your floors clean with this intelligent robot mop.",
      price: 249.99,
      discountPrice: 199.99,
      imageUrl: "/images/smartrobotmop.jpg",
      rating: 4.3,
      reviews: 95
    },
    {
      id: 29,
      name: "Smart Baby Monitor",
      description: "Monitor your baby remotely with this smart baby monitor.",
      price: 179.99,
      discountPrice: 139.99,
      imageUrl: "/images/smartbabymonitor.jpg",
      rating: 4.5,
      reviews: 85
    },
    {
      id: 30,
      name: "Smart Outdoor Camera",
      description: "Weather-resistant outdoor camera for home security.",
      price: 149.99,
      discountPrice: 119.99,
      imageUrl: "/images/smartoutdoorcamera.jpg",
      rating: 4.4,
      reviews: 90
    },
    {
      id: 31,
      name: "Smart Sleep Tracker",
      description: "Track and improve your sleep patterns with this smart sleep tracker.",
      price: 79.99,
      discountPrice: 59.99,
      imageUrl: "/images/smartsleeptracker.jpg",
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
      imageUrl: "/images/smartrefrigerator.jpg",
      rating: 4.6,
      reviews: 150
    },
    {
      id: 33,
      name: "Smart Oven",
      description: "Cook delicious meals with this smart oven featuring advanced cooking modes.",
      price: 899.99,
      discountPrice: 749.99,
      imageUrl: "/images/smartoven.jpg",
      rating: 4.5,
      reviews: 130
    },
    {
      id: 34,
      name: "Smart Washing Machine",
      description: "Efficient and convenient washing machine with smart features.",
      price: 799.99,
      discountPrice: 649.99,
      imageUrl: "/images/smartwashingmachine.jpg",
      rating: 4.4,
      reviews: 120
    },
    {
      id: 35,
      name: "Smart Dishwasher",
      description: "Save time and water with this energy-efficient smart dishwasher.",
      price: 699.99,
      discountPrice: 549.99,
      imageUrl: "/images/smartdishwasher.jpg",
      rating: 4.3,
      reviews: 110
    },
    {
      id: 36,
      name: "Smart TV",
      description: "Enjoy your favorite shows and movies on this high-definition smart TV.",
      price: 1299.99,
      discountPrice: 1099.99,
      imageUrl: "/images/smarttv.jpg",
      rating: 4.7,
      reviews: 160
    },
    {
      id: 37,
      name: "Smart Soundbar",
      description: "Enhance your TV audio experience with this smart soundbar.",
      price: 399.99,
      discountPrice: 299.99,
      imageUrl: "/images/smartsoundbar.jpg",
      rating: 4.5,
      reviews: 100
    },
    {
      id: 38,
      name: "Smart Projector",
      description: "Project your favorite content anywhere with this portable smart projector.",
      price: 499.99,
      discountPrice: 399.99,
      imageUrl: "/images/smartprojector.jpg",
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

