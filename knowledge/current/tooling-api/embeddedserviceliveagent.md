---
title: "EmbeddedServiceLiveAgent"
domain: tooling-api
topic: embeddedserviceliveagent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.722Z
keywords: [EmbeddedServiceLiveAgent, Supported, Calls, REST, HTTP, Methods, Special, Access, Rules, Fields, Usage]
---

# EmbeddedServiceLiveAgent

# EmbeddedServiceLiveAgent

Represents a setup node for creating an Embedded Chat deployment. Available in Tooling API version 38.0 and later.

## Supported Calls

create(), delete() describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, HEAD, PATCH, POST, PUT, Query

## Special Access Rules

To access EmbeddedServiceLiveAgent, your org must have Service Cloud with Chat enabled.

## Fields

| Field | Details |
| --- | --- |
| AvatarImg | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used as the agent avatar image. Available in API version 43.0 and later. |
| CustomPrechatComponent | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRemoved. The ID of the custom Lightning Component that’s used for the pre-chat page in this embedded deployment. Available in API versions 38.0 to 45.0. Removed in API version 46.0 and later. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for the EmbeddedServiceLiveAgent object.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EmbeddedServiceConfigId | TypereferencePropertiesFilter, Group, SortDescriptionUnique name for the embedded chat deployment ID. |
| Enabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this embedded chat deployment is enabled (true). Available in API version 43.0 and later. |
| FontSize | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionFont size for the chat window. Available in API version 43.0 and later.Possible values are:SmallMediumLargeAvailable in API version 43.0 and later. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe unique name used for this embedded chat deployment. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| HeaderBackgroundImg | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionRemoved. URL of the image used for the header background in the embedded chat window. Available in API version 43.0. Removed in API version 49.0 and later. |
| IsOfflineCaseEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether offline support is enabled for this embedded chat deployment (true) or not (false). Available in API version 43.0 and later. |
| IsQueuePositionEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether queue position (displaying the customer’s place in line while they wait for an agent) is enabled for this embedded chat deployment (true) or not (false). Available in API version 43.0 and later. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLanguages supported in the embedded chat deployment.Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| LiveAgentChatUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe REST endpoint for Chat. Available in API version 43.0 and later. |
| LiveAgentContentUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe REST endpoint for Chat content. Available in API version 43.0 and later. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedAvailable in API version 43.0 and later. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionName of the embedded chat deployment. |
| Metadata | Typemns:EmbeddedServiceLiveAgentPropertiesCreate, Nillable, UpdateDescriptionThe embedded chat metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.Available in API version 43.0 and later. |
| OfflineCaseBackgroundImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used for the background for the offline support case form in an embedded chat window. Available in API version 43.0 and later. |
| PrechatBackgroundImg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used for the background for the pre-chat form in an embedded chat window. Available in API version 43.0 and later. |
| PreChatEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the pre-chat form is enabled for this embedded chat deployment. |
| PrechatJson | TypestringPropertiesNillableDescriptionJSON object of all the fields of the selected pre-chat form in Chat setup. Available in API version 43.0 and later. |
| Scenario | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of use case that is selected for the pre-chat form. Valid values are:BasicSalesService |
| SmallCompanyLogoImg | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionURL of the logo image used with embedded chat. Available in API version 43.0 and later. |
| WaitingStateBackgroundImg | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionURL of the image used for the background image in an embedded chat window while the customer waits to be connected with a support agent. Available in API version 43.0 and later. |

## Usage

EmbeddedServiceLiveAgent represents a Chat configuration that is added to your web page. The EmbeddedServiceLiveAgent record contains a unique combination of a Chat button and the Chat deployment that the administrator selects during setup.

To create an EmbeddedServiceLiveAgent record, create a Chat Deployment, a Chat Button, and an EmbeddedServiceConfig record. Then, set the fields for these records as references on the EmbeddedServiceLiveAgent record.