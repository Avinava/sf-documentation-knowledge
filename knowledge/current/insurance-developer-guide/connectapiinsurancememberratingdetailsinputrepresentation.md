---
title: "ConnectApi.InsuranceMemberRatingDetailsInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancememberratingdetailsinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.274Z
estimatedTokens: 104
keywords: [Input, representation, individual, member, rated]
---

# ConnectApi.InsuranceMemberRatingDetailsInputRepresentation

> Input representation for the details of an individual member to be rated.

# ConnectApi.InsuranceMemberRatingDetailsInputRepresentation

Input representation for the details of an individual member to be rated.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| memberId | String | ID of the member. | Required | 65.0 |
| plans | List<InsuranceMemberRating​PlansInputRepresentation> | Plan details for rating. | Required | 65.0 |

## Related Topics

- InsuranceMemberRating​PlansInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_member_rating_plans.htm)
