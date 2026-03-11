---
title: "OutboundNetworkConnection"
domain: tooling-api
topic: outboundnetworkconnection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.367Z
keywords: [OutboundNetworkConnection, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# OutboundNetworkConnection

# OutboundNetworkConnection

Represents a private connection between a Salesforce org and a third-party data service. The connection is outbound because the callouts are going *out* of Salesforce.Available in API version 49.0 and later.

## Supported SOAP Calls

create(), delete(), describeObject(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETEGETPATCHPOST

## Fields

| Field | Details |
| --- | --- |
| ConnectionType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the cloud provider of the connection. The only valid value is AwsPrivateLink. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA description of the connection. Maximum of 255 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer’s internal name for the outbound network connection used in the API. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated type in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| isActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Specifies whether the connection is active (true) or not(false). The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the connection. The value for this field is the language value of the org. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe internal label for the connection. |
| Metadata | Typemns:OutboundNetworkConnectionPropertiesCreate, Nillable, UpdateDescriptionProvides access to the associated type and related fields in Metadata API. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the connection. An outbound network connection can be in an extension namespace different than the object. |
| Status | TypepicklistPropertiesFilter, Group, Restricted Picklist, SortDescriptionRequired. Connection status. The connection is initially Unprovisioned and moves through the other states automatically after an admin performs a provision, sync, or teardown action. The valid values are:UnprovisionedAllocatingPendingAcceptancePendingActivationRejectedRemotelyDeletedRemotelyTeardownInProgressReady |
|  |  |