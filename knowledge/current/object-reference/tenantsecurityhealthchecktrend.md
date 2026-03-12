---
title: "TenantSecurityHealthCheckTrend"
domain: object-reference
topic: tenantsecurityhealthchecktrend
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.955Z
estimatedTokens: 1154
keywords: [TenantSecurityHealthCheckTrend, Stores, history, Security, Health, Check, scores, connected, tenant, Center, displays, average, risk, settings, tenants]
---

# TenantSecurityHealthCheckTrend

> Stores the history of Security Health Check scores for a connected
         tenant within Security Center. Health Check in Security Center displays Health Check scores
         and the average risk settings for all your tenants in one place. This object belongs to the
         parent tenant and stores Health Check data pushed from child tenants. This object is
         available for Security Center subscribers in API version 53.0 and later.

# TenantSecurityHealthCheckTrend

Stores the history of Security Health Check scores for a connected tenant within Security Center. Health Check in Security Center displays Health Check scores and the average risk settings for all your tenants in one place. This object belongs to the parent tenant and stores Health Check data pushed from child tenants. This object is available for Security Center subscribers in API version 53.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Baseline | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe definition of an org’s security settings standards. |
| HighRisk | TypeintPropertiesFilter, Group, SortDescriptionIndicates that fields with this picklist value contain data highly sensitive to your company. |
| Informational | TypeintPropertiesFilter, Group, SortDescriptionIndicates that fields with this picklist value contain data that isn't sensitive for your company. |
| LowRisk | TypeintPropertiesFilter, Group, SortDescriptionIndicates that fields with this picklist value contain data with low sensitivity for your company. |
| MediumRisk | TypeintPropertiesFilter, Group, SortDescriptionIndicates that fields with this picklist value contain data with moderate sensitivity for your company. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the tenant that was scored. |
| ProcessedTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time when the Health Check score was calculated. |
| Score | TypedoublePropertiesFilter, SortDescriptionThe summary score that shows how your org measures against a security baseline. |
| ScoreDelta | TypedoublePropertiesFilter, Nillable, SortDescriptionThe percentage amount that the Health Check score changed. |
| Tenant | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the tenant that was scored. |
| TenantOriginalIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the Health Check Trend record for a tenant. This field is unique within your org. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityHealthCheckTrendChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityHealthCheckTrendFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityHealthCheckTrendHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityHealthCheckTrendOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityHealthCheckTrendShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityHealthCheckTrendChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityHealthCheckTrendFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityHealthCheckTrendHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityHealthCheckTrendOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityHealthCheckTrendShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
