---
title: "EmbeddedServiceLabel"
domain: object-reference
topic: embeddedservicelabel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:08.503Z
estimatedTokens: 236
keywords: [EmbeddedServiceLabel, customized, label, Embedded, Chat, Appointment, Management.This, API, version, 44.0, later, SOAP, Calls, REST, HTTP]
---

# EmbeddedServiceLabel

> Represents a customized label in Embedded Chat or embedded
         Appointment Management.This object is available in API version 44.0 and
      later.

# EmbeddedServiceLabel

Represents a customized label in Embedded Chat or embedded Appointment Management.This object is available in API version 44.0 and later.

## Supported SOAP Calls

describeSObjects(), query()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| CustomLabelName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe developer name for the custom label. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name containing EmbeddedServiceConfig.labelKey. |
| EmbeddedServiceConfigDeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDeveloper name for the EmbeddedServiceConfig. |
| LabelKey | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of label for this embedded component. The value corresponds to the label within a label group (substate of chat state or page type). |
