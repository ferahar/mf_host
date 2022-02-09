import React from 'react';

type ListItem = {
  title: string
};

interface MenuItemProps {
  items: unknown,
  getTitle?: (value:unknown) => string;
  getHandler?: (value:unknown) => void;

}

function getListMap(items:ListItem[]) {
  return items.map(item => {
    if (item.title) {
      return (
        <li key={item.title}>
          {item.title}
        </li>
      );
    }
    return null;
  });
}


export default function List(props: MenuItemProps) {
  return (
    <ul>
      {getListMap(props.items as ListItem[])}
    </ul>
  );
}
