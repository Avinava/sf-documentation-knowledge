---
title: "blng__AgingBuckets__c"
domain: blng-dev
topic: blngagingbucketsc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.225Z
estimatedTokens: 670
keywords: [blng__AgingBuckets__c, outstanding, invoices, sorted, various, aging, periods, blng, _AgingBuckets, Calls]
---

# blng__AgingBuckets__c

> Represents the outstanding invoices sorted into various aging
      periods.

# blng\_\_AgingBuckets\_\_c

Represents the outstanding invoices sorted into various aging periods.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the aging buckets when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the aging buckets. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed an aging bucket record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed an aging bucket record. If this value is null, it’s possible that the user only accessed the aging bucket record or a related list view (LastReferencedDate), but not viewed the aging bucket record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the aging bucket. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the aging bucket is active (true) or not (false). To deactivate the GL treatment, clear the Active checkbox. This setting won't affect past or existing transactions or assignments.The default value is false. |
| blng__BucketNumber__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. Classifies the records based on their age. |
| blng__EndingDaysfromPastDue__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of days from the past due date to the end of an aging bucket. |
| blng__Notes__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional details or comments related to the aging buckets. |
| blng__StartingDaysfromPastDue__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe starting point for calculating the number of days an invoice is past due. |
