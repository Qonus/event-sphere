export interface IEvent {
    _id: string;
    user_id: string;
    image: string;
    start_time: string;
    end_time: string;
    title: string;
    description: string;
    tags: string;
    lat: number;
    lng: number;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface IUser {
    _id: string;
    email: string;
    name: string;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  