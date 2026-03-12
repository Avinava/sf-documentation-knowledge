---
title: "DecisionTblDatasetParameter"
domain: omnistudio
topic: decisiontbldatasetparameter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.140Z
estimatedTokens: 472
keywords: [DecisionTblDatasetParameter, mapping, decision, selected, dataset, link, know, evaluated, input, API, version, 51.0, later, SOAP, Calls]
---

# DecisionTblDatasetParameter

> Represents the mapping between a decision table parameter and a field of the
      object selected in the dataset link. This mapping allows the decision table to know which
      object fields from the dataset link must be evaluated by the input fields of the decision
      table. This object is available in API version 51.0 and later.

# DecisionTblDatasetParameter

Represents the mapping between a decision table parameter and a field of the object selected in the dataset link. This mapping allows the decision table to know which object fields from the dataset link must be evaluated by the input fields of the decision table. This object is available in API version 51.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DatasetFieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The name of the field whose value must be compared against an input type decision table parameter when providing the outcome. |
| DatasetSourceObject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe object whose field values are evaluated by the associated decision table to provide outcomes. |
| DecisionTableDatasetLinkId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique identifier of the associated decision table dataset link.This is a relationship field.Relationship NameDecisionTableDatasetLinkRelationship TypeLookupRefers ToDecisionTableDatasetLink |
| DecisionTableParameterId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique identifier of the associated decision table parameter.This is a relationship field.Relationship NameDecisionTableParameterRelationship TypeLookupRefers ToDecisionTableParameter |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
