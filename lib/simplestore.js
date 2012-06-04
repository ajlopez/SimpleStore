
function Store()
{
    var values = {};
    var stores = {};
	var set = [];
	var storeset = [];
    
    this.put = function(key, value) {
        if (value == null)
        {
            this.remove(key, value);
            return;
        }
        
        var pos = key.indexOf(':');
        
        if (pos>=0) {
            var firstkey = key.slice(0, pos);
            var restkey = key.slice(pos+1);
            getOrCreateStore(firstkey).put(restkey, value);
            return;
        }
        
        values[key] = value;
    }
    
    this.get = function(key) {
        var pos = key.indexOf(':');
        
        if (pos>=0) {
            var firstkey = key.slice(0, pos);
            var restkey = key.slice(pos+1);
            return getOrCreateStore(firstkey).get(restkey);
        }
        
        return values[key];
    }
    
    this.remove = function(key) {
        var pos = key.indexOf(':');
        
        if (pos>=0) {
            var firstkey = key.slice(0, pos);
            var restkey = key.slice(pos+1);
            getOrCreateStore(firstkey).remove(restkey);
            return;
        }
        
        delete values[key];
    }
	
	this.setAdd = function(key)
	{
		set[key] = true;
	}
	
	this.setGet = function(key)
	{
		return set[key];
	}
	
	this.setRemove = function(key)
	{
		if (set.length - 1 > key)
			return;
		set[key] = undefined;
	}
    
    function getOrCreateStore(key)
    {
		if (key[0] >= '0' && key[0] <= '9')
			return getOrCreateSetStore(parseInt(key));
			
        var store = stores[key];
        
        if (store)
            return store;
            
        store = new Store();
        stores[key] = store;
        
        return store;
    }
	
	function getOrCreateSetStore(nkey)
	{
		var store = storeset[nkey];
		
		if (store)
			return store;
			
		store = new Store();
		storeset[nkey] = store;
		
		return store;
	}
}

exports.createStore = function() {
	return new Store();
}

