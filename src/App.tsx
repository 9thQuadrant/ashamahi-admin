import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useReducer } from 'react';
import './App.scss';
import ListOfPostsComponent from './left-bar/list-bar';
import EditorComponent from './right-bar/editor/editor';
import InfoBarComponent from './right-bar/info-bar/info-bar';
import { updateCurrentStory, updateStories } from './services/appActions';
import { AppContext, AppReducer, InitialAppState } from './services/context';
import firestore from './services/firebase';


function App() {

  const currentStory = null;
  const [state, dispatch] = useReducer(
    AppReducer,
    new InitialAppState()
  );

  useEffect(() => {
    onSnapshot(query(collection(firestore, "pages"), orderBy("modified_date")), (doc) => {
      const docs: any = {};
      doc.forEach((doc) => {
        docs[doc.id] = doc.data();
        docs[doc.id]['id'] = doc.id;
      });
      dispatch(updateStories(docs));
      if (currentStory && currentStory['id'] !== 'id') {
        dispatch(updateCurrentStory(docs[currentStory['id']]));
      }
    });
  }, []);

  const context: any = { state, dispatch };

  return (
    <>
      <AppContext.Provider value={context}>
        <div className='main-page-parent'>
          <ListOfPostsComponent></ListOfPostsComponent>
          <EditorComponent></EditorComponent>
          <InfoBarComponent></InfoBarComponent>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
