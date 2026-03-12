---
title: "UsageCommitmentPolicy"
domain: revenue-cloud
topic: usagecommitmentpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.643Z
estimatedTokens: 317
keywords: [UsageCommitmentPolicy, rules, determines, how, commitments, applied, usage, resource, API, version, later, Calls, Special, Access]
---

# UsageCommitmentPolicy

> Represents the set of rules that determines how commitments are
         applied to a usage resource. This object is available in API version 65 and
      later.

# UsageCommitmentPolicy

Represents the set of rules that determines how commitments are applied to a usage resource. This object is available in API version 65 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| CommitmentRate | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe rate that’s applicable to the usage resource’s units consumed post the commitment is utilized, but the commitment period is still active.Valid values are:Bounded Object RateLowest Commitment RateThe default value is Lowest Commitment Rate. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the current user last viewed or modified this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the current user last viewed or modified this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the usage commitment policy. |
