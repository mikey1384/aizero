import React, { Component, ErrorInfo } from 'react';
import StackTrace from 'stacktrace-js';
import { css } from '@emotion/css';
import { Color, borderRadius } from '~/constants/css';
import { clientVersion } from '~/constants/defaultValues';
import URL from '~/constants/URL';

const token = () =>
  typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

const auth = () => ({
  headers: {
    authorization: token()
  }
});

interface ErrorBoundaryProps {
  children: React.ReactNode;
  innerRef?: React.RefObject<HTMLInputElement>;
  userId?: number;
  username?: string;
  componentPath: string;
  style?: React.CSSProperties;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  async componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ hasError: true });
    const errorStack = await StackTrace.fromError(error);
    await StackTrace.report(
      errorStack,
      `${URL}/user/error`,
      JSON.stringify({
        clientVersion,
        message: error.message,
        componentPath: this.props.componentPath,
        info: info?.componentStack,
        token: auth()?.headers?.authorization
      })
    );
    console.log(error);
  }

  render() {
    const { children, innerRef, componentPath, ...props } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div
          style={{
            color: Color.darkerGray(),
            fontWeight: 'bold',
            width: '100%',
            height: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            ...props.style
          }}
        >
          <div
            style={{
              fontSize: '1.7rem',
              padding: '2rem',
              border: `1px solid ${Color.borderGray()}`,
              borderRadius,
              background: Color.wellGray()
            }}
          >
            <p>Uh oh, something went wrong...</p>
          </div>
          {componentPath ? (
            <div style={{ marginTop: '0.5rem', fontSize: '1.3rem' }}>
              {componentPath}
            </div>
          ) : null}
          <div
            className={css`
              &:hover {
                text-decoration: underline;
              }
            `}
            style={{
              cursor: 'pointer',
              color: Color.logoBlue(),
              fontSize: '1.5rem',
              marginTop: '3rem'
            }}
            onClick={() => window.location.reload()}
          >
            Did you take the screenshot? Then tap here to reload the website
          </div>
        </div>
      );
    }
    return Object.keys(props).length > 0 ? (
      <div ref={innerRef} style={props.style} {...props}>
        {children}
      </div>
    ) : (
      <>{children}</>
    );
  }
}
