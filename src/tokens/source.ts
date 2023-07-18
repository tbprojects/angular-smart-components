import { InjectionToken } from '@angular/core';

export const SOURCE_FILES = new InjectionToken<string[]>('SOURCE_FILES', {providedIn: 'root', factory: () => []});
