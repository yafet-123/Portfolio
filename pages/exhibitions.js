import { List } from "../components/exhibitions/List";
import { MainHeader } from "../components/common/MainHeader";
import { ExhibitionData } from "../data/data";

export default function Exhibitions() {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Helen Zeray : Exhibitions" />
      <List exhibitions={ExhibitionData} />
    </main>
  );
}
