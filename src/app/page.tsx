import { Flex, Text, Button } from '@radix-ui/themes';
import { Heading } from '@radix-ui/themes';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Fade } from 'react-awesome-reveal';
import Section1 from '@/components/section1';
import Section2 from '@/components/section2';
import Section3 from '@/components/section3';
export default function Home() {

  return (
    <>
      
      <main className='flex flex-col min-w-screen'>
        <Section1/>
        <Section2/>
        <Section3/>
      </main>
    </>
  );
}