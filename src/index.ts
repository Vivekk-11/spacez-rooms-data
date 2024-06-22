// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFDNnlW7fuCdBe-qjXxI8XLUnFAEd53h0",
  authDomain: "spacez-all.firebaseapp.com",
  projectId: "spacez-all",
  storageBucket: "spacez-all.appspot.com",
  messagingSenderId: "988598930373",
  appId: "1:988598930373:web:240f41af53cdb668fd99ac",
  measurementId: "G-60SMJ6Q20J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

class RoomType {
  name: string;
  description: string;
  propertyId: string;
  roomId: string;
  defaultOccupancy: number;
  maximumOccupancy: number;
  maxAdults: number;
  maxChildren: number;
  defaultPrice: number;
  defaultPricePerWeek: number;
  defaultPricePerMonth: number;
  amenities: string[];
  pointers: string[] | [];
  isVilla: boolean;
  isActive: boolean;
  photos: string[];

  constructor({
    name,
    description,
    propertyId,
    roomId,
    defaultOccupancy,
    maximumOccupancy,
    maxAdults,
    maxChildren,
    defaultPrice,
    amenities,
    pointers,
    isVilla,
    isActive,
    photos,
  }: {
    name: string;
    description: string;
    propertyId: string;
    roomId: string;
    defaultOccupancy: number;
    maximumOccupancy: number;
    maxAdults: number;
    maxChildren: number;
    defaultPrice: number;
    amenities: string[];
    pointers: string[] | [];
    isVilla: boolean;
    isActive: boolean;
    photos: string[];
  }) {
    this.name = name;
    this.description = description;
    this.propertyId = propertyId;
    this.roomId = roomId;
    this.defaultOccupancy = defaultOccupancy;
    this.maximumOccupancy = maximumOccupancy;
    this.maxAdults = maxAdults;
    this.maxChildren = maxChildren;
    this.defaultPrice = defaultPrice;
    this.defaultPricePerWeek = defaultPrice * 7;
    this.defaultPricePerMonth = defaultPrice * 30;
    this.amenities = amenities;
    this.pointers = pointers;
    this.isVilla = isVilla;
    this.isActive = isActive;
    this.photos = photos;
  }

  toJSON() {
    return {
      name: this.name,
      description: this.description,
      propertyId: this.propertyId,
      roomId: this.roomId,
      defaultOccupancy: this.defaultOccupancy,
      maximumOccupancy: this.maximumOccupancy,
      maxAdults: this.maxAdults,
      maxChildren: this.maxChildren,
      defaultPrice: this.defaultPrice,
      defaultPricePerWeek: this.defaultPricePerWeek,
      defaultPricePerMonth: this.defaultPricePerMonth,
      amenities: this.amenities,
      pointers: this.pointers,
      isVilla: this.isVilla,
      isActive: this.isActive,
      photos: this.photos,
    };
  }

  static fromJSON(json: {
    name: string;
    description: string;
    propertyId: string;
    roomId: string;
    defaultOccupancy: number;
    maximumOccupancy: number;
    maxAdults: number;
    maxChildren: number;
    defaultPrice: number;
    amenities: string[];
    pointers: string[] | [];
    isVilla: boolean;
    isActive: boolean;
    photos: string[];
  }): RoomType {
    return new RoomType(json);
  }
}

async function addRoomTypesToFirestore(roomTypes: RoomType[]) {
  try {
    for (const roomType of roomTypes) {
      const roomTypeData = roomType.toJSON();

      await setDoc(doc(db, "roomTypes", roomType.roomId), roomTypeData);
      console.log(
        `RoomType with roomId: ${roomType.roomId} added to Firestore successfully!`
      );
    }
  } catch (error) {
    console.error("Error adding RoomType to Firestore:", error);
  }
}

const urbanEscape = [
  new RoomType({
    name: "Ocean Oasis",
    description: "Master bedroom of King sized bed with 2 bunk bed",
    roomId: "UEOO01",
    defaultOccupancy: 4,
    maximumOccupancy: 4,
    maxAdults: 4,
    maxChildren: 2,
    defaultPrice: 4250,
    isActive: true,
    isVilla: false,
    propertyId: "UEUE05",
    pointers: [
      "Drinking water available",
      "Bathroom amenities available",
      "Air condition available",
    ],
    amenities: [
      "Sofa bed",
      "Clothing storage",
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355220/_SNF2478_final_vjrlol.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355224/_SNF2475_final_cr974j.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355216/_SNF2505_final_gzvsbn.webp",
    ],
  }),
  new RoomType({
    name: "Woody Cove",
    description: "Queen-sized bedroom",
    roomId: "UEWC02",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 1,
    defaultPrice: 4250,
    isActive: true,
    isVilla: false,
    propertyId: "UEUE05",
    pointers: [
      "Drinking water available",
      "Bathroom amenities available",
      "Air condition available",
    ],
    amenities: [
      "Bunk bed",
      "Couch",
      "Clothing storage",
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "Dedicated workspace",
      "Dishes and cutlery",
      "First aid kit",
      "Bathtub",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355226/_SNF2910_final_leboen.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718353115/_SNF2910_final_heujbd.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718353116/_SNF2904_final_imsjzp.webp",
    ],
  }),
  new RoomType({
    name: "Artist Abode",
    description: "Queen-sized bedroom",
    roomId: "UEAA03",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 1,
    defaultPrice: 4250,
    isActive: true,
    isVilla: false,
    propertyId: "UEUE05",
    pointers: [
      "Drinking water available",
      "Bathroom amenities available",
      "Air condition available",
    ],
    amenities: [
      "Clothing storage",
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "Conditioner",
      "Hair dryer",
      "Hot water",
      "Shower gel",
      "Shampoo",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355247/_SNF2631_final_vlzlhj.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355244/_SNF2628_final_lsrvbn.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718353296/_SNF2634_final_vukkip.webp",
    ],
  }),
  new RoomType({
    name: "Mellow Yellow",
    description: "Queen-sized bedroom",
    roomId: "UEMY04",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 1,
    defaultPrice: 4250,
    isActive: true,
    isVilla: false,
    propertyId: "UEUE05",
    pointers: [
      "Drinking water available",
      "Bathroom amenities available",
      "Air condition available",
    ],
    amenities: [
      "Clothing storage",
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "Conditioner",
      "Hair dryer",
      "Hot water",
      "Shower gel",
      "Shampoo",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355194/_SNF2577_final_rkydp3.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718352757/_SNF2610_final_t1pztu.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355191/_SNF2583_final_hfz01y.webp",
    ],
  }),
  new RoomType({
    name: "Urban Escape (Combo)",
    description: "Entire villa (test)",
    roomId: "UEUE05",
    defaultOccupancy: 12,
    maximumOccupancy: 12,
    maxAdults: 12,
    maxChildren: 6,
    defaultPrice: 16750,
    isActive: true,
    isVilla: true,
    propertyId: "UEUE05",
    pointers: [
      "Drinking water available",
      "Bathroom amenities available",
      "Air condition available",
    ],
    amenities: [""],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355242/_SNF2763_final_zhjzo2.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355238/_SNF2742_final_g89ktm.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355242/_SNF2787_final_ncqwgy.webp",
    ],
  }),
];

const nammaWoodland = [
  new RoomType({
    name: "Cedar",
    description: "Golf-course view with King-sized bed",
    propertyId: "NWNW04",
    roomId: "NWC01",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 1,
    defaultPrice: 4250,
    pointers: [
      "Drinking water available",
      "Bathroom amenities available",
      "Air condition available",
    ],
    isVilla: false,
    isActive: true,
    amenities: [
      "Clothing storage",
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hot tub",
      "Dedicated workspace",
      "Bathtub",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355738/_SNF4704_final_tzsgak.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355733/_SNF4698_final_i3iovj.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718353923/DSC06159_final_ukjyiw.webp",
    ],
  }),
  new RoomType({
    name: "Maple",
    description: "Queen-sized bed with 2 single bed",
    propertyId: "NWNW04",
    roomId: "NWM02",
    defaultOccupancy: 4,
    maximumOccupancy: 4,
    maxAdults: 4,
    maxChildren: 2,
    defaultPrice: 4250,
    pointers: [
      "Drinking water available",
      "Bathroom amenities available",
      "Air condition available",
    ],
    isVilla: false,
    isActive: true,
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718353886/_SNF4608_final_undik3.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718353889/_SNF4626_final_wnyqrm.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718353891/DSC06262_final_ntlphc.webp",
    ],
    amenities: [
      "Queen bed",
      "2 single beds",
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
  }),
  new RoomType({
    name: "Ebony",
    description: "Queen-sized bed",
    propertyId: "NWNW04",
    roomId: "NWE03",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 1,
    defaultPrice: 4250,
    pointers: [
      "Drinking water available",
      "Bathroom amenities available",
      "Air condition available",
    ],
    isVilla: false,
    isActive: true,
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355350/DSC06062_final_txgzan.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355296/DSC06056_final_khvc2g.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355296/_SNF4551_final_brpohc.webp",
    ],
    amenities: [
      "Queen bed",
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
  }),
  new RoomType({
    name: "Namma Woodland (Villa)",
    description: "Villa",
    propertyId: "NWNW04",
    roomId: "NWNW04",
    defaultOccupancy: 8,
    maximumOccupancy: 10,
    maxAdults: 10,
    maxChildren: 4,
    defaultPrice: 16750,
    pointers: [],
    isVilla: true,
    isActive: true,
    amenities: [""],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355743/DSC06296_final_spkgyc.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355273/_SNF4732_final_sjvqmw.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355272/_SNF4725_final_ze3gds.webp",
    ],
  }),
];

const vintageHaven = [
  new RoomType({
    name: "Ivory",
    description: "Ground Floor Room with Queen-sized Bed",
    propertyId: "VHVH06",
    roomId: "VHI01",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 1,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Queen bed",
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355156/_SNF3532_final_sklfvj.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355156/_SNF3523_final_r31d8z.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355155/_SNF3538_final_qfwr4p.webp",
    ],
  }),
  new RoomType({
    name: "Emerald",
    description: "King-sized bedroom with balcony",
    propertyId: "VHVH06",
    roomId: "VHE02",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 1,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "King bed",
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355164/_SNF3352_final_jakxom.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355163/_SNF3346_final_wqilfe.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355165/_SNF3355_final_dmrnx2.webp",
    ],
  }),
  new RoomType({
    name: "Amber",
    description: "Queen-sized bed",
    propertyId: "VHVH06",
    roomId: "VHA03",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 1,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Queen bed",
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355171/_SNF3337_final_flbhcc.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718352715/_SNF3334_final_j8ueaa.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355170/_SNF3325_final_t5ovfc.webp",
    ],
  }),
  new RoomType({
    name: "Sapphire",
    description: "Queen-sized bed",
    propertyId: "VHVH06",
    roomId: "VHS04",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 1,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "King bed",
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355139/_SNF3319_final_fqh72e.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355137/_SNF3298_final_vcjcqk.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355136/_SNF3287_final_mu0wgi.webp",
    ],
  }),
  new RoomType({
    name: "Scarlet",
    description: "Queen-sized bed with balcony",
    propertyId: "VHVH06",
    roomId: "VHS05",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 1,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: ["Queen bed"],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355134/IMG-20231124-WA0112_final_o8xh6i.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355132/IMG-20231124-WA0110_final_b9an6x.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355132/IMG-20231124-WA0097_final_ujlwbx.webp",
    ],
  }),
  new RoomType({
    name: "Vintage Heaven (Complete Villa)",
    propertyId: "VHVH06",
    description: "Entire Villa",
    roomId: "VHVH06",
    defaultOccupancy: 10,
    maximumOccupancy: 12,
    maxAdults: 10,
    maxChildren: 4,
    defaultPrice: 16750,
    isVilla: false,
    isActive: true,
    pointers: [],
    amenities: [],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355124/_SNF3466_final_t3si7s.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718352481/_SNF3490_final_kbsuis.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355147/_SNF3247_final_mnqgtb.webp",
    ],
  }),
];

const palmParadise = [
  new RoomType({
    name: "Cana",
    description: "1 queen bed",
    propertyId: "PPPP05",
    roomId: "PPC01",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: ["Queen bed"],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355074/DSC01469_final_lau75f.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355069/DSC01433_final_g5ehfc.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718352424/DSC01430_final_niccga.webp",
    ],
  }),
  new RoomType({
    name: "Zen",
    description: "1 king bed",
    propertyId: "PPPP05",
    roomId: "PPZ02",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: ["King bed"],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355103/DSC01736_final_brk763.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355101/DSC01703_final_oeyuny.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355102/DSC01712_final_cufq3a.webp",
    ],
  }),
  new RoomType({
    name: "Nova",
    description: "1 queen bed, 1 bunk bed",
    propertyId: "PPPP05",
    roomId: "PPN03",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: ["Queen bed", "Bunk bed"],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355116/DSC01850_final_dv0hvc.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355115/DSC01859_final_fltu6p.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355115/DSC01844_final_pfm6se.webp",
    ],
  }),
  new RoomType({
    name: "Lumina",
    description: "2 queen beds",
    propertyId: "PPPP05",
    roomId: "PPL04",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: ["2 Queen beds"],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355083/DSC01784_final_ngmhpu.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355080/DSC01793_final_yzzwqg.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355080/DSC01766_final_w7fwfu.webp",
    ],
  }),
  new RoomType({
    name: "Palm Paradise",
    description: "Entire Villa",
    propertyId: "PPPP05",
    roomId: "PPPP05",
    defaultOccupancy: 8,
    maximumOccupancy: 10,
    maxAdults: 8,
    maxChildren: 2,
    defaultPrice: 16750,
    isVilla: false,
    isActive: true,
    pointers: [],
    amenities: [],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355062/DSC01512_final_t3levc.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355088/DSC01613_final_hf2vn7.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355086/DSC01619_final_qtkh6e.webp",
    ],
  }),
];

const houseOf2Trees = [
  new RoomType({
    name: "Aspen - 2BHK",
    description: "1st Floor Apartment with full access",
    roomId: "HOTA",
    propertyId: "HOTHOT01",
    defaultOccupancy: 4,
    maximumOccupancy: 4,
    maxAdults: 4,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355053/DSC07376_final_unkgwx.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355052/DSC07388_final_kcsnjh.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355051/DSC07382_final_v4yqx6.webp",
    ],
  }),
  new RoomType({
    name: "Aspen room 1",
    description: "Queen-sized bed bedroom with garden view",
    roomId: "HOTA01",
    propertyId: "HOTHOT01",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355045/DSC07319_final_syehkd.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355043/DSC07307_final_uqljg1.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718352402/DSC07313_final_ltouve.webp",
    ],
  }),
  new RoomType({
    name: "Aspen room 2",
    description: "Queen-sized bed bedroom",
    roomId: "HOTA02",
    propertyId: "HOTHOT01",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355039/DSC07352_final_vtwzi0.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355036/DSC07358_final_y7xk2c.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355036/DSC07346_final_rsycuu.webp",
    ],
  }),
  new RoomType({
    name: "Willow - 2BHK",
    description: "2nd Floor Apartment with full access",
    roomId: "HOTW02",
    propertyId: "HOTHOT01",
    defaultOccupancy: 4,
    maximumOccupancy: 4,
    maxAdults: 4,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355019/DSC07475_final_o7d9c2.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355018/DSC07469_final_z7pv2l.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355017/DSC07460_final_s3b0au.webp",
    ],
  }),
  new RoomType({
    name: "Willow room 1",
    description: "Queen-sized bed bedroom with garden view",
    roomId: "HOTW01",
    propertyId: "HOTHOT01",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355027/DSC07502_final_k4g9q3.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355027/DSC07499_final_y5sp79.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355026/DSC07496_final_slsj3l.webp",
    ],
  }),
  new RoomType({
    name: "Willow room 2",
    description: "Queen-sized bed bedroom",
    roomId: "HOTW02",
    propertyId: "HOTHOT01",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355024/DSC07523_final_i5dm23.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355023/DSC07535_final_tcmwz3.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355021/DSC07526_final_mx7ryn.webp",
    ],
  }),
];

const spruceServiceApartment = [
  new RoomType({
    name: "1RK",
    description:
      "1BHK Service Apartment with a kitchen and a living area with full access",
    propertyId: "SSSSA01",
    roomId: "SSA01",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355660/_SNF4446_final_i1ad3i.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355637/_SNF4443_final_xjyuqc.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355612/_SNF4440_final_on7oof.webp",
    ],
  }),
];

const jugglersRest = [
  new RoomType({
    name: "Bedroom 1",
    description: "1 king bed, 1 bunk bed",
    propertyId: "JRJR01",
    roomId: "JRB01",
    defaultOccupancy: 4,
    maximumOccupancy: 4,
    maxAdults: 4,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "King bed",
      "Bunk bed",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355753/_SNF2970_final_d7snci.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355752/_SNF2976_final_d6bliz.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355750/_SNF2967_final_ckyxzv.webp",
    ],
  }),
  new RoomType({
    name: "Bedroom 2",
    description: "4 queen beds",
    propertyId: "JRJR01",
    roomId: "JRB02",
    defaultOccupancy: 4,
    maximumOccupancy: 4,
    maxAdults: 4,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355796/_SNF3243_final_rvyg3x.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355793/_SNF3246_final_vx8vfy.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355008/_SNF3252_final_dod4dj.webp",
    ],
  }),
];

const cascadeCastle = [
  new RoomType({
    name: "Bedroom 1",
    description: "1 king bed",
    roomId: "CCB01",
    propertyId: "CCCC05",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
    ],
  }),
  new RoomType({
    name: "Bedroom 2",
    description: "1 king bed",
    roomId: "CCB02",
    propertyId: "CCCC05",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
    ],
  }),
  new RoomType({
    name: "Bedroom 3",
    description: "1 king bed",
    roomId: "CCB03",
    propertyId: "CCCC05",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
    ],
  }),
  new RoomType({
    name: "Bedroom 4",
    description: "1 king bed",
    roomId: "CCB04",
    propertyId: "CCCC05",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isVilla: false,
    isActive: true,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
    ],
  }),
  new RoomType({
    name: "Cascade Castle",
    description: "Full Villa",
    roomId: "CCCC05",
    propertyId: "CCCC05",
    defaultOccupancy: 8,
    maximumOccupancy: 8,
    maxAdults: 8,
    maxChildren: 0,
    defaultPrice: 16750,
    isVilla: true,
    isActive: true,
    pointers: [],
    amenities: [],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355013/filername__final_gkndfj.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355015/IMG-20240524-WA0002_1_-01_final_lezmlu.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355014/IMG-20240524-WA0009-01_final_wil1ep.webp",
    ],
  }),
];

const sunflowerSkyline = [
  new RoomType({
    name: "Bedroom 1",
    description: "1 queen bed",
    propertyId: "SSSS03",
    roomId: "SSB01",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isActive: true,
    isVilla: false,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355180/image_1__final_zmy1ll.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355176/20231106_191045-01_final_agkgco.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355176/20231106_191045-01_final_agkgco.webp",
    ],
  }),
  new RoomType({
    name: "Bedroom 2",
    description: "1 queen bed",
    propertyId: "SSSS03",
    roomId: "SSB02",
    defaultOccupancy: 2,
    maximumOccupancy: 2,
    maxAdults: 2,
    maxChildren: 0,
    defaultPrice: 4250,
    isActive: true,
    isVilla: false,
    pointers: [
      "Drinking water available",
      "Air condition available",
      "Bathroom amenities available",
    ],
    amenities: [
      "Air conditioning",
      "Essentials",
      "Bed linen",
      "Hangers",
      "Iron",
      "Heating",
      "4 Queen beds",
    ],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355177/image_10__final_wyyioh.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718352724/IMG_1492_final_ijz8ma.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718352727/IMG_1458_final_e0n7pq.webp",
    ],
  }),
  new RoomType({
    name: "Sunflower Skyline",
    description: "Full Villa",
    propertyId: "SSSS03",
    roomId: "SSSS03",
    defaultOccupancy: 4,
    maximumOccupancy: 4,
    maxAdults: 4,
    maxChildren: 0,
    defaultPrice: 16750,
    isActive: true,
    isVilla: false,
    amenities: [],
    pointers: [],
    photos: [
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355175/image_9__final_ftjqys.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718355174/20231106_174044-01_final_htqfkn.webp",
      "https://res.cloudinary.com/dz3tveb47/image/upload/v1718352721/IMG_1577_final_hkudsg.webp",
    ],
  }),
];

const allRoomTypes = [
  ...cascadeCastle,
  ...spruceServiceApartment,
  ...houseOf2Trees,
  ...jugglersRest,
  ...nammaWoodland,
  ...palmParadise,
  ...sunflowerSkyline,
  ...urbanEscape,
  ...vintageHaven,
];

addRoomTypesToFirestore(allRoomTypes);
