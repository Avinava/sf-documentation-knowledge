---
title: "WebLink"
domain: object-reference
topic: weblink
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:19.399Z
estimatedTokens: 1624
keywords: [WebLink, custom, link, URL, Scontrol, Calls, Special, Access, Rules, Usage]
---

# WebLink

> Represents a custom link to a URL or Scontrol.

# WebLink

Represents a custom link to a URL or Scontrol.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

-   To create a custom link, the client application must be logged in with the “Customize Application” permission.
-   Customer Portal users can’t access this object.

## Fields

| Field Name | Details |
| --- | --- |
| Availability | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescription |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the custom link. Limit is 1,000 characters. |
| DisplayType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of display: button, link, or mass-action button. |
| EncodingKey | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Encoding of parameters on the URL link. |
| HasMenubar | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the popup window shows a menu bar (true) or not (false). |
| HasScrollbars | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the popup window shows scroll bars (true) or not (false). |
| HasToolbar | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the popup window shows browser toolbars (true) or not (false). Toolbars normally contain navigation buttons like Back, Forward, and Print. |
| Height | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHeight of the popup in pixels. |
| IsProtected | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the object is protected (true) or not (false). Protected components that have been installed in other organizations can’t be linked to or referenced by components created in the subscriber organization. A developer can easily delete a protected component contained in a managed package in a future release of the package without worrying about failing installations. However, once a component is marked as unprotected and is released globally, the developer can’t delete it. |
| IsResizable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether users are allowed to resize the popup window (true) or not (false). |
| LinkType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Type of link (S-control or URL). |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMaster label for the link. Limit is 240 characters. This display value is the internal label that is not translated. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name to display on page. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.This field can’t be accessed unless the logged-in user has the Customize Application permission. |
| OpenType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. How the custom link opens when clicked in a browser—NewWindow, Sidebar, or NoSidebar. |
| PageOrSobjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionRequired. For standard objects, the name of the page on which to display the custom link. For custom objects, the name of the object. |
| Position | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLocation on the screen where the popup should open—TopLeft, FullScreen, or None. |
| RequireRowSelection | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the custom link requires a row selection (true) or not (false). |
| ScontrolId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the custom s-control object (Scontrol) to link to. Can include fields as tokens within the custom s-control object. Label is Custom S-Control ID. |
| ShowsLocation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the popup window shows the browser’s address bar containing the URL (true) or not (false). |
| ShowsStatus | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionShow the status bar at the bottom of the browser. |
| Url | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionRequired. URL of the page to link to. Can include fields as tokens within the URL. Limit: 1,024 KB. |
| Width | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWidth of the popup in pixels. |

## Usage

Use this object to programmatically manage custom links, which allow client applications to integrate data with external URLs, an organization’s intranet, or other back-end office systems. A custom link can point to:

-   An external URL, such as www.google.com or your company's intranet.
-   A custom s-control, such as a Java applet or Active-X control.

Custom links can include fields as tokens within the URL or custom s-control.

#### See Also

-   [Scontrol](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scontrol.htm "A custom s-control, which is custom content that is hosted by the system but executed by the client application.")

## Related Topics

- Scontrol (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scontrol.htm)
