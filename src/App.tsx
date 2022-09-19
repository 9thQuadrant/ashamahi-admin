import './App.scss';
import ListOfPostsComponent from './left-bar/list-bar';
import EditorComponent from './right-bar/editor/editor';
import InfoBarComponent from './right-bar/info-bar/info-bar';

function App() {
  return (
    <>
    <div className='main-page-parent'>
      <ListOfPostsComponent></ListOfPostsComponent>
      <EditorComponent></EditorComponent>
      <InfoBarComponent></InfoBarComponent>
    </div>
    </>
  );
}

export default App;
