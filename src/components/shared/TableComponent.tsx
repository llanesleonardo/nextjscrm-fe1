// create a table component that displays a table with a header, a body, and a footer

import { Table } from 'antd';

type TableComponentProps<T extends { key: string | number }> = {
  columns: {
    title: string;
    dataIndex: string;
    render: (text: React.ReactNode, record?: T) => React.ReactNode;
  }[];
  dataSource: T[];
};

export default function TableComponent<T extends { key: string | number }>({ columns, dataSource }: TableComponentProps<T>) {
    // rowSelection object indicates the need for row selection
const rowSelection = {
    type: 'checkbox' as const,
    onChange: (selectedRowKeys: React.Key[], selectedRows: typeof dataSource) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: T) => ({
      disabled: record.key === 'Disabled User', // Column configuration not to be checked
      name: record.key.toString(),
    }),
  };
  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}