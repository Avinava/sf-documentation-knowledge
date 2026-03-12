---
title: "SequenceGapReconciliation"
domain: revenue-cloud
topic: sequencegapreconciliation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.520Z
estimatedTokens: 538
keywords: [SequenceGapReconciliation, Represents, missing, sequence, identified, during, reconciliation, which, used, later, ensure, there, gaps, policy, numbers., API, version, 65.0, later., Supported]
---

# SequenceGapReconciliation

> Represents a missing sequence value identified during reconciliation,
         which can be used later to ensure there are no gaps in the sequence policy numbers.
      This object is available in API version 65.0 and later.

# SequenceGapReconciliation

Represents a missing sequence value identified during reconciliation, which can be used later to ensure there are no gaps in the sequence policy numbers. This object is available in API version 65.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed sequence gap reconciliation record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a sequence gap reconciliation record. If this value is null, it’s possible that the user only accessed the sequence gap reconciliation record or a related list view (LastReferencedDate), but not viewed the sequence gap reconciliation record itself. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the user who owns a sequence gap reconciliation record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SequenceGapReconciliationNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The reconciled sequence pattern value. |
| SequencePolicyId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The parent sequence policy associated with the gap reconciliation. Deleting a sequencing policy automatically removes all its associated criteria.This field is a relationship field.Relationship NameSequencePolicyRefers ToSequencePolicy |
| SequenceValue | TypelongPropertiesFilter, Group, SortDescriptionRequired. The number that was missed during sequence policy generation. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe current status of the missed number.Valid values are:AssignedBlockedUnassignedUnder Review |
