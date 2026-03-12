---
title: "Dashboard Publishers List Resource"
domain: bi-dev-guide-rest
topic: dashboard-publishers-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.587Z
estimatedTokens: 310
keywords: [Dashboard, Publishers, Resource, users, assigned, Adds, current, user, Removes, dashboard's, publisher, URL, Formats, Version, HTTP]
---

# Dashboard Publishers List Resource

> Returns a list of users who are assigned as publishers for the given dashboard. Adds the current user to the 
  list of publishers for the given dashboard. Removes all users from the dashboard's publisher list.

# Dashboard Publishers List Resource

Returns a list of users who are assigned as publishers for the given dashboard. Adds the current user to the list of publishers for the given dashboard. Removes all users from the dashboard's publisher list.

## Resource URL

```

```

## Formats

JSON

## Available Version

47.0

## HTTP Methods

GET POST DELETE

## GET Response Body

[Asset Publisher Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_publisher_collection.htm "A collection of asset publishers.")

## POST Request Body

The POST request doesn't require request parameters or a request body. The POST request creates the asset publisher record for the user making the request.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=bi_dev_guide_rest)

#### Important

A user that has VIEW but not EDIT permissions on a dashboard can add themselves as publisher to view newer versions of the dashboard. This functionality is provided for users who are testers or who approve the newer versions.

## POST Response Body

[Asset Publisher](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_publisher.htm "The publisher of an Analytics asset.")

## Code Examples

```
/wave/dashboards/<dashboardIdOrApiName>/publishers
```

## Related Topics

- Asset Publisher Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_publisher_collection.htm)
- Asset Publisher (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_publisher.htm)
