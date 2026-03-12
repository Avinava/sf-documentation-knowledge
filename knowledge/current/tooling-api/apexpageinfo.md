---
title: "ApexPageInfo"
domain: tooling-api
topic: apexpageinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.640Z
estimatedTokens: 852
namespace: NameSpacePrefix
keywords: [ApexPageInfo, Represents, metadata, Visualforce, page., API, version, 37.0, later., Supported, SOAP, Calls, REST, HTTP, Special, Access, Rules, Fields, Usage]
---

# ApexPageInfo

> Represents metadata about a Visualforce page. This object is available in
    API version 37.0 and later.

**Namespace:** `NameSpacePrefix`

# ApexPageInfo

Represents metadata about a Visualforce page. This object is available in API version 37.0 and later.

To edit, save, or compile Apex pages, use [ApexPageMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_apexpagemember.htm "HTML (New Window)"). To load markup for a page or other fields, use [ApexPage](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_apexpage.htm "HTML (New Window)").

## Supported SOAP API Calls

describeSObjects(), query()

## Supported REST API HTTP Methods

Query, GET

## Special Access Rules

As of Summer '20 and later, this object can only be accessed by users who can view a particular Visualforce page, and users with the View Setup and Configuration permission.

## Fields

| Field | Details |
| --- | --- |
| ApexPageId | TypereferencePropertiesFilter, Group, SortDescriptionID for the Visualforce page. |
| ApiVersion | TypedoublePropertiesFilter, SortDescriptionThe API version for the page. Every page has an API version specified at creation. If the API version is less than 15.0 and ApiVersion is not specified, ApiVersion defaults to 15.0. |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionDescription of the Visualforce page. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFor internal use only. |
| IsAvailableInTouch | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThis field indicates whether Visualforce tabs associated with the Visualforce page can be used in the Salesforce app (true) or not (false). The default value is false. |
| IsShowHeader | TypebooleanPropertiesFilter, Group, Nillable, SortDescriptionThe showHeader value for the Visualforce page. This will be “unknown” if the Visualforce page uses an expression to compute showHeader. The default setting is true. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe text used to identify the Visualforce page in the Setup area of Salesforce. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionDeveloper name of the Visualforce page. |
| NameSpacePrefix | TypestringPropertiesFilter, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, the namespace prefix is set to the namespace prefix of the org for all objects that support it.NoteIf an object is in an installed managed package, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In non-Developer Edition orgs, NameSpacePrefix is set only for objects that are part of an installed managed package. Objects outside of an installed managed package don't have a namespace prefix. |

ApexPageInfo

## Usage

To retrieve labels and names for Visualforce pages, query the object that references it. For sample code, see [SOAP Calls](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_soap_overview.htm "HTML (New Window)").
