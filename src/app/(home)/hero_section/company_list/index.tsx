import React from 'react';
import {
  Apple,
  BatteryCharging,
  Car,
  Cat,
  Chrome,
  Dog,
  Dribbble,
  Figma,
  GitBranch,
  PawPrint,
  Slack,
  Trello,
  Twitch,
} from 'lucide-react';
import { SlideAnimationLayout } from './slide_animation_layout';

type Props = {};

const CompanyList = (props: Props) => {
  const companyItems = [
    {
      name: 'Git',
      Icon: GitBranch,
    },
    {
      name: 'Apple',
      Icon: Apple,
    },
    {
      name: 'Slack',
      Icon: Slack,
    },
    {
      name: 'Chrome',
      Icon: Chrome,
    },
    {
      name: 'Dribble',
      Icon: Dribbble,
    },
    {
      name: 'Figma',
      Icon: Figma,
    },
    {
      name: 'Twitch',
      Icon: Twitch,
    },
    {
      name: 'Trello',
      Icon: Trello,
    },
  ];
  return (
    <SlideAnimationLayout>
      {companyItems.map(({ Icon, name }) => {
        return (
          <div className='flex items-center gap-2 text-3xl text-neutral-400' key={name}>
            <Icon />
            <span>{name}</span>
          </div>
        );
      })}
    </SlideAnimationLayout>
  );
};

export default CompanyList;
