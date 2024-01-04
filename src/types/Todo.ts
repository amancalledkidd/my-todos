export type Todo = {
    id: number;
    text: string;
    complete: boolean;
    timeStamp: Date;
    priority: Priority;
    };

export type Priority = 'High' | 'Medium' | 'Low' | 'None' | 'Complete';

