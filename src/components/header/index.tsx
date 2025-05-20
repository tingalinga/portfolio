import Link from 'next/link';
import totoro from '@/assets/totoro.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex w-full justify-between p-4">
      <Link href="/">
        <Image src={totoro} alt="homepage icon button" />
      </Link>

      <Link href="/about">about</Link>
      <Link href="/experience">experience</Link>
      <Link href="/projects">projects</Link>
      <Link href="/contact">contact</Link>
    </header>
  );
}
