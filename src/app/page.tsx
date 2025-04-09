import Image from 'next/image';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export default async function Home() {
  const payload = await getPayload({ config: configPromise });
  const menuItems = await payload.find({
    collection: 'menu-items',
    depth: 2,
  });

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'></div>
  );
}
