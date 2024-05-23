import qs from "qs";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { DisclosureClient } from "@/components/DisclosureClient";

import { getStrapiURL } from "@/lib/utils";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/global";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: {
      topnav: {
        populate: {
          logoLink: {
            populate: {
              image: {
                fields: ["url", "alternativeText", "name"],
              },
            },
          },
          link: {
            populate: true,
          },
          cta: {
            populate: true,
          },
        },
      },
    },
  });

  const url = new URL(path, baseUrl);
  url.search = query;
  const data = await fetchData(url.href);
  return data;
}




interface NavbarData {
  data: {
    id: number;
    documentId: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    topnav: {
      id: number;
      logoLink: {
        id: number;
        text: string;
        href: string;
        image: {
          id: number;
          url: string;
          alternativeText: string | null;
          name: string;
        };
      };
      link: {
        id: number;
        href: string;
        text: string;
        external: boolean;
      }[];
      cta: {
        id: number;
        href: string;
        text: string;
        external: boolean;
      };
    };
  };
  meta: Record<string, any>;
}

export async function Navbar() {
  const data = (await loader()) as NavbarData;
  if (!data.data) return null;

  const navigation = data?.data?.topnav;
  const cta = data.data.topnav.cta;

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}

        <DisclosureClient topnav={navigation} />

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation && navigation.link.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href={cta.href}
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            target={cta.external ? "_blank" : "_self"}
          >
            {cta.text}
          </Link>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}


/*

const testData = {
  data: {
    id: 4,
    documentId: "luienlndlhxy1wrbz3jmn510",
    title: "Global",
    description: "Global setting pate",
    createdAt: "2024-05-23T15:35:56.132Z",
    updatedAt: "2024-05-23T16:03:26.692Z",
    publishedAt: "2024-05-23T16:03:26.703Z",
    locale: null,
    topnav: {
      id: 3,
      logoLink: {
        id: 4,
        href: "/",
        text: "Strapify",
        image: {
          id: 1,
          documentId: "adlqqhmaathuqym1ree67xp2",
          url: "/uploads/logo_e0917a4240.svg",
          alternativeText: null,
          name: "logo.svg",
        },
      },
      link: [
        { id: 12, href: "/about", text: "About", external: false },
        { id: 13, href: "/blog", text: "Blog", external: false },
      ],
      cta: {
        id: 14,
        href: "https://strapi.io/five",
        text: "Strapi 5",
        external: true,
      },
    },
  },
  meta: {},
};

*/