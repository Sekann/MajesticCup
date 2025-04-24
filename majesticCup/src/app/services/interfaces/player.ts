export interface Player {
    nickname: string;          
    name: string;       
    imageUrl: string;        
    twitchUrl?: string; 
    victories: number;       
    losses: number;
    winrate: number;           
    kickUrl?: string; 
    twitterUrl?: string;       
    opggUrl?: string; 
  }