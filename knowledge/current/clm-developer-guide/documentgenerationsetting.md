---
title: "DocumentGenerationSetting"
domain: clm-developer-guide
topic: documentgenerationsetting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.789Z
estimatedTokens: 1332
keywords: [DocumentGenerationSetting, org's, settings, automatic, document, generation, templates, API, version, 54.0, later, Calls, Special, Access, Rules]
---

# DocumentGenerationSetting

> Represents an org's settings for automatic document generation from
         templates. This object is available in API version 54.0 and later.

# DocumentGenerationSetting

Represents an org's settings for automatic document generation from templates. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

DocumentGenerationSetting is available if your org has the DocGen platform license and related addon and user licenses.

## Fields

| Field | Details |
| --- | --- |
| BatchDocGnrnPctLimitPerHour | TypepercentPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe maximum percentage of hourly server-side document generation requests used for batch processing.Available in version 58.0 and later. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| DocumentTemplateLibraryName | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the library associated with the document template. |
| GenerationMechanism | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe location where the web document is generated.Possible values are:ClientSide—Client-SideServerSide—Server-SideThe default value is ClientSide. |
| GuestAccessNamedCredential | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe named credential that lets guest users generate documents. |
| InProgDocGenRqstTmot | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time interval (in hours) after which InProgress DocumentGenerationProcess records (single point or batch request) are terminated and the request status is updated to Failed. Specify a valid whole number between 1 and 24. The default value is set to 6. |
| IsBatchDocGnrnEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether server-side document generation requests are queued and processed within the hourly batch document generation limit.The default value is false.Available in version 58.0 and later. |
| IsInProgRqstTmotEnab | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the InProgress DocGen Request Time Out (hrs) is enabled (true) or not (false).The default value is false. |
| IsServerSideDocGenEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether side server document generation is enabled true or not false for this org.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the label in the user interface.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user interface label for document generation setting. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| PreviewType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of viewer that’s used to view the generated web document.Possible values are:PDFThumbnailThe default value is PDF. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

DocumentGenerationSettingChangeEvent

Change events are available for the object.

DocumentGenerationSettingFeed

Feed tracking is available for the object.

DocumentGenerationSettingHistory

History is available for tracked fields of the object.

DocumentGenerationSettingOwnerSharingRule

Sharing rules are available for the object.

DocumentGenerationSettingShare

Sharing is available for the object.
