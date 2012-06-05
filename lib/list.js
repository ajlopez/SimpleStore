
function List()
{
	this.elements = [];
	this.from = 0;
	this.to = 0;
	this.count = 0;
}

List.prototype.addToRight = function(element)
{
	this.elements[this.to++] = element;
	this.count++;
}

List.prototype.removeFromRight = function(element)
{
	if (this.count == 0)
		return null;

	this.count--;
	var result = this.elements[--this.to];
	delete this.elements[this.to];
	return result;
}

List.prototype.addToLeft = function(element)
{
	this.elements[--this.from] = element;
	this.count++;
}

List.prototype.removeFromLeft = function()
{
	if (this.count == 0)
		return null;

	this.count--;
	var result = this.elements[this.from];
	delete this.elements[this.from++];
	return result;
}

exports.createList = function() { return new List(); }

