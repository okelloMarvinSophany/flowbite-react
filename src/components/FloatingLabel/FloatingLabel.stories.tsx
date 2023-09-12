import type { Meta, Story } from '@storybook/react';
import type { FloatingLabelProps } from '~/src/components/FloatingLabel/FloatingLabel';
import { FloatingLabel } from './FloatingLabel';

export default {
  title: 'Components/FloatingLabel',
  component: FloatingLabel,
} as Meta;

const Template: Story<FloatingLabelProps> = (args) => <FloatingLabel {...args} />;

export const FilledSuccess = Template.bind({});
FilledSuccess.storyName = 'Filled success';
FilledSuccess.args = {
  error: false,
  buttonStyle: 'filled',
  label: 'Label',
};
export const OutlinedSuccess = Template.bind({});
OutlinedSuccess.storyName = 'Outlined success';
OutlinedSuccess.args = {
  error: false,
  buttonStyle: 'outlined',
  label: 'Label',
};
export const StandardSuccess = Template.bind({});
StandardSuccess.args = {
  error: false,
  buttonStyle: 'standard',
  label: 'Label',
};
export const FilledError = Template.bind({});
FilledError.args = {
  error: true,
  buttonStyle: 'filled',
  label: 'Label',
};
export const OutlinedError = Template.bind({});
OutlinedError.args = {
  error: true,
  buttonStyle: 'outlined',
  label: 'Label',
};
export const StandardError = Template.bind({});

StandardError.args = {
  error: true,
  buttonStyle: 'standard',
  label: 'Label',
};

export const SmallFilled = Template.bind({});
SmallFilled.args = {
  buttonStyle: 'filled',
  label: 'Small Filled',
  sizing: 'sm',
};
export const SmallOutlined = Template.bind({});
SmallOutlined.args = {
  buttonStyle: 'outlined',
  label: 'Small Outlined',
  sizing: 'sm',
};

export const SmallStandard = Template.bind({});
SmallStandard.args = {
  buttonStyle: 'standard',
  label: 'Small Standard',
  sizing: 'sm',
};

export const HelperText = Template.bind({});
HelperText.args = {
  buttonStyle: 'filled',
  label: 'Floating Helper',
  helperText: 'Remember, contributions to this topic should follow our Community Guidelines.',
};