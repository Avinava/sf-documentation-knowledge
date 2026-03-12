---
title: "ConnectApi.GroupCensusMemberPlanInputRepresentation"
domain: insurance-developer-guide
topic: connectapigroupcensusmemberplaninputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.210Z
estimatedTokens: 147
keywords: [Input, representation, plan, that's, associated, group, census, member]
---

# ConnectApi.GroupCensusMemberPlanInputRepresentation

> Input representation for a single plan that's associated with a group census
  member.

# ConnectApi.GroupCensusMemberPlanInputRepresentation

Input representation for a single plan that's associated with a group census member.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contractGroupPlanId | String | ID of the contract group plan. | Required | 65.0 |
| groupCensusMemberId | String | ID of the group census member. | Optional | 65.0 |
| id | String | ID of the group census member plan record. | Required to update plan | 65.0 |
| name | String | Name of the group census member plan. | Optional | 65.0 |
