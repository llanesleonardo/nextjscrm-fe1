'use client';
import React from 'react';
import { Badge, Calendar } from 'antd';

const getListData = (value: { date: () => number }) => {
  let listData: { type: string, content: string }[] = []; // Specify the type of listData
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event......' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value: { month: () => number }) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const CalendarPage = () => {
  const monthCellRender = (value: { month: () => number }) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value: { date: () => number }) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type as 'warning' | 'success' | 'error' | 'processing' | 'default'} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
    const cellRender = (current: { date: () => number }, info: { type: string, originNode: React.ReactNode }) => {
    if (info.type === 'date') return dateCellRender({ date: () => current.date() });
    if (info.type === 'month') return monthCellRender({ month: () => current.date() });
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};
export default CalendarPage;