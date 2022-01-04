import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuToggle from './MenuToggle';

export default {
  title: 'Example/MenuToggle',
  component: MenuToggle,
} as ComponentMeta<typeof MenuToggle>;

const Template: ComponentStory<typeof MenuToggle> = (args) => <MenuToggle {...args} />;

export const Initial = Template.bind({});
Initial.args = {
};