import Link from 'next/link';
import Counter from '../components/Counter';
import style from '../static/style';

export default () =><div>
  {style}
  <h1>Next.js</h1>
  <p>Welcome to next.js:</p>
  <hr />
  <div>
    <Link href="/other">
      <button>Go to Other page &gt;&gt;</button>
    </Link>
  </div>
  <hr />
  <Counter />
</div>