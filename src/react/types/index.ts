
// These are all the states and actions that get mapped to props by Redux
export interface ReduxProps {
  changeSearch: (tag: string) => void;
  search: string;
}

export interface ReduxState {
  search: string;
}
