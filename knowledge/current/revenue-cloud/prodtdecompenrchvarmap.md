---
title: "ProdtDecompEnrchVarMap"
domain: revenue-cloud
topic: prodtdecompenrchvarmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.038Z
estimatedTokens: 475
keywords: [ProdtDecompEnrchVarMap, mapping, context, tag, attribute, variable, expression, API, version, 64.0, later, Calls]
---

# ProdtDecompEnrchVarMap

> Represents the mapping of a field context tag or an attribute to a variable
         within an expression set. This object is available in API version 64.0 and later.

# ProdtDecompEnrchVarMap

Represents the mapping of a field context tag or an attribute to a variable within an expression set. This object is available in API version 64.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe attribute definition the expression set variable is mapped to when creating the enrichment rule.This field is a relationship field.Relationship NameAttributeDefinitionRefers ToAttributeDefinition |
| ExpressionSetVarName | TypestringPropertiesFilter, Group, SortDescriptionThe name of the variable that's mapped to the expression set defined in the enrichment rule. |
| FieldContextTagName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the field context tag to which the expression set variable is mapped when creating the enrichment rule. |
| ProductAttributeIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe product attribute from an internal or external catalog, used by DRO to copy data during the enrichment process. This field is available in API version 65.0 and later. |
| ProductDecompEnrichmentRuleId | TypereferencePropertiesFilter, Group, SortDescriptionThe rule that contains the mappings between the fields and attributes for the decomposing product.This field is a relationship field.Relationship NameProductDecompEnrichmentRuleRelationship TypeMaster-detailRefers ToProductDecompEnrichmentRule (the master object) |
| VariableType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies whether the expression set variable is an input or output variable.Valid values are:InputOutputThe default value is Input. |
