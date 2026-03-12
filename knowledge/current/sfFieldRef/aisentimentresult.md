---
title: "AISentimentResult"
domain: sfFieldRef
topic: aisentimentresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.761Z
estimatedTokens: 475
keywords: [AISentimentResult, outcome, sentiment, analysis, performed, text, Salesforce, third-party, service, provider]
---

# AISentimentResult

> Represents the outcome of the sentiment analysis performed on a text
         field of a Salesforce object by a third-party service provider.

# AISentimentResult

Represents the outcome of the sentiment analysis performed on a text field of a Salesforce object by a third-party service provider.

For more information, see AISentimentResult in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Sentiment Analysis Result ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MixedConfidenceScore | Mixed Confidence Score | double |  |  | 18 | 5 |
| Name | Name | string |  | 255 |  |  |
| NegativeConfidenceScore | Negative Confidence Score | double |  |  | 18 | 5 |
| NeutralConfidenceScore | Neutral Confidence Score | double |  |  | 18 | 5 |
| OverallSentimentScore | Overall Sentiment Score | double |  |  | 18 | 5 |
| OverallSentimentType | Overall Sentiment Type | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PositiveConfidenceScore | Positive Confidence Score | double |  |  | 18 | 5 |
| Response | Response | textarea |  | 131072 |  |  |
| ServiceType | Service Type | picklist |  | 255 |  |  |
| SourceObjectId | Source Object ID | reference |  | 18 |  |  |
| SourceObjectType | Source Object Type | picklist |  | 255 |  |  |
| SourceTextField | Source Text Field | picklist |  | 255 |  |  |
| SourceTextLanguage | Source Text Language | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
