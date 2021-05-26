export enum View {
  HOME, SEARCH, SUBJECTS, SOURCES
}

export interface KaliteObj {
  name: string;
  port: string;
  type: string;
  tags: string;
  url: string;
  by: string;
}

export interface CardProps {
  port: string;
  url: string;
  author: string;
  title: string;
}
export interface HomeProps {
  title: string;
}

export interface VideoCardProps {
  title: string
  description: string
}

// These are all the states and actions that get mapped to props by Redux
export interface ReduxProps extends ReduxState {
  changeSearch: (tag: string) => void;
  setView: (view: View) => void;
  setCategory: (category: string) => void;
  setResults: (results: KaliteObj[]) => void;
}

export interface ReduxState {
  search: string;
  view: View;
  category: string;
  results: KaliteObj[];
}

export const defaultState = {
  search: '',
  view: View.HOME,
  category: '',
  results: [],
}
