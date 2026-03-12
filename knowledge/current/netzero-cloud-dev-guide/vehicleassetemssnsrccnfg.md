---
title: "VehicleAssetEmssnSrcCnfg"
domain: netzero-cloud-dev-guide
topic: vehicleassetemssnsrccnfg
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.558Z
estimatedTokens: 735
keywords: [VehicleAssetEmssnSrcCnfg, setup, mapping, Vehicle, Asset, Emissions, Source, record, internal, enums, primarily, calculations, across, different, API]
---

# VehicleAssetEmssnSrcCnfg

> Represents the setup object that contains the mapping between the Vehicle
         Asset Emissions Source record type and internal enums. You can primarily use this object
         for calculations across different record types. This object is available in API
      version 54.0 and later.

# VehicleAssetEmssnSrcCnfg

Represents the setup object that contains the mapping between the Vehicle Asset Emissions Source record type and internal enums. You can primarily use this object for calculations across different record types. This object is available in API version 54.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may be slow while Salesforce generates one for each record. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the Vehicle Asset Emissions Source record type.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe UI label of the vehicle asset emissions source configuration. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Limit: 15 characters. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the Vehicle Asset Emissions Source record type.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| VehicleAssetType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the Vehicle Asset Emissions Source record typePossible values are:FleetVehicle—Fleet VehiclePrivateJet—Private Jet |
