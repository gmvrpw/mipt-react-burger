import { Provider } from 'react-redux';
import { store } from './store';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Constructor from './pages/Constructor';

const App = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Constructor/>
      </DndProvider>
    </Provider>
  );
}

export default App;
