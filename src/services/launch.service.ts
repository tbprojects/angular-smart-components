import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { LaunchMocks } from '../mocks/launch.mocks';
import { Launch } from '../types/launch';

@Injectable({ providedIn: 'root' })
export class LaunchService {
  getLaunches(): Observable<Launch[]> {
    return of(LaunchMocks).pipe(delay(500));
  }
}
