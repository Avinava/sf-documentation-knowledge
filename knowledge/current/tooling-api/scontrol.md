---
title: "Scontrol"
domain: tooling-api
topic: scontrol
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.857Z
estimatedTokens: 1045
keywords: [Scontrol, custom, s-control, content, system, hosts, client, applications, execute, contain, any, display, run, Web, browser]
---

# Scontrol

> Represents a custom s-control, which is custom content that our system hosts, but client
  applications execute. An s-control can contain any type of content that you can display or run in
  a Web browser.

# Scontrol

Represents a custom s-control, which is custom content that our system hosts, but client applications execute. An s-control can contain any type of content that you can display or run in a Web browser.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Visualforce pages supersede s-controls. Organizations that haven't previously used s-controls can’t create them. Existing s-controls are unaffected and can still be edited. We recommend that you move your s-controls to Visualforce. We continue to support this object.

## Supported SOAP Calls

query()

## Supported REST Methods

GET

## Special Access Rules

-   Your organization must be using Enterprise, Developer, or Unlimited Edition and be enabled for custom s-controls.
-   Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| ContentSource | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecify the source of the s-control content, either custom HTML, a snippet (s-controls that are included in other s-controls), or a URL. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionDescription of the custom s-control. |
| DeveloperName | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is S-Control Name.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, Salesforce generates one for each record, which slows performance. |
| EncodingKey | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionPicklist of character set encodings, including ISO-08859-1, UTF-8, EUC, JIS, Shift-JIS, Korean (ks_c_5601-1987), Simplified Chinese (GB2312), and Traditional Chinese (Big5). |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Name | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionRequired. Name of this custom s-control. Label is Label. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| SupportsCaching | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the s-control supports caching (true) or not (false). |

## Usage

Use custom s-controls to manage custom content that extends application functionality. All users can view custom s-controls, but the “Customize Application” permission is required to create or update custom s-controls.
