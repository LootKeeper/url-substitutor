import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/store';
import NavItem from 'src/components/NavItem';

import { list, item } from './styles.module.css';
import { isHostsEqual } from '@root/utils/url';

const NavList = () => {
  const navigations = useSelector((state: RootState) => state.navigation.items);
  const currentTabUrl = useSelector(
    (state: RootState) => state.tab.currentTab.url
  );

  return (
    <ul className={list}>
      {navigations.map((element) => (
        <li className={item} key={element.id}>
          <NavItem
            item={element}
            current={isHostsEqual(currentTabUrl, element.host)}
          />
        </li>
      ))}
    </ul>
  );
};

export default NavList;
