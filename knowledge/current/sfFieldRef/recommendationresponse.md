---
title: "RecommendationResponse"
domain: sfFieldRef
topic: recommendationresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.716Z
estimatedTokens: 505
keywords: [RecommendationResponse, user, responses, presented, offer, recommendation, Einstein, Best, Action, API, version, 51.0, later]
---

# RecommendationResponse

> Represents the user responses to a presented offer or recommendation
         for Einstein Next Best Action. This object is available in API
         version
         51.0 and later.

# RecommendationResponse

Represents the user responses to a presented offer or recommendation for Einstein Next Best Action. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RecommendationResponse](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_recommendationresponse.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionReference | Action Name at Time of Response | string |  | 255 |  |  |
| ContextRecord | Context Record ID | string |  | 15 |  |  |
| ContextRecordName | Context Record Name at Time of Response | string |  | 255 |  |  |
| ContextRecordType | Context Object | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Recommendation Response ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OnBehalfOf | On Behalf of ID | string |  | 15 |  |  |
| OnBehalfOfName | On Behalf of Name at Time of Response | string |  | 255 |  |  |
| OnBehalfOfType | On Behalf of Object | string |  | 255 |  |  |
| RecommendationKey | Recommendation Key | string |  | 255 |  |  |
| RecommendationName | Recommendation Name at Time of Response | string |  | 255 |  |  |
| RecommendationType | Recommendation Object | string |  | 255 |  |  |
| Response | Response | picklist |  | 255 |  |  |
| StrategyReference | Strategy Name at Time of Response | string |  | 255 |  |  |
| StrategyVersion | Strategy Version at Time of Response | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
