---
title: "VCS (sf_devops__Vcs__c)"
domain: devops-center-dev
topic: vcs-sfdevopsvcsc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.552Z
estimatedTokens: 402
keywords: [VCS, sf_devops__Vcs__c, source, version, control, system, orgs, DevOps, Center, package, 8.2, later, API, 62.0, _devops]
---

# VCS (sf_devops__Vcs__c)

> Represents a supported source (version) control system. This
      object is available in all orgs that have DevOps Center package version 8.2 and later.
      Available in API version 62.0 and later.

# VCS (sf\_devops\_\_Vcs\_\_c)

Represents a supported source (version) control system. This object is available in all orgs that have DevOps Center package version 8.2 and later. Available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionNot used by DevOps Center. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionNot used by DevOps Center. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the source control system. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionNot used by DevOps Center.Relationship NameOwnerRefers ToGroup, User |
| sf_devops__Base_URL__c | TypeurlPropertiesCreate, Filter, Group, Sort, UpdateDescriptionBase URL for the source control system, for example, https://github.com. |
| sf_devops__Named_Credential__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer (API) name of the named credential used to access this source control system. |
| sf_devops__Service_Provider__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the provider for this source control system. This field must reference an existing developer (API) name for a Service Provider CMT that implements the Vcs Provider interface. |
