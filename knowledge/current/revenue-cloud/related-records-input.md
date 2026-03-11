---
title: "Related Records Input"
domain: revenue-cloud
topic: related-records-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.214Z
keywords: [Related, Records, Input]
---

# Related Records Input

# Related Records Input

Input representation of the request to retrieve related ProductRampSegment or ProductUsageGrant records for Product2 object.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 62.0 |
| recordIds | String[] | List of record IDs to return the relatedObjects records for. The maximum number of record IDs supported is 20. | Required | 62.0 |
| related​ObjectNodes | Related Object Node Input[] | List of nodes for the related objects. The maximum number of related object nodes supported is two. | Required | 62.0 |