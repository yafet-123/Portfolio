import { List } from "../../components/works/List";
import { MainHeader } from "../../components/common/MainHeader";
import { SelectedWorksData } from "../../data/data";

export default function SelectedWorks() {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Helen Zeray : SelectedWorks" />
      <List selectedWorks={SelectedWorksData} />
    </main>
  );
}
