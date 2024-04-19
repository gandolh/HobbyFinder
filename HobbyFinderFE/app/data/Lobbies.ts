import { LobbyData } from "@/types/LobbyData";

const Lobbies: LobbyData[] = [
    {
      id: 'lobby-1',
      name: 'Juniors Match',
      joinedUsers: [
        { id: 'user-1', email: 'user1@example.com' },
        { id: 'user-2', email: 'user2@example.com' },
      ],
      startDateTime: new Date('2024-04-19T18:00:00'),
      endDateTime: new Date('2024-04-19T20:00:00'),
    },
    {
      id: 'lobby-2',
      name: 'AI grei Game',
      joinedUsers: [
        { id: 'user-3', email: 'user3@example.com' },
        { id: 'user-4', email: 'user4@example.com' },
      ],
      startDateTime: new Date('2024-04-20T16:00:00'),
      endDateTime: new Date('2024-04-20T18:00:00'),
    },
    // Add more lobbies as needed
  ];


  export { Lobbies };