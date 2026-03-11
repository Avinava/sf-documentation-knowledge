---
title: "ConnectApi.FollowingPage"
domain: apex-reference
topic: connectapifollowingpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.939Z
keywords: [ConnectApi.FollowingPage]
---

# ConnectApi.FollowingPage

# ConnectApi.FollowingPage

Page of following subscriptions.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 28.0 |
| following | List<ConnectApi.​Subscription> | List of subscriptions. | 28.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 28.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 28.0 |
| total | Integer | Total number of records being followed across all pages. | 28.0 |