---
title: "Benefit"
domain: edu-cloud-dev-guide
topic: benefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.955Z
estimatedTokens: 270
keywords: [Benefit, benefits, associated, program, API, version, 57.0, later, Calls]
---

# Benefit

> Represents information about benefits associated with a program. This
      object is available in API version 57.0 and later.

# Benefit

Represents information about benefits associated with a program. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CanRegisterAsProvider | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a user can self-register as a provider of the benefit (true) or not (false) on an Experience Cloud site.The default value is false. |
| OmniProcessId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Omni Process associated with the Benefit.This field is a relationship field.Relationship NameOmniProcessRelationship TypeLookupRefers ToOmniProcess |

For more information, see [Benefit in Nonprofit Cloud](https://developer.salesforce.com/docs/atlas.en-us.246.0.nonprofit_cloud.meta/nonprofit_cloud/npc_pm_objects_benefit_standard_fields.htm "HTML (New Window)").
