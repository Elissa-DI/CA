import { StaticImageData } from "next/image";

export type CarouselData = {
  thumbnail: StaticImageData;

};

export type CarouselProps = {
  data: CarouselData[];
};

export type TopFeatureData = {
  image: string;
  title: string;
};

export type VideoImageData = {
  look: string;
}

export interface VideoImageDataProps {
  pixels: VideoImageData[];
  onBackClick: () => void;
}
export interface TopFeatureProps {
  datas: TopFeatureData[];
  onBackClick: () => void;
}

export type FeatureData = {
  look: StaticImageData;
};

export type FeatureProps = {
  results: FeatureData[];
  onClose: () => void;
  initialSlideIndex: number;
}
export type wedding = {
  look: string;
};

export type WeedingProps = {
  re: wedding[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
};
export type commercials = {
  look: string;
};

export type CommercialProps = {
  re: commercials[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
};
export type portraits = {
  look: string;
};

export type PortraitsProps = {
  re: portraits[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
};
export type lifestyle = {
  look: string;
}
export type lifeStyleProps = {
  re: lifestyle[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void; 
}
export type events = {
  look: string;
};

export type EventsProps = {
  re: events[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
  
};
export type fashion = {
  look: string;
};

export type FashionProps = {
  re: fashion[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
  
};
export type food = {
  look: string;
};

export type FoodProps = {
  re: food[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
 
};
export type landscape = {
  look: string;
};

export type LandScapeProps = {
  re: landscape[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
  
};
export type worldTravel = {
  look: string;
};

export type WorldTravelProps = {
  re: worldTravel[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
}; 
export type eventsvideo ={
  look: string;
};
export type eventsvideoProps = {
  re: eventsvideo[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
};
export type commercialsvideo ={
  look: string;
};
export type commercialsvideoProps = {
  re: commercialsvideo[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
};
export type weddingsvideo ={
  look: string;
};
export type weddingsvideoProps = {
  re: weddingsvideo[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
};
export type lifestylesvideo ={
  look: string;
};
export type lifestylesvideoProps = {
  re: lifestylesvideo[];
  onClose: () => void;
  initialSlideIndex: number;
  onBackClick: () => void;
};