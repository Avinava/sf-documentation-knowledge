---
title: "Upsert Records Using sObject Rows by External ID"
domain: rest-api
topic: upsert-records-using-sobject-rows-by-external-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.988Z
estimatedTokens: 740
keywords: [Upsert, Records, sObject, Rows, External, Upserts, record, whether, exists, either, creates, updates]
---

# Upsert Records Using sObject Rows by External ID

> Upserts a record based on the value of the specified external ID field. Based on whether
		the value of the external ID exists, the request either creates a record or updates an
		existing one.

# Upsert Records Using sObject Rows by External ID

Upserts a record based on the value of the specified external ID field. Based on whether the value of the external ID exists, the request either creates a record or updates an existing one.

-   If the external ID doesn't match an existing record, then a new record is created according to the request body. To prevent a new record from being created, use the updateOnly parameter.
-   If the external ID matches one existing record, then the existing record is updated according to the request body.
-   If the external ID matches multiple existing records, then a 300 error is returned, and no records are created or updated.

If you’re upserting a record for an object that has a custom field with both the External ID and Unique attributes selected (a unique index), you don’t need any special permissions. The Unique attribute prevents the creation of duplicates. If you’re upserting a record for an object that has the External ID attribute selected but not the Unique attribute selected (a non-unique index), your client application must have the permission “View All Data” to execute this call.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

For security reasons, some Top Level Domains (TLD) can conflict with certain file format extensions. Adjust your implementation to work around such cases.

For example, using an email address, such as example@email.inc, as the External ID returns a “404 not found” error.

There are several workarounds to handle conflicting TLDs.

-   Use a different External ID field.
-   Create a new External ID field that is the same as the email field and replace the "." with an "\_" to handle this case.
-   Run a query for emails ending in ".inc" to retrieve the record ID and use that for the upsert request.
-   Use SOAP API instead of REST API for upsert requests.
-   Accept the email as a query parameter instead of a path parameter by creating a custom Apex REST API. Use Apex to perform the upsert request.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/fieldName/fieldValue

Formats

JSON, XML

HTTP Method

PATCH

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| updateOnly | An optional parameter that prevents a new record from being created. Forces the upsert to behave like an update when updateOnly=true is used. |

## Example

For examples of creating and updating records based on external IDs, see [Insert or Update (Upsert) a Record Using an External ID](atlas.en-us.api_rest.meta/api_rest/dome_upsert.htm "You can use the sObject Rows by External ID resource to create records or update existing records (upsert) based on the value of a specified external ID field.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)

## Related Topics

- Insert or Update (Upsert) a Record Using an External ID (atlas.en-us.api_rest.meta/api_rest/dome_upsert.htm)
