import { AiFillHome, AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BsTv, BsTvFill } from 'react-icons/bs';
import { RiMovie2Fill, RiMovie2Line } from 'react-icons/ri';

export const navigationMenus = [
  {
    id: 1,
    name: 'home',
    icon: <AiOutlineHome />,
    iconActive: <AiFillHome />,
    link: '/',
  },
  {
    id: 2,
    name: 'movie',
    icon: <RiMovie2Line />,
    iconActive: <RiMovie2Fill />,
    link: '/list/movie',
  },
  {
    id: 3,
    name: 'tv',
    icon: <BsTv />,
    iconActive: <BsTvFill />,
    link: '/list/tv',
  },
  {
    id: 4,
    name: 'search',
    icon: <AiOutlineSearch />,
    iconActive: <AiOutlineSearch />,
    link: '/search',
  },
];
