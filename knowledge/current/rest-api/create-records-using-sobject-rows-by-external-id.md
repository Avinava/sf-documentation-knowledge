---
title: "Create Records Using sObject Rows by External ID"
domain: rest-api
topic: create-records-using-sobject-rows-by-external-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.150Z
estimatedTokens: 302
keywords: [Create, Records, sObject, Rows, External, Creates, new, record, based, field, values, included, request, body., resource, does, require, external, field., Note]
---

# Create Records Using sObject Rows by External ID

> Creates a new record based on the field values included in the request body. This
		resource does not require the use of an external ID field.

# Create Records Using sObject Rows by External ID

Creates a new record based on the field values included in the request body. This resource does not require the use of an external ID field.

As a special case, in API version 37.0 and later, you can create a record with a POST request to /services/data/vXX.X/sobjects/sObjectName/Id. Because Id has a null value, it is omitted from the request, and the record is created according to the request body. Creating records with this resource is useful because you can use the same URI in each POST request for each new record. In this case, you are not required to specify an external ID to create a record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

Do not specify Id or an external ID field in the request body or an error is generated.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/Id

Formats

JSON, XML

HTTP Method

POST

Authentication

Authorization: Bearer token

Parameters

None

## Example

Example Request

```

```

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)

## Code Examples

```
curl -X POST https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/Id -H "Authorization: Bearer token" -H "Content-Type: application/json" -d "@newaccount.json"
```
