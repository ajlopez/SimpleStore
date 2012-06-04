
function Store()
{
    var values = {};
    var stores = {};
    
    this.put = function(key, value) {
        if (value == null)
        {
            this.delete(key, value);
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
    
    this.delete = function(key) {
        var pos = key.indexOf(':');
        
        if (pos>=0) {
            var firstkey = key.slice(0, pos);
            var restkey = key.slice(pos+1);
            getOrCreateStore(firstkey).delete(restkey);
            return;
        }
        
        delete values[key];
    }
    
    function getOrCreateStore(key)
    {
        var store = stores[key];
        
        if (store)
            return store;
            
        store = new Store();
        stores[key] = store;
        
        return store;
    }
}

exports.createStore = function() {
	return new Store();
}

