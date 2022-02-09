import { HeaderModule, HeaderMenu } from '@consta/uikit/Header';
import { Item } from '@consta/uikit/__internal__/cjs-src/components/Header/Menu/HeaderMenu';
import { Button } from '@consta/uikit/Button';
import { IconDinosaur } from '@consta/uikit/IconDinosaur';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { storeKfa } from '../../store';


const KfaToolbar = () => {
  const { inc } = storeKfa;
  const navigate = useNavigate();
  const itemMenu: Item[] = [
    {
      label: 'First',
      onClick: () => navigate('first'),
    },
    {
      label: 'Second',
      onClick: () => navigate('second'),
    },
  ];
  return (
    <>
      <HeaderModule indent='l'>
        <Button
          view='ghost'
          label='I am Dino! R-r-r!'
          iconLeft={IconDinosaur}
          onClick={() => inc()}
        />
      </HeaderModule>
      <HeaderModule indent='l'>
        <HeaderMenu items={itemMenu} />
      </HeaderModule>
    </>
  );
};

export default KfaToolbar;
