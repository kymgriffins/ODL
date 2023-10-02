import { Fragment } from "react";
import Head from "next/head";
import { getAllItems, getFeaturedItems } from "../lib/items-util";
import HeaderOne from "../components/header/header-1";
import Hero from "../components/home-page/hero";
import Services from "../components/home-page/services";
import About from "../components/home-page/about";
import PricingTab from "../components/home-page/pricing-tab";
import Testimonial from "../components/home-page/testimonial";
import Brand from "../components/home-page/brand";
import FeaturedPost from "../components/home-page/featured-post";
import LatestProject from "../components/home-page/latest-project";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Outline Designs Limited</title>
        <title>
          Outline Designs - Premier Construction Company | Bringing
          Architectural Visions to Life
        </title>
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Outline Designs is a premier construction company in Kenya, dedicated to bringing architectural visions to life. With a wealth of expertise and a commitment to excellence, we offer top-notch construction services, architectural design, interior design, and project management. Transform your dreams into reality with our sustainable and innovative approach, making us the leading choice for construction projects in Kenya and beyond."
        />
        <meta
          name="keywords"
          content="Outline Designs, construction company, building design, construction services, sustainability, jenga, kenya, architectural firm, innovation"
        />
        <meta name="author" content="Outline Designs" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Outline Designs - Premier Construction Company"
        />
        <meta
          property="og:description"
          content="Outline Designs is a premier construction company in Kenya, dedicated to bringing architectural visions to life. With a wealth of expertise and a commitment to excellence, we offer top-notch construction services, architectural design, interior design, and project management. Transform your dreams into reality with our sustainable and innovative approach, making us the leading choice for construction projects in Kenya and beyond."
        />
        <meta
          property="og:image"
          content="https://example.com/path-to-image.jpg"
        />{" "}
        {/* Replace with actual image URL */}
        <meta property="og:url" content="https://outlinedesigns.co.ke" />
        <meta property="og:type" content="website" />
        {/* Twitter Meta Tags */}
        <meta
          name="twitter:title"
          content="Outline Designs - Premier Construction Company"
        />
        <meta
          name="twitter:description"
          content="Outline Designs is a premier construction company in Kenya, dedicated to bringing architectural visions to life. With a wealth of expertise and a commitment to excellence, we offer top-notch construction services, architectural design, interior design, and project management. Transform your dreams into reality with our sustainable and innovative approach, making us the leading choice for construction projects in Kenya and beyond."
        />
      </Head>
      <HeaderOne />
      <Hero heroItems={props.heroItems} />
      <Services services={props.services} />
      <LatestProject projects={props.projects} />
      <About />
      <PricingTab pricingItems={props.pricingItems} />
      <Testimonial testimonialItems={props.testimonialItems} />
      <Brand brandItems={props.brandItems} />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const heroItems = getAllItems("heros");
  const posts = getAllItems("posts");
  const projects = getAllItems("projects");
  const services = getAllItems("services");
  const pricingItems = getAllItems("pricing");
  const testimonialItems = getAllItems("testimonial");
  const brandItems = getAllItems("brands");
  const LatestProject = getFeaturedItems(projects);
  const FeaturedPost = getFeaturedItems(posts);

  return {
    props: {
      heroItems,
      projects: LatestProject,
      posts: FeaturedPost,
      services,
      pricingItems,
      testimonialItems,
      brandItems,
    },
  };
}

export default HomePage;
