---
title: "ProcedurePlanCriterion"
domain: revenue-cloud
topic: procedureplancriterion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.033Z
estimatedTokens: 411
keywords: [ProcedurePlanCriterion, procedure, plan, option, associated, criterion, record, API, version, 67.0, later, Calls, 62.0, SOAP, REST]
---

# ProcedurePlanCriterion

> Represents a criterion within a procedure plan option record.
      This object is available in API version 62.0 and later.

# ProcedurePlanCriterion

Represents a criterion within a procedure plan option record. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ActualValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user-defined value that’s compared to the value of the sObject field value. |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe data type of the field from the selected object. |
| FieldPath | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe path of the field used in a procedure in relation to the object that the field belongs to. |
| ObjectField | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Salesforce object field value used to resolve the procedure plan option. |
| Operator | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe operator used by the procedure plan criterion.Valid values are:EqualsGreaterThanGreaterThanOrEqualsInIsNotNullIsNullLessThanLessThanOrEqualsNotEqualsNotIn |
| ProcedurePlanOptionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe procedure plan option associated with the procedure plan criterion record.This field is a relationship field.Relationship NameProcedurePlanOptionRelationship TypeMaster-detailRefers ToProcedurePlanOption (the master object) |
| Sequence | TypeintPropertiesCreate, Filter, Group, SortDescriptionThe sequence in which the conditions defined in the procedure plan criteria are processed. |
