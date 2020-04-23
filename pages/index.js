import Link from 'next/link';
import Layout from '../components/Layout';
import Image from '../static/Image';

export default () =>(
  <Layout header="Next" title="Top page.">
    <p>Welcome to next.js:</p>
    <Image fname="image.png" size="100" />
    <hr />
    <Link href="/other">
      <button>Go to Other page &gt;&gt;</button>
    </Link>
  </Layout>
);