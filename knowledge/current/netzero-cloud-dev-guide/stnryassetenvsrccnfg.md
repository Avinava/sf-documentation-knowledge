---
title: "StnryAssetEnvSrcCnfg"
domain: netzero-cloud-dev-guide
topic: stnryassetenvsrccnfg
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.518Z
estimatedTokens: 712
keywords: [StnryAssetEnvSrcCnfg, setup, mapping, Stationary, Asset, Environmental, Source, record, internal, enums, primarily, calculations, across, different, API]
---

# StnryAssetEnvSrcCnfg

> Represents the setup object that contains the mapping between the Stationary
         Asset Environmental Source record type and internal enums. You can primarily use this
         object for calculations across different record types. This object is available in API
      version 54.0 and later.

# StnryAssetEnvSrcCnfg

Represents the setup object that contains the mapping between the Stationary Asset Environmental Source record type and internal enums. You can primarily use this object for calculations across different record types. This object is available in API version 54.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may be slow while Salesforce generates one for each record. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language associated with this object.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the flow that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe label assigned to this object. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Limit: 15 characters. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the record type entity.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| StationaryAssetType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of stationary asset.Possible values are:CommercialBuilding—Commercial BuildingDataCenter—Data Center |
