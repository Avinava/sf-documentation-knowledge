---
title: "ConnectApi.FollowerPage"
domain: apex-reference
topic: connectapifollowerpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.719Z
keywords: [ConnectApi.FollowerPage]
---

# ConnectApi.FollowerPage

# ConnectApi.FollowerPage

Page of followers.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 28.0 |
| followers | List<ConnectApi.​Subscription> | List of subscriptions. | 28.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 28.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 28.0 |
| total | Integer | Total number of followers across all pages. | 28.0 |