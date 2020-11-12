import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VersionCheckService {
  // this will be replaced by actual hash after-build.js
  private currentHash = '{{AFTER_BUILD_ENTERS_HASH_HERE}}';

  constructor(private http: HttpClient) {}

  /**
   * Checks in every set frequency the version of frontend application
   * @param url
   * @param {number} frequency - in milliseconds, defaults to 30 minutes
   */

  // 1000 * 60 = 1 minuto
  public initVersionCheck(url, frequency = 1000 * 60 * 5) {
      setInterval(() => {
          console.log(`Check version url: ${url}`);
          if (url.indexOf('localhost') === -1) {
            console.log('Checking...');
            this.checkVersion(url);
          }
      }, frequency);
  }

  /**
   * Will do the call and check if the hash has changed or not
   * @param url
   */
  public checkVersion(url) {
      // timestamp these requests to invalidate caches
      this.http.get(url + '?t=' + new Date().getTime())
          .subscribe(
              (response: any) => {
                  const hash = response.hash;
                  const hashChanged = this.hasHashChanged(this.currentHash, hash);

                  // If new version, do something
                  if (hashChanged) {
                      // ENTER YOUR CODE TO DO SOMETHING UPON VERSION CHANGE
                      // for an example: location.reload();
                      if (confirm('Existe uma nova atualização para o sistema, deseja continuar?')) {
                        // store the new hash so we wouldn't trigger versionChange again
                        // only necessary in case you did not force refresh
                        this.currentHash = hash;

                        location.reload();
                      }
                  }

              },
              (err) => {
                  console.error(err, 'Could not get version');
              }
          );
  }

  /**
   * Checks if hash has changed.
   * This file has the JS hash, if it is a different one than in the version.json
   * we are dealing with version change
   * @param currentHash
   * @param newHash
   * @returns {boolean}
   */
  private hasHashChanged(currentHash, newHash) {
      if (!currentHash || currentHash === '{{AFTER_BUILD_ENTERS_HASH_HERE}}') {
          return false;
      }

      return currentHash !== newHash;
  }
}

