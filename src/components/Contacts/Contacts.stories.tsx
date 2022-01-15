import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Contacts from './Contacts';

export default {
  title: 'Example/Contacts',
  component: Contacts,
} as ComponentMeta<typeof Contacts>;

const Template: ComponentStory<typeof Contacts> = (args) => <Contacts {...args} />;

export const Initial = Template.bind({});
Initial.args = {
};