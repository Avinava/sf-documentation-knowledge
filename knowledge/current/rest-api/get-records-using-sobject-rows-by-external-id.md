---
title: "Get Records Using sObject Rows by External ID"
domain: rest-api
topic: get-records-using-sobject-rows-by-external-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.761Z
keywords: [Get, Records, sObject, Rows, External, Note, Syntax, Example, See]
---

# Get Records Using sObject Rows by External ID

# Get Records Using sObject Rows by External ID

Retrieves a record based on the value of the specified external ID field.

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

GET

Authentication

Authorization: Bearer token

Parameters

None

## Example

For an example of retrieving a record based on an external ID, see [Get a Record Using an External ID](atlas.en-us.api_rest.meta/api_rest/using_resources_retrieve_with_externalid.htm "You can use the GET method of the *** resource to get records with a specific external ID.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)