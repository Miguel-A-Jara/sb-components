import { Meta, StoryObj } from '@storybook/react';
import MyLabel from '../components/MyLabel';

const meta = {
  title: 'UI/labels/MyLabel',
  component: MyLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fontColor: {
      control: 'color',
    },
    size: {
      control: 'inline-radio',
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic Label',
  },
};

export const AllCaps: Story = {
  args: {
    label: 'All Caps Label',
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
    color: 'text-secondary',
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color Label',
    fontColor: '#ff1573',
  },
};
