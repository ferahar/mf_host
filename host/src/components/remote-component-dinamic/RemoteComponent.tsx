import React from 'react';
import { useDynamicScript, loadComponent, SystemProps } from './dinamic';
import { RemoteModuleLite, RemoteModule } from '../remote-module';

type RemoteComponentProps = {
  system: SystemProps,
  isLite?: boolean,
};

const RemoteComponent = (props:RemoteComponentProps) => {
  const { ready, failed } = useDynamicScript({
    url: props.system && props.system.url,
  });

  if (!props.system) {
    return <h2>Not system specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {props.system.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>;
  }

  const Component = React.lazy(loadComponent(props.system.scope, props.system.module));

  if (props.isLite) {
    return (
      <RemoteModuleLite module={Component} />
    );
  } else {
    return (
      <RemoteModule module={Component} />
    );
  }

};

export default RemoteComponent;