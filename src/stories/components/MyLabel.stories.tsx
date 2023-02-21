import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: 'UI/labels/MyLabel',
  component: MyLabel,
  argTypes: {
    color: { control: 'select' },
    fontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
  size:'h2',
  allCaps: false // Capitalize
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  size:'normal',
  allCaps: true // Capitalize
}

export const Secondary = Template.bind({});
Secondary.args = {
  size:'normal',
  color: 'secondary' 
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  size:'normal',
  color: 'tertiary' 
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size:'h1',
  fontColor: '#904dee' 
}