---
title: "Group Record Page"
domain: chatterapi
topic: group-record-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.158Z
estimatedTokens: 175
keywords: [Group, Record, paginated, records, associated]
---

# Group Record Page

> A paginated list of records associated with a
                        group.

# Group Record Page

A paginated list of records associated with a group.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| current​PageUrl | String | URL to the current page | Medium, 33.0 | 33.0 |
| next​PageUrl | String | URL to the next page. If there is no next page, returns null | Small, 3.0 | 33.0 |
| previous​PageUrl | String | URL to the previous page. If there is no previous page, returns null | Medium, 3.0 | 33.0 |
| records | Group Record[] | Collection of records associated with a group | Small, 33.0 | 33.0 |
| total​Record​Count | Integer | Total number of records associated with a group | Small, 33.0 | 33.0 |

## Related Topics

- Group Record (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_record.htm)
