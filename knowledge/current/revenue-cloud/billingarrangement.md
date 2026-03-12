---
title: "BillingArrangement"
domain: revenue-cloud
topic: billingarrangement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.920Z
estimatedTokens: 535
keywords: [BillingArrangement, arrangement, invoicing, transaction’s, billing, amount, accounts, whether, total, invoiced, owning, account, different, invoices, split]
---

# BillingArrangement

> Represents the arrangement for invoicing a transaction’s billing amount to
         one or more accounts. The arrangement specifies whether the total amount must be invoiced
         to the owning account or a different billing account, or whether the invoices must be split
         among multiple billing accounts. This object is available in API version 66.0 and
      later.

# BillingArrangement

Represents the arrangement for invoicing a transaction’s billing amount to one or more accounts. The arrangement specifies whether the total amount must be invoiced to the owning account or a different billing account, or whether the invoices must be split among multiple billing accounts. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the billing arrangement record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the billing arrangement record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. A user-defined name for the billing arrangement. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the billing arrangement record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RemainderBillingPercentage | TypedoublePropertiesFilter, SortDescriptionRequired. The percentage of the billing amount that isn’t assigned to any of the billing accounts. |
| ShouldBillRemainderToAccount | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to bill the remainder billing percentage to the owning account (true) or not (false). |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the status of the billing arrangement.Valid values are:ActiveDraftInactive |
| VersionNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionA numerical value indicating the current version of the billing arrangement record. The version number increases when new billing arrangement line records are added or existing billing arrangement line records are updated. |
