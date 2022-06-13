import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Pure from './Pure1/Pure';
import Dnd from './npmDND/npmDnd';

export const DND = () => {
  return (
    <>
      <Pure />
      <DndProvider backend={HTML5Backend}>
        <Dnd />
      </DndProvider>
    </>
  );
};

export default DND;
