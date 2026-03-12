---
title: "ApexPage"
domain: object-reference
topic: apexpage
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:04.487Z
estimatedTokens: 1253
keywords: [ApexPage, Visualforce, Calls, Usage]
---

# ApexPage

> Represents a single Visualforce page.

# ApexPage

Represents a single Visualforce page.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe API version for this page. Every page has an API version specified at creation. If the API version is less than 15.0 and ApiVersion is not specified, ApiVersion defaults to 15.0. |
| ControllerKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier for the controller associated with this page:If the ControllerType parameter is set to Standard or StandardSet, this value is the name of the sObject that defines the controller.If the ControllerType parameter is set to Custom, this value is the name of the Apex class that defines the controller. |
| ControllerType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of controller associated with this Visualforce page. Possible values include:Not Specified, for pages defined with neither a standardController nor a controller attribute on the <apex:page> tagStandard, for pages defined with the standardController attribute on the <apex:page> tagStandardSet, for pages defined using the standardController and recordSetVar attribute on the <apex:page> tagCustom, for pages defined with the controller attribute on the <apex:page> tag |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the Visualforce page. |
| IsAvailableInTouch | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if Visualforce tabs associated with the Visualforce page can be used in the Salesforce mobile app (true) or not (false). (Use of this field for Salesforce Touch is deprecated.) This field is available in API version 27.0 and later.Standard object tabs that are overridden with a Visualforce page aren’t supported in the Salesforce mobile app, even if you set this field for the page. The default Salesforce app page for the object is displayed instead of the Visualforce page. |
| IsConfirmationTokenRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether GET requests for the page require a CSRF confirmation token (true) or not (false). This field is available in API version 28.0 and later.If you change this field’s value from false to true, links to the page require a CSRF token to be added to them, or the page will be inaccessible. |
| Markup | TypetextareaPropertiesCreate, UpdateDescriptionThe Visualforce markup, HTML, Javascript, and any other Web-enabled code that defines the content of the page. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe text used to identify the Visualforce page in the Setup area of Salesforce. The Label is Label. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of this Visualforce page. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |

## Usage

Use Visualforce pages to add custom content that extends the base Salesforce application functionality. All users in Visualforce-enabled organizations can view Visualforce pages, but the “Customize Application” permission is required to create or update them.

#### See Also

-   [ApexComponent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexcomponent.htm "Represents a definition for a custom component that can be used in a Visualforce page alongside standard components such as <apex:relatedList> and <apex:dataTable>.")

-   [StaticResource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_staticresource.htm "Represents a static resource that can be used in Visualforce markup.")

-   [*Developer Guide*: Visualforce Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "
    Developer Guide: Visualforce Developer Guide - html (New Window)")

## Related Topics

- ApexComponent (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexcomponent.htm)
- StaticResource (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_staticresource.htm)
