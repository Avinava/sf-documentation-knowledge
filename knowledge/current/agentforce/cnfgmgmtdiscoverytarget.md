---
title: "CnfgMgmtDiscoveryTarget"
domain: agentforce
topic: cnfgmgmtdiscoverytarget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:16.070Z
estimatedTokens: 748
keywords: [CnfgMgmtDiscoveryTarget, definition, logical, grouping, endpoints, environments, scanned, infrastructure, asset, discovery, New, York, datacenter, Washington, office]
---

# CnfgMgmtDiscoveryTarget

> Represents the definition of a logical grouping of endpoints or environments
         to be scanned during IT infrastructure or asset discovery. For example, New York
         datacenter, Washington office ground floor, or AWS Staging. This object is available
      in API version 65.0 and later.

# CnfgMgmtDiscoveryTarget

Represents the definition of a logical grouping of endpoints or environments to be scanned during IT infrastructure or asset discovery. For example, New York datacenter, Washington office ground floor, or AWS Staging. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name for the discovery target. |
| CnfgMgmtDiscoveryAppId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference to the discovery application used to run scans on the target.This field is a relationship field.Relationship NameCnfgMgmtDiscoveryAppRefers ToCnfgMgmtDiscoveryApp |
| CnfgMgmtDiscoveryProbeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the probe type or category associated with the target.This field is a relationship field.Relationship NameCnfgMgmtDiscoveryProbeRefers ToCnfgMgmtDiscoveryProbe |
| CnfgMgmtDiscoverySchdId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference to the schedule that determines when scans run for the target.This field is a relationship field.Relationship NameCnfgMgmtDiscoverySchdRefers ToCnfgMgmtDiscoverySchd |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the discovery target. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the target is active and eligible for scans (true) or not (false).The default value is false. |
| IsScheduled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the target is linked to a scheduled scan (true) or not (false).The default value is false. |
| Label | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the discovery target. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionSpecifies the date an object was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionSpecifies the date an object was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the discovery target. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRefers to a unique identifier that designates the user.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| TargetLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the identifier for the target location of an operation.This field is a relationship field.Relationship NameTargetLocationRefers ToLocation |
