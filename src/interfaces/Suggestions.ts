export interface ISuggestions {
  isCollection: boolean;
  magicKey: string;
  text: string;
}

export interface ISuggestionsState {
  isOpen: boolean;
  isClose: boolean;
  maxSuggestions: number;
  countryCode: string;
  category: string;
}
