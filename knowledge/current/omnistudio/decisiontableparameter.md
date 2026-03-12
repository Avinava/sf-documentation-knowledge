---
title: "DecisionTableParameter"
domain: omnistudio
topic: decisiontableparameter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:54.775Z
estimatedTokens: 925
keywords: [DecisionTableParameter, Represents, input, output, field, decision, table., business, rule, custom, metadata, contains, values, used, table, evaluate, records, values., provided, outcomes]
---

# DecisionTableParameter

> Represents an input or output field in a decision table. An input
      field is a field in the business rule object or custom metadata type that contains values used
      by the decision table to evaluate records and values. An output field is a field in the
      business rule object or custom metadata type that contains the values provided as outcomes for
      a rule. This object is available in API version 51.0 and later.

# DecisionTableParameter

Represents an input or output field in a decision table. An input field is a field in the business rule object or custom metadata type that contains values used by the decision table to evaluate records and values. An output field is a field in the business rule object or custom metadata type that contains the values provided as outcomes for a rule. This object is available in API version 51.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DecisionTableId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique identifier of the associated decision table.This is a relationship field.Relationship NameDecisionTableRelationship TypeLookupRefers ToDecisionTable |
| DomainObject | TypestringPropertiesCreate, Filter, Group, SortDescriptionFor polymorhpic fields, indicates the domain object in the field hierarchy.This field is available in API version 59.0 and later. |
| FieldName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the field that’s selected as an input or output for the decision table. |
| FieldPath | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe path of the field used in a decision table in relation to the object that the field belongs to.This field is available in API version 59.0 and later. |
| IsGroupByField | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an input field is used to group the business rules of the decision table (true) or not (false).The default value is false'.This field is available in API version 55.0 and later. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a field is required to have input values when a look up is performed on the decision table (true) or not (false).The default value is false'.This field is available in API version 59.0 and later. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| Operator | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe operator used for the input field.Possible values are:ContainsDoesNotExistsInDoesNotMatchEqualsExistsInGreaterOrEqualGreaterThanIsNotNullIsNullLessOrEqualLessThanMatchesNotEquals |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence in which input fields are processed. |
| SortType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSort outputs of a decision table based on the values of the input or output parameter field. This field is available in API version 56.0 and later.Possible values are:AscNullFirstAscNullLastDescNullFirstDescNullLastNoneThe default value is None. Outputs can’t be sorted based on picklist and multi-select picklist fields. |
| Usage | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The usage type of a field.Possible values are:INPUTOUTPUTROWCRITERIA |
