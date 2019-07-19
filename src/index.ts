/*!
 * init-git <https://github.com/nivrith/init-git>
 *
 * Copyright (c) Nivrith
 * Licensed under the MIT License.
 */
import childCommand from 'child-command';
import {pathExistsSync} from 'fs-extra';

export const initGit = async (path: string) => {
  try {
    await childCommand('which git');
  } catch {
    throw new Error ('git is not a recognized command. please make sure you have git installed');
  }
  if (!pathExistsSync(path)) {
    throw new Error (`Invalid path: ${path}`);
  }
  try {
    let {stdout, stderr} = await childCommand(`cd ${path} && git init`);
    return true;
  } catch {
    return false;
  }
};
export default initGit;
