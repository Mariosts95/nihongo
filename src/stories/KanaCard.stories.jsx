import KanaCard from '../components/KanaCard';

export default {
  title: 'KanaCard',
  component: KanaCard,
};

const Template = (args) => <KanaCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  kana: 'a',
};
