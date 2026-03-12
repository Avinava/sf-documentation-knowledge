---
title: "Search Actionable List Member Input"
domain: omnistudio
topic: search-actionable-list-member-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.797Z
estimatedTokens: 324
keywords: [Search, Actionable, List, Member, Input, representation, searching, actionable, list, members.]
---

# Search Actionable List Member Input

> Input representation for searching for actionable list members.

# Search Actionable List Member Input

Input representation for searching for actionable list members.

JSON Example

```

```

Properties

| Name |  | Type | Description |  |  | Required or Optional | Available Version |
| --- | --- | --- | --- | --- | --- | --- | --- |
| after |  | String | Pointer to the last record in the previous pagination request. |  |  | Optional | 57.0 |
| filters |  | Filter Input[] | List of WHERE clauses for filtering actionable list members. |  |  | Optional | 57.0 |
| orderBy |  | OrderBy Input[] | ORDER BY clause for sorting actionable list members.NoteSorting of polymorphic columns of actionable list members isn’t supported. |  |  | Optional | 57.0 |
| requireHeaders |  | Boolean | Indicates whether the metadata of the Actionable List Member fields must be provided (true) or not (false). The default value is true. |  |  | Optional | 57.0 |
| scope |  | String | Specifies the scope of the API request:Assignee—API fetches the actionable list members assigned to the logged in user.All—API fetches all the actionable list members shared with or belonging to the logged in user.The default value is All. |  |  | Optional | 57.0 |
| searchTerm |  | String | Reference record name for filtering actionable list member records. |  |  | Optional | 57.0 |

## Code Examples

```
{
   "searchTerm" : "Julia Green",
   "orderBy" : {
       "orderByList" : [
          {
             "fieldName" : "Name",
             "operator" : "ASC",
             "nulls" : "First"
          }
       ]
   },
   "filters" : {
       "filterList" : [
          {
             "fieldName" : "Name",
             "operator" : "Like",
             "value" : "AL"
          }
       ]
   },
   "scope":"ASSIGNEE",
   "requireHeaders" : true,
   "after": "djE6OQ=="
}
```

## Related Topics

- Filter Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_filter.htm)
- OrderBy Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_order_by.htm)
