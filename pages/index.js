import { AppLayout } from "@/components/AppLayout";
import BestSellerSilder from "@/components/home/bestseller";
import CategoryBanner from "@/components/home/categoryBanner/categoryBanner";
import CategoryCard from "@/components/home/categoryCard/categoryCard";
import EnvSection from "@/components/home/envsection";
import ExploreCategory from "@/components/home/explorecard";
import GenderBanner from "@/components/home/genderBanner/genderBanner";
import HeroBanner from "@/components/home/heroBanner/heroBanner";
import Instcards from "@/components/home/instasection";
import ThreeCard from "@/components/home/threecard";
import WoodsSilder from "@/components/home/woods";
import { Container, Box } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <AppLayout>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeroBanner />
        <Container sx={{ pt: 4, pb: 2 }}>
          <CategoryCard />
        </Container>
        <CategoryBanner
          link="/product-list/MEN_CASUALS_LACE_UP"
          img="https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/wdl_shoe_banner.png"
        />
        <Box sx={{ my: 3 }}>
          <BestSellerSilder />
        </Box>
        <Box sx={{ mb: 3 }}>
          <GenderBanner />
        </Box>
        <ExploreCategory />
        <CategoryBanner
          link="/brands/WOODSPORTS"
          img="https://woodland-dev-storage134048-dev.s3.ap-south-1.amazonaws.com/Images/woodsport_banner.png"
        />
        <Box sx={{ my: 3 }}>
          <WoodsSilder />
        </Box>
        <Box>
          <ThreeCard />
        </Box>
        <Box>
          <Instcards />
        </Box>
        <Box>
          <EnvSection />
        </Box>
      </AppLayout>
    </>
  );
}
