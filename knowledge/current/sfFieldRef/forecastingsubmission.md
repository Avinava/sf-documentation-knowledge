---
title: "ForecastingSubmission"
domain: sfFieldRef
topic: forecastingsubmission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.592Z
estimatedTokens: 413
keywords: [ForecastingSubmission, submitted, forecast, API, version, 62.0, later]
---

# ForecastingSubmission

> Represents a submitted forecast. This object is available in API version
      62.0 and later.

# ForecastingSubmission

Represents a submitted forecast. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingSubmission](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastingsubmission.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ForecastOwnerId | User ID | reference |  | 18 |  |  |
| ForecastingGroupItemId | Forecasting Group Item ID | reference |  | 18 |  |  |
| ForecastingTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| Id | Forecasting Submission ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLatest | Is Latest | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Forecasting Submission | string |  | 255 |  |  |
| Note | Note | textarea |  | 1000 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| PeriodStartDate | Period Start Date | date |  |  |  |  |
| ProductFamily | Product Family | picklist |  | 40 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SubmissionDateTime | Submission Date Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
