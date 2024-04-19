import { IconBallAmericanFootball, IconBallBaseball, IconBallBasketball, IconBallFootball, IconBallTennis, IconBallVolleyball } from "@tabler/icons-react";
import type { TeamSportsData } from '@/types/TeamSportsData';

const teamSportsData : TeamSportsData[] = [
    { 
      id: 'teamgame-1', 
      icon: IconBallFootball, 
      title: 'Football', 
      activeLobbies: 23, 
      completedLobbies: 12, 
      members: 45 
    },
    { 
      id: 'teamgame-2', 
      icon: IconBallBasketball, 
      title: 'Basketball', 
      activeLobbies: 15, 
      completedLobbies: 8, 
      members: 30 
    },
    { 
      id: 'teamgame-3', 
      icon: IconBallTennis, 
      title: 'Tennis', 
      activeLobbies: 10, 
      completedLobbies: 5, 
      members: 20 
    },
    { 
      id: 'teamgame-4', 
      icon: IconBallAmericanFootball, 
      title: 'American Football', 
      activeLobbies: 18, 
      completedLobbies: 10, 
      members: 35 
    },
    { 
      id: 'teamgame-5', 
      icon: IconBallVolleyball, 
      title: 'Volleyball', 
      activeLobbies: 12, 
      completedLobbies: 6, 
      members: 25 
    },
    { 
      id: 'teamgame-6', 
      icon: IconBallBaseball, 
      title: 'Baseball', 
      activeLobbies: 8, 
      completedLobbies: 4, 
      members: 15 
    },
  ];

  export { teamSportsData };