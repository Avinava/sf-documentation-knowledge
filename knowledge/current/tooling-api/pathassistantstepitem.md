---
title: "PathAssistantStepItem"
domain: tooling-api
topic: pathassistantstepitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.480Z
estimatedTokens: 254
keywords: [PathAssistantStepItem, layout, guidance, step, Path, Tooling, API, version, 36.0, later, SOAP, Calls, REST, HTTP]
---

# PathAssistantStepItem

> Represents layout or guidance details for a step on a Path.
        Available in Tooling API version
        36.0 and later.

# PathAssistantStepItem

Represents layout or guidance details for a step on a Path. Available in Tooling API version 36.0 and later.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| IsDeleted | TypebooleanPropertiesSortDescriptionIndicates whether the record has been moved to the Recycle Bin (true) or not (false). |
| ItemId | TypeIDPropertiesFilter, Group, SortDescriptionA foreign key field pointing to the Type field that represents either the layout (if Type is set to Layout) or the PathAssistantStepInfo (if Type is set to Information) of this guidance detail. |
| PathAssistantId | TypeIDPropertiesFilter, Group, SortDescriptionID of the PathAssistant related to this step. |
| RecordTypeId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionID of the record type associated with this path. |
| Type | TypestringPropertiesFilter, Group, SortDescriptionThe type of data that ItemId refers to.Valid values are:InformationLayout |
