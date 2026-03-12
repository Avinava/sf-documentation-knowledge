---
title: "SvcCatalogFilterCriteria"
domain: object-reference
topic: svccatalogfiltercriteria
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:17.632Z
estimatedTokens: 735
keywords: [SvcCatalogFilterCriteria, eligibility, rule, determines, Service, Catalog, user, access, item, API, version, 60.0, later, SOAP, Calls]
---

# SvcCatalogFilterCriteria

> Represents an eligibility rule that determines if a Service Catalog user has
         access to a catalog item. This object is available in API version 60.0 and later.

# SvcCatalogFilterCriteria

Represents an eligibility rule that determines if a Service Catalog user has access to a catalog item. This object is available in API version 60.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this object, get the Service Catalog Access permission set license.

## Fields

| Field | Details |
| --- | --- |
| CriteriaRelation | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionPossible values are:AllConditionsAreMetAnyConditionIsMet |
| Description | TypetextareaPropertiesNillableDescriptionA description that states the restriction placed on a user’s access to a catalog items eligibility. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. The name:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscoresIn managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| FullName | TypestringPropertiesCreate, Group, Nillable |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies if the eligibility rule is active.The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSupported languages for eligibility rulesPossible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the manageable state of a catalog item that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label of the eligibility rule record. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe metadata type associated with the SvcCatalogFilterCriteria object. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, Sort |
| NumOfRelatedItems | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of catalog items that has the eligibility rule. |
