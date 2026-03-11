---
title: "RecordActionDeployment"
domain: tooling-api
topic: recordactiondeployment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.623Z
keywords: [RecordActionDeployment, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# RecordActionDeployment

# RecordActionDeployment

Represents configuration settings for the Actions & Recommendations, Action Launcher, and Bulk Action Panel components. RecordActionDeployment is available in API version 45.0 and later.

## Supported SOAP Calls

create(), delete(), describeLayout(), describeSObject(), query(), retrieve(), update()upsert()

## Supported REST HTTP Methods

GET, HEAD, PATCH, POST, DELETE

## Fields

| Field | Details |
| --- | --- |
| ChannelConfigurations | Typemns:RecordActionDeploymentChannelPropertiesNot applicable.DescriptionChannel default settings for the deployment. This field is visible only in the metadata for a record. |
| ComponentName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the name of the component used in the deployment.Possible values are:ActionsAndRecommendations—0ActionLauncher—1BulkActionPanel—2. This value is available in API version 60.0 and later.For example, a value of 1 indicates that 1 is stored in the database if Action Launcher is used to create a deployment. Available in API version 56.0 and later. Available in API version 56.0 and later. |
| DeploymentContexts | Typemns:RecordActionDeploymentContextPropertiesNot applicable.DescriptionObject context for the deployment. This field is visible only in the metadata for a record. Available in API version 46.0 and later. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionA unique name for this record action deployment. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Provides a globally unique identifier for the record action deployment, which prevents conflicts with other record action deployments that have the same MasterLabel.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FullName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name used as the record action deployment identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| HasGuidedActions | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, indicates that the component shows standard actions; for example, flows and quick actions. Available in API version 46.0 and later. |
| HasComponents | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record actions deployment includes components (true) or not (false). |
| HasOmniscripts | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record actions deployment includes OmniScripts (true) or not (false). Available in API version 56.0 and later.The default value is false. |
| HasRecommendations | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, indicates that the component shows recommendations from a Next Best Action strategy. Available in API version 46.0 and later. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the record action deployment. The following values are supported:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe name of the deployment. |
| Metadata | Typemns:RecordActionDeploymentPropertiesCreate, Nillable, UpdateDescriptionMetadata that defines record action deployments.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with the record action deployment, which is assigned to the AppExchange package. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. The namespace helps differentiate custom objects and fields from those in use by other record action deployments. |
| Recommendation | Typemns:RecordActionRecommendationPropertiesNot applicable.DescriptionSettings for how Next Best Action recommendations appear. This field is visible only in the metadata for a record. Available in API version 46.0 and later. |
| SelectableItems | Typemns:RecordActionSelectableItemPropertiesNot applicable.DescriptionA subset of actions that users can launch at runtime. This field is visible only in the metadata for a record. |