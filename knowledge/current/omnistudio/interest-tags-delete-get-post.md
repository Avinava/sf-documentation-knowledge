---
title: "Interest Tags (DELETE, GET, POST)"
domain: omnistudio
topic: interest-tags-delete-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.771Z
keywords: [Interest, Tags, DELETE, GET, POST]
---

# Interest Tags (DELETE, GET, POST)

# Interest Tags (DELETE, GET, POST)

Create an Interest Tag. Delete Interest Tags by the tag IDs. Retrieve a list of Interest Tags by a category ID.

Resource

```

```

Example for DELETE

```

```

Example for GET

```

```

Example for POST

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

DELETE, GET, POST

Query parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| tagIds | String | The list of IDs for the Interest Tags to delete. | Required | 54.0 |

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| categoryId | String | The category ID assigned to an Interest Tag. | Required | 54.0 |
| limit | Integer | The maximum number of Interest Tags to return. Maximum is 100. | Optional | 54.0 |
| offset | Integer | The offset for the next set of results. The offset parameter specifies the end of the last batch retrieved. For example, to retrieve 15 Interest Tags at a time:Request the first 15 with an offset of 0.Request the second 15 with an offset of 15. | Optional | 54.0 |
| orderBy | String | Order the results to display by the category name or Interest Tag ID. | Optional | 54.0 |
| sort | String | Sort the results in ascending or descending order. | Optional | 54.0 |

Response body for GET

[Interest Tag List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_interest_tag_list.htm "Output representation of the list of Interest Tags.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| categoryId | String | The category ID of an Interest Tag. | Required | 54.0 |
| recordId | String | ID of the record to assign an Interest Tag. | Optional | 54.0 |
| tagDescription | String | The description of an Interest Tag. | Optional | 54.0 |
| tagName | String | The unique name of an Interest Tag. | Required | 54.0 |

Response body for POST

[Interest Tag Create Collection Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_interest_tag_create_collection_output.htm "Output representation of a collection of Interest Tags that are created.")