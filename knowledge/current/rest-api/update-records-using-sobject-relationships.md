---
title: "Update Records Using sObject Relationships"
domain: rest-api
topic: update-records-using-sobject-relationships
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.079Z
estimatedTokens: 439
keywords: [Update, Records, sObject, Relationships, Updates, parent, record, based, specified, relationship, field, name., Field, values, provided, request, body, replace, existing, record.]
---

# Update Records Using sObject Relationships

> Updates a parent record based on the specified object, record ID, and relationship field
		name. Field values provided in the request body replace the existing values in the record.
		Only a child-to-parent relationship can be traversed when you update records.

# Update Records Using sObject Relationships

Updates a parent record based on the specified object, record ID, and relationship field name. Field values provided in the request body replace the existing values in the record. Only a child-to-parent relationship can be traversed when you update records.

If the fields parameter is used with fields that don’t exist or aren’t visible to the consumer by field-level security, a 400 error response is returned. For other error messages, see [Status Codes and Error Responses](atlas.en-us.api_rest.meta/api_rest/errorcodes.htm).

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/id/relationshipFieldName

Formats

JSON, XML

HTTP Method

PATCH

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| sObject | The name of the object. For example, Contact. |
| id | The identifier of the record. For example, 003R0000005hDFYIA2, the contact ID. |
| relationshipFieldName | The name of the field that contains the relationship. For example, Account. Account is the name of the relationship on the child Contact object. |

## Example

For an example of updating a record using PATCH, see

[Update a Record](atlas.en-us.api_rest.meta/api_rest/dome_update_fields.htm "You use the sObject Rows resource to update records. Provide the updated record information in your request data and use the PATCH method of the resource with a specific record ID to update that record. Records in a single file must be of the same object type.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/ "Object Reference for the Salesforce Platform - HTML (New Window)")

## Related Topics

- Status Codes and Error Responses (atlas.en-us.api_rest.meta/api_rest/errorcodes.htm)
- Update a Record (atlas.en-us.api_rest.meta/api_rest/dome_update_fields.htm)
