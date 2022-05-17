import { Params } from '@angular/router';

export const getPostalCode = (params: Params): string => params['postal_code'];
