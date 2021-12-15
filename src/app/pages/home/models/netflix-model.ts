export interface NetflixModel {
  nav: Nav;
  hero: Hero;
  top: Top;
  films: Films;
}

export interface Nav {
  logo: Img;
  links: String[];
}

export interface Hero {
  imgHero: Img;
  imgTitle: Img;
  description: string;
}

export interface Top {
  title: string;
  imgGallery: ImgNumber[];
}

export interface Films {
  title: string;
  imgGallery: Img[];
}

export interface RecomendedFilmsModel {
  title: string;
  subtitle: string;
  description: Description[];
}

export interface Img {
  src: string;
  alt: string;
}

export interface ImgNumber {
  src: string;
  alt: string;
  num: string;
}

export interface Description {
  src: string;
  alt: string;
  percentage: string;
  text: string;
}
