import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RoutesPath } from './routes';

function App() {
  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RoutesPath />
        </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
