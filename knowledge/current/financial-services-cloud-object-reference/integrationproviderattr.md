---
title: "IntegrationProviderAttr"
domain: financial-services-cloud-object-reference
topic: integrationproviderattr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.809Z
estimatedTokens: 597
keywords: [IntegrationProviderAttr, attributes, definition, integration, provider, API, version, 57.0, later, Calls]
---

# IntegrationProviderAttr

> Represents information about the attributes that are used in the definition
         for an integration provider. This object is available in API version 57.0 and
      later.

# IntegrationProviderAttr

Represents information about the attributes that are used in the definition for an integration provider. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the data type of the attribute.Possible values are:BooleanDateDateTime—Date TimeDoubleIntegerPercentageString |
| DateTimeValue | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date time value of the attribute. |
| DateValue | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date value of the attribute. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the attribute. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the integration provider attribute. |
| DoubleValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe double value of the attribute. |
| IntegerValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe integer value of the attribute. |
| IntegrationProviderDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe integration provider definition that's associated with the attribute.This field is a relationship field.Relationship NameIntegrationProviderDefRelationship TypeLookupRefers ToIntegrationProviderDef |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the attribute is required (true) or not (false).The default value is false. |
| IsTrueOrFalseValue | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe value in the boolean field of the attribute.The default value is false. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe master label of the attribute. |
| PercentageValue | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage value of the attribute. |
| StringValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe string value of the attribute. |
