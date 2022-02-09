import React, { useState } from 'react';
import { ThemeToggler } from '@consta/uikit/ThemeToggler';
import { IconSun } from '@consta/uikit/IconSun';
import { IconMoon } from '@consta/uikit/IconMoon';

const items = ['Default', 'Dark'];

export default function ButtonThemeToggler() {
  const [state, setState] = useState(items[0]);

  return (
    <ThemeToggler
      size="s"
      items={items}
      value={state}
      onChange={({ value }) => setState(value)}
      getItemIcon={theme => (theme === 'Default' ? IconSun : IconMoon)}
      getItemLabel={theme => theme}
    />
  );
}
