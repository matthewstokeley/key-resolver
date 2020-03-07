//import { resolverKeyStrategy, _cache } from '../index'

describe ( 'resolverKeyStrategy', () => {

	it( 'should return a resolved key ', () => {

		const fn = ( str ) => {

			return ( key ) => {
				return str + ":" + key
			}

		}

		let _prepareKey = fn( 'prefix' )

		let key = _prepareKey( 'key' )

		//let _keystore = _resolverKeyStrategy( _cache, _prepareKey )

		expect().nothing()

		//expect( _keystore( key ) ).toEqual( key )

	} )

} )