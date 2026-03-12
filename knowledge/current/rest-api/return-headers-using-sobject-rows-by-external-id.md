---
title: "Return Headers Using sObject Rows by External ID"
domain: rest-api
topic: return-headers-using-sobject-rows-by-external-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.983Z
estimatedTokens: 381
keywords: [sObject, Rows, External, sending, resource, gives, chance, retrieving, content, itself]
---

# Return Headers Using sObject Rows by External ID

> Returns only the headers that are returned by sending a GET request to the sObject
		Rows by External ID resource. This gives you a chance to see returned header values of the
		GET request before retrieving the content itself.

# Return Headers Using sObject Rows by External ID

Returns only the headers that are returned by sending a GET request to the sObject Rows by External ID resource. This gives you a chance to see returned header values of the GET request before retrieving the content itself.

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

HEAD

Authentication

Authorization: Bearer token

Parameters

None

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)
