import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";

const NotFound = () => {
  return (
    <div className="not-found text-white text-2xl">
      <div>
        <Image src="/logo.svg" width={200} height={200} alt="logo" />
      </div>
      <div>
        <Image src="/not-found.gif" width={250} height={200} alt="logo" />
      </div>
      <h1 className="py-10 ">Oops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/" className="">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
