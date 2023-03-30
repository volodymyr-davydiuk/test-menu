import React, {useLayoutEffect, useState} from 'react';
import {MenuItem} from '../Types/data';
import {useQuery} from '@apollo/client';
import {GET_MENU_ITEMS} from '../GraphQL/Queries';
import Header from './Header';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const [menuItem, setMenuItem] = useState<MenuItem[]>([]);

  const {data} = useQuery(GET_MENU_ITEMS);

  useLayoutEffect((): void => {
    if (data) {
      setMenuItem(data.menuItems.data);
    }
  }, [data]);
  return (
    <div className={"app-container"}>
      <Header menuItems={menuItem}/>
      <main>
        {props?.children && props.children}
      </main>
    </div>
  );
};

export default Layout;