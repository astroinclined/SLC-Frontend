import { AnyAction, Dispatch } from 'redux';
import { Module } from '../Data';

export enum View {
  HOME, SEARCH, SUBJECTS, SOURCES, SUBMODULES, NOTFOUND,
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

export interface CategoryObject {
  type: 'subject' | 'source';
  title: string;
  modules: Module[]; 
}

export type CategoryPayload = Pick<CategoryObject, "type" | "title">;

// These are all the states and actions that get mapped to props by Redux
// TODO: Replace all instances of this with ConnectedProps from Redux
export interface ReduxProps extends ReduxState {
  changeSearch: (tag: string) => void;
  setView: (view: View) => void;
  loadCategoryModules: (category: Pick<CategoryObject, "type" | "title">) => (dispatch: Dispatch<AnyAction>) => void;
  setCategory: (category: CategoryObject) => void;
  setResults: (results: Module[]) => void;
}

export interface ReduxState {
  search: string;
  view: View;
  category: CategoryObject;
  results: Module[];
}

export const defaultState: ReduxState = {
  search: '',
  view: View.HOME,
  category: {
    type: 'subject',
    title: 'Mathematics',
    modules: [],
  },
  results: [],
}
