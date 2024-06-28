import PageHeader from '@/components/page_header';
import { CONNECTIONS_LIST } from './_constant';
import Item from './item';

const ConnectionPage = () => {
  return (
    <>
      <PageHeader
        title='Connection'
        description='Connect all your app with our service.'
        className='mb-12 md:mb-24'
      />

      <ul className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {CONNECTIONS_LIST.map(({ description, icon, name }) => (
          <li key={name}>
            <Item name={name} description={description} icon={icon} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ConnectionPage;
