import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LanguageSwitch from './LanguageSwitch';

export default {
  title: 'Example/LanguageSwitch',
  component: LanguageSwitch,
} as ComponentMeta<typeof LanguageSwitch>;

const Template: ComponentStory<typeof LanguageSwitch> = (args) => <LanguageSwitch {...args} />;

export const Initial = Template.bind({});
Initial.args = {
};