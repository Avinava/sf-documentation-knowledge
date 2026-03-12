---
title: "BillingBatchScheduler"
domain: sfFieldRef
topic: billingbatchscheduler
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.896Z
estimatedTokens: 610
keywords: [BillingBatchScheduler, scheduled, processing, job, triggers, recurring, invoice, batch, runs, payment, Subscription, Management, API, version, 55.0]
---

# BillingBatchScheduler

> Represents a scheduled processing job that triggers recurring invoice batch
         runs and payment batch runs in Subscription Management. This object is available in
      API version 55.0 and later.

# BillingBatchScheduler

Represents a scheduled processing job that triggers recurring invoice batch runs and payment batch runs in Subscription Management. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [BillingBatchScheduler](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_billingbatchscheduler.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingSchedulerName | Billing Scheduler Name | string |  | 255 |  |  |
| Comments | Comments | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CronExpression | Cron Expression | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| FrequencyCadence | Frequency | picklist |  | 255 |  |  |
| FrequencyOptions | Recurrence | textarea |  | 2000 |  |  |
| Id | Billing Scheduler ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| JobType | Job Type | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| NextRunTime | Next Run | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RecurringSubType | Recurring subtype | picklist |  | 255 |  |  |
| RecurringType | Recurring type | picklist |  | 255 |  |  |
| RecursOn | Recurs on | picklist |  | 255 |  |  |
| RecursOnDate | Recurs on date | string |  | 3 |  |  |
| RecursOnDay | Recurs on day | picklist |  | 255 |  |  |
| RunCriteriaId | Run Criteria ID | reference |  | 18 |  |  |
| ShouldExcludeWkendAndHldy | Bypass weekend | boolean |  |  |  |  |
| ShouldStartRunImmediately | Start Run Immediately | boolean |  |  |  |  |
| StartDate | Start Date | date |  |  |  |  |
| StartTime | Start Time | time |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeZone | Time Zone | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
