---
title: "WebLink"
domain: tooling-api
topic: weblink
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.167Z
estimatedTokens: 1885
keywords: [WebLink, custom, button, link, Tooling, APIfrom, API, version, 34.0, later, SOAP, Calls, REST, HTTP]
---

# WebLink

> Represents a custom button or link.  Available in the Tooling APIfrom API version 34.0 or
    later.

# WebLink

Represents a custom button or link. Available in the Tooling APIfrom API version 34.0 or later.

## Supported SOAP Calls

getUpdated(), query(), retrieve(), search()

## Supported REST HTTP Methods

GET

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Nillable, SortDescriptionA description of the button or link. |
| DisplayType | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionRepresents how the button or link is rendered. Valid values are:link for a hyperlinkbutton for a buttonmassActionButton for a button attached to a related list |
| EncodingKey | TypestringPropertiesFilter, SortDescriptionValid values include:UTF-8—Unicode (UTF-8)ISO-8859-1—General US & Western Europe (ISO-8859–1, ISO-LATIN-1)Shift_JIS—Japanese (Shift-JIS)ISO-2022-JP—Japanese (JIS)EUC-JP—Japanese (EUC-JP)x-SJIS_0213—Japanese (Shift-JIS_2004)ks_c_5601-1987—Korean (ks_c_5601-1987)Big5—Traditional Chinese (Big5)GB2312—Simplified Chinese (GB2312)Big5-HKSCS—Traditional Chinese Hong Kong (Big5–HKSCS) |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, Sort.DescriptionRequired. Available in API version 34.0. The entity definition for the object associated with this button or link. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Sort.DescriptionRequired. ID of the record associated with the button or link. The record’s object type is in EntityDefinition. |
| FullName | TypestringPropertiesFilter, Group, Sort.DescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| HasMenubar | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort.DescriptionIf OpenType is newWindow, this field indicates whether to show the browser menu bar for the popup window (true, or not (false). For other values of OpenType, don't specify a value here. |
| HasScrollbars | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort.DescriptionIf the value of OpenType is newWindow, this field indicates whether to show the scroll bars for the window (true) or not (false). For other values of OpenType, don’t specify a value here. |
| HasToolbar | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort.DescriptionIf the value of OpenType is newWindow, this field indicates whether to show the browser toolbar for the window (true) or not (false). For other values of OpenType, don’t specify a value here. |
| Height | TypeintPropertiesFilter, Group, Nillable, Sort.DescriptionRequired if the value of OpenType is newWindow. Height in pixels of the window opened by the button or link. For other values of OpenType, don’t specify a value here. |
| IsResizable | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort.DescriptionIf the value of OpenType is newWindow, this field indicates whether to allow resizing of the window (true) or not (false). For other values of OpenType, don’t specify a value here. |
| LinkType | TypeWebLinkType enumerated listPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. Represents whether the content of the button or link is specified by a URL, an sControl, a JavaScript code block, or a Visualforce page.urlsControljavascriptpageflow—Reserved for future use. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionMaster label for this object. This display value is the internal label that is not translated. Limit: 240 characters. |
| Metadata | Typemns:WebLinkPropertiesFilter, Group, idLookup, SortDescriptionThe metadata for this object as defined in the Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. Name to display on the page. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Sort.DescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| OpenType | TypeWebLinkWindowType enumerated listPropertiesFilter, Group, SortDescriptionThe window style used to display the content. Valid values are:newWindowsidebarnoSidebarreplaceonClickJavaScript |
| Position | TypeWebLinkPosition enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIf the value of OpenType is newWindow, this field indicates how the new window should be displayed. Otherwise, don’t specify a value. Valid values are:fullScreennonetopLeft |
| RequireRowSelection | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf the value of OpenType is massAction, this field indicates whether to require individual row selection to execute the action for this button (true) or not (false). Otherwise, leave this field empty. |
| Scontrol | TypestringPropertiesFilter, Group, SortDescriptionIf the value of LinkType is sControl, this field represents the name of the sControl. Otherwise, leave this field empty. |
| ShowsLocation | TypebooleanPropertiesFilter, Group, SortDescriptionIf the value of OpenType is newWindow, this field indicates whether to show the browser location bar for the window (true) or not (false). Otherwise, leave this field empty. |
| ShowsStatus | TypebooleanPropertiesFilter, Group, SortDescriptionIf the value of OpenType is newWindow, show the browser status bar for the window (true. Otherwise, don’t specify a value. |
| Url | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRequired. Represents the URL of the page to link to. Can include fields as tokens within the URL. Limit: 1,024 KB.If the value of LinkType is url, this field represents the URL value. If the value of LinkType is javascript, this field represents the JavaScript content. For other values of LinkType, leave this field empty.Content must be escaped in a manner consistent with XML parsing rules. |
| Width | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe width in pixels of the window opened by the button or link.Required if the value of OpenType is newWindow. Otherwise, leave this field empty. |

## Related Topics

- EntityDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitydefinition.htm)
