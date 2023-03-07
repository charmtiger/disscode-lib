import Taro, { Current } from '@tarojs/taro';
import { objectToQuery } from './data';
import { NavigationOption } from './navigation.type';
import { $preload } from './storage';

const router = {
  syncMap: {
    pages: [] as string[],
  }
}
export const loadSyncMap = function(map) {
  router.syncMap = map;
}

export const createRoute = (fileName: string) => {
  const query = Current.router?.params || {};
  const params = $preload('PAGE_PARAMS_' + fileName) || {};
  return function () {
    return {
      query,
      params,
    };
  };
};
export const navigateBack = Taro.navigateBack;
export const preload = $preload;
export const navigateTo = (pageName: string, { query = {}, params }: NavigationOption = {}) => {
  if (params) $preload('PAGE_PARAMS_' + pageName, params);
  Taro.navigateTo({
    url: router.syncMap.pages.includes(pageName) ? `/pages/app/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName,
  });
};
export const redirectTo = (pageName: string, { query = {}, params }: NavigationOption = {}) => {
  if (params) $preload('PAGE_PARAMS_' + pageName, params);
  Taro.redirectTo({
    url: router.syncMap.pages.includes(pageName) ? `/pages/app/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName,
  });
};
