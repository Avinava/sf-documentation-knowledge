---
title: "ApplicationRecordTypeConfig"
domain: nonprofit-cloud
topic: applicationrecordtypeconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:02.644Z
estimatedTokens: 803
keywords: [ApplicationRecordTypeConfig, configuration, maps, record, application, API, version, 57.0, later, SOAP, Calls, REST, Special, Access, Rules]
---

# ApplicationRecordTypeConfig

> Represents the configuration that maps object record types to an application. This
      object is available in API version 57.0 and later.

# ApplicationRecordTypeConfig

Represents the configuration that maps object record types to an application. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Application system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ApplicationUsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionCount of application records used by Grantmaking.Possible values are:BA—Benefit AssistanceCCM—Composable Case ManagementEDU—Education CloudGrantmakingHC—Health CloudERM—OthersLPI—Public Sector Solutions |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unqiue name for ApplicationRecordTypeConfig.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the ApplicationRecordTypeConfig.Possible values are:The language of the account record type configuration.da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the ApplicationRecordTypeConfig. In the UI, this field is Application Record Type Configuration. |
| ObjectName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionObjects used by Grantmaking.Possible values are:IndividualApplication—Individual Application |
| RecordTypeName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of record type that was created for Individual Application. |
