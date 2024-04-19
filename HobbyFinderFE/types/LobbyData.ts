import { MinUserDto } from "./MinUserDto";

type LobbyData = {
    id: string;
    name: string;
    joinedUsers : MinUserDto[];
    startDateTime: Date;
    endDateTime: Date;
  };
  
  export type { LobbyData };