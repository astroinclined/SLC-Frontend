import qs from 'qs';
import HttpService from '.';
import { Module } from '../react/Data';

export interface ModuleListOptions {
  search?: string;
  subject?: string;
  source?: string;
}

export default class ModuleService {
  static list(params: ModuleListOptions) {
    return HttpService.get<Module[]>(`/modules?${qs.stringify(params)}`);
  }
}
