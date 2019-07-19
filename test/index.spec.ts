import {
  initGit
} from './../src/index';
import {
  expect, assert
} from 'chai';
import regexCombineAnd from 'regex-combine-and';

import del from 'del';

import path from 'path';

describe( 'initGit', () => {
  const testDir = path.resolve( __dirname, './' );
  const git = path.resolve( testDir, './.git' );

  before( () => del( git ) )

  describe( 'Initialize Git Repo', () => {
    it( 'Returns `true` for successfully initializing git repo', async () => {
      expect( await initGit( testDir ) ).to.be.true;
    } );

    it( 'throws error for bad path', () => {
      return initGit( 'badPath' )
      .catch((error)=> {
        assert.instanceOf(error, Error);
        expect(error.message).to.match(
          regexCombineAnd(
            [
              /Invalid/,
              /path/,
              /badPath/
            ]
          )
        );
      });
    } );
  } );

  after( () => {
    del( git );
  } )

} );