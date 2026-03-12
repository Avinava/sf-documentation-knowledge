---
title: "ContextMappingConfig"
domain: financial-services-cloud-object-reference
topic: contextmappingconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.856Z
estimatedTokens: 311
keywords: [ContextMappingConfig, context, mapping, configurations, business, process, API, version, 65.0, later, Calls]
---

# ContextMappingConfig

> Represents the context mapping configurations for business process
         types. This object is available in API version 65.0 and later.

# ContextMappingConfig

Represents the context mapping configurations for business process types. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContextDefinition | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe context definition that's associated with the context mapping configuration.Possible values are:ClaimContext__stdctx |
| ContextMapping | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe context mapping that's associated with the context mapping configuration.Possible values are:ClaimMapping |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the claim context mapping is active (true) or not (false) in relation to the associated Context Mapping Configuration record.The default value is false. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type that's associated with the context mapping configuration.Possible values are:Claim |
