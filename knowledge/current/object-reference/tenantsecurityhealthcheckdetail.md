---
title: "TenantSecurityHealthCheckDetail"
domain: object-reference
topic: tenantsecurityhealthcheckdetail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.948Z
estimatedTokens: 1135
keywords: [TenantSecurityHealthCheckDetail, Stores, Health, Check, scores, connected, tenant, detail, Security, Center, displays, settings, tenants, place, risks]
---

# TenantSecurityHealthCheckDetail

> Stores the details of Health Check scores for a connected tenant. The
         Health Check detail page in Security Center displays scores and settings for all your
         tenants in one place. Use this object to get settings and risks per tenant on a selected
         date. This object is available to Security Center subscribers in API version 53.0 and
      later.

# TenantSecurityHealthCheckDetail

Stores the details of Health Check scores for a connected tenant. The Health Check detail page in Security Center displays scores and settings for all your tenants in one place. Use this object to get settings and risks per tenant on a selected date. This object is available to Security Center subscribers in API version 53.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| HealthCheckSettingIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the Health Check setting. This field is unique within your org. |
| HealthCheckTrendKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Health Check trend related to the Health Check detail records. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the tenant that was scored. |
| OrgValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe org’s value for the security setting. |
| RiskType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe level of risk of the org’s security setting value.Possible values are:HIGH_RISKMEDIUM_RISKMEETS_STANDARD |
| Setting | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the security setting. For example, Minimum Password Length. |
| SettingGroup | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the security setting group in Setup that this setting is in. For example, Password Policies. |
| SettingRiskCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe level of risk of the org’s security settings.Possible values are:HIGH_RISKINFORMATIONALLOW_RISKMEDIUM_RISK |
| StandardValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe recommended standard value for the security setting. |
| Tenant | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the tenant that was scored. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityHealthCheckDetailChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityHealthCheckDetailFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityHealthCheckDetailHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityHealthCheckDetailOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityHealthCheckDetailShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityHealthCheckDetailChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityHealthCheckDetailFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityHealthCheckDetailHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityHealthCheckDetailOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityHealthCheckDetailShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
