---
title: "ApexComponent"
domain: tooling-api
topic: apexcomponent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.756Z
estimatedTokens: 388
keywords: [ApexComponent, saved, copy, Visualforce, component, uses, cached, version, unless, unavailable, API, 28.0, later, SOAP, Calls]
---

# ApexComponent

> Represents the saved copy of a Visualforce component. ApexComponent
      uses the cached version of the class unless one is unavailable. Available from API
    version 28.0 or later.

# ApexComponent

Represents the saved copy of a Visualforce component. ApexComponent uses the cached version of the class unless one is unavailable. Available from API version 28.0 or later.

To edit, save, or compile Visualforce components, use [ApexComponentMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcomponentmember.htm "Represents the working copy of a Visualforce component for editing, saving, or compiling in a MetadataContainer.").

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Fields

| Field Name | Details |
| --- | --- |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedThis field is available in API version 38.0 and later. |

## Usage

To retrieve information about a Visualforce component, create an ApexComponent object that references it. For example code, see [SOAP Calls](atlas.en-us.api_tooling.meta/api_tooling/intro_soap_overview.htm).

To edit, save, or compile Visualforce components, use [ApexComponentMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcomponentmember.htm "Represents the working copy of a Visualforce component for editing, saving, or compiling in a MetadataContainer.").

## Related Topics

- ApexComponentMember (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcomponentmember.htm)
- SOAP Calls (atlas.en-us.api_tooling.meta/api_tooling/intro_soap_overview.htm)
