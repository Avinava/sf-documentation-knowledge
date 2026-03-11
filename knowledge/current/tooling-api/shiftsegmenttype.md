---
title: "ShiftSegmentType"
domain: tooling-api
topic: shiftsegmenttype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.775Z
keywords: [ShiftSegmentType, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# ShiftSegmentType

# ShiftSegmentType

Represents shift segment type settings for Shift Scheduling and Workforce Engagement. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

This object is available only if Shift Scheduling or Workforce Engagement is enabled in your org. To view, create, edit, and delete records, the user requires the Shift Scheduling Planner or Workforce Engagement Planner permission set.

## Fields

| Field | Details |
| --- | --- |
| AdherenceThreshold | TypeintPropertiesFilter, Group, SortDescriptionA threshold, in minutes. If the agent starts the scheduled activity within this threshold, the shift segment activity is in adherence. |
| Category | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionA category for the type of shift segment.Possible values are:Break—Break times, such as a coffee or lunch break.NonWork—Non-working activities, such as training or meetings.Work—Work activities, such as answering calls, responding to chats, or handling cases. |
| Color | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSets a background color when shift activities of this type are displayed in the UI. Use a 3- or 6-digit hexadecimal format, for example #FF00FF. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata type in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the shift segment type is active (true) or not (false).The default value is true. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the shift segment type.Possible values are the languages that Workforce Engagement supports. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe label of the shift segment type. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |