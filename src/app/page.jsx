import GenericMediaContainer from "@/components/GenericMediaContainer";
import IllustrationPreview from "@/components/IllustrationPreview";
import imgAvatar from "@/assets/image-avatar.webp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-left border border-black bg-white rounded-lg p-6 shadow max-w-[300px] gap-2">
      <GenericMediaContainer
        width="260px"
        className="mb-4 rounded-lg overflow-hidden"
      >
        <IllustrationPreview />
      </GenericMediaContainer>
      <span className="bg-[#f5d34a] font-extrabold p-2 text-black w-fit h-fit rounded-md">Learning</span>
      <small>Published 21 Dec 2023</small>
      <h2 className="text-1xl font-extrabold">HTML & CSS foundations</h2>
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="flex items-center gap-2">
        <GenericMediaContainer width="30px" height={"30px"}>
          <Image
            src={imgAvatar}
            alt="Greg Hooper"
            width="900px"
            height="900px"
            className="rounded-full"
          />
        </GenericMediaContainer>

        <h3 className="font-bold">Greg Hooper</h3>
      </div>
    </main>
  );
}
