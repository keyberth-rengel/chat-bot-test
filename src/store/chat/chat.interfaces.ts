export interface MessageChat {
  id: number;
  title: string;
  body: string;
  owner: boolean;
}

export interface ChatState {
  messages: MessageChat[];
}
