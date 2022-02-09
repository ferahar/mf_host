import React, { PureComponent } from 'react';
import './error-boundary.scss';
import { Link } from 'react-router-dom';
import { ResponsesEmptyBox } from '@consta/uikit/ResponsesEmptyBox';
import { Button } from '@consta/uikit/Button';
import { hiddenErrorMessage, showErrorMessage } from '../../utils/errorLogMessage';

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error
  errorInfo?: React.ErrorInfo
};

export default class ErrorBoundaryModule extends PureComponent<unknown, ErrorBoundaryState> {

  constructor(props: unknown) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidMount() {
    hiddenErrorMessage();
  }

  componentWillUnmount() {
    showErrorMessage();
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
        <div className="container container_align-center-all">
          <ResponsesEmptyBox
            title="Ошибка модуля"
            description="Ошибка в модуле или он не загружен"
            size="m"
            actions={
              <Link to="/" >
              <Button
                label="Главная страница"
                view="clear"
              />
              </Link>
            }
          />
        </div>
      );
    }

    return this.props.children;
  }
}
