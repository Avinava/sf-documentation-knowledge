---
title: "ProcedurePlanSection"
domain: revenue-cloud
topic: procedureplansection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:11.913Z
estimatedTokens: 594
keywords: [ProcedurePlanSection, Represents, various, procedure, setup, sections, plan, definition., section, enables, further, determined, rule-based, criteria, set, based, selected, lookup, table., API]
---

# ProcedurePlanSection

> Represents various procedure setup sections for a procedure plan
         definition. Each section enables the setup of a procedure of a type that can be further
         determined by using a rule-based criteria or it can be set based on a selected lookup
         table. This object is available in API version 62.0 and later.

# ProcedurePlanSection

Represents various procedure setup sections for a procedure plan definition. Each section enables the setup of a procedure of a type that can be further determined by using a rule-based criteria or it can be set based on a selected lookup table. This object is available in API version 62.0 and later.

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
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the procedure plan section. |
| IsInherited | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates if the section is inherited from a template (true) ot not (false).The default value is false. |
| Phase | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe phase associated with the procedure plan section record. |
| ProcedurePlanVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe procedure plan version associated with this procedure plan section record.This field is a relationship field.Relationship NameProcedurePlanVersionRelationship TypeMaster-detailRefers ToProcedurePlanDefinitionVersion (the master object) |
| ResolutionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of resolution used to filter the procedure.Valid values are:DefaultRuleBased |
| SectionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of procedure section.Valid values are:CustomPricingDiscoveryProcedurePricingProcedureProductDiscoveryProcedure |
| Sequence | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sequence in which the procedures are processed. |
| SubSectionType | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe procedure subsection added to the procedure plan definition. |
