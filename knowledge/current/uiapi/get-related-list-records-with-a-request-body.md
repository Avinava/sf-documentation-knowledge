---
title: "Get Related List Records with a Request Body"
domain: uiapi
topic: get-related-list-records-with-a-request-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.714Z
estimatedTokens: 276
keywords: [Records, record, data, resource, uses, POST, let, enter, instead, URL]
---

# Get Related List Records with a Request Body

> Returns record data for up to 1,999 records in a related list. This
   resource uses the POST method to let you enter request parameters in the request body instead of
   the URL.

# Get Related List Records with a Request Body

Returns record data for up to 1,999 records in a related list. This resource uses the POST method to let you enter request parameters in the request body instead of the URL.

Resources

```

```

-   parentRecordId—The ID of the record you want to get related lists for.
-   relatedListId—The API name of a supported related list for that object, such as Contacts. In API version 62.0 and later, relatedListId supports the API name of a child relationship.

Available Version

55.0

HTTP Method

POST

Example

To get record data for the Contacts related list for the account record 001xx000003GYOpAAO, use this request.

```

```

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| listRecordsQuery | Related List Records Input | The record data for the related list. | Required | 55.0 |

Response Body

[Related List Record Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_collection.htm "A collection of related list records.")

## Code Examples

```
/ui-api/related-list-records/${parentRecordId}/${relatedListId}
```

```
POST /ui-api/related-list-records/001xx000003GYOpAAO/Contacts
```

```
{
 "fields": ["Name", "Id", "Birthdate"],
 "optionalFields": ["Email"],
 "sortBy": ["CreatedDate"],
 "pageSize": 10,
 "where": "{ Account: { AnnualRevenue: { gt: 10000000 } }}"
}
```

## Related Topics

- Related List Records
            Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_record_input.htm)
- Related List Record Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_collection.htm)
