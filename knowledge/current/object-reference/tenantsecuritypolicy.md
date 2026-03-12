---
title: "TenantSecurityPolicy"
domain: object-reference
topic: tenantsecuritypolicy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.029Z
estimatedTokens: 1056
keywords: [TenantSecurityPolicy, Stores, security, policies, created, deployed, Center, Define, Deploy, subscribers, API, version, 54.0, later, Calls]
---

# TenantSecurityPolicy

> Stores security policies created and deployed in Security Center. For
         more information, see Define and Deploy Security Policies. This
      object is available to Security Center subscribers in API version 54.0 and later.

# TenantSecurityPolicy

Stores security policies created and deployed in Security Center. For more information, see [Define and Deploy Security Policies](https://help.salesforce.com/s/articleView?id=xcloud.security_center_deploy_policies.htm&type=5&language=en_US). This object is available to Security Center subscribers in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is read/write.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe API name of the policy. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the policy. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the policy. |
| PolicyData | TypetextareaPropertiesCreate, UpdateDescriptionThe policy details contained in JSON format. |
| PolicyIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of this policy. Contains a unique virtual key from child to parent. |
| PolicyType | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe type of policy. For example, Health Check Baseline. |
| SourceRowIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the policy that is applied to the tenant. This value is specific to the org that owns this record. |
| Status | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe status of the policy. For example, the policy is active or inactive. |
| Version | TypeintPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe version of the policy. |

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
