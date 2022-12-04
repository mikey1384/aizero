import ErrorBoundary from '~/components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary componentPath="App/index">
      <div id="App">this is where everything begins</div>
    </ErrorBoundary>
  );
}
