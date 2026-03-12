---
title: "Get Child Records"
domain: uiapi
topic: get-child-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.057Z
estimatedTokens: 943
keywords: [Child, Records, User, API, several, resources, include, their, responses, record, relationships, huge, negative, effect, performance, relationship, Relationships, connections, detail, parent]
---

# Get Child Records

> User Interface API has several resources that include child records
      in their responses. If a record has many child relationships, a response can be huge and have
      a negative effect on performance. To get only the records you need, request records for
      specific child relationships and set the page size of the results.

# Get Child Records

User Interface API has several resources that include child records in their responses. If a record has many child relationships, a response can be huge and have a negative effect on performance. To get only the records you need, request records for specific child relationships and set the page size of the results.

There are multiple resources that return child records. All of them share some common functionality.

Specify a Child Relationship

Specify child relationships in the format ObjectApiName.ChildRelationshipName. For example, to specify the Contacts relationship on an account, use Account.Contacts.

Specify spanning relationships in the format ObjectApiName.ChildRelationshipName.FieldApiName. For example, to specify the account billing address for an opportunity, use Opportunity.Account.BillingAddress.

Paginated Responses

The child relationships records in the response are paginated and include URLs to get the next page and previous pages of child records. Use the pageSize parameter to specify the number of records per page. The default is 5.

Responses Include One Level of Child Relationships

User Interface API gets the first set of child relationships that it finds, it doesn’t get the next level of child relationships. For example, this request gets the Opportunities on an Account record. If an opportunity in the response has a child relationship with another object, the API doesn’t return that information.

```

```

In this shortened response body, you see the first set of child relationships on the Account record, which in this case is three Opportunity records. The records in the next level of child relationships—on the Opportunity object—don’t appear because it would make the response body too large.

```

```

## Resources That Return Child Records

Get Child Records for a Specific Record and Child Relationship

This example returns all the Contacts related to the Account record 001R0000003I6CoIAK.

```

```

The response is paginated. Use the pageSize parameter to specify the number of records per page. The default is 5.

```

```

Get a Record and Include Child Records

This example gets the data for fields in the compact layout for an opportunity record with ID 006R0000001rboIIAQ. The response includes OpportunityCompetitors and Partners child records.

```

```

Get a Batch of Records and Include Child Records

This example gets the Account.Name field and Account.Contacts child records for two accounts.

```

```

Get Record Data and Metadata and Include Child Records

The response for this request includes layout information, metadata, and record data. The record data includes child relationship data for Contacts and Opportunities.

```

```

#### See Also

-   [User Interface API Sample Apps](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_sample_apps.htm "We’ve built two sample apps that use User Interface API to create, read, update, and delete records. The apps are open-source and available on GitHub.")

-   [Get Child Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_child_relationships.htm "Get child records for a specified record and child relationship name. Relationships are connections between records. On a record detail page, each record in a related list has a child relationship to the parent record.")

-   [Get a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_get.htm "Get a record’s data.")

-   [Get a Batch of Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch.htm "Get data for a batch of records.")

-   [Get Record Data and Object Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm "Get layout information, metadata, and data to build UI for a single record or for a collection of records.")

## Code Examples

```
GET /ui-api/record-ui/001R0000003IG0vIAG?childRelationships=Account.Opportunities
```

```
...response shortened...
"records" : {
    "001RM000003TXRbYAO" : {
      "apiName" : "Account",
      "childRelationships" : {
        "Opportunities" : {
          "count" : 3,
          "currentPageUrl" : "/services/data/v41.0/ui-api/records/001RM000003TXRbYAO/child-relationships/Opportunities?
              fields=%5BOpportunity.Name%2C%20Opportunity.Id%5D&page=1&pageSize=5",
          "nextPageUrl" : null,
          "previousPageUrl" : null,
          "records" : [ {
            "apiName" : "Opportunity",
            "childRelationships" : { },
            "fields" : {
              "AccountId" : {
                "displayValue" : null,
                "value" : "001RM000003TXRbYAO"
              },
              "Id" : {
                "displayValue" : null,
                "value" : "006RM000002XCGxYAO"
              },
              "Name" : {
                "displayValue" : null,
                "value" : "Acme - 1,200 Widgets"
              }
            },
            "id" : "006RM000002XCGxYAO",
            "recordTypeId" : "012000000000000000",
            "recordTypeInfo" : null
          },
```

```
/ui-api/records/001R0000003I6CoIAK/child-relationships/Contacts
```

```
{   
    "count" : 5,
    "currentPageUrl" :
    "/services/data/v41.0/ui-api/records/001R0000003I6CoIAK/child-relationships/Contacts?page=1&pageSize=5",
    "nextPageUrl" :
    "/services/data/v41.0/ui-api/records/001R0000003I6CoIAK/child-relationships/Contacts?page=2&pageSize=5",
    "previousPageUrl" : null,
    "records" : [ {
        "apiName" : "Contact",
        "childRelationships" : { },
        "fields" : {
            "AccountId" : {
                "displayValue" : null,
                "value" : "001R0000003I6CoIAK"
            },
            "Id" : { 
                "displayValue" : null,
                "value" : "003R0000007qXwQIAU"
            },
            "Name" : { 
                "displayValue" : null,
                "value" : "John Smith"
            }
        },
        "id" : "003R0000007qXwQIAU",
        "recordTypeId" : "012000000000000000",
        "recordTypeInfo" : null
    },
    ...
}
```

```
GET /ui-api/records/006R0000001rboIIAQ?layoutTypes=Compact&childRelationships=Opportunity.OpportunityCompetitors,Opportunity.Partners
```

## Related Topics

- User Interface API Sample Apps (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_sample_apps.htm)
- Get Child Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_child_relationships.htm)
- Get a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_get.htm)
- Get a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch.htm)
- Get Record Data and Object Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm)
- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- Record Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_collection.htm)
- Get Child Records (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_child_relationships.htm)
