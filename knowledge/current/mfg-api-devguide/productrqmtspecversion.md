---
title: "ProductRqmtSpecVersion"
domain: mfg-api-devguide
topic: productrqmtspecversion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.047Z
estimatedTokens: 620
keywords: [ProductRqmtSpecVersion, specific, numbered, snapshot, Requirement, Specification, particular, time, outlining, purpose, scope, constraints, validation, Calls]
---

# ProductRqmtSpecVersion

> Represents a specific, numbered snapshot of a Requirement Specification at a
      particular time, outlining the purpose, scope, constraints, and validation
    methods.

# ProductRqmtSpecVersion

Represents a specific, numbered snapshot of a Requirement Specification at a particular time, outlining the purpose, scope, constraints, and validation methods.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ProductRqmtSpec | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe parent requirement specification that this version belongs to. |
| Version | TypeIntPropertiesFilter, Group, Nillable, SortDescriptionThe version number of a specific requirement specification. |
| Purpose | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe key business reason behind the requirement request. |
| IntendedUse | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe business or functional goals the product is expected to fulfill. |
| Scope | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe defined boundaries, objectives, and context of the requirement or project. |
| Assumptions | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe conditions assumed to be true during the design or planning phase. |
| Constraints | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe limitations such as time, cost, regulatory, or technical constraints that apply. |
| VerificationMethod | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe method used to validate that the requirement has been met |
| RefProduct | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe standard product used as a reference or benchmark. |
| RefProductCategory | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product category of the referenced product. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this requirement specification is considered valid. |
| ExpiryDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe date after which this requirement specification is considered obsolete or expired. |
| ContentDocument | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe documents attached to support or provide context for the requirement. |
| AdditionalInfo | TypetextPropertiesFilter, Group, Nillable, SortDescriptionAny extra details, notes, or instructions for this specific version. |
