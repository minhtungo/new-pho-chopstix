import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { appConfig } from '@/config/app-config';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  return (
    <header>
      <nav aria-label='Global' className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Pho Chopstix</span>
            <Image
              alt='Pho Chopstix'
              src='/images/logo.jpg'
              className='aspect-square size-16'
              width={400}
              height={400}
            />
          </a>
        </div>
        <Popover>
          <PopoverTrigger className='flex lg:hidden'>
            <span className='sr-only'>Open main menu</span>
            <Menu aria-hidden='true' className='size-6' />
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <div className='flex items-center gap-8 text-base'>
            {appConfig.menu.header.map((item) => (
              <a href={item.href}>{item.name}</a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
