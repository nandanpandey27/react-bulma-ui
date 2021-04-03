import React from "react";
import Button from "./Button";

const ButtonModule = {
  title: "Example/Button",
  component: Button,
  argTypes: {},
};

export default ButtonModule;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Button",
};

export const Info = Template.bind({});
Info.args = {
  children: "Button",
  color: "info",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
  color: "primary",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
  color: "primary",
};
