---
title: "Recommendation"
domain: sfFieldRef
topic: recommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.709Z
estimatedTokens: 439
keywords: [Recommendation, recommendations, surfaced, offers, actions, Einstein, Best, Action, API, version, 45.0, later]
---

# Recommendation

> Represents the recommendations surfaced as offers and actions for
         Einstein Next Best Action. This object is available in API version 45.0 and
      later.

# Recommendation

Represents the recommendations surfaced as offers and actions for Einstein Next Best Action. This object is available in API version 45.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Recommendation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_recommendation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AcceptanceLabel | Acceptance Label | string |  | 80 |  |  |
| ActionReference | Action | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| ExternalId | External Id | string |  | 255 |  |  |
| Id | Recommendation ID | id |  | 18 |  |  |
| ImageId | Asset File ID | reference |  | 18 |  |  |
| IsActionActive | Is Action Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 80 |  |  |
| RecommendationKey | RecommendationResponse Identifier | string |  | 255 |  |  |
| RejectionLabel | Rejection Label | string |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
