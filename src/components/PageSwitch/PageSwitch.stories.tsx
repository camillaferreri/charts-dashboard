import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageSwitch from './PageSwitch';

export default {
  title: 'Example/PageSwitch',
  component: PageSwitch,
} as ComponentMeta<typeof PageSwitch>;

const Template: ComponentStory<typeof PageSwitch> = (args) => <PageSwitch {...args} />;

export const Home = Template.bind({});
Home.args = {
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
