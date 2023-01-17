import { QueryCache } from 'react-query';

const queryCache = new QueryCache();

interface useClientI {
  client: ClientI;
}

interface FetchConfigI {
  method: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  body: any;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  headers: any;
}

type EndpointRequest = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ClientI {
  <T>(
    endpoint: string,
    type?: EndpointRequest,
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    options?: {
      isAuthRequired?: boolean;
      data?: any;
      isMultipartForm?: boolean;
    }
  ): Promise<T>;
}

export const useClient = (): useClientI => {
  const API_URL = import.meta.env.VITE_API_URL || 'VITE_API_URL';

  const client: ClientI = async (endpoint, type = 'GET', { data } = {}) => {
    const config: FetchConfigI = {
      method: type,
      body: data,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    return fetch(`${API_URL}/${endpoint}`, config).then(async (response) => {
      if (response.status === 401) {
        queryCache.clear();
        return Promise.reject({ message: 'Please re-authenticate.' });
      }
      if (response.status === 404) {
        return Promise.reject({ message: 'Not found.' });
      }
      if (response.status >= 500) {
        return Promise.reject({ message: 'Server unavailable.' });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
  };

  return { client };
};
