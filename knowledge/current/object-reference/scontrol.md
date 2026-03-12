---
title: "Scontrol"
domain: object-reference
topic: scontrol
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.633Z
estimatedTokens: 1352
keywords: [Scontrol, custom, s-control, content, hosted, system, executed, client, application, Calls, Special, Access, Rules, Usage]
---

# Scontrol

> A custom s-control, which is custom content that is hosted by the
         system but executed by the client application.

# Scontrol

A custom s-control, which is custom content that is hosted by the system but executed by the client application.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Visualforce pages supersede s-controls. Organizations that haven’t previously used s-controls can’t create them. Existing s-controls are unaffected, and can still be edited. We recommend that you move your s-controls to Visualforce. We continue to support the Scontrol object.

Represents a custom s-control, which is custom content that the system hosts, but client applications execute. An s-control can contain any type of content that you can display or run in a Web browser.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   Your organization must be using Enterprise, Developer, or Unlimited Edition and be enabled for custom s-controls.
-   Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| Binary | Typebase64PropertiesCreate, Nillable, UpdateDescriptionBinary content of this custom s-control, such as an ActiveX control or a Java archive. Can be specified when created, but not when updated. Limit: 5 MB. |
| BodyLength | TypeintPropertiesFilter, Group, SortDescriptionThe length of the custom s-control. Label is Binary Length. |
| ContentSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the source of the s-control content, either custom HTML, a snippet (s-controls that are included in other s-controls), or a URL. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the custom s-control. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is S-Control Name.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| EncodingKey | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPicklist of character set encodings, including ISO-08859-1, UTF-8, EUC, JIS, Shift-JIS, Korean (ks_c_5601-1987), Simplified Chinese (GB2312), and Traditional Chinese (Big5). |
| Filename | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn uploaded object to display when the custom s-control is added to a custom link. Can be a Java applet, an ActiveX control, or any other type of desired content. |
| HtmlWrapper | TypetextareaPropertiesCreate, UpdateDescriptionRequired. HTML page that will be delivered when the user views this custom s-control. This HTML page can be the entire content of the custom s-control, or it can reference the binary. Limit: 1,048,576 characters. Label is HTML Body. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Name of this custom s-control. Label is Label. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| SupportsCaching | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the s-control supports caching (true) or not (false). |

## Usage

Use custom s-controls to manage custom content that extends application functionality. All users can view custom s-controls, but the “Customize Application” permission is required to create or update custom s-controls.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
