---
title: "ApexComponent"
domain: object-reference
topic: apexcomponent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:04.433Z
estimatedTokens: 1110
keywords: [ApexComponent, definition, custom, component, Visualforce, alongside, standard, components, <apex, relatedList>, dataTable>, Calls, Usage]
---

# ApexComponent

> Represents a definition for a custom component that can be used in a
   Visualforce page alongside standard components such as <apex:relatedList> and <apex:dataTable>.

# ApexComponent

Represents a definition for a custom component that can be used in a Visualforce page alongside standard components such as <apex:relatedList\> and <apex:dataTable\>.

Represents a definition for a custom component that can be used in a Visualforce page alongside standard components such as <apex:relatedList\> and <apex:dataTable\>. For information, see the [Visualforce Developers Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "html (New Window)").

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe API version for this custom component. Every custom component has an API version specified at creation. If the API version is less than 15.0 and ApiVersion is not specified, ApiVersion defaults to 15.0. |
| ControllerKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier for the controller associated with this custom component:If the ControllerType parameter is set to Standard or StandardSet, this value is the name of the sObject that defines the controller.If the ControllerType parameter is set to Custom, this value is the name of the Apex class that defines the controller. |
| ControllerType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of controller associated with this Visualforce custom component. Possible values include:Not Specified, for custom components defined without a value for the controller attribute on the <apex:component> tagStandard, a value that can't be used with custom components or errors may occurStandardSet, a value that can't be used with custom components or errors may occurCustom, for components that have a value for the controller attribute on the <apex:component> tag |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the Visualforce custom component. |
| Markup | TypetextareaPropertiesCreate, UpdateDescriptionThe Visualforce markup, HTML, Javascript, and any other Web-enabled code that defines the content of the custom component. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe text used to identify the Visualforce custom component in the Setup area of Salesforce. The Label for this field is Label. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of this Visualforce custom component. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |

## Usage

Use custom components to encapsulate a common design pattern and then reuse that pattern several times in one or more Visualforce pages. All users who can view Visualforce pages can view custom components, but the “Customize Application” permission is required to create or update custom components.

#### See Also

-   [ApexPage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexpage.htm "Represents a single Visualforce page.")

-   [StaticResource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_staticresource.htm "Represents a static resource that can be used in Visualforce markup.")

-   [*Developer Guide*: Visualforce Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "
    Developer Guide: Visualforce Developer Guide - html (New Window)")

## Related Topics

- ApexPage (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexpage.htm)
- StaticResource (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_staticresource.htm)
