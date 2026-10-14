export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const brandAssets = {
  logo: {
    src: "/images/ask-appliance-repairs-ltd-logo-primary.png",
    alt: "Ask Appliance Repairs Ltd - Local Domestic Appliance Engineers",
    width: 1942,
    height: 809,
    minArtworkWidth: 320
  },
  favicon: {
    src: "/favicon.ico",
    alt: "Ask Appliance Repairs Ltd Favicon"
  },
  ogImage: {
    src: "/images/og-image.jpg",
    alt: "Ask Appliance Repairs Ltd London & Surrey Appliance Repairs",
    width: 1200,
    height: 630
  },
  aboutPhoto: {
    src: "/images/about-image.jpg",
    alt: "Experienced appliance engineer inspecting a domestic appliance",
    width: 800,
    height: 600
  },
  heroBg: {
    src: "/images/hero-bg.jpg",
    alt: "Modern domestic kitchen interior"
  }
} as const;

export const serviceIcons: Record<string, ImageAsset> = {
  cooker: {
    src: "/images/oven.png",
    alt: "Cooker and Oven Repair icon",
    width: 64,
    height: 64
  },
  tumbleDryer: {
    src: "/images/tumble-dryer.png",
    alt: "Tumble Dryer Repair icon",
    width: 64,
    height: 64
  },
  washingMachine: {
    src: "/images/washing-machine.png",
    alt: "Washing Machine Repair icon",
    width: 64,
    height: 64
  },
  dishwasher: {
    src: "/images/dishwasher.png",
    alt: "Dishwasher Repair icon",
    width: 64,
    height: 64
  },
  fridge: {
    src: "/images/fridge.png",
    alt: "Fridge & Freezer Repair icon",
    width: 64,
    height: 64
  },
  hob: {
    src: "/images/hob.png",
    alt: "Electric and Induction Hob Repair icon",
    width: 64,
    height: 64
  },
  microwave: {
    src: "/images/microwave.png",
    alt: "Microwave Repair icon",
    width: 64,
    height: 64
  }
};
