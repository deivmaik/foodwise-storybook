import { SwipeButton } from './SwipeButton';

export default {
  title: 'Foodwise Design Components/SwipeButton',
  component: SwipeButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    className: { control: 'text' },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'SWIPE TO ADD ITEMS',
  },
};

export const Secondary = {
  args: {
    label: 'SWIPE TO ADD ITEMS',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    label: 'SWIPE TO ADD ITEMS',
  },
};
