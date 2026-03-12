---
title: "BldgEnrgyIntensityCnfg"
domain: netzero-cloud-dev-guide
topic: bldgenrgyintensitycnfg
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.447Z
estimatedTokens: 854
keywords: [BldgEnrgyIntensityCnfg, setup, mapping, Building, Energy, Intensity, Record, internal, enums, primarily, calculations, across, different, API, version]
---

# BldgEnrgyIntensityCnfg

> Represents the setup object that contains the mapping between the Building
         Energy Intensity Record record type and internal enums. You can primarily use this object
         for calculations across different record types. This object is available in API
      version 54.0 and later.

# BldgEnrgyIntensityCnfg

Represents the setup object that contains the mapping between the Building Energy Intensity Record record type and internal enums. You can primarily use this object for calculations across different record types. This object is available in API version 54.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| BuildingEnergyIntensityType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the Building Energy Intensity Record record.Possible values are:BuildingEnergyIntensity—Building Energy IntensityRegionalBuildingEnergyIntensity—Regional Building Energy Intensity |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of building energy intensity record type.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe UI label of building energy intensity configuration. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the Building Energy Intensity Record record type.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
