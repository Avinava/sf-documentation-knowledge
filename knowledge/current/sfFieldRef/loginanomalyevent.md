---
title: "LoginAnomalyEvent"
domain: sfFieldRef
topic: loginanomalyevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.981Z
estimatedTokens: 398
keywords: [LoginAnomalyEvent, entity, detects, data, access, anomalies, caused, potentially, malicious, login, actions, API, version, 64.0, later]
---

# LoginAnomalyEvent

> This entity detects data access anomalies that are caused by potentially
         malicious login actions. This object is available in API version 64.0 and later.

# LoginAnomalyEvent

This entity detects data access anomalies that are caused by potentially malicious login actions. This object is available in API version 64.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoginAnomalyEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event ID | string |  | 80 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| FeatureContribution | FeatureContribution | double |  |  | 12 | 6 |
| FeatureName | FeatureName | string |  | 100 |  |  |
| FeatureValue | FeatureValue | double |  |  | 12 | 6 |
| LoginKey | Login Key | string |  | 24 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| Score | Score | double |  |  | 12 | 6 |
| SecurityEventData | SecurityEventData | textarea |  | 131000 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SourceIp | Source IP Address | string |  | 255 |  |  |
| Summary | Summary | textarea |  | 1000 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| Username | Username | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
