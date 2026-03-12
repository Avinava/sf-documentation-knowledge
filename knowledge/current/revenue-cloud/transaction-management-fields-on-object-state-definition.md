---
title: "Transaction Management Fields on Object State Definition"
domain: revenue-cloud
topic: transaction-management-fields-on-object-state-definition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.136Z
estimatedTokens: 177
keywords: [Transaction, Management, Fields, State, Definition, Standard, custom, fields, extend, standard, represent, state, model, particular, status, field, entity., API, version, 60.0]
---

# Transaction Management Fields on Object State Definition

> Standard and custom fields extend the standard Object State Definition object
         for use in Transaction Management to represent the object state model for a particular
         status field for an entity.  This object is available in API version 60.0 and later.

# Transaction Management Fields on Object State Definition

Standard and custom fields extend the standard Object State Definition object for use in Transaction Management to represent the object state model for a particular status field for an entity. This object is available in API version 60.0 and later.

## Fields

| Field | Details |
| --- | --- |
| AppUsageType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field indicates under which AppUsageType the transition applies to. For example, ObjectStateDefinition associated with “Revenue Lifecycle Management” AppUsageType will apply to quotes, assets, or orders associated with “Revenue Lifecycle Management”. |
