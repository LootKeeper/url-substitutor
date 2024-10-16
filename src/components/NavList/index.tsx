import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/store';
import NavItem from 'src/components/NavItem';

import { list, item } from './styles.module.css';

const NavList = () => {
  const navigations = useSelector((state: RootState) => state.navigation.items);
  return (
    <ul className={list}>
      {navigations.map((element) => (
        <li className={item} key={element.id}>
          <NavItem item={element} />
        </li>
      ))}
    </ul>
  );
};

export default NavList;
