import { Timestamp } from '@firebase/firestore-types';

export interface Exercise {
    id: string;
    name: string;
    duration: number;
    calories: number;
    date?: Timestamp | Date;
    state?: 'completed' | 'cancelled' | null;
}
