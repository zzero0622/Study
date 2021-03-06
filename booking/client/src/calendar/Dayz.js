import React from 'react';
import Timeline from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
// https://www.npmjs.com/package/birtly-calendar-timeline

function ReactCalendarTimeline(props) {
  const groups = [
    { id: 1, title: '도위', rightTitle: 'rightTitle' },
    { id: 2, title: '도림', rightTitle: 'rightTitle' },
  ];

  const items = [
    {
      id: 1,
      group: 1,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(0.5, 'hour'),
    },
    {
      id: 3,
      group: 1,
      title: 'item 3',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(3, 'hour'),
    },
  ];

  // ReactDOM.render(document.getElementById('root'));
  return (
    <>
      <div>
        Rendered by react!
        <Timeline groups={groups} items={items} defaultTimeStart={moment().add(-12, 'hour')} defaultTimeEnd={moment().add(12, 'hour')} />
      </div>
    </>
  );
}

export default ReactCalendarTimeline;
