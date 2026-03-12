---
title: "DecisionTableSourceCriteria"
domain: omnistudio
topic: decisiontablesourcecriteria
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:54.782Z
estimatedTokens: 554
keywords: [DecisionTableSourceCriteria, Represents, fields, values, data, source, used, define, condition, logic, that's, decision, table., API, version, 59.0, later., Supported, SOAP, Calls]
---

# DecisionTableSourceCriteria

> Represents the fields and values from a data source that are used to
         define the condition logic of the data that's used in a decision table. This object is
      available in API version 59.0 and later.

# DecisionTableSourceCriteria

Represents the fields and values from a data source that are used to define the condition logic of the data that's used in a decision table. This object is available in API version 59.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DecisionTableId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the decision table that’s associated with the source criteria.This field is a relationship field.Relationship NameDecisionTableRelationship TypeLookupRefers ToDecisionTable |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Operator | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe operator that’s applied to an associated decision table’s field to filter the data.Possible values are:Contains—Available in API version 64.0 and later.DoesNotExistInDoesNotMatch—Available in API version 64.0 and later.EqualsExistsInGreaterOrEqualGreaterThanIsNotNullIsNullLessOrEqualLessThanMatchesNotEqualsThe default value is Equals. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sequence number used in the associated decision table's source condition logic. |
| SourceFieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the field that's used in the decision table. |
| Value | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value that’s expected in the source field used in the decision table. |
| ValueType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the value that’s used to filter the source data.Possible values are:FormulaLiteralLookupParameterPicklistThe default value is Literal. |
