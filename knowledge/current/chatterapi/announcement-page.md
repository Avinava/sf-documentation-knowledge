---
title: "Announcement Page"
domain: chatterapi
topic: announcement-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.166Z
estimatedTokens: 212
keywords: [Announcement, paginated, collection, bodies]
---

# Announcement Page

> A paginated collection of Announcement response bodies.

# Announcement Page

A paginated collection of Announcement response bodies.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| announcements | Announcement[] | A collection of Announcement response bodies. An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement. | Small, 31.0 | 31.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | Medium, 31.0 | 31.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 31.0 | 31.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | Medium, 31.0 | 31.0 |

## Related Topics

- Announcement (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement.htm)
