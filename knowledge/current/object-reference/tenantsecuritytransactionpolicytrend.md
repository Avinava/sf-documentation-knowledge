---
title: "TenantSecurityTransactionPolicyTrend"
domain: object-reference
topic: tenantsecuritytransactionpolicytrend
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.075Z
estimatedTokens: 1161
keywords: [TenantSecurityTransactionPolicyTrend, Stores, changes, count, Transaction, Security, Policies, connected, tenant, Center, subscribers, API, version, 55.0, later]
---

# TenantSecurityTransactionPolicyTrend

> Stores changes to the count of Transaction Security Policies for a
         connected tenant within Security Center. This object is available for Security Center
      subscribers in API version 55.0 and later.

# TenantSecurityTransactionPolicyTrend

Stores changes to the count of Transaction Security Policies for a connected tenant within Security Center. This object is available for Security Center subscribers in API version 55.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionStores information on a change to the policy. Available options include:ADDEDREMOVEDUPDATED |
| ActionBy | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the person who made this change. |
| ActionConfig | TypetextareaPropertiesNillableDescriptionContains a JSON description for how a user is alerted to an action on the policy. For example:In-appEmail |
| ActionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionWhen this change was made. |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUnique identifier for this detail record. |
| EventName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the event of the corresponding Transaction Security Policy. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the corresponding TenantSecurityMonitorMetric. |
| MetricsType | TypestringPropertiesFilter, Group, SortDescriptionThe type of metric for the data collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for the data collected. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant (org) that this record is for. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant (org) that this record is for. |
| TransactionPolicyState | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe state of the transaction security policy. The possible states are ENABLED or DISABLED. |
| TransactionPolicyType | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe type of policy configured. The available types are standard policy or a custom Apex policy. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityPolicyChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityPolicyFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityPolicyHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityPolicyOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityPolicyShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityPolicyChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityPolicyFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityPolicyHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityPolicyOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityPolicyShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
