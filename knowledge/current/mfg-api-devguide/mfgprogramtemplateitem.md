---
title: "MfgProgramTemplateItem"
domain: mfg-api-devguide
topic: mfgprogramtemplateitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.844Z
estimatedTokens: 566
keywords: [MfgProgramTemplateItem, transformation, associated, manufacturing, program, template, API, version, 55.0, later, Calls]
---

# MfgProgramTemplateItem

> Represents information about the transformation type associated with a
         manufacturing program template. This object is available in API version 55.0 and
      later.

# MfgProgramTemplateItem

Represents information about the transformation type associated with a manufacturing program template. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdvAccountForecastSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe forecast set associated with the transformation.This is a relationship field.Relationship NameAdvAccountForecastSetRelationship TypeLookupRefers ToAdvAccountForecastSet |
| ContextDefinition | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context definition that defines how data is mapped and transformed to the target object, such as an opportunity or account. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the manufacturing program template item. |
| MfgProgramTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe manufacturing program template associated with the template item.This is a relationship field.Relationship NameMfgProgramTemplateRelationship TypeLookupRefers ToMfgProgramTemplate |
| SourceContextMappingName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context mapping that defines how data is mapped from a list of facts(Input Data) to create structured information. |
| TargetContextMappingName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context mapping that defines how the structured data is saved to the target object, such as an opportunity or sales agreement. |
| TemplateItemName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the manufacturing program template item. |
| TransformationDisplayOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe display order of the transformation in the manufacturing program template. |
| TransformationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of transformation.Possible values are:BusinessTransformationForecastSetRelation |
