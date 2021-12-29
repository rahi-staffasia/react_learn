import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

const FirstPost = kita => {
  console.log("Printing kita");
  console.log(kita);
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/signature.png"
        height={144}
        width={144}
        alt="Your name"
      ></Image>
      <p className="fun">This is nuts</p>
    </Layout>
  );
};

export default FirstPost;
