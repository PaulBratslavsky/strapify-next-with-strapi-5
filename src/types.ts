export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

export interface StrapiImageInterface {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  name: string;
}

interface StrapiLink {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

interface StrapiLogoLink {
  id: number;
  href: string;
  text: string;
  image: StrapiImageInterface;
}

export interface SocialLinkInterface {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

export interface SocialLinks {
  id: number;
  heading: string;
  socialLink: SocialLinkInterface[];
}

export interface CTAInterface {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

interface TopNav {
  id: number;
  logoLink: StrapiLogoLink;
  link: StrapiLink[];
  cta: CTAInterface;
}

interface Footer {
  id: number;
  description: string;
  logoLink: StrapiLogoLink;
  colOneLinks: StrapiLink[];
  colTwoLinks: StrapiLink[];
  socialLinks: SocialLinks;
}

export interface GlobalData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
}

export interface NavbarDataInterface extends GlobalData {
  topnav: TopNav;
}

export interface FooterDataInterface extends GlobalData {
  footer: Footer;
}

export interface StrapiMetaInterface {}

// Blocks types & interfaces

export interface HeroInterface {
  data: {
    heading: string;
    text: string;
    cta?: CTAInterface;
    image: StrapiImageInterface;
  };
}

interface BenefitItemInterface {
  id: number;
  text: string;
  icon: string | null;
  heading: string;
}

export interface BenefitsInterface {
  data: {
    id: number;
    __component: string;
    heading: string;
    text: string;
    imageRight: boolean | null;
    image: StrapiImageInterface;
    item: BenefitItemInterface[];
  };
}

export interface ContentWithImageInterface {
  data: {
    id: number;
    __component: string;
    heading: string;
    text: string;
    imageRight: boolean | null;
    image: StrapiImageInterface;
  };
}

export interface CallToActionInterface {
  data: {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    cta: CTAInterface;
  };
}

interface QuestionInterface {
  id: number;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface FaqInterface {
  data: {
    id: number;
    __component: string;
    questions: QuestionInterface[];
  };
}

export interface VideoInterface {
  data: {
    videoId: string;
  };
}

export interface TestimonialCardInterface {
  id: number;
  heading: string;
  subHeading: string;
  text: string;
  image: {
    name: string;
    alternativeText: string | null;
    url: string;
  };
}

export interface TestimonialsInterface {
  data: {
    id: number;
    card: TestimonialCardInterface[];
  };
}

export interface SectionHeadingInterface {
  data: {
    id: number;
    preHeading: string;
    heading: string;
    text: string;
  };
}
