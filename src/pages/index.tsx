import { useRouter } from 'next/router';
import { useState } from 'react';

import SearchBar from '@/components/SearchBar';
import SearchResultComponent from '@/components/SearchResultComponent';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();
  const [textFieldValue, setTextFieldValue] = useState('');
  return (
    <Main
      meta={
        <Meta
          title="MedLine Search Engine"
          description="MedLine Search Engine Homepage"
        />
      }
    >
      <div className="border-b border-gray-300">
        <a
          href={'/'}
          className="flex pt-16 pb-8 content-center items-center text-center justify-center"
        >
          <img
            className="w-1/2 p-0 m-0"
            src={`${router.basePath}/assets/Medigle.png`}
            alt={'Medigle logo'}
          ></img>
        </a>
      </div>
      <div className="flex flex-col items-center content-center justify-center">
        {/* Use router.basePath relatively */}
        <SearchBar></SearchBar>
      </div>
    </Main>
  );
};

export default Index;
