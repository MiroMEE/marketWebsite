import nv from '@/styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const logoSize = 60; 

export default function Navbar(){
  return (
    <div className={nv.navbar}>
      <div className={nv.logo}>
        <Image className={nv.img} src={"/pacicka.png"} alt="logo" width={logoSize} height={logoSize}/>
        <h1>Pacicka</h1>
      </div>
      <div className={nv.links}>
        <Link href={"/"}>[undefined]</Link>
        <Link href={"/"}>[undefined]</Link>
        <Link href={"/"}>[undefined]</Link>
        <Link href={"/"}>[undefined]</Link>
      </div>
    </div>
  );
}