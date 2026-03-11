---
title: "EventDelivery"
domain: tooling-api
topic: eventdelivery
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.813Z
keywords: [EventDelivery, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# EventDelivery

# EventDelivery

Represents how an event instant maps to a target payload. Removed in API version 46.0. Available in API version 41.0 to 45.0.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET, POST, PUT, PATCH, HEAD

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer’s internal name for the event delivery used in the API.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EventSubscriptionId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the subscription to deliver the data to. |
| FullName | TypestringPropertiesCreate, GroupGroup, NillableDescriptionThe unique name used as the event delivery identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, GroupGroup, Nillable, Restricted picklist, Sort,DescriptionThe language of the MasterLabel. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionMaster label for the event delivery. This internal label doesn’t get translated. |
| Metadata | Typemns:EventDeliveryPropertiesCreate, Nillable, UpdateDescriptionThe event delivery’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ReferenceData | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUser-defined non-unique identifier. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. Determines what action occurs when the event is delivered to the listeners on behalf of the subscribers.Valid values are:StartFlow—When the event occurs, it’s delivered to a flow of type CustomEvent. Those flows are built through Process Builder.ResumeFlow—Reserved for future use. |