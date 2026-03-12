---
title: "CnfgMgmtDiscoveryTgtCrdl"
domain: agentforce
topic: cnfgmgmtdiscoverytgtcrdl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.412Z
estimatedTokens: 400
keywords: [CnfgMgmtDiscoveryTgtCrdl, Represents, credentials, associated, specific, discovery, target., Credentials, used, authenticate, execute, commands, during, scan., API, version, 65.0, later., Supported, Calls]
---

# CnfgMgmtDiscoveryTgtCrdl

> Represents the credentials associated with a specific discovery target.
         Credentials are used to authenticate and execute commands during the scan. This object
      is available in API version 65.0 and later.

# CnfgMgmtDiscoveryTgtCrdl

Represents the credentials associated with a specific discovery target. Credentials are used to authenticate and execute commands during the scan. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CnfgMgmtCredentialId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the credential used to authenticate against the associated discovery target.This field is a relationship field.Relationship NameCnfgMgmtCredentialRefers ToCnfgMgmtCredential |
| CnfgMgmtDiscoveryTargetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the discovery target associated with this credential.This field is a relationship field.Relationship NameCnfgMgmtDiscoveryTargetRelationship TypeMaster-detailRefers ToCnfgMgmtDiscoveryTarget (the master object) |
| CredentialSequence | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sequence in which the credentials are applied while running discovery on discovery app. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionSpecifies the date an object was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionSpecifies the date an object was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the discovery target credential. |
