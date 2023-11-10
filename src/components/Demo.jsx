import uploadImage from "../assets/uploadIcon.svg";

import Image from "next/image";

const Demo = () => {
  return (
    <section className="flex justify-evenly mt-1 sm:mt-12 items-center">
      <div className="hidden sm:block bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video
          src="https://dawid-epic-captions.s3.us-east-1.amazonaws.com/without-captions.mp4"
          preload
          muted
          autoPlay
          loop
        ></video>
      </div>
      <div className="hidden sm:block">
        {/* <Image src={uploadImage} height={50} width={50} alt="logo" /> */}
      </div>
      <div className="bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video
          src="https://dawid-epic-captions.s3.us-east-1.amazonaws.com/with-captions.mp4"
          preload
          muted
          autoPlay
          loop
        ></video>
      </div>
    </section>
  );
};

export default Demo;
