---
title: "BriefcaseDefinition"
domain: tooling-api
topic: briefcasedefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.772Z
estimatedTokens: 1201
keywords: [BriefcaseDefinition, Represents, briefcase, definition., makes, selected, records, users, groups, view, they’re, offline, Salesforce, Field, Service, mobile, app, iOS, Android., API]
---

# BriefcaseDefinition

> Represents a briefcase definition. A briefcase makes selected records available
      for users and groups to view when they’re offline in the Salesforce Field Service mobile app
      for iOS and Android. This object is available in API version 50.0 and later.

# BriefcaseDefinition

Represents a briefcase definition. A briefcase makes selected records available for users and groups to view when they’re offline in the Salesforce Field Service mobile app for iOS and Android. This object is available in API version 50.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

This object is available in orgs that have Briefcase Builder and Field service enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionDescription of the briefcase definition. Limited to 1024 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe unique name used as the briefcase definition identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the briefcase is available for use (true) or not (false). The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language for the briefcase. This field defaults to the user's language unless the org is multi-language enabled. Specifies the language of the labels returned.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe unique label for the briefcase definition. This internal label doesn’t get translated. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe BriefcaseDefinition metadata, which includes rules and rule filters. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| Type | TypepicklistPropertiesAggregate, Filter, Group, Nillable, Restricted picklist, SortDescriptionStandard: Standard briefcase that can be used with priming APIs.HighVolume: Increased-capacity briefcase that's used with performance priming in the Salesforce Field Service mobile app.MobileAppSync: Automatically generated briefcase that's used for performance priming in the Salesforce Field Service mobile app. |
