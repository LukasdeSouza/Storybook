import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TableVirtualized } from '../components/table/TableVirtualized';

export default {
  title: 'Components/Table/TableVirtualized',
  component: TableVirtualized,
  decorators: [
    (Story) => {
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: Infinity,
            staleTime: Infinity,
          },
        },
      });
      return <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    }
  ]
};

const Template = (args) => <TableVirtualized {...args} />;

export const Table = Template.bind({});
Table.args = {
};
