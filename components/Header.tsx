import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
const Header = (props:any) => {
  const router = useRouter();
  return (
    <NextSeo
      title={
        props.title
          ? `${props.title} | ProgrammerX`
          : "ProgrammerX"
      }
      description={
        props.des
          ? props.des
          : "ProgrammerX"
      }
      canonical={`https://wilegame.com${router.asPath}`}
      openGraph={{
        type: "website",
        locale: "en_EN",
        title: props.title
          ? `${props.title} | Wilr Game`
          : "ProgrammerX",
        description: props.des
          ? props.des
          : "ProgrammerX",
        images: [
          {
            url:
              props.image == undefined || props.image.length == 0
                ? "https://wildgame.com/main.jpg"
                : props.image,
          },
        ],
        url: `https://wildgame.com${router.asPath}`,
        site_name: "wallss",
      }}
      twitter={{
        handle: "@wildgame",
        site: "@wildgame",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Header;