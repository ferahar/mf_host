import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, routeInclude } from '../../routes';
import { ListItem } from '../list-item/ListItem';
import { storeShell } from '../../services/common';


export default function MainMenuItems() {
  const { setTitle, toggleOpenMenu } = storeShell;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {
        routes.map(item => {
          if (item.title) {
            return (
              <ListItem
                key={item.title}
                title={item.title}
                isSelected={ routeInclude(pathname, item.path)}
                handler={() => {
                  setTitle(item.title as string);
                  //TODO: refactor to Promise
                  toggleOpenMenu();
                  setTimeout(() => navigate(item.path), 200);
                }}
              />
            );
          }
          return null;
        })
      }
    </>
  );
}
