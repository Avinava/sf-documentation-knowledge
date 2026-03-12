---
title: "CustomObject"
domain: tooling-api
topic: customobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.051Z
estimatedTokens: 647
keywords: [CustomObject, Represents, custom, stores, data, unique, organization., Includes, access, associated, related, fields, Salesforce, Metadata, API., API, version, 31.0, later., Supported]
---

# CustomObject

> Represents a custom object that stores data unique to your
   organization. Includes access to the associated CustomObject object and related fields in
   Salesforce Metadata API. Available from API version 31.0 or later.

# CustomObject

Represents a custom object that stores data unique to your organization. Includes access to the associated CustomObject object and related fields in Salesforce Metadata API. Available from API version 31.0 or later.

## Supported SOAP Calls

query(), retrieve(), search()

## Supported REST HTTP Methods

Query, GET

## Fields

| Field Name | Details |
| --- | --- |
| CustomHelpId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionThe control that contains the help content if this custom object has customized help content. |
| Description | TypestringPropertiesFilter, Nillable, SortDescriptionThe object’s description. This can be useful to describe the reason for creating the object or its intended use. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer’s internal name for the custom object. For example, the internal name for the custom object CO__c is CO. |
| ExternalName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMaps to a table in the external data source. If you created the external object using Validate and Sync for the data source, this name is automatically created. |
| ExternalRepository | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMaps to a table in the external data source. If you created the external object using Validate and Sync for the data source, this name is automatically created; do not modify it. |
| Language | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the action. Valid values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package of which the custom object is a part. |
| SharingModel | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe sharing model. Values are:EditControlledByparentNoneRead |
