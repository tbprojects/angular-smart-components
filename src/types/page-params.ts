import { Params } from '@angular/router';

export interface PageParams {
  page: number;
  size: number;
}

export const defaultPageParams: Readonly<PageParams> = {
  page: 1,
  size: 20,
}

export function queryParamsToPageParams(params: Params) {
  return {
    page: params['page'] ? +params['page'] : defaultPageParams.page,
    size: params['size'] ? +params['size'] : defaultPageParams.size,
  }
}
