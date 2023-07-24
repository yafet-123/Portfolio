import Image from "next/image";
import { Display } from "../../../components/works/Display";
import { SelectedWorksData } from "../../../data/data";

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const id = query.id;
  const data = SelectedWorksData.filter((work) => work.id === parseInt(id))[0];
  return {
    props: {
      work: data,
    },
  };
}

export default function SelectedWorksView({ work }) {
  return (
    <section className="w-full h-full pt-32 bg-white">
      <Display work={work} />
    </section>
  );
}
