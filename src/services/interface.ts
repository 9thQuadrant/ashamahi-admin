import { serverTimestamp } from 'firebase/firestore';

export interface IStory {
    category: string;
    content: string;
    created_date: any;
    id: string;
    image: string;
    liveStatus: boolean;
    metaImageLink: string;
    meta_author: string;
    meta_description: string;
    meta_keywords: string;
    meta_title: string;
    modified_date: any;
    shareCount: number;
    shortnote: string;
    title: string;
    url: string;
    viewCount: number;
}

export const emptyStory = {
    category: "draft",
    content: "draft",
    created_date: serverTimestamp(),
    id: "id",
    image: "draft",
    liveStatus: false,
    metaImageLink: "draft",
    meta_author: "draft",
    meta_description: "draft",
    meta_keywords: "draft",
    meta_title: "draft",
    modified_date: serverTimestamp(),
    shareCount: 0,
    shortnote: "draft",
    title: "draft",
    url: "draft",
    viewCount: 0,
}