import * as React from 'react';

export interface TimelineItem {
  label: React.ReactNode;
  labelAction?: React.ReactNode;
  customPrefix?: React.ReactNode;
  suffix?: React.ReactNode | string;
  marginBottom?: string;
}

export interface TimelineProps {
  className?: string;
  dataHook?: string;
  items: TimelineItem[];
}

export default class Timeline extends React.PureComponent<TimelineProps> {}
