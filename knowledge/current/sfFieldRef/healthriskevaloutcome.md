---
title: "HealthRiskEvalOutcome"
domain: sfFieldRef
topic: healthriskevaloutcome
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.129Z
estimatedTokens: 492
keywords: [HealthRiskEvalOutcome, outcome, risk, evaluation, probability, disease, occurrence, API, version, 64.0, later]
---

# HealthRiskEvalOutcome

> Represents the outcome of a risk evaluation, such as the probability of
         disease occurrence. This object is available in API version 64.0 and
      later.

# HealthRiskEvalOutcome

Represents the outcome of a risk evaluation, such as the probability of disease occurrence. This object is available in API version 64.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HealthRiskEvalOutcome in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| HealthRiskEvaluationId | Health Risk Evaluation ID | reference |  | 18 |  |  |
| Id | Health Risk Evaluation Outcome ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumRiskProbabilityValue | Maximum Risk Probability Value | double |  |  | 18 | 2 |
| MinimumRiskProbabilityValue | Minimum Risk Probability Value | double |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| RiskCodeSetValueId | Risk Code Set Value ID | reference |  | 18 |  |  |
| RiskEndDateTime | Risk End Date | datetime |  |  |  |  |
| RiskNumericValue | Risk Numeric Value | double |  |  | 18 | 1 |
| RiskOutcomeCodeId | Risk Outcome Code ID | reference |  | 18 |  |  |
| RiskRangeMaximumValue | Risk Range Maximum Value | double |  |  | 18 | 2 |
| RiskRangeMinimumValue | Risk Range Minimum Value | double |  |  | 18 | 2 |
| RiskRangeUomId | Risk Range Unit of Measure ID | reference |  | 18 |  |  |
| RiskStartDateTime | Risk Start Date | datetime |  |  |  |  |
| RiskValueType | Risk Value Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
