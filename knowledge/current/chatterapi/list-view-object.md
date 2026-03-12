---
title: "List View Object"
domain: chatterapi
topic: list-view-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.911Z
estimatedTokens: 199
keywords: [View, record, rows]
---

# List View Object

> Type of record displayed in the rows of a related list.

# List View Object

Type of record displayed in the rows of a related list.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fieldId | String | The API field ID that refers to the parent record. For example, if an Account record has a related list of Contact records, then in the Contact related list definition on the Account this value might be "Account". | Big, 29.0 | 29.0 |
| type | String | The object type name for this object. This is the object type used in REST API and SOAP API. | Small, 29.0 | 29.0 |

#### See Also

-   [List View Definition](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_relatedList.htm "Related list structure or a search list structure on a record view. There’s no data in the list.")

## Related Topics

- List View Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_relatedList.htm)
