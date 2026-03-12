---
title: "Read By Collection"
domain: chatterapi
topic: read-by-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.774Z
estimatedTokens: 354
keywords: [Collection, feed, element]
---

# Read By Collection

> A collection of information about who read the feed element and
      when.

# Read By Collection

A collection of information about who read the feed element and when.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageToken | String | Token identifying the current page. | Medium, 40.0 | 40.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. The default is 25 items per page. | Medium, 40.0 | 40.0 |
| items | Read By[] | Collection of read-by information, including users and when they last read the feed element. | Big, 40.0 | 40.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 40.0 | 40.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 40.0 | 40.0 |
| previousPageToken | String | Reserved for future use. | Medium, 40.0 | 40.0 |
| previousPageUrl | String | Reserved for future use. | Medium, 40.0 | 40.0 |
| total | Integer | Total number of users who read the feed element.NoteThis count appears in the UI under feed posts in private and unlisted Chatter groups as the “seen by” number, for example, “Seen by 48.” | Small, 40.0 | 40.0 |

#### See Also

-   [Read By Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_read_by_capability.htm "If a feed element has this capability, the context user can mark it as read.")

## Related Topics

- Read By (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_read_by.htm)
- Read By Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_read_by_capability.htm)
