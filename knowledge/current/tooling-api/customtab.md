---
title: "CustomTab"
domain: tooling-api
topic: customtab
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:45.062Z
estimatedTokens: 877
keywords: [CustomTab, Represents, custom, tab., Supported, Calls, Fields]
---

# CustomTab

> Represents a custom tab.

# CustomTab

Represents a custom tab.

This object is available in the Tooling API version 33.0 and later.

## Supported Calls

create(), delete(), query(), retrieve(), update()

## Fields

| Field | Details |
| --- | --- |
| ContentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRead-only. The ID of the item that the custom tab points to. For Lightning components, this is the ID of the component bundle. For custom object tabs, this field is null. |
| Description | TypestringPropertiesFilter, Nillable, SortDescriptionThe tab’s description. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe developer’s internal name for the custom tab. |
| EncodingKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRead-only. Type of encoding assigned to the URL called by the tab. The default encoding setting is Unicode: UTF-8. Change it if you are passing information to a URL that requires data in a different format. This option is available when the value URL is selected in the tab type. Valid values are:UTF-8—Unicode (UTF-8)ISO-8859-1—General US & Western Europe (ISO-8859–1, ISO-LATIN-1)Shift_JIS—Japanese (Shift-JIS)ISO-2022-JP—Japanese (JIS)EUC-JP—Japanese (EUC-JP)x-SJIS_0213—Japanese (Shift-JIS_2004)ks_c_5601-1987—Korean (ks_c_5601-1987)Big5—Traditional Chinese (Big5)GB2312—Simplified Chinese (GB2312)Big5-HKSCS—Traditional Chinese Hong Kong (Big5–HKSCS) |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe name of the tab. The value of this field depends on the type of tab, and the API version.For custom object tabs, the fullName is the developer-assigned name of the custom object (MyCustomObject__c, for example).For Web tabs, the fullName is the developer-assigned name of the tab (MyWebTab, for example).Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| HasSidebar | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the tab displays the sidebar panel. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionRequired. The label for the custom tab, which displays in Setup. |
| Metadata | TypeCustomTabMetadataPropertiesCreate, Nillable, UpdateDescriptionCustom tab metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| MotifName | TypestringPropertiesFilter, Group, SortDescriptionRead-only. The name of the tab style assigned to the custom tab. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package of which the custom tab is a part. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of custom tab. Valid values are:apexPageauracustomObjectflexiPagesControlurl |
| Url | TypestringPropertiesFilter, Nillable, SortDescriptionThe URL for the external web-page to embed in this tab. |
