import { getDocs } from 'firebase/firestore';
import { useEffect, useReducer } from 'react';
import './App.scss';
import RoutesMap from './categories/routes';
import { BrowserRouter } from 'react-router-dom';

import { updateCategories, updateCurrentStory, updateStories } from './services/appActions';
import { AppContext, AppReducer, InitialAppState } from './services/context';
import { adminQuery } from './services/firebase';
import { IStory } from './services/interface';


function App() {

  const currentStory = null;
  const [state, dispatch] = useReducer(
    AppReducer,
    new InitialAppState()
  );

  useEffect(() => {
    getDocs(adminQuery).then( doc => {
      const docs: any = {};
      const categorySet = new Set<string>();
      doc.forEach((doc) => {
        const d = doc.data() as IStory;
        docs[doc.id] = doc.data();
        docs[doc.id]['id'] = doc.id;
        categorySet.add(d.category);
      });
      dispatch(updateStories(docs));
      dispatch(updateCategories(categorySet));
      if (currentStory && currentStory['id'] !== 'id') {
        dispatch(updateCurrentStory(docs[currentStory['id']]));
      }
    });
  // eslint-disable-next-line
  }, []);

  const context: any = { state, dispatch };

  return (
    
    <>
      <AppContext.Provider value={context}>
            <BrowserRouter>
              <RoutesMap />
            </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
