'use strict';

console.log('Loading function');

var AWS = require('aws-sdk');
var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
    var tableName = "test3";

    var item = {
        id: new Date().getTime().toString(),
        value1: event.key1,
        value2: event.key2,
        value3: event.key3
    }
    var params = {
        TableName: tableName,
        Item: item
    };

    dynamo.putItem(params, function(err, data) {
        if (err) {
            console.log(err)
            context.done('error', 'Error adding item to dynamod: ' + err);
        } else {
            var successMessage = 'Successfully added ' + JSON.stringify(item);
            console.log(successMessage);
            context.done(null, successMessage);
        }
    });
};
