---
title: "Dashboard Publisher Resource"
domain: bi-dev-guide-rest
topic: dashboard-publisher-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:55.981Z
estimatedTokens: 112
keywords: [Formats, Dashboard, Publisher, Resource, user, detail, Removes, publishers, URL, HTTP]
---

> Returns user detail information about the publisher for the given dashboard. Removes a user from the list of publishers 
  for the given dashboard.

# Dashboard Publisher Resource

Returns user detail information about the publisher for the given dashboard. Removes a user from the list of publishers for the given dashboard.

## Resource URL

```

```

## Formats

JSON

## Available Version

47.0

## HTTP Methods

GET DELETE

## GET Response Body

[Asset Publisher](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_publisher.htm "The publisher of an Analytics asset.")

## Code Examples

```
/wave/dashboards/<dashboardIdOrApiName>/publishers/<assetPublisherId>
```

## Related Topics

- Asset Publisher (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_publisher.htm)
