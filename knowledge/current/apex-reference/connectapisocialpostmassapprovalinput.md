---
title: "ConnectApi.SocialPostMassApprovalInput"
domain: apex-reference
topic: connectapisocialpostmassapprovalinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.575Z
estimatedTokens: 122
keywords: [ConnectApi.SocialPostMassApprovalInput, List, social, post, ids, action, approve, reject, publishing, them.]
---

# ConnectApi.SocialPostMassApprovalInput

> List of social post ids and the action to approve or reject publishing
      them.

# ConnectApi.SocialPostMassApprovalInput

List of social post ids and the action to approve or reject publishing them.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isApproved | Boolean | Specifies whether to approve (true) or reject (false) publishing the social posts. If unspecified, defaults to false. | Optional | 46.0 |
| socialPost​IdList | List<String> | A list of up to 200 social post IDs. | Required | 46.0 |

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
