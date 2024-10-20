import Hero from "./hero/Hero";
import HeroSectionContent from "./HeroSectionContent";
import LatestNews from "./latest_news/LatestNews";
import TopTrending from "./top_trending/topTrending";
import SliderHow from "./SliderHow/SliderHow";
import SeeLater from "./see_later/SeeLater";

function Page() {
  return (
    <div className="border-2 flex-col flex gap-20 text-black dark:text-white relative top-0 mt-[110px] overflow-hidden">
      <Hero />
      <SeeLater />
      <LatestNews />
      {/* <TopTrending /> */}
      <SliderHow />
    </div>
  );
}
export default Page;
