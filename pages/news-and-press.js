import { List } from "../components/news/List";
import { MainHeader } from "../components/common/MainHeader";
import { NewsData } from "../data/data";

export default function News() {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Helen Zeray : News and Press" />
      <List selectenews={NewsData} />
    </main>
  );
}
