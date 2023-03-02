
import { useContext, useEffect, useState } from 'react';
import { updateCurrentStory } from '../../services/appActions';
import { AppContext } from '../../services/context';
import './info-bar.scss';
const InfoBarComponent = (): JSX.Element => {

    const { state: { currentStory }, dispatch } = useContext(AppContext) as any;
    const [localStory, setLocalStory] = useState(currentStory ? { ...currentStory } : null);

    function updateStoryInMemory(value: any, key: string) {
        const temp: any = { ...localStory };
        temp[key] = value;
        setLocalStory(temp);
    }

    function broadcast() {
        dispatch(updateCurrentStory(localStory));
    }

    const feildsToBeDisplayed = [
        'title',
        'shortnote',
        'url',
        'image',
        'slideShowImages',
        'category'
    ]

    useEffect(() => {
        setLocalStory(currentStory ? { ...currentStory } : null);
        console.log("infobar: context update");
    }, [currentStory]);

    return localStory ? <>
        <div className='info-bar-parent'>
            {
                feildsToBeDisplayed.map((field: string, index: number) => {
                    return <div key={index}>
                            <span>{field}: </span>
                            <input type='text' value={localStory[field]} onChange={(e) => { updateStoryInMemory(e.target.value, field) }} onBlur={() => { broadcast() }} />
                        </div>
                })
            }
        </div>
    </>: <></>
};

export default InfoBarComponent;