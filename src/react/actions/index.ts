import { Module } from '../Data'
import { CategoryObject, CategoryPayload, View } from '../types'
import { Dispatch } from "redux";
import ModuleService, { ModuleListSubmodulesParams } from '../../services/modules';

export const changeSearch = (payload: string) => {
  return {
    type: 'SEARCH',
    payload: payload

  }
}

export const loadSearchResults = (payload: string) => (dispatch: Dispatch) => {
  ModuleService.list({ search: payload }).then(modules => {
    dispatch(setResults(modules));
    dispatch(changeSearch(payload));
    dispatch(setView(View.SEARCH));
  });
}

export const setView = (payload: View) => {
  return {
    type: 'VIEW',
    payload
  }
}

export const setCategory = (payload: CategoryObject) => {
  return {
    type: 'CATEGORY',
    payload
  }
}

export const loadCategoryModules = (payload: CategoryPayload) => (dispatch: Dispatch) => {
  const isSubject = payload.type === 'subject';

  ModuleService.list({
    subject: isSubject ? payload.title : undefined,
    source: !isSubject ? payload.title : undefined,
  }).then(modules => {
    dispatch(setCategory({
      ...payload,
      modules,
    }));
    dispatch(setView(isSubject ? View.SUBJECTS : View.SOURCES));
  });
}

export const loadSubmodules = (payload: ModuleListSubmodulesParams) => (dispatch: Dispatch) => {
  ModuleService.listSubmodules(payload).then(modules => {
    dispatch(setResults(modules));
    dispatch(setView(View.SUBMODULES));
  });
}

export const setResults = (payload: Module[]) => {
  return {
    type: 'RESULTS',
    payload
  }
}
