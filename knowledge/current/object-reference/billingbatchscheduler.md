---
title: "BillingBatchScheduler"
domain: object-reference
topic: billingbatchscheduler
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.501Z
estimatedTokens: 1684
keywords: [BillingBatchScheduler, scheduled, processing, job, triggers, recurring, invoice, batch, runs, payment, Subscription, Management, API, version, 55.0]
---

# BillingBatchScheduler

> Represents a scheduled processing job that triggers recurring invoice batch
         runs and payment batch runs in Subscription Management. This object is available in
      API version 55.0 and later.

# BillingBatchScheduler

Represents a scheduled processing job that triggers recurring invoice batch runs and payment batch runs in Subscription Management. This object is available in API version 55.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_billingbatchscheduler.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| BillingSchedulerName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the scheduler. |
| Comments | TypetextareaPropertiesFilter, Nillable, SortDescriptionOptional field for comments about the scheduler. |
| CronExpression | TypestringPropertiesFilter, Group, SortDescriptionDetermines how often the scheduler recurs. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the scheduler stops triggering batch processing jobs. |
| FrequencyCadence | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates how often the scheduler triggers the invoice batch run or the payment batch run.Possible values are:Daily—The scheduled job recurs every day.Monthly—The scheduled job recurs every month.Once—The scheduled job occurs one time and doesn’t recur.Weekly—The scheduled job recurs every week. |
| FrequencyOptions | TypetextareaPropertiesNillableDescriptionDerived field that stores the scheduler configuration. |
| JobType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates the type of batch processing job that the scheduler triggers.Possible values are:Invoice—The scheduler starts a batch invoice run.Payment—The scheduler starts a batch payment run. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| NextRunTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and timestamp of the next scheduled batch invoice run or batch payment run are shown in the user's time zone. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who created the scheduler.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecurringSubType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the frequency at which the batch processing job recurs when the FrequencyCadence is set to Monthly.Possible values are:Every—The processing job recurs at every instance of the frequency of the value. For example, if the RecurringSubType is Every and the FrequencyCadence is Weekly, then the batch processing job recurs every week.SpecificDate—The scheduler triggers the batch processing job on the selected date. For example, if the selected date is 5, and the FrequencyCadence is Monthly, then the job recurs on the fifth day of each month. |
| RecurringType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the frequency at which the batch processing job is repeated when the FrequencyCadence is set to Weekly.Possible values are:Every |
| RecursOn | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the interval at which the scheduler triggers a batch processing job.If the FrequencyCadence is Monthly, you must select either the specific date or the interval when the schedule triggers the job.Possible values are:FirstFourthLastSecondThirdExample: To tell the scheduler to trigger the job on the first Monday of the month, set the following fields:FrequencyCadence=MonthlyRecursOn=FirstRecursOnDay= Monday |
| RecursOnDate | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the date on which the scheduler triggers a batch processing job.Example: To tell the scheduler to trigger the job on the fifth day of the month, set the following fields:FrequencyCadence=MonthlyRecursOnDate=5Example: To tell the scheduler to trigger the job on the second to last day of the month, set the following fields:FrequencyCadence=MonthlyRecursOnDate=SecondToLastIf you select Last, SecondToLast, or ThirdToLast, the date of the batch processing job varies depending on the number of days in the month.For example, suppose SecondToLast is selected. If the month has 30 days, such as June, then the batch processing job occurs on the 28th day. If the month has 31 days, such as July, then the batch processing job occurs on the 29th day. |
| RecursOnDay | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the day on which the scheduler triggers a batch processing job.If the FrequencyCadence field is set to Weekly, then you must select the day when the scheduler runs. The scheduler recurs every week on the selected day; for example, weekly on Monday.Possible values are:SundayMondayTuesdayWednesdayThursdayFridaySaturday |
| RunCriteriaId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the filter criteria that’s defined for the invoice batch run or the payment batch run.This field is a polymorphic relationship field.Relationship NameRunCriteriaRelationship TypeLookupRefers ToInvoiceBatchRunCriteria, PaymentBatchRunCriteria |
| StartDate | TypedatePropertiesFilter, Group, SortDescriptionThe date when the scheduler triggers its first batch processing job. |
| StartTime | TypetimePropertiesFilter, SortDescriptionThe time when the scheduler triggers the batch processing job. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the scheduler. Only Active schedulers can trigger batch processing jobs.Possible values are:ActiveCanceledDraftInactive |
| TimeZone | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe time zone is either the value selected when the run was configured, or it's the user's time zone. The time zone is shown in Greenwich Mean Time (GMT). |
