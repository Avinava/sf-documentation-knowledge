---
title: "Insert or Update (Upsert) a Record Using an External ID"
domain: rest-api
topic: insert-or-update-upsert-a-record-using-an-external-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.019Z
keywords: [Insert, Update, Upsert, Record, External, Important, Upserting, New, Records, Note, Inserting, Existing, Associating, See]
---

# Insert or Update (Upsert) a Record Using an External ID

# Insert or Update (Upsert) a Record Using an External ID

You can use the sObject Rows by External ID resource to create records or update existing records (upsert) based on the value of a specified external ID field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_rest)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

-   If the external ID isn’t matched, then a new record is created according to the request body. To prevent a new record from being created, use the updateOnly parameter.
-   If the external ID is matched one time, then the record is updated according to the request body.
-   If the external ID is matched multiple times, then a 300 error is reported, and the record isn’t created or updated.

The following sections show you how to work with the external ID resource to retrieve records by external ID and upsert records.

## Upserting New Records

This example uses the PATCH method to insert a new record. It assumes that an external ID field, “customExtIdField\_\_c,” has been added to Account. It also assumes that an Account record with a customExtIdField value of 11999 doesn’t exist.

Example for upserting a record that doesn’t yet exist

```

```

If you want to update a record but not create it if it doesn't exist, add the updateOnly parameter to the URL. For example: https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/customExtIdField\_\_c/11999?updateOnly=true

Example JSON request body newrecord.json file

```

```

Example JSON response

The successful response is:

```

```

The HTTP status code is 201 (Created).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The created parameter is present in the response in API version 46.0 and later. It doesn't appear in earlier versions.

Error responses

Incorrect external ID field:

```

```

For more information, see [Status Codes and Error Responses](atlas.en-us.api_rest.meta/api_rest/errorcodes.htm).

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

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The created parameter is present in the response in API version 46.0 and later. It doesn't appear in earlier versions.

## Upserting Existing Records

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

If the external ID value isn't unique, an HTTP status code 300 is returned, plus a list of the records that matched the query. For more information about errors, see [Status Codes and Error Responses](atlas.en-us.api_rest.meta/api_rest/errorcodes.htm).

If the external ID field doesn't exist, an error message and code is returned:

```

```

## Upserting Records and Associating with an External ID

If you have an object that references another object using a relationship, you can use REST API to both insert or update a record and reference another object using an external ID.

The following example creates a record and associates it with a parent record via external ID. It assumes the following:

-   A Merchandise\_\_c custom object that has an external ID field named MerchandiseExtID\_\_c.
-   A Line\_Item\_\_c custom object that has an external ID field named LineItemExtID\_\_c, and a relationship to Merchandise\_\_c.
-   A Merchandise\_\_c record exists that has a MerchandiseExtID\_\_c value of 123.
-   A Line\_Item\_\_c record with a LineItemExtID\_\_c value of 456 does **not** exist. This record gets created and related to the Merchandise\_\_c record.

Example of upserting a record and referencing a related object

```

```

Example JSON request body new.json file

Notice that the related Merchandise\_\_c record is referenced using the Merchandise\_\_c’s external ID field.

```

```

Example JSON response

The successful response is:

```

```

The HTTP status code is 201 (Created).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The created parameter is present in the response in API version 46.0 and later. It doesn't appear in earlier versions.

Error responses

If the external ID value isn't unique, an HTTP status code 300 is returned, plus a list of the records that matched the query. For more information about errors, see [Status Codes and Error Responses](atlas.en-us.api_rest.meta/api_rest/errorcodes.htm).

If the external ID field doesn't exist, an error message and code is returned:

```

```

You can also use this approach to update existing records. For example, if you created the Line\_Item\_\_c shown in the example above, you can try to update the related Merchandise\_\_c using another request.

Example for updating a record

```

```

Example JSON request body updates.json file

This assumes another Merchandise\_\_c record exists with a MerchandiseExtID\_\_c value of 333.

```

```

Example JSON response

In API version 46.0 and later, the HTTP status code is 200 (OK) and the successful response is:

```

```

In API version 45.0 and earlier, the HTTP status code is 204 (No Content) and there isn’t a response body.

If the relationship type is master-detail and the relationship is set to not allow reparenting, and you try to update the parent external ID, you get an HTTP status code 400 error with an error code of INVALID\_FIELD\_FOR\_INSERT\_UPDATE.

#### See Also

-   [sObject Rows by External ID](atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm "Creates, retrieves, upserts, or deletes records based on the value of a specified external ID field. By using the PATCH method with this resource, you can send upsert requests to Salesforce.")