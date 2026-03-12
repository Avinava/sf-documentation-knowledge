---
title: "Traverse Relationships with Friendly URLs"
domain: rest-api
topic: traverse-relationships-with-friendly-urls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.930Z
estimatedTokens: 1905
keywords: [Traverse, Relationships, Friendly, URLs, relationship, standard, custom, objects, constructing, sObject, resource, approach, directly, access, records]
---

# Traverse Relationships with Friendly URLs

> You can traverse relationship fields in standard and custom objects by constructing
        friendly URLs using the sObject Relationship resource. This approach allows you to directly
        access records associated by relationships. Using friendly URLs is an easier alternative to
        accessing records by obtaining object IDs from relationship fields and then inspecting the
        associated object ID record.

# Traverse Relationships with Friendly URLs

You can traverse relationship fields in standard and custom objects by constructing friendly URLs using the sObject Relationship resource. This approach allows you to directly access records associated by relationships. Using friendly URLs is an easier alternative to accessing records by obtaining object IDs from relationship fields and then inspecting the associated object ID record.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_rest)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Relationship names follow certain conventions that depend on the direction (parent to child, or child to parent) of the relationship and the name of the related object. The conventions are described in [Understanding Relationship Names](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_understanding.htm "HTML (New Window)") in the SOQL and SOSL Reference.

There are limits to the number of relationship traversals you can make in a single REST API call. These limits are the same as the limits for SOQL, as described in [Understanding Relationship Query Limitations](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_limits.htm "HTML (New Window)") in the SOQL and SOSL Reference. Keep the following limitations in mind when traversing relationships.

-   When specifying child-to-parent relationships, no more than five levels can be traversed. The following traverses two child-to-parent relationships.

    ```

    ```

-   When specifying parent-to-child relationships, no more than one level can be traversed. The following traverses one parent-to-child relationship.

    ```

    ```


## Traversing Standard Objects

The standard object Contact contains a relationship field to the Account standard object. The following example retrieves the Account record related to a Contact record.

```

```

Example request body for traversing a standard object relationship

none required

Example response body for traversing a standard object simple relationship

```

```

Example of traversing a simple relationship

This custom object named Merchandise\_\_c contains a lookup relationship field to a child Distributor\_\_c custom object. The following example retrieves the Distributor\_\_c record related to a Merchandise\_\_c record.

```

```

Example request body for traversing a simple relationship

none required

Example response body for traversing a simple relationship

```

```

If no related record is associated with the relationship name, the REST API call fails, because the relationship can’t be traversed. Using the previous example, if the Distributor\_\_c field in the Merchandise\_\_c record was set to null, the GET call would return a 404 error response.

You can traverse multiple relationships within the same relationship hierarchy in a single REST API call as long as you don’t exceed the relationship query limits. If a Line\_Item\_\_c custom object is the child in a relationship to a Merchandise\_\_c custom object, and Merchandise\_\_c also has a child Distributor\_\_c custom object, you can access the Distributor\_\_c record starting from the Line\_Item\_\_c record using something like the following.

```

```

Relationship traversal also supports PATCH and DELETE methods for relationships that resolve to a single record. Using the PATCH method, you can update the related record.

Example of using PATCH to update a relationship record

```

```

Example JSON request body for updating a relationship record contained in update\_info.json

```

```

Example response body for updating relationship record

none returned

Finally, using the DELETE method, you can delete the related record.

Example using DELETE to delete a relationship record

```

```

Example request body for deleting a relationship record

none required

Example response body for update relationship record

none returned

## Traversing Relationships with Multiple Records

You can traverse relationships with multiple records, and get a response that contains the set of records. For relationships that resolve to multiple records, only GET methods are supported.

Example traversing a relationship with multiple records

If we have a custom object named Merchandise\_\_c that contains a master—detail relationship field to a Line\_Item\_\_c custom object, the following example retrieves the set of Line\_Item\_\_c records related to a Merchandise\_\_c record.

```

```

Example request body for traversing a relationship with multiple records

none required

Example response body for traversing a relationship with multiple records

For this example, two Line\_Item\_\_c records were retrieved.

```

```

The serialized structure for the result data is the same format as result data from executing a SOQL query via REST API. See [Query](atlas.en-us.api_rest.meta/api_rest/resources_query.htm#resources_query "Runs the specified SOQL query.") for more details on executing SOQL queries via REST API

If no related records are associated with the relationship name, the REST API call returns a 200 response with no record data in the response body. This result is in contrast to the results when traversing an empty relationship to a single record, which returns a 404 error response. This behavior is because the single record case resolves to a REST resource that can be used with PATCH or DELETE methods. In contrast, the multiple record case can only be queried.

If an initial GET request for a relationship with multiple records returns only part of the results, the end of the response contains the field nextRecordsUrl. For example, you could get a field like the following at the end of your response.

```

```

You can request the next batch of records using the provided URL with your instance and session information, and repeat until all records have been retrieved. These requests use nextRecordsUrl and don’t include any parameters. The final batch of records doesn’t have a nextRecordsUrl field.

Example usage for retrieving the remaining results

```

```

Example request body for retrieving the remaining results

none required

Example response body for retrieving the remaining results

```

```

## Filtering Result Fields

When retrieving records via relationship traversals, you can optionally specify only a subset of the record fields be returned by using the fields parameter. Multiple fields are separated by commas. The following example retrieves just the Location\_\_c field from the Distributor\_\_c record associated with a Merchandise\_\_c record:

```

```

The JSON response data would look like the following:

```

```

Similarly, for requests that result in multiple records, you can use a list of fields to specify the fields returned in the record set. For example, assume you have a relationship that was associated with two Line\_Item\_\_c records. You want just the Name and Units\_Sold\_\_c fields from those records. You could use the following call.

```

```

The response data would look like the following.

```

```

If any field listed in the fields parameter set isn’t visible to the active user, the REST API call fails. In the previous example, if the Units\_Sold\_c field was hidden from the active user by field-level security, the call would return a 400 error response.

## Code Examples

```
https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/ChildOfChild__c/record id/Child__r/ParentOfChild__r
```

```
https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/ParentOfChild__c/record id/Child__r
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Contact/0035e00000PiemmAAB/Account -H "Authorization: Bearer token"
```

```
{
    "attributes": {
        "type": "Account",
        "url": "/services/data/v66.0/sobjects/Account/0015e00000TwULCAA3"
    },
    "Id": "0015e00000TwULCAA3",
    "IsDeleted": false,
    "Name": "relationshipAccountName",
    "PhotoUrl": "/services/images/photo/0015e00000TwULCAA3",
    "OwnerId": "0055e000003E8ooAAC",
    "CreatedDate": "2021-11-06T17:38:40.000+0000",
    "CreatedById": "0055e000003E8ooAAC",
    "LastModifiedDate": "2021-11-06T17:38:40.000+0000",
    "LastModifiedById": "0055e000003E8ooAAC",
    "SystemModstamp": "2021-11-06T17:38:40.000+0000",
    "LastActivityDate": null,
    "LastViewedDate": "2021-11-06T17:40:50.000+0000",
    "LastReferencedDate": "2021-11-06T17:40:50.000+0000"
}
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Merchandise__c/a01D000000INjVe/Distributor__r -H "Authorization: Bearer token"
```

## Related Topics

- Query (atlas.en-us.api_rest.meta/api_rest/resources_query.htm)
