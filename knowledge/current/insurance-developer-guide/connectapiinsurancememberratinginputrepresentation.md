---
title: "ConnectApi.InsuranceMemberRatingInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancememberratinginputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.271Z
estimatedTokens: 115
keywords: [Input, representation, individual, member, rating, API]
---

# ConnectApi.InsuranceMemberRatingInputRepresentation

> Input representation for the individual member rating API.

# ConnectApi.InsuranceMemberRatingInputRepresentation

Input representation for the individual member rating API.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date on which the member's rating is calculated. | Required | 65.0 |
| members | List<InsuranceMemberRating​DetailsInputRepresentation> | Details of the members and their plans to be rated. | Required | 65.0 |

## Related Topics

- InsuranceMemberRating​DetailsInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_member_rating_details.htm)
