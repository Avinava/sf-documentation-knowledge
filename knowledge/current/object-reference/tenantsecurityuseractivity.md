---
title: "TenantSecurityUserActivity"
domain: object-reference
topic: tenantsecurityuseractivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.102Z
estimatedTokens: 1091
keywords: [TenantSecurityUserActivity, Stores, how, user, interacts, tenant, determine, whether, reevaluate, user’s, access, org, security, purposes, check]
---

# TenantSecurityUserActivity

> Stores details related to how a user interacts with a tenant. Use this object to
      determine whether to reevaluate a user’s access to your org for security purposes. You can
      check whether a user has never logged in, hasn’t been active for 90 days, has a frozen
      account, or isn’t using multi-factor authentication. This object is available to Security
      Center subscribers in API version 53.0 and later.

# TenantSecurityUserActivity

Stores details related to how a user interacts with a tenant. Use this object to determine whether to reevaluate a user’s access to your org for security purposes. You can check whether a user has never logged in, hasn’t been active for 90 days, has a frozen account, or isn’t using multi-factor authentication. This object is available to Security Center subscribers in API version 53.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object can only be read and queried.

## Fields

| Field | Details |
| --- | --- |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the individual detail record. This field is unique within your org. |
| LastLoginDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last time the user logged in. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data being collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for which data is being collected. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant where the user activity happened. |
| UserCreatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the user was created. |
| UserEmail | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe email address of the user. |
| UserLicense | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe license assigned to the user. |
| Username | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe user’s org username. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityUserActivityChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityUserActivityFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityUserActivityHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityUserActivityOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityUserActivityShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityUserActivityChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityUserActivityFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityUserActivityHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityUserActivityOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityUserActivityShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
