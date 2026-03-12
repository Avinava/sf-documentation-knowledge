---
title: "VCS Synch State (sf_devops__Vcs_Synch_State__c)"
domain: devops-center-dev
topic: vcs-synch-state-sfdevopsvcssynchstatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.556Z
estimatedTokens: 348
keywords: [VCS, Synch, State, sf_devops__Vcs_Synch_State__c, synchronization, DevOps, Center, source, version, control, system, uses, track, events, ensure]
---

# VCS Synch State (sf_devops__Vcs_Synch_State__c)

> Represents the synchronization state between DevOps Center and the
         source (version) control system. DevOps Center uses this object to track all
         synchronization events to ensure that DevOps Center is working with the latest version of
         the code in the source control repository. This object is available in all orgs that
      have DevOps Center package version 8.2 and later. Available in API version 62.0 and
      later.

# VCS Synch State (sf\_devops\_\_Vcs\_Synch\_State\_\_c)

Represents the synchronization state between DevOps Center and the source (version) control system. DevOps Center uses this object to track all synchronization events to ensure that DevOps Center is working with the latest version of the code in the source control repository. This object is available in all orgs that have DevOps Center package version 8.2 and later. Available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the synchronization state. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionNot used by DevOps Center.Relationship NameOwnerRefers ToGroup, User |
| sf_devops__Project__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to a DevOps Center project that this state belongs to.This field is a relationship field.Relationship Namesf_devops__Project__rRefers Tosf_devops__Project__c |
| sf_devops__Synch_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the sychronization state used for logging. |
