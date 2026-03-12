---
title: "FlowTestView"
domain: object-reference
topic: flowtestview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.511Z
estimatedTokens: 265
keywords: [FlowTestView, flow, test, associated, definition, API, version, 55.0, later, Calls]
---

# FlowTestView

> Represents the description of a flow test associated with a flow
         definition. This object is available in API version 55.0 and later.

# FlowTestView

Represents the description of a flow test associated with a flow definition. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesNillableDescriptionThe description of the flow test associated with the flow test view. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the flow test associated with this flow test view. |
| FlowDefinitionViewId | TypestringPropertiesFilter, Nillable, SortDescriptionThe ID of the flow definition associated with the flow test view.This is a relationship field.Relationship NameFlowDefinitionViewRelationship TypeLookupRefers ToFlowDefinitionView |
| FlowTestApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the flow test associated with the flow test view. |
| FlowTestLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label of the flow test associated with the flow test view. |
