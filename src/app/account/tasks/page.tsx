'use client';
import React from 'react';
import TableComponent from '@/components/shared/TableComponent';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';

const columns = [
  {
    title: 'Task Name',
    dataIndex: 'taskName',
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: 'Assigned To',
    dataIndex: 'assignedTo',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
  {
    title: 'Due Date',
    dataIndex: 'dueDate',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
];

const data = [
  {
    key: '1',
    taskName: 'Follow up with Tech Solutions',
    assignedTo: 'John Smith',
    dueDate: '2024-01-15',
    status: 'In Progress',
  },
  {
    key: '2',
    taskName: 'Prepare proposal for Global Manufacturing',
    assignedTo: 'Sarah Johnson',
    dueDate: '2024-01-20',
    status: 'Pending',
  },
  {
    key: '3',
    taskName: 'Review contract with Healthcare Partners',
    assignedTo: 'Mike Davis',
    dueDate: '2024-01-25',
    status: 'Completed',
  },
];

const ActionsBarComponentProps = {
  items: [
    {
      title: 'Tasks',
      description: 'Manage your tasks',
      buttonText: 'Create Task',
      buttonLink: '/account/tasks/create',
    },
    {
      title: 'Export Tasks',
      description: 'Export your tasks',
      buttonText: 'Export Tasks',
      buttonLink: '/account/tasks/export',
    }
  ]
};

export default function Tasks() {
  const TableComponentProps = {
    columns: columns,
    dataSource: data,
  };
  
  return (
    <div>
      <ActionsBarComponent {...ActionsBarComponentProps} />
      <TableComponent {...TableComponentProps} />
    </div>
  );
}
