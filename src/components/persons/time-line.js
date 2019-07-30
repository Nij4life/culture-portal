import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const TimelineWrapper = ({ data }) => (
  <Timeline>
    {data.map(obj => (
      <TimelineItem
        key={obj.key}
        dateText={obj.dateText}
        style={{ color: '#e86971' }}
      >
        <p>{obj.content}</p>
      </TimelineItem>
    ))}
  </Timeline>
);

export default TimelineWrapper;