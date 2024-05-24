import Link from "next/link";
import { Container } from "@/components/Container";
import { StrapiImage } from "./StrapiImage";

interface HeroProps {
  data: {
    heading: string;
    text: string;
    cta?: {
      href: string;
      text: string;
      external: boolean;
    };
    image: {
      url: string;
      alternativeText: string | null;
      name: string;
    };
  };
}

export function Hero({ data }: Readonly<HeroProps>) {
  if (!data) return null;
  const { heading, text, cta, image } = data;
  return (
    <Container className="flex flex-wrap ">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            {heading}
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            {text}
          </p>

          <div>
            {cta && (
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <Link
                  href={cta.href}
                  target={cta.external ? "_blank" : "_self"}
                  rel="noopener"
                  className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
                >
                  {cta.text}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="">
          <StrapiImage
            src={image.url}
            width={616}
            height={617}
            className={"object-cover"}
            alt={image.alternativeText || "Hero Image"}
          />
        </div>
      </div>
    </Container>
  );
}
