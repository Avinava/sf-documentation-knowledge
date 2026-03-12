---
title: "ConnectApi.TopicEndorsement"
domain: apex-reference
topic: connectapitopicendorsement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.175Z
estimatedTokens: 138
keywords: [ConnectApi.TopicEndorsement, Represents, user, endorsing, another, single, topic.]
---

# ConnectApi.TopicEndorsement

> Represents one user endorsing another user for a single topic.

# ConnectApi.TopicEndorsement

Represents one user endorsing another user for a single topic.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| endorsee | ConnectApi.​User​Summary | User being endorsed. | 30.0 |
| endorsementId | String | 18-character ID of the endorsement record. | 30.0 |
| endorser | ConnectApi.​User​Summary | User performing the endorsement. | 30.0 |
| topic | ConnectApi.​Topic | Topic the user is being endorsed for. | 30.0 |
| url | String | URL to the resource for the endorsement record. | 30.0 |

## Related Topics

- ConnectApi.​User​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​Topic (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm)
