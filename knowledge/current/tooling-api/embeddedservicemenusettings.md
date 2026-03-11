---
title: "EmbeddedServiceMenuSettings"
domain: tooling-api
topic: embeddedservicemenusettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.738Z
keywords: [EmbeddedServiceMenuSettings, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields, Usage]
---

# EmbeddedServiceMenuSettings

# EmbeddedServiceMenuSettings

Represents a setup node for creating a channel menu deployment. Channel menus list the ways in which customers can contact your business. This object is available in API version 47.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

This type is available only if Salesforce Experiences and Salesforce Sites are enabled in your org. To access this type, you need the Customize Application user permission.

## Fields

| Field | Details |
| --- | --- |
| BrandingId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe developer name of the associated BrandingSet. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for the embedded service menu settings.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated EmbeddedServiceMenuSettings in Metadata API. The full name can include a namespaceprefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the channel menu is deployed (true) or not (false). |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the embedded service menu. Possible values are:ar—Arabicda—Danishde—Germanen_US—Englishes—Spanishfi—Finnishfr—Frenchiw—Hebrewja—Japaneseko—Koreannl_BE—Dutch (Belgium)no—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaiur—Urduzh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionTypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the embedded service menu setting. In the UI, this field is Channel Menu Deployment Name. |
| Metadata | TypeEmbeddedServiceMenuSettingsPropertiesCreate, Nillable, UpdateDescriptionThe EmbeddedServiceMenuSettings's metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |

## Usage

An EmbeddedServiceMenuSettings record creates a channel menu. A channel menu lists the ways in which customers can contact your business. A channel is created using EmbeddedServiceMenuItem and is a child record of EmbeddedServiceMenuSettings. Here you can specify the Site name, BrandingSet name, and whether the channel menu is deployed or not. The Site field is not exposed in the Tooling API but you can edit it using the following Metadata block.

```

```