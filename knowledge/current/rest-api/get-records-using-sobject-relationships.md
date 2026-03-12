---
title: "Get Records Using sObject Relationships"
domain: rest-api
topic: get-records-using-sobject-relationships
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.921Z
estimatedTokens: 669
keywords: [Records, sObject, Relationships, record, relationship, there, multiple, retrieve, associated]
---

# Get Records Using sObject Relationships

> Gets a record based on the specified object, record ID, and relationship field. The
		fields and field values of the record are returned in the response body. If there are
		multiple related records, you can retrieve the complete set of associated
		records.

# Get Records Using sObject Relationships

Gets a record based on the specified object, record ID, and relationship field. The fields and field values of the record are returned in the response body. If there are multiple related records, you can retrieve the complete set of associated records.

If there’s no record associated with a relationship field, a 404 error response is returned. If the relationship field normally resolves to multiple records and no relationship set exists, a 200 response is returned. If the fields parameter is used with fields that don’t exist or aren’t visible to the consumer by field-level security, a 400 error response is returned. For other error messages, see [Status Codes and Error Responses](atlas.en-us.api_rest.meta/api_rest/errorcodes.htm).

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/id/relationshipFieldName

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| sObject | The name of the object. For example, Account. |
| id | The identifier of the record. For example, 001R0000005hDFYIA2. |
| relationshipFieldName | The name of the field that contains the relationship. For example, Opportunities. |
| fields | Optional for GET. A comma-delimited list of fields in the associated relationship record returned in the response body. For example:/services/data/v66.0/sobjects/sObject/id/relationship field?fields=field1,field2 |

## Example

For examples of using sObject Relationships to access relationship fields, see [Traverse Relationships with Friendly URLs](atlas.en-us.api_rest.meta/api_rest/dome_relationship_traversal.htm#dome_relationship_traversal "You can traverse relationship fields in standard and custom objects by constructing friendly URLs using the sObject Relationship resource. This approach allows you to directly access records associated by relationships. Using friendly URLs is an easier alternative to accessing records by obtaining object IDs from relationship fields and then inspecting the associated object ID record.").

Example Request

```

```

Example Response Body

The response body is the contents of the record associated with the relationship field. Here’s an example of a request and JSON response body for a simple relationship traversal that returns the Distributor\_\_c record associated with a relationship field on custom object Merchandise\_\_c.

```

```

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/ "Object Reference for the Salesforce Platform - HTML (New Window)")

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Merchandise__c/a01D000000INjVe/Distributor__r -H “Authorization: Bearer token”
```

```
{
    "attributes" : 
    { 
        "type" : "Distributor__c",
        "url" : "/services/data/v66.0/sobjects/Distributor__c/a03D0000003DUhcIAG"
    },
    "Id" : "a03D0000003DUhcIAG",
    "OwnerId" : "005D0000001KyEIIA0",
    "IsDeleted" : false,
    "Name" : "Distributor1",
    "CreatedDate" : "2011-12-16T17:43:01.000+0000",
    "CreatedById" : "005D0000001KyEIIA0",
    "LastModifiedDate" : "2011-12-16T17:43:01.000+0000",
    "LastModifiedById" : "005D0000001KyEIIA0",
    "SystemModstamp" : "2011-12-16T17:43:01.000+0000",
    "Location__c" : "San Francisco"
}
```

## Related Topics

- Status Codes and Error Responses (atlas.en-us.api_rest.meta/api_rest/errorcodes.htm)
- Traverse Relationships with Friendly URLs (atlas.en-us.api_rest.meta/api_rest/dome_relationship_traversal.htm)
