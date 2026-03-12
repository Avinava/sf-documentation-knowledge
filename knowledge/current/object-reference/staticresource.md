---
title: "StaticResource"
domain: object-reference
topic: staticresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.436Z
estimatedTokens: 1057
keywords: [StaticResource, resource, Visualforce, markup, Calls, Usage, Encoded, Data, Maximum, Size]
---

# StaticResource

> Represents a static resource that can be used in Visualforce markup.

# StaticResource

Represents a static resource that can be used in Visualforce markup.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Body | Typebase64PropertiesCreate, Nillable, UpdateDescriptionRequired. Encoded file data. |
| BodyLength | TypeintPropertiesFilter, Group, SortDescriptionSize of the file (in bytes). |
| CacheControl | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe sharing policy for the static resource when cached. The cache control can have one of these values:Private specifies that the static resource is accessible to all authenticated users. The static resource is stored on the Salesforce server in a user’s individual cache for the duration of the session.Public specifies that the static resource is accessible after caching to all internet traffic, including unauthenticated users. The resource is stored on the Salesforce server in a shared cache, which results in faster load times. |
| ContentType | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionType of content. Label is Mime Type. Limit: 120 characters. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description of the static resource. Limit: 255 characters. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the static resource. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.This field can’t be accessed unless the logged-in user has the Customize Application permission. |

## Usage

Use static resources to upload content that you can reference in Visualforce markup, including archives (such as .zip and .jar files), images, stylesheets, JavaScript, and other files. Using a static resource is preferable to uploading a file to the Documents tab because:

-   You can package a collection of related files into a directory hierarchy and upload that hierarchy as a .zip or .jar archive.
-   You can reference a static resource in page markup by name using the $Resource global variable instead of hard-coding document IDs.

## Encoded Data

The API sends and receives the binary file data encoded as a base64 data type. Prior to creating a record, clients must encode the binary file data as base64. Upon receiving an API response, clients must decode the base64 data to binary. The SOAP client usually handles this conversion.

## Maximum Static Resource Size

You can create or update static resources to a maximum size of 5 MB. An organization can have up to 250 MB of static resources, total.

#### See Also

-   [ApexComponent](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexcomponent.htm "Represents a definition for a custom component that can be used in a Visualforce page alongside standard components such as <apex:relatedList> and <apex:dataTable>.")

-   [ApexPage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexpage.htm "Represents a single Visualforce page.")

-   [*Developer Guide*: Visualforce Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "
    Developer Guide: Visualforce Developer Guide - html (New Window)")

## Related Topics

- ApexComponent (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexcomponent.htm)
- ApexPage (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexpage.htm)
