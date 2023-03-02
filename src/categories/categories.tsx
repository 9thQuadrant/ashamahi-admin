import { updateDoc, doc} from 'firebase/firestore';
import { useContext, useState } from 'react';
import { AppContext } from '../services/context';
import firestore from '../services/firebase';
import './categories.scss';

const CategoriesList = (): JSX.Element => {
    const { state: {categoryList} } = useContext(AppContext) as any;
    const [localList, setLocalList] = useState(new Array(categoryList.size).fill("url for image"));


    function setUrl(value: string, list: Array<string>, index: number) {
        const _L = [...localList];
        _L[index] = value;
        setLocalList(_L);
    }

    function save() {
        const urlList: any = {};
        Array.from(categoryList).forEach((cat: any, index: number) => {
            urlList[cat] = localList[index];
        });
        updateDoc(doc(firestore, "categoryIndex", "url"), urlList).then(() => {alert("Updated")});
    }


    return <div>
            {
                Array.from(categoryList).map((cat: any, index: number) => {
                    return <div className={`category-parent`} key={cat}>
                        {cat}: <input type={'text'} value={localList[index]} onChange={(e) => setUrl(e.target.value, localList, index)}/>
                    </div>;
                })
            }
            <button onClick={_e => save()}>Save</button>
    </div>;
}

export default CategoriesList;