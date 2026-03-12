---
title: "ProcedurePlanDefinition"
domain: revenue-cloud
topic: procedureplandefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:12.816Z
estimatedTokens: 887
keywords: [ProcedurePlanDefinition, setup, unified, procedure, multiple, procedures, sequenced, any, order, business, needs, plan, definition, sections, subsections]
---

# ProcedurePlanDefinition

> Represents the setup of a unified procedure from a list of multiple
         procedures that can be sequenced in any order based on business needs. Each procedure plan
         definition contains sections and subsections where procedures can be configured by using a
         lookup table or rule-based criteria. This object is available in API version 62.0 and
      later.

# ProcedurePlanDefinition

Represents the setup of a unified procedure from a list of multiple procedures that can be sequenced in any order based on business needs. Each procedure plan definition contains sections and subsections where procedures can be configured by using a lookup table or rule-based criteria. This object is available in API version 62.0 and later.

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
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the procedure plan definition. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the procedure plan definition record.This name must begin with a letter and use only alphanumeric characters and underscores. It can't include spaces, end with an underscore, or have two consecutive underscores. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the procedure plan definition.Valid values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe master label of the procedure plan definition. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
| PrimaryObject | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, SortDescriptionThe object associated to the procedure plan definition. The fields in the object are used as variables in the procedure plan criterion. |
| ProcessType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIdentify the business processes that need a procedure plan for each SObject and definition.Possible values are:BillingDRODeepClone—Deep CloneDefaultProductDiscovery—Product DiscoveryRLMThe default value is Default. |
