import { useRouter } from 'next/router';
import { useState } from 'react';

import SearchComponent from '@/components/searchBar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();
  const [textFieldValue, setTextFieldValue] = useState('');
  return (
    <Main
      meta={
        <Meta
          title="QS World University Ranking Semantic Web"
          description="QS World University Ranking Semantic Web"
        />
      }
    >
      <div className="flex flex-col items-center content-center justify-center">
        {/* Use router.basePath relatively */}
        <SearchComponent></SearchComponent>
      </div>
    </Main>
  );
};

export default Index;
