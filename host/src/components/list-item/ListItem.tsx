import React, { HTMLAttributes, FC } from 'react';
import { Text } from '@consta/uikit/Text';
import { IconCheck } from '@consta/uikit/IconCheck';

import './list-item.scss';

type ListItemProps = {
  title: string,
  isSelected?: boolean,
  handler?: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export const ListItem: FC<ListItemProps> = ({ title, isSelected, handler }) => {

  if (isSelected) {
    return (
      <div onClick={handler}>
        <Text as="div" size="l" lineHeight="xs" view='primary' className="listItem">
          {title}
          <div className="listItem-icon"><IconCheck size="s"/></div>
        </Text>
      </div>
    );
  }

  return (
    <div onClick={handler}>
      <Text as="div" size="l" lineHeight="xs" view="secondary" className="listItem">
        {title}
      </Text>
    </div>
  );
};
