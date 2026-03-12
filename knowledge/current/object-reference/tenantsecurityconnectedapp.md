---
title: "TenantSecurityConnectedApp"
domain: object-reference
topic: tenantsecurityconnectedapp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.874Z
estimatedTokens: 1273
keywords: [TenantSecurityConnectedApp, Stores, connected, app, added, removed, Security, Center, tenant, subscribers, API, version, 53.0, later, Calls]
---

# TenantSecurityConnectedApp

> Stores the details for a connected app that was added to or removed from a Security
      Center tenant. This object is available to Security Center subscribers in API version 53.0 and
      later.

# TenantSecurityConnectedApp

Stores the details for a connected app that was added to or removed from a Security Center tenant. This object is available to Security Center subscribers in API version 53.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object can only be read and queried.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe action taken on the connected app within a tenant.Possible values are:ADDEDREMOVEDUPDATED |
| ActionBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user who performed the action on the connected app. |
| ActionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the action was taken. |
| AppName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the connected app. |
| AuthorizedBy | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe user who authorized the connected app to be installed. |
| AuthorizedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the connected app was authorized for installation. |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the individual detail record. This field is unique within your org. |
| LastUsedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the connected app was used for authentication. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data being collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for which data is being collected. |
| Publisher | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents if the relevant tenant is the original publisher of the connected app for all connected tenants in the org. |
| Scope | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe scope or scopes assigned to the connected app. A scope defines the type of protected resource that the connected app can access. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the relevant tenant. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant that the connected app is connected to. |
| Version | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe current version of the connected app. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityConnectedAppChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityConnectedAppFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityConnectedAppHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityConnectedAppOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityConnectedAppShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityConnectedAppChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityConnectedAppFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityConnectedAppHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityConnectedAppOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityConnectedAppShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
