---
title: "ProductDecompEnrichmentRule"
domain: revenue-cloud
topic: productdecompenrichmentrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:11.145Z
estimatedTokens: 1180
keywords: [ProductDecompEnrichmentRule, Represents, mappings, between, fields, attributes., Enrichment, rules, part, decomposition, rule, used, propagate, data, fulfillment, order, lines., API, version, 61.0]
---

# ProductDecompEnrichmentRule

> Represents mappings between fields and attributes. Enrichment rules are part
         of a decomposition rule, and are used to propagate data to fulfillment order lines.
      This object is available in API version 61.0 and later.

# ProductDecompEnrichmentRule

Represents mappings between fields and attributes. Enrichment rules are part of a decomposition rule, and are used to propagate data to fulfillment order lines. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CalculationDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn expression set or a decision matrix that calculates the destination value.This field is a polymorphic relationship field.Relationship NameCalculationDefinitionRefers ToDecisionMatrixDefinition, ExpressionSet |
| CalculationMethod | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of enrichment rule.Valid values are:Ad-verbatim—As IsStatic-Lookup—List LookupExpression-Set—Available in API version 64.0 and later |
| DecompositionRuleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the decomposition rule.This field is a relationship field.Relationship NameDecompositionRuleRelationship TypeParent-childRefers ToProductFulfillmentDecompRule (the master object) |
| DestinationApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the destination field or attribute code of an attribute. |
| DestinationAttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only.This field is a relationship field.Relationship NameDestinationAttributeDefinitionRefers ToAttributeDefinition |
| DestinationAttributeIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe destination entity attribute that is mapped from the source entity attribute. This field can store a Salesforce AttributeDefinition ID or an external identifier. This field is available in API version 65.0 and later. |
| DestinationContextTag | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the destination context definition. |
| DestinationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe destination type for mapping.Valid values are:AttributeField |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record |
| ListMappingGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only.This field is a relationship field.Relationship NameListMappingGroupRefers ToValTfrmGrp |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the decomposition rule. |
| RuleEnforcement | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the rule applies to all fulfillment requests or only to specific ones.Valid values are:AllFulfillmentRequestsInitialFulfillmentRequestThis field is available in API version 63.0 and later. |
| SourceApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the source field or attribute code of an attribute. |
| SourceAttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only.This field is a relationship field.Relationship NameSourceAttributeDefinitionRefers ToAttributeDefinition |
| SourceAttributeIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe source entity attribute that is mapped to the destination entity attribute. This field can store a Salesforce AttributeDefinition ID or an external identifier. This field is available in API version 65.0 and later. |
| SourceContextTag | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source type for the context definition. |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe source type for mapping.Valid values are:AttributeField |
