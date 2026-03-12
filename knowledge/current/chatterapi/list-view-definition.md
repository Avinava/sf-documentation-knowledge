---
title: "List View Definition"
domain: chatterapi
topic: list-view-definition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.903Z
estimatedTokens: 367
keywords: [View, Definition, structure, search, record, There’s, data]
---

# List View Definition

> Related list structure or a search list structure on a record view. There’s no data in
    the list.

# List View Definition

Related list structure or a search list structure on a record view. There’s no data in the list.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| columns | List View Column[] | The columns of fields shown in this list view. | Big, 29.0 | 29.0 |
| label | String | The localized label of this list view. | Small, 29.0 | 29.0 |
| objectType | List View Object | The definition of the type of the objects in this list view. | Medium, 29.0 | 29.0 |
| rowLimit | Integer | The maximum number of objects per page in this list view. To view all objects in this related list, page through the data in pages no larger than this size. To build a SOQL statement from this describe, the SOQL statement must include a LIMIT value equal to this value or an error is thrown on execution. | Medium, 29.0 | 29.0 |
| sortColumns | List View Sort[] | The columns in which to sort this list view. The sort columns are given in the order of their priority (for example, primary sort, secondary sort, and so on). | Medium, 29.0 | 29.0 |

#### See Also

-   [Record View](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordView.htm "A view of any record in the org, including a custom object record. This object is used if a specialized object, such as User or ChatterGroup, isn’t available for the record type. Contains data and metadata so you can render a record with one response.")

## Related Topics

- List View Column (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_relatedListColumn.htm)
- List View Object (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_relatedListObject.htm)
- List View Sort (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_relatedListSort.htm)
- Record View (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordView.htm)
