---
title: "Related List Records Batch Input"
domain: uiapi
topic: related-list-records-batch-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.263Z
estimatedTokens: 570
keywords: [Records, Batch, Input, record, data]
---

# Related List Records Batch Input

> Get record data for a batch of related lists.

# Related List Records Batch Input

Get record data for a batch of related lists.

JSON example

To get record data for the Contacts and Opportunities related lists for the account record 001xx000003GYOpAAO, use the following request.

```

```

```

```

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| relatedListId | String | The ID of the related list that you want to get records for. | Required | 55.0 |
| fields | String[] | Fields queried for the records returned. These fields are included in the response body and don’t create visible columns. If the field isn’t available to the user, an error occurs. | Optional | 55.0 |
| optionalFields | String[] | Additional fields queried for the records returned. These fields are included in the response body and don’t create visible columns. If the field isn’t available to the user, no error occurs and the field isn’t included in the records. | Optional | 55.0 |
| pageSize | Integer | The number of records from all lists in the request viewed at one time. The default value is 50. Value can be 1–1999. | Optional | 55.0 |
| sortBy | String[] | The API names of the fields that the related list is sorted by. If the name is preceded with -, the sort order is descending. For example, Name sorts by name in ascending order. -CreatedDate sorts by created date in descending order.In API version 63.0 and later, you can sort by up to five fields. If a field is invalid or isn’t accessible to the context user, this parameter is ignored, but no error occurs. | Optional | 55.0 |
| where | String | The filter applied to returned records, in GraphQL syntax. For example, { and: [ { StageName: { eq: "Prospecting" } }, { Account: { Name: { eq: "Dickenson plc" } } } ] } filters an Opportunity related list to show only opportunities in the Prospecting stage that are linked to the “Dickenson plc” account. | Optional | 55.0 |

#### See Also

-   [Get a Batch of Related List Records with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_records_batch_get.htm "Returns record data for a batch of related lists. This resource uses the POST method to let you enter request parameters in the request body instead of the URL.")

## Code Examples

```
POST /ui-api/related-list-records/batch/001xx000003GYOpAAO
```

```
{
    "relatedListParameters":
    [
        {
            "relatedListId": "Contacts",
            "fields": ["Name", "Id", "Birthdate"],
            "optionalFields": ["Email"],
            "sortBy": ["CreatedDate"],
            "pageSize": 10,
            "where": "{ Account: { AnnualRevenue: { gt: 10000000 } }}"
        },
        {
            "relatedListId": "Opportunities",
            "fields": ["Name", "Id"],
            "optionalFields": ["Email"],
            "sortBy": ["CreatedDate"],
            "pageSize": 10,
            "where": "{ Account: { AnnualRevenue: { gt: 10000000 } }}"
        }
    ]
}
```

## Related Topics

- Get a Batch of Related List Records with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_records_batch_get.htm)
