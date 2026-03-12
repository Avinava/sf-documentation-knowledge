---
title: "Get Related List Records with URL Parameters"
domain: uiapi
topic: get-related-list-records-with-url-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.701Z
estimatedTokens: 749
keywords: [Records, URL, record, data, via]
---

# Get Related List Records with URL Parameters

> Returns record data for up to 1,999 records in a related list via
      URL parameters.

# Get Related List Records with URL Parameters

Returns record data for up to 1,999 records in a related list via URL parameters.

Resources

```

```

-   parentRecordId—The ID of the record you want to get related lists for.
-   relatedListId—The API name of a supported related list for that object, such as Contracts. In API version 62.0 and later, relatedListId supports the API name of a child relationship.

Available Version

50.0

HTTP Method

GET

Example

To get metadata for the Contracts related list for the account record 001RM000003UNu6YAG, make this request.

```

```

To get metadata for the Contracts related list for the account record 001RM000003UNu6YAG, and also retrieve the ContractNumber field, make this request.

```

```

Request Parameters

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

To get record data for a related list without complex URL parameters, you can use the POST method and enter request parameters in the request body. See [Get a Related List Records with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_records_get.htm "Returns record data for up to 1,999 records in a related list. This resource uses the POST method to let you enter request parameters in the request body instead of the URL.").

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | Fields queried for the records returned. These fields are included in the response body and don’t create visible columns. If the field isn’t available to the user, an error occurs. | Optional | 50.0 |
| optionalFields | String[] | Additional fields queried for the records returned. These fields are included in the response body and don’t create visible columns. If the field isn’t available to the user, no error occurs and the field isn’t included in the records. | Optional | 50.0 |
| pageSize | Integer | The number of list records viewed at one time. The default value is 50. Value can be 1–1999. | Optional | 50.0 |
| pageToken | String | The token for additional pages of records beyond the first page. To fetch another page, use the value returned by nextPageTokenfrom the previous page. | Optional | 50.0 |
| sortBy | String[] | The API names of the fields that the related list is sorted by. If the name is preceded with -, the sort order is descending. For example, Name sorts by name in ascending order. -CreatedDate sorts by created date in descending order.In API version 63.0 and later, you can sort by up to five fields. If a field is invalid or isn’t accessible to the context user, this parameter is ignored, but no error occurs. | Optional | 50.0 |
| where | String | NoteThe where parameter isn’t supported for GET requests. | Optional | 55.0 |

Response Body

[Related List Record Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_collection.htm "A collection of related list records.")

## Code Examples

```
/ui-api/related-list-records/${parentRecordId}/${relatedListId}
```

```
/services/data/v66.0/ui-api/related-list-records/001RM000003UNu6YAG/Contracts
```

```
/services/data/v66.0/ui-api/related-list-records/001RM000003UNu6YAG/Contracts?fields=Contract.ContractNumber
```

## Related Topics

- Get a Related List Records with a
                Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_records_get.htm)
- Related List Record Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_collection.htm)
