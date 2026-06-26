import Timeline from "@/components/timeline/Timeline";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Company Journey Timeline | iLeads",
  description: "Explore iLeads company journey and milestones through our interactive timeline. Discover our growth story and key achievements over the years.",
  path: "timeline",
});

export default function Home() {
  return (
    <div>
      <h1 className="text-center my-5">Company Journey</h1>
      <Timeline />
    </div>
  );
}
