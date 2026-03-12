---
title: "TenantSecurityUserPerm"
domain: object-reference
topic: tenantsecurityuserperm
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:18.110Z
estimatedTokens: 1182
keywords: [TenantSecurityUserPerm, Stores, permissions, assigned, user, tenants, Security, Center, subscribers, API, version, 53.0, later, Calls, Special]
---

# TenantSecurityUserPerm

> Stores information on permissions assigned to a user. Use this object to see which
      tenants a user is assigned to. This object is available to Security Center subscribers in API
      version 53.0 and later.

# TenantSecurityUserPerm

Stores information on permissions assigned to a user. Use this object to see which tenants a user is assigned to. This object is available to Security Center subscribers in API version 53.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object can only be read and queried.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe action taken regarding the user’s permission. The options are:AddedRemoved |
| ActionBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is reserved for future use. |
| ActionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the permission action was taken. |
| Context | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the profile or permission set assigned to the user. |
| ContextType | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionIndicates the method through which the permission was granted. The options are:Permission SetProfile |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the individual detail record. This field is unique within your org. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of metric that the assigned permission represents. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for which data is being collected. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant where the user permission was applied. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the connected tenant where the user permission was applied. |
| UserEmail | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe user’s email address. |
| UserLicense | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe license assigned to the user. |
| Username | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe user’s org username. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityUserPermChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityUserPermFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityUserPermHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityUserPermOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityUserPermShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityUserPermChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityUserPermFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityUserPermHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityUserPermOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityUserPermShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
