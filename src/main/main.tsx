import ListOfPostsComponent from './../left-bar/list-bar';
import EditorComponent from './../right-bar/editor/editor';
import InfoBarComponent from './../right-bar/info-bar/info-bar';

const MainPageComponent = (): JSX.Element => {

    return <div className='main-page-parent'>
      <ListOfPostsComponent></ListOfPostsComponent>
      <EditorComponent></EditorComponent>
      <InfoBarComponent></InfoBarComponent>
    </div>
}

export default MainPageComponent;