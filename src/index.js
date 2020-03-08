export var _cache = function( key ) {

	let map = new WeakMap()

	return map.contains( key )
		? map.get( key )
		: map.add( key )

}

export var keyResolveStrategy = function( _cache, fn ) {

	return function( str ) {
		return _cache ( fn.call ( this, str ) ) 
	}

}
