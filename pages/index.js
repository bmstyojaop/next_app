import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';


export default () =>(
  <Layout header="Next" title="Top page.">
    <Counter/>
    <hr/>
    <Link href="./calc"><button>
      go to Other &gt;&gt;
    </button></Link>
    {/* <Link></Link> */}
  </Layout>
);