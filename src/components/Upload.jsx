"use client";

import Image from "next/image";
import uploadImage from "../assets/uploadIcon.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Upload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const upload = async (e) => {
    e.preventDefault();

    const files = e.target.files;
    const file = files[0];

    setIsUploading(true);

    const result = await axios.postForm("/api/upload", {
      file,
    });
    setIsUploading(false);

    const newName = result.data.newName;
    router.push("/" + newName);
  };
  return (
    <>
      {isUploading && (
        <div className="bg-black/90 text-white fixed inset-0  flex items-center">
          <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading</h2>
            <h3 className="text-xl">Please wait...</h3>
          </div>
        </div>
      )}
      <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer mt-2 md:mt-0">
        <Image src={uploadImage} height={25} width={25} alt="logo" />

        <span>Choose file</span>
        <input onChange={upload} type="file" className="hidden" />
      </label>
    </>
  );
};

export default Upload;
