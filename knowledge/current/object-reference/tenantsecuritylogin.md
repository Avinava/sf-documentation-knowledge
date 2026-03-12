---
title: "TenantSecurityLogin"
domain: object-reference
topic: tenantsecuritylogin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.970Z
estimatedTokens: 1066
keywords: [TenantSecurityLogin, Stores, login, user, tenant, grouped, date, query, how, times, logged, specific, username, password, SSO]
---

# TenantSecurityLogin

> Stores the login details of a single user to a tenant, grouped by
         date and type. You can query this object to find out how many times the user logged in to a
         specific tenant using a specific login type (for example, username/password or SSO). This
         object is available to Security Center subscribers in API version 53.0 and later.

# TenantSecurityLogin

Stores the login details of a single user to a tenant, grouped by date and type. You can query this object to find out how many times the user logged in to a specific tenant using a specific login type (for example, username/password or SSO). This object is available to Security Center subscribers in API version 53.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the individual detail record. This field is unique within your org. |
| LastLoginDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last time the user logged in. |
| LoginCount | TypeintPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe number of times the user has logged in to the tenant. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data collected.The supported metric types are:LOGIN_PWLESSLOGIN_PWLESS2FALOGIN_UNPWLOGIN_UNPW2FALOGIN_SSOLOGIN_SSO2FALOGIN_OAUTHLOGIN_OAUTH2FA |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for which data is being collected. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant that was scored. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant that was scored. |
| UserEmail | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe email address of the user. |
| Username | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe user’s org username. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityLoginChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityLoginFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityLoginHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityLoginOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityLoginShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityLoginChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityLoginFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityLoginHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityLoginOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityLoginShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
