---
title: "Get a Batch of Related List Records with URL Parameters"
domain: uiapi
topic: get-a-batch-of-related-list-records-with-url-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.706Z
estimatedTokens: 664
keywords: [Batch, Records, URL, record, data, via]
---

# Get a Batch of Related List Records with URL Parameters

> Returns record data for a batch of related lists via URL
      parameters.

# Get a Batch of Related List Records with URL Parameters

Returns record data for a batch of related lists via URL parameters.

Resources

```

```

-   parentRecordId—The ID of the record you want to get related lists for.
-   relatedListIds—Comma-separated IDs of supported related lists for the specified record.

Available Version

50.0

HTTP Method

GET

Example

To get metadata for the Contracts related list for the account record 001RM000003UNu6YAG, make this request:

```

```

Request Parameters

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

To get record data for a batch of related lists without using complex URL parameters, you can use the POST method and enter request parameters in the request body. See [Get a Batch of Related List Records with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_records_batch_get.htm "Returns record data for a batch of related lists. This resource uses the POST method to let you enter request parameters in the request body instead of the URL.").

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | Fields queried for the records returned. These fields are included in the response body and don’t create visible columns. If the field isn’t available to the user, an error occurs. | Optional | 50.0 |
| optionalFields | String[] | Additional fields queried for the records returned. These fields are included in the response body and don’t create visible columns. If the field isn’t available to the user, no error occurs and the field isn’t included in the records. | Optional | 50.0 |
| pageSize | Integer | The number of records from all lists in the request viewed at one time. The default value is 50. Value can be 1–1999. | Optional | 50.0 |
| sortBy | String[] | The API names of the fields the related list is sorted by. If the name is preceded with -, the sort order is descending. For example, Name sorts by name in ascending order. -CreatedDate sorts by created date in descending order.In API version 63.0 and later, you can sort by up to five fields. If a field is invalid or isn’t accessible to the context user, this parameter is ignored, but no error occurs. | Optional | 50.0 |
| where | String | NoteThe where parameter isn’t supported for GET requests. | Optional | 55.0 |

Response Body

[Simplified Batch Representation](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm "The simplified results from a request to a batch resource. Results include information for each subrequest in the batch.")

## Code Examples

```
/ui-api/related-list-records/batch/${parentRecordId}/${relatedListIds}
```

```
/services/data/v66.0/ui-api/related-list-records/batch/001RM000003UNu6YAG/Contracts,WorkOrders
```

## Related Topics

- Get a Batch of
                Related List Records with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_records_batch_get.htm)
- Simplified Batch Representation (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm)
