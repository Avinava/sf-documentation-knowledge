---
title: "Upsert Records"
domain: api-asynch
topic: upsert-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.373Z
estimatedTokens: 825
keywords: [Upsert, Records, external, Upserting, New, Inserting]
---

# Upsert Records

> Create records or update existing records (upsert) based on an ID, or the value of a
  specified external ID field.

# Upsert Records

Create records or update existing records (upsert) based on an ID, or the value of a specified external ID field.

-   If the external ID isn’t matched, then a new record is created according to the request body.
-   If the external ID is matched one time, then the record is updated according to the request body.
-   If the external ID is matched multiple times, then a 300 error is reported, and the record isn’t created or updated.

The following sections show you how to work with the external ID resource to retrieve records by external ID and upsert records.

## Upserting New Records with an External ID

This example uses the PATCH method to insert a new record. It assumes that an external ID field, “customExtIdField\_\_c,” has been added to Account. It also assumes that an Account record with a customExtIdField value of 11999 doesn’t already exist.

Note that in this example, we're able to create the job and upload the record data in a single call.

Example for upserting a record that doesn’t yet exist

```

```

Example JSON request body newrecord.json file

```

```

Example JSON response

The successful response is:

```

```

The HTTP status code is 201 (Created).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

The created parameter is present in the response in API version 46.0 and later. It doesn't appear in earlier versions.

Error responses

Incorrect external ID field:

```

```

## Upserting Existing Records with an External ID

This example uses the PATCH method to update an existing record. It assumes that an external ID field, “customExtIdField\_\_c,” has been added to Account and an Account record with a customExtIdField value of 11999 exists. The request uses updates.json to specify the updated field values.

Example of upserting an existing record

```

```

Example JSON request body updates.json file

```

```

Example JSON response

In API version 46.0 and later, the HTTP status code is 200 (OK) and the successful response is:

```

```

In API version 45.0 and earlier, the HTTP status code is 204 (No Content) and there isn’t a response body.

Error responses

If the external ID value isn't unique, an HTTP status code 300 is returned, plus a list of the records that matched the query.

If the external ID field doesn't exist, an error message and code is returned:

```

```

## Inserting New Records Using Id as the External ID

This example uses the POST method as a special case to insert a record where the Id field is treated as the external ID. Because the value of Id is null, it’s omitted from the request. This pattern is useful when you’re writing code to upsert multiple records by different external IDs and you don’t want to request a separate resource. POST using Id is available in API version 37.0 and later.

Example of inserting a record that doesn’t yet exist

```

```

Example JSON request body newrecord.json file

```

```

Example JSON response

The successful response is:

```

```

The HTTP status code is 201 (Created).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

The created parameter is present in the response in API version 46.0 and later. It doesn't appear in earlier versions.

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/customExtIdField__c/11999 -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' -H "Content-Type: application/json" -H "X-PrettyPrint:1" -d @newrecord.json -X POST
```

```
{
    "Name" : "California Wheat Corporation",
    "Type" : "New Customer"
}
```

```
{
 "id":"0018a00001rBqb8AAC",
 "success":true,
 "errors":[],
 "created":true
 }
```

```
{
    "message" : "The requested resource does not exist",
    "errorCode" : "NOT_FOUND"
}
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/customExtIdField__c/11999 -H "Authorization: Bearer token" -H "Content-Type: application/json" -d @updates.json -X PATCH
```
