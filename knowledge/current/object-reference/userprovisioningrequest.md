---
title: "UserProvisioningRequest"
domain: object-reference
topic: userprovisioningrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:18.978Z
estimatedTokens: 2670
keywords: [UserProvisioningRequest, individual, provisioning, user, account, third-party, service, system, another, Salesforce, organization, API, version, 33.0, later]
---

# UserProvisioningRequest

> Represents an individual provisioning request to create, update, or
			delete a single user account in a third-party service system (or another Salesforce
			organization). This object is available in API version 33.0
			and later.

# UserProvisioningRequest

Represents an individual provisioning request to create, update, or delete a single user account in a third-party service system (or another Salesforce organization). This object is available in API version 33.0 and later.

A UserProvisioningRequest (UPR) record is created for each provisioning action for each user, and for each connected app available to the user. For example, if a user has two connected apps, and a provisioning request is sent to two different services to create an account for the user, Salesforce creates two UPR objects. Provisioning actions include creating, updating, or deleting a user account.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique name of the connected app associated with the service provider. |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the approval for the current request. If the user provisioning setup for the connected app does not have an approval process enabled, the status is Not Required. If an approval process is enabled, supported values are:Required— An approval process is enabled in the user provisioning setup for the associated connected app, but there is no response to the request yet.Not Required— An approval process is not enabled in the user provisioning setup for the associated connected app.ApprovedDenied |
| ConnectedAppId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe 18-digit application ID for the connected app.This is a relationship field.Relationship NameConnectedAppRelationship TypeLookupRefers ToConnectedApplication |
| ExternalUserId | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier for the user in the target system. |
| ManagerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce ID of the user who manages the user specified in the SalesforceUserId field. If an approval process is configured for the user provisioning request. this value allows the manager to approve the request. Available in API version 34.0 and later.This is a relationship field.Relationship NameManagerRelationship TypeLookupRefers ToUser |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique name for this object. |
| Operation | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe Apex method called by the trigger associated with the provisioning request (typically a change to the User object). Supported values are:CreateReadUpdateDeactivateActivateFreezeUnfreezeReconcileLinkingFor example, when the User object field isActive is set to false, the UPR object Operation field value is set to Deactivate. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSalesforce ID of the Group or User who owns this object.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentID | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionWhen a retry event is created, the failed UPR is cloned and resubmitted. This field contains a lookup to the failed UPR that was cloned to create the current record.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToUserProvisioningRequest |
| Retry Count | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionNumber of retry attempts performed on a UPR. Retry Count enables custom business logic such as “Retry 5 times then stop and notify your admin.” |
| SalesforceUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce ID of the user making the request.This is a relationship field.Relationship NameSalesforceUserRelationship TypeLookupRefers ToUser |
| ScheduleDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWhen to send this request to the service provider.NoteScheduling is not implemented yet. Currently, provisioning changes are queued immediately to be sent to the service provider. |
| State | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of this request. Supported values are:NewRequestedCompletedFailedCollectingCollectedAnalyzingAnalyzedCommittingRetriedManually CompletedThe State goes from New to Requested to Completed or Failed, unless a reconciliation process is occurring. For details about the reconciliation process State value changes, see Usage.The State goes from Failed to Retried or Manually Completed when troubleshooting UPR failures. For details about handling failures, see State Values for Managing Provisioning Failures. |
| UserProvAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID value of the associated UserProvAccount object.This is a relationship field.Relationship NameUserProvAccountRelationship TypeLookupRefers ToUserProvAccount |
| UserProvConfigId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID value of the associated UserProvisioningConfig object. Available in API version 34.0 and later.This is a relationship field.Relationship NameUserProvConfigRelationship TypeLookupRefers ToUserProvisioningConfig |

## Usage

The State value changes during a reconciliation process (Operation = Reconcile) to gather and compare users on the third-party system to Salesforce users. Typically, when a UPR entry is first created, it has a State value of New. When a collection process is triggered, the State transitions to Collecting until that process is finished and the State is Collected. When an analyze process is triggered, the State transitions to Analyzing until that process is finished and the State is Analyzed. If a process commits the request, the State then transitions to Committing, and the properties move from the UserProvAccountStaging object to the UserProvAccount object. When those properties are saved in the UserProvAccount object, the State transitions to Completed.

However, the State does not necessarily start at New. For example, UserProvAccountStaging entries can be inserted programmatically. If a process is initiated that triggers linking these rows to accounts on the third-party service, a UPR entry could start with the Analyzing State.

Also, the State cannot go backwards from an active task. For example, a successful Analyzing State must progress to Analyzed; unless the active process fails, and then the State must change to Failed. Certain State transitions cannot be made programmatically and must be triggered by Salesforce.

The following table shows the State transitions that can occur for each State value. Each row corresponds to a current State value and each column corresponds to a new State after a potential transition.

-   ![no](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2Fx_16.png&folder=object_reference) — the transition to this value is not allowed.
-   ![yes](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2Fcheckmark_16.png&folder=object_reference) — the transition to this value is allowed.
-   ![Salesforce only](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2Fsalesforce_logo_16.png&folder=object_reference) — only Salesforce can transition the State to this value.

|  | New | Requested | Collecting | Collected | Analyzing | Analyzed | Committing | Completed | Failed | Retried | Manually Completed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| New |  |  |  |  |  |  |  |  |  |  |  |
| Requested |  |  |  |  |  |  |  |  |  |  |  |
| Collecting |  |  |  |  |  |  |  |  |  |  |  |
| Collected |  |  |  |  |  |  |  |  |  |  |  |
| Analyzing |  |  |  |  |  |  |  |  |  |  |  |
| Analyzed |  |  |  |  |  |  |  |  |  |  |  |
| Committing |  |  |  |  |  |  |  |  |  |  |  |
| Completed |  |  |  |  |  |  |  |  |  |  |  |
| Failed |  |  |  |  |  |  |  |  |  |  |  |
| Retried |  |  |  |  |  |  |  |  |  |  |  |
| Manually Completed |  |  |  |  |  |  |  |  |  |  |  |

## State Values for Managing Provisioning Failures

The state value changes to Failed for several reasons, such as network outages, session timeouts, permissions issues, and record locks. The Failed state can transition to either Retried or Manually Completed to indicate what action was taken to address the failure. Actions can include correcting the root cause of the failure and requesting that the provisioning engine retry the UPR. Or, it can be completing the action against the target manually. Each UPR is an independent transaction and it’s possible the retry causes a failure with a different root cause. So it’s hard to distinguish failed events that you addressed from the ones that require more action.

If you tried to correct the cause of the failure and requested the provisioning engine to retry the UPR, you can mark the failed UPR Retried. Or, if the action against the target was completed manually, you can mark it Manually Completed.

When a retry event is created, the failed UPR is cloned, and resubmitted. The ParentID field contains a lookup to the failed UPR to use to clone the new UPR. The Retry Count field contains the number of retry attempts that were performed on a UPR. With the Retry Count field, you can add custom business logic like "Retry 5 times then stop and notify your admin."

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[UserProvisioningRequestOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 34.0)

Sharing rules are available for the object.

[UserProvisioningRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 34.0)

Sharing is available for the object.

## Related Topics

- UserProvisioningRequestOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- UserProvisioningRequestShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
