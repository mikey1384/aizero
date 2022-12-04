import { mobileMaxWidth } from '~/constants/css';
import { css } from '@emotion/css';
import ErrorBoundary from '~/components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary
      componentPath="App/index"
      className={css`
        height: CALC(100% - 4.5rem);
        width: 100%;
        @media (max-width: ${mobileMaxWidth}) {
          height: 100%;
        }
      `}
    >
      <div id="App">this is where everything begins</div>
    </ErrorBoundary>
  );
}
