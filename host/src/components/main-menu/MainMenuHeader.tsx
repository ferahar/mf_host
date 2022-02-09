import React from 'react';
import { Header, HeaderLogo, HeaderModule } from '@consta/uikit/Header';
import { Text } from '@consta/uikit/Text';
import { IconClose } from '@consta/uikit/IconClose';
import { Button } from '@consta/uikit/Button';
import { storeShell } from '../../services/common';
// import ButtonThemeToggler from '../button-theme-toggler';

function MainMenuHeader() {
  const { toggleOpenMenu } = storeShell;

  return (
    <Header
      className='mainMenu-layout__header'
      leftSide={
        <HeaderModule className='mainMenu-layout__header'>
          <HeaderLogo>
            <Text as="p" size="l" weight="bold">
              ИАСУРГ
            </Text>
          </HeaderLogo>
        </HeaderModule>
      }
      rightSide={
        <>
          {/*<HeaderModule>*/}
          {/*  <ButtonThemeToggler />*/}
          {/*</HeaderModule>*/}
          <HeaderModule>
            <Button
              onClick={toggleOpenMenu}
              iconLeft={IconClose}
              onlyIcon
              size="s"
              view="clear"
            />
          </HeaderModule>
        </>
      }
    />
  );
}

export default React.memo(MainMenuHeader);
