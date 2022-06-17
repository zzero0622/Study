import React, { useState } from 'react';
import Timeline, {
  TimelineMarkers,
  TimelineHeaders,
  TodayMarker,
  CustomMarker,
  CursorMarker,
  CustomHeader,
  SidebarHeader,
  DateHeader,
} from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
// https://www.npmjs.com/package/birtly-calendar-timeline

function ReactCalendarTimeline(props) {
  const [items, setItems] = useState([
    {
      id: 1,
      group: 1,
      title: 'item 1',
      start: moment(),
      end: moment().add(1, 'hour'),
      // start_time: moment(),
      // end_time: moment().add(1, 'hour'),
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      start: moment().add(-0.5, 'hour'),
      end: moment().add(0.5, 'hour'),
    },
    {
      id: 3,
      group: 1,
      title: 'item 3',
      start: moment().add(2, 'hour'),
      end: moment().add(3, 'hour'),
    },
  ]);

  const [groups, setGroups] = useState([
    { id: 1, title: '도위', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 2, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 3, title: '도위', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 4, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 5, title: '도위', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 6, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 7, title: '도위', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 8, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 9, title: '도위', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 10, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 11, title: '도위', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 12, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 13, title: '도위', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 14, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 15, title: '도위', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 16, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 17, title: '도위', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 18, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 19, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 20, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 21, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 22, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 23, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 24, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 25, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 26, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 27, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 28, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 29, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 30, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 31, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 32, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 33, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 34, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 35, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 36, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 37, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 38, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 39, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
    { id: 40, title: '도림', rightTitle: 'rightTitle', bgColor: 'white' },
  ]);
  const keys = {
    groupIdKey: 'id',
    groupTitleKey: 'title',
    groupRightTitleKey: 'rightTitle',
    itemIdKey: 'id',
    itemTitleKey: 'title',
    itemDivTitleKey: 'title',
    itemGroupKey: 'group',
    itemTimeStartKey: 'start',
    itemTimeEndKey: 'end',
    groupLabelKey: 'title',
  };

  const [visibleTimeStart, setVisibleTimeStart] = useState(moment().startOf('day').valueOf());
  const [visibleTimeEnd, setVisibleTimeEnd] = useState(moment().startOf('day').add(1, 'day').valueOf());

  const defaultTimeStart = moment().startOf('day').toDate();
  const defaultTimeEnd = moment().startOf('day').add(1, 'day').toDate();

  const handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const group = groups[newGroupOrder];

    setItems(
      items.map((item) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id,
            })
          : item
      )
    );

    console.log('Moved', itemId, dragTime, newGroupOrder);
  };

  const handleItemResize = (itemId, time, edge) => {
    setItems(
      items.map((item) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: edge === 'left' ? time : item.start,
              end: edge === 'left' ? item.end : time,
            })
          : item
      )
    );

    console.log('Resized', itemId, time, edge);
  };

  //? Click
  const handleCanvasClick = (groupId, time) => {
    console.log('Canvas clicked', groupId, moment(time).format());
  };

  const handleCanvasDoubleClick = (groupId, time) => {
    console.log('Canvas double clicked', groupId, moment(time).format());
  };

  const handleCanvasContextMenu = (group, time) => {
    console.log('Canvas context menu', group, moment(time).format());
  };

  const handleItemClick = (itemId, _, time) => {
    console.log('Clicked: ' + itemId, moment(time).format());
  };

  const handleItemSelect = (itemId, _, time) => {
    console.log('Selected: ' + itemId, moment(time).format());
  };

  const handleItemDoubleClick = (itemId, _, time) => {
    console.log('Double Click: ' + itemId, moment(time).format());
  };

  const handleItemContextMenu = (itemId, _, time) => {
    console.log('Context Menu: ' + itemId, moment(time).format());
  };

  //?date change
  const onPrevClick = () => {
    const zoom = visibleTimeEnd - visibleTimeStart;
    setVisibleTimeStart(visibleTimeStart - zoom);
    setVisibleTimeEnd(visibleTimeEnd - zoom);
  };

  const onNextClick = () => {
    const zoom = visibleTimeEnd - visibleTimeStart;
    setVisibleTimeStart(visibleTimeStart + zoom);
    setVisibleTimeEnd(visibleTimeEnd + zoom);
  };

  // ReactDOM.render(document.getElementById('root'));
  return (
    <>
      <div>
        Rendered by react!
        <button onClick={onPrevClick}>{'< Prev'}</button>
        <button onClick={onNextClick}>{'Next >'}</button>
        <Timeline
          groups={groups}
          items={items}
          keys={keys}
          // rightSidebarWidth={150}
          // rightSidebarContent={<div>Above The Right</div>}
          // sidebarContent={<div>Above The Left</div>}
          // showCursorLine
          // itemsSorted
          // fullUpdate
          // itemTouchSendsClick={false}
          // stackItems
          itemHeightRatio={0.75}
          canChangeGroup={false}
          canMove={true}
          canResize={'both'}
          defaultTimeStart={defaultTimeStart}
          defaultTimeEnd={defaultTimeEnd}
          onItemMove={handleItemMove}
          onItemResize={handleItemResize}
          onCanvasClick={handleCanvasClick}
          onCanvasDoubleClick={handleCanvasDoubleClick}
          visibleTimeStart={visibleTimeStart}
          visibleTimeEnd={visibleTimeEnd}
          buffer={1}
        >
          <TimelineMarkers>
            <TodayMarker />
            <CursorMarker />
          </TimelineMarkers>
          <TimelineHeaders className='sticky'>
            <SidebarHeader>
              {({ getRootProps }) => {
                return <div {...getRootProps()}>Left</div>;
              }}
            </SidebarHeader>
            <DateHeader unit='primaryHeader' />
            <DateHeader />
          </TimelineHeaders>
        </Timeline>
      </div>
    </>
  );
}

export default ReactCalendarTimeline;
