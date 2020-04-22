import Link from 'next/link';
import style from '../static/style';

export default () =><div>
  {style}
  <h1>Next.js</h1>
  <p>This is Other page.</p>
  <hr />
  <div>
    <Link href="/">
      <button>&lt;&lt; Back to Index page</button>
    </Link>
  </div>
</div>