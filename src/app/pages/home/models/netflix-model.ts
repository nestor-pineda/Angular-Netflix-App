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
  title: string;
  imgHero: Img;
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

export interface Img {
  src: string;
  alt: string;
}

export interface ImgNumber {
  src: string;
  alt: string;
  num: string;
}
