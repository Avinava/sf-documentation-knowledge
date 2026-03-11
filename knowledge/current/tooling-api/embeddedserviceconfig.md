---
title: "EmbeddedServiceConfig"
domain: tooling-api
topic: embeddedserviceconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.675Z
keywords: [EmbeddedServiceConfig, Supported, Calls, REST, HTTP, Methods, Fields]
---

# EmbeddedServiceConfig

# EmbeddedServiceConfig

Represents a setup node for creating an Embedded Service deployment. Available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), describeLayout(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET, POST, PATCH, DELETE

## Fields

| Field | Details |
| --- | --- |
| AreGuestUsersAllowed | TypebooleanPropertiesDefaulted on Create, Filter, Group, SortDescriptionSpecifies whether a user must be logged in to access an embedded component. Available in API version 45.0 and later. |
| AuthMethod | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of login method selected for this Embedded Service deployment. Valid values are:CommunitiesLoginCustomLoginAvailable in API version 43.0 and later. |
| BrandingId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe developer name of the associated BrandingSet. Used only for Embedded Service Deployments of the Messaging type. Used only when DeploymentFeature is EmbeddedMessaging. Available in API version 52.0 and later.This is a relationship field.Relationship NameBrandingRelationship TypeLookupRefers ToBrandingSet |
| CustomMinimizedComponentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRemoved. The custom Lightning component that’s used for the minimized state for this Embedded Chat deployment. Available in API version 38.0 to 45.0. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionUnique name for the Embedded Service configuration setup node.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| DeploymentFeature | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionWhere the Embedded Service deployment is used. After the value is set, it can’t be updated. Available in API version 52.0 and later.Possible values are:EmbeddedMessagingFieldServiceFlowsLiveAgentNone |
| DeploymentType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSet a conversation type for your embedded deployment. This field is available in version 51.0 and later.Possible values are:MobileWeb |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe unique name used for this Embedded Service deployment. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsEnabled | TypebooleanPropertiesDefaulted on Create, Filter, Group, SortDescriptionSpecifies if the Embedded Service Deployment is enabled for use. Available in API version 52.0 and later. |
| isTermsAndConditionsEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether Terms and Conditions are displayed. Displaying Terms and Conditions is supported if the deploymentFeature is either EmbeddedMesssaging or LiveAgent. Available in API version 59.0 and later.The default value is false. |
| isTermsAndConditionsRequired | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether acceptance of the Terms and Conditions is required before starting a chat. Displaying Terms and Conditions is supported if the deploymentFeature is either EmbeddedMesssaging or LiveAgent. Available in API version 59.0 and later.The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLanguages supported in the Embedded Service deployment.Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionName of the embedded service configuration node. |
| Metadata | Typemns:EmbeddedServiceConfigPropertiesCreate, Nillable, UpdateDescriptionThe Embedded Service configuration metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ShouldHideAuthDialog | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the prompt that the customer login again during a flow is hidden (true) or not (false). When it’s hidden, the customer is taken directly to your login page. This field is set to false by default. Available in API version 43.0 and later. |