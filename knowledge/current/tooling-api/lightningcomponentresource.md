---
title: "LightningComponentResource"
domain: tooling-api
topic: lightningcomponentresource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.940Z
estimatedTokens: 422
keywords: [LightningComponentResource, Represents, Lightning, web, component, resource, such, HTML, markup, JavaScript, code, CSS, file, SVG, XML, configuration, file., API, version, 45.0]
---

# LightningComponentResource

> Represents a Lightning web component
            resource, such as HTML markup, JavaScript code, a CSS file, an SVG resource, or an XML
            configuration file. Available in API version 45.0 and later.

# LightningComponentResource

Represents a Lightning web component resource, such as HTML markup, JavaScript code, a CSS file, an SVG resource, or an XML configuration file. Available in API version 45.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Special Access Rules

As of Summer ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| FilePath | TypestringPropertiesCreate,Filter, Group, Sort,UpdateDescriptionThe path to the resource. |
| Format | TypepicklistPropertiesCreate, Filter Group, Restricted picklist, Sort, UpdateDescriptionThe format of the resource. The possible values are:csshtmljsjsonsvgxml |
| LightningComponentBundleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the bundle containing the resource. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedThis field is available in API version 38.0 and later. |
| Source | TypetextareaPropertiesCreate, UpdateDescriptionThe contents of the definition. This is all the markup or code for the definition. |

## Usage

For more information about Lightning web components, see [Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/lwc "HTML (New Window)").
