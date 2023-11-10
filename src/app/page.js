import Demo from "@/components/Demo";
import Upload from "@/components/Upload";
import Heading from "@/components/common/CommonHeading";

export default function Home() {
  return (
    <>
      <Demo />
      <div className="text-center">
        <Upload />
      </div>
    </>
  );
}
