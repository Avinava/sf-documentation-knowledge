---
title: "ProductRqmtSpec"
domain: mfg-api-devguide
topic: productrqmtspec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.033Z
estimatedTokens: 387
keywords: [ProductRqmtSpec, requirements, captures, key, associated, Account, Contact, tracks, overall, lifecycle, status, acts, parent, requirement, items]
---

# ProductRqmtSpec

> Defines a complete set of requirements. It captures key information such as the
      associated Account and Contact, tracks its overall lifecycle status, and acts as the parent
      for all related requirement items and their versions.

# ProductRqmtSpec

Defines a complete set of requirements. It captures key information such as the associated Account and Contact, tracks its overall lifecycle status, and acts as the parent for all related requirement items and their versions.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypetextPropertiesFilter, Group, Nillable, SortDescriptionA unique identifier for the requirement specification. |
| Account | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe customer account associated with this requirement. |
| Contact | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe primary contact person at the associated customer account. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe lifecycle state of the requirement. |
| Origin | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe source or stakeholder that initiated the requirement. |
| Priority | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe priority of the requirement for successful delivery. |
| Stage | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe current stage of the requirement specification workflow based on user-defined statuses. |
| LatestVersion | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe current active version of the requirement specification. |
