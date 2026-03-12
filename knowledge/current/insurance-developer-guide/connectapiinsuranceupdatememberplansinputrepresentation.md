---
title: "ConnectApi.InsuranceUpdateMemberPlansInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceupdatememberplansinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.303Z
estimatedTokens: 118
keywords: [Input, representation, updating, plans, group, census, member]
---

# ConnectApi.InsuranceUpdateMemberPlansInputRepresentation

> Input representation for updating the plans for a group census member.

# ConnectApi.InsuranceUpdateMemberPlansInputRepresentation

Input representation for updating the plans for a group census member.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addedPlans | List<ConnectApi.GroupCensusMemberPlanInputRepresentation> | List of plans to add for the member. | Optional | 65.0 |
| deletedPlans | List<String> | List of group census member plan IDs to delete. | Optional | 65.0 |

## Related Topics

- ConnectApi.GroupCensusMemberPlanInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_group_census_member_plan.htm)
