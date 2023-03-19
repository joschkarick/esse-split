/**
{
    "id": "co.ameba.Esse.ExternalFunctions.ReverseSortLines",
    "name":"Reverse sort lines",
    "description":"Sort lines in reverse order",
    "category":"Convert",
    "author":"Ameba Labs",
}
**/

function main(input) {
	return input.split('\n').reverse().join('\n');
}
