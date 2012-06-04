
function Store()
{
    var values = {};
    
    this.put = function(key, value) {        
        values[key] = value;
    }
    
    this.get = function(key) {
        return values[key];
    }
    
    this.delete = function(key) {
        delete values[key];
    }
}

exports.createStore = function() {
	return new Store();
}

