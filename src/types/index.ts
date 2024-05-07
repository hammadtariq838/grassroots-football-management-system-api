import mongoose from "mongoose";
export * from './response.type'
export * from './request.type'


export type User = {
  username: string,
  password: string,
  name: string,
  team?: {
    name: string,
    players: string[]
  }
}

export type Game = {
  name: string;
  creator: mongoose.Types.ObjectId;
  dateTime: Date;
  location: string;
  teams: mongoose.Types.ObjectId[];
};

export type Message = {
  from: mongoose.Types.ObjectId;
  to: mongoose.Types.ObjectId;
  message: string;
  dateTime: Date;
};

export type GameChannel = {
  game: mongoose.Types.ObjectId;
  messages: Message[];
};