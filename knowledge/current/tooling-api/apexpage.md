---
title: "ApexPage"
domain: tooling-api
topic: apexpage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.210Z
keywords: [ApexPage, Supported, SOAP, API, Calls, REST, HTTP, Methods, Fields, Usage]
---

# ApexPage

# ApexPage

Represents the saved copy of a Visualforce page. ApexPage uses the cached version of the page unless one is unavailable. Available from API version 28.0 or later.

To edit, save, or compile Visualforce pages, use [ApexPageMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexpagemember.htm "Represents the working copy of a Visualforce page for editing, saving, or compiling in a MetadataContainer.").

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Fields

| Field Name | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe API version for the page. Every page has an API version specified at creation. If the API version is less than 15.0 and ApiVersion is not specified, ApiVersion defaults to 15.0. This field is available in API version 30.0 and later. |
| ControllerKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier for the controller associated with this page:If ControllerType is set to Standard or StandardSet, this value is the name of the sObject that defines the controller.If ControllerType is set to Custom, this value is the name of the Apex class that defines the controller.This field is available in API version 30.0 and later. |
| ControllerType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of controller associated with this Visualforce page. Possible values include:Not Specified, for pages defined with neither a standardController nor a controller attribute on the <apex:page> tagStandard, for pages defined with the standardController attribute on the <apex:page> tagStandardSet, for pages defined using the standardController and recordSetVar attribute on the <apex:page> tagCustom, for pages defined with the controller attribute on the <apex:page> tagThis field is available in API version 30.0 and later. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the Visualforce page. This field is available in API version 30.0 and later. |
| FullName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. This field is available in API version 36.0 and later. |
| IsAvailableInTouch | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if Visualforce tabs associated with the Visualforce page can be used in the Salesforce mobile app (true) or not (false). (Use of this field for Salesforce Touch is deprecated.) This field is available in API version 30.0 and later.Standard object tabs that are overridden with a Visualforce page aren’t supported in the Salesforce mobile app, even if you set this field for the page. The default Salesforce app page for the object is displayed instead of the Visualforce page. |
| IsConfirmationTokenRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether GET requests for the page require a CSRF confirmation token (true) or not (false). This field is available in API version 30.0 and later.If you change this field’s value from false to true, links to the page require a CSRF token to be added to them, or the page will be inaccessible. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedThis field is available in API version 38.0 and later. |
| Markup | TypetextareaPropertiesCreate, UpdateDescriptionThe Visualforce markup, HTML, Javascript, and any other Web-enabled code that defines the content of the page. This field is available in API version 30.0 and later. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe text used to identify the Visualforce page in the Setup area of Salesforce. The Label is Label. This field is available in API version 30.0 and later. |
| Metadata | Typemns:ApexPagePropertiesCreate, Nillable, UpdateDescriptionThe Visualforce page metadata. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. This field is available in API version 36.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of this Visualforce page. This field is available in API version 30.0 and later. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.This field is available in API version 30.0 and later. |

## Usage

To retrieve information about a Visualforce page, create an ApexPage object that references it. For example code, see [SOAP Calls](atlas.en-us.api_tooling.meta/api_tooling/intro_soap_overview.htm).

To edit, save, or compile Visualforce pages, use [ApexPageMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexpagemember.htm "Represents the working copy of a Visualforce page for editing, saving, or compiling in a MetadataContainer.").