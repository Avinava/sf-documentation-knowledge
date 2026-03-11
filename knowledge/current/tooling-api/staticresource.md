---
title: "StaticResource"
domain: tooling-api
topic: staticresource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.798Z
keywords: [StaticResource, Supported, SOAP, API, Calls, REST, HTTP, Methods, Fields, Usage]
---

# StaticResource

# StaticResource

Represents the working copy of a static resource file for editing or saving. Static resources allow you to upload content that you can reference in a Visualforce page, including images, stylesheets, JavaScript, and other files. Available in Tooling API version 29.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Fields

| Field Name | Details |
| --- | --- |
| Body | TypestringPropertiesCreate, UpdateDescriptionThe data for the static resource file. |
| ContentType | TypestringPropertiesCreate, UpdateDescriptionRequired. The content type of the file, for example text/plain. |
| CacheControl | TypestringPropertiesCreate, UpdateDescriptionRequired. Indicates whether the static resource is marked with a public caching tag so that a third-party delivery client can cache the content.  The valid values are:PrivatePublic |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Name | TypestringPropertiesCreate, UpdateDescriptionThe static resource name. The name can only contain characters, letters, and the underscore (_) character, must start with a letter, and cannot end with an underscore or contain two consecutive underscore characters |

## Usage

To create, edit, or save a static resource file, create a StaticResource object that references it.