import React, { PureComponent } from 'react';
import { Informer } from '@consta/uikit/Informer';
import './error-boundary.scss';

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error
  errorInfo?: React.ErrorInfo
};

export default class ErrorBoundaryLite extends PureComponent<unknown, ErrorBoundaryState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Informer
          status="warning"
          view="filled"
          title="Ошибка в модуле или он не загружен."
        />
      );
    }
    return this.props.children;
  }
}
