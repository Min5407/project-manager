import DiscordIcon from '@/components/icons/discord';
import GoogleIcon from '@/components/icons/google_drive';
import NotionIcon from '@/components/icons/notion';
import SlackIcon from '@/components/icons/slack';

export const CONNECTIONS_LIST = [
  {
    name: 'Google Drive',
    icon: <GoogleIcon className='h-8 w-8' />,
    description: 'Connect your google drive to listen to folder changes',
  },
  {
    name: 'Discord',
    icon: <DiscordIcon className='h-8 w-8' />,
    description: 'Connect your discord to send notification and messages',
  },
  {
    name: 'Notion',
    icon: <NotionIcon className='h-8 w-8' />,
    description: 'Connect your notion to automate your tasks.',
  },
  {
    name: 'Slack',
    icon: <SlackIcon className='h-8 w-8' />,
    description:
      'Connect your slack to send notification to team members through your own custom bot.',
  },
] as const;
