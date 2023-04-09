import LinksList from '@/components/UI/LinksList';
import PageHeader from '@/components/UI/PageHeader';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const paths = [
  { name: 'Learn Katakana', path: 'learn' },
  { name: 'Test Katakana', path: 'test' },
  { name: 'Random Katakana', path: 'random' },
];

const Katakana = () => (
  <PageWrapper>
    <PageHeader title='Katakana (カタカナ)' />

    <LinksList links={paths} />
  </PageWrapper>
);

export default Katakana;
