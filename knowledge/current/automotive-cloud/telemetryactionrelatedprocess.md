---
title: "TelemetryActionRelatedProcess"
domain: automotive-cloud
topic: telemetryactionrelatedprocess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.563Z
estimatedTokens: 264
keywords: [TelemetryActionRelatedProcess, relationship, telemetry, action, process, triggered, service, catalog, item, definition, product, API, version, 65.0, later]
---

# TelemetryActionRelatedProcess

> Represents the relationship between a telemetry action and a process
         triggered by the action such as a service catalog item definition or a product. This
      object is available in API version 65.0 and later.

# TelemetryActionRelatedProcess

Represents the relationship between a telemetry action and a process triggered by the action such as a service catalog item definition or a product. This object is available in API version 65.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the telemetry action related process. |
| RelatedProcessId | TypereferencePropertiesFilter, Group, SortDescriptionThe process triggered by the action defined for a telemetry definition.This field is a polymorphic relationship field.Relationship NameRelatedProcessRefers ToProduct2, SvcCatalogItemDef |
| TelemetryActionDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe action related to a telemetry definition.This field is a relationship field.Relationship NameTelemetryActionDefinitionRefers ToTelemetryActionDefinition |
