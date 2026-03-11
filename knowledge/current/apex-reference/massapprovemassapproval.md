---
title: "massApprove(massApproval)"
domain: apex-reference
topic: massapprovemassapproval
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [massApprove, massApproval, Approve, reject, publishing, large, number, social, posts., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# massApprove(massApproval)

> Approve or reject the publishing of a large number of social
      posts.

### massApprove(massApproval)

Approve or reject the publishing of a large number of social posts.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SocialPostMassApprovalOutput massApprove(ConnectApi.SocialPostMassApprovalInput massApproval)

#### Parameters

massApproval

Type: [ConnectApi.SocialPostMassApprovalInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_social_post_mass_approval.htm "List of social post ids and the action to approve or reject publishing them.")

A ConnectApi.SocialPostMassApprovalInput body that includes a list of social post IDs and the action to approve or reject publishing them.

#### Return Value

Type: [ConnectApi.SocialPostMassApprovalOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_social_post_mass_approval.htm "Approval or rejection of a large number of social posts.")