import LinksList from '@/components/UI/LinksList';
import PageHeader from '@/components/UI/PageHeader';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const paths = [
  { name: 'Learn Hiragana', path: 'learn' },
  { name: 'Test Hiragana', path: 'test' },
  { name: 'Random Hiragana', path: 'random' },
];

const Hiragana = () => (
  <PageWrapper>
    <PageHeader title='Hiragana (ひらがな)' />

    <LinksList links={paths} />
  </PageWrapper>
);

export default Hiragana;
