---
title: "TenantSecurityTenantInfo"
domain: object-reference
topic: tenantsecuritytenantinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.068Z
estimatedTokens: 1001
keywords: [TenantSecurityTenantInfo, Stores, changes, tenant, history, API, version, 56.0, later, Calls, Special, Access, Rules, Usage, Associated]
---

# TenantSecurityTenantInfo

> Stores information on changes related to the tenant history. This object
      is available in API version 56.0 and later.

# TenantSecurityTenantInfo

Stores information on changes related to the tenant history. This object is available in API version 56.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read only.

## Fields

| Field | Details |
| --- | --- |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe unique identifier for this record. |
| Instance | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe instance that the tenant is being hosted on. |
| MyDomainName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the domain for this tenant. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for which the data is being collected. |
| SandboxAlias | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe alias specified by the user when the user creates a Sandbox. |
| SandboxType | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe type specified by the user when the user creates a Sandbox. |
| Status | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe status of the tenant. For example, active or inactive. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the tenant (org) that this record is for. |
| TenantType | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe type of tenant in this org. |

## Usage

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TenantSecurityTenantInfoChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityTenantInfoFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityTenantInfoHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityTenantInfoOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityTenantInfoShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityTenantInfoChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityTenantInfoFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityTenantInfoHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityTenantInfoOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityTenantInfoShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
