---
title: "DataDetectPolicySnapshot"
domain: object-reference
topic: datadetectpolicysnapshot
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.990Z
estimatedTokens: 347
keywords: [DataDetectPolicySnapshot, snapshot, DataDetect, scan, policy, components, retrieved, job, session, API, version, 64.0, later, Calls]
---

# DataDetectPolicySnapshot

> Represents the snapshot of a DataDetect scan policy and its
         components retrieved during a job session. This object is available in API version
      64.0 and later.

# DataDetectPolicySnapshot

Represents the snapshot of a DataDetect scan policy and its components retrieved during a job session. This object is available in API version 64.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(),

## Fields

| Field | Details |
| --- | --- |
| DataDetectPolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the scan policy associated with the scan policy snapshot.This field is a relationship field.Relationship NameDataDetectPolicyRelationship TypeLookupRefers ToDataDetectPolicy |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the scan policy snapshot. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the record owner. This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RevisionNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRevision number of the scan policy snapshot associated with the scan policy. |
| SerializedPolicy | TypetextareaPropertiesNillableDescriptionSensitive data category item associated with the scan policy. |

#### See Also

-   [*Salesforce Help*: Data Detect](https://help.salesforce.com/s/articleView?id=xcloud.einstein_data_detect.htm&type=5&language=en_US)
