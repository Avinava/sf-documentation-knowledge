---
title: "AIUsecaseDefinition"
domain: sfFieldRef
topic: aiusecasedefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.775Z
estimatedTokens: 529
namespace: NamespacePrefix
keywords: [AIUsecaseDefinition, collection, case, real-time, predictions, made]
---

# AIUsecaseDefinition

> Represents a collection of fields to set up the use case for which
         real-time predictions are to be made.

**Namespace:** `NamespacePrefix`

# AIUsecaseDefinition

Represents a collection of fields to set up the use case for which real-time predictions are to be made.

For more information, see AIUsecaseDefinition in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreatorType | Creator Type | picklist |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | AI Usecase Definition ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| MaximumInsightCount | Maximum Insight Count | int | 9 |  |  |  |
| MaximumRecommendationCount | Maximum Recommendation Count | int | 9 |  |  |  |
| MaximumSuggestionCount | Maximum Recommendation Count | int | 9 |  |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| PrimaryResponseObject | Primary Response Object | picklist |  | 255 |  |  |
| RecommendationResponseObject | Recommendation Response Object | picklist |  | 255 |  |  |
| RecommendationSource | Recommendation Source | picklist |  | 255 |  |  |
| SecondaryResponseObject | Secondary Response Object | picklist |  | 255 |  |  |
| ShouldSaveFeatures | Save Features | boolean |  |  |  |  |
| ShouldSaveInsights | Save Insights | boolean |  |  |  |  |
| ShouldSaveRecommendation | Save Recommendation | boolean |  |  |  |  |
| ShouldSaveRequestResponse | Save Request Response | boolean |  |  |  |  |
| ShouldSaveScore | Save Score | boolean |  |  |  |  |
| ShouldSaveSuggestions | Save Suggestions | boolean |  |  |  |  |
| SuggestionImpactMinimumPct | Suggestion Impact Minimum Pct | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsecaseName | Use Case Name | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
