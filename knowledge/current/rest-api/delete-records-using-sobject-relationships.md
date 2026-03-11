---
title: "Delete Records Using sObject Relationships"
domain: rest-api
topic: delete-records-using-sobject-relationships
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.714Z
keywords: [Delete, Records, sObject, Relationships, Syntax, Example, See]
---

# Delete Records Using sObject Relationships

# Delete Records Using sObject Relationships

Deletes a parent record based on the specified object, record ID, and relationship field name. Only a child-to-parent relationship can be traversed when you delete records.

If the fields parameter is used with fields that don’t exist or aren’t visible to the consumer by field-level security, a 400 error response is returned. For other error messages, see [Status Codes and Error Responses](atlas.en-us.api_rest.meta/api_rest/errorcodes.htm).

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/id/relationshipFieldName

Formats

JSON, XML

HTTP Method

DELETE

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| sObject | The name of the object. For example, Contact. |
| id | The identifier of the record. For example, 003R0000005hDFYIA2, the contact ID. |
| relationshipFieldName | The name of the field that contains the relationship. For example, Account. Account is the name of the relationship on the child Contact object. |

When you delete a parent record, it deletes all child records that have a master-detail relationship to the parent record.

## Example

For examples of using sObject Relationships to delete a relationship record, see [Traverse Relationships with Friendly URLs](atlas.en-us.api_rest.meta/api_rest/dome_relationship_traversal.htm#dome_relationship_traversal "You can traverse relationship fields in standard and custom objects by constructing friendly URLs using the sObject Relationship resource. This approach allows you to directly access records associated by relationships. Using friendly URLs is an easier alternative to accessing records by obtaining object IDs from relationship fields and then inspecting the associated object ID record.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/ "Object Reference for the Salesforce Platform - HTML (New Window)")