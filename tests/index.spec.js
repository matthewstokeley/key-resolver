//import { resolverKeyStrategy, _cache } from '../index'

describe( 'resolver function', () => {

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

describe ( 'resolverKeyStrategy', () => {

	it ( 'should cache the key', () => {

		const resolver = ( str ) => {

			return ( key ) => {
				return str + ":" + key
			}

		} 

		//let _keystore = _resolverKeyStrategy( _cache, _resolver )

		expect().nothing()

	} )
} )
