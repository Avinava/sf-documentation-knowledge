---
title: "UsageOveragePolicy"
domain: revenue-cloud
topic: usageoveragepolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.696Z
estimatedTokens: 276
keywords: [UsageOveragePolicy, rules, determine, management, usage, resource’s, units, consumed, beyond, granted, limit, API, version, later, Calls]
---

# UsageOveragePolicy

> Represents the set of rules that determine the management of usage resource’s
         units consumed beyond the granted limit. This object is available in API version 65
      and later.

# UsageOveragePolicy

Represents the set of rules that determine the management of usage resource’s units consumed beyond the granted limit. This object is available in API version 65 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the current user last viewed or modified this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the current user last viewed or modified this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the usage overage policy. |
| OverageChargeable | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the overconsumption beyond the granted quantity is to be charged.Valid values are:NoYes |
