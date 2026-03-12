---
title: "PrivacyJobSession"
domain: object-reference
topic: privacyjobsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.091Z
estimatedTokens: 1239
keywords: [PrivacyJobSession, status, past, ongoing, scheduled, policy, jobs, Privacy, Center, API, version, 59.0, later, Calls, Special]
---

# PrivacyJobSession

> Represents the status of past, ongoing, and scheduled policy jobs in Privacy
         Center. This object is available in API version 59.0 and later.

# PrivacyJobSession

Represents the status of past, ongoing, and scheduled policy jobs in Privacy Center. This object is available in API version 59.0 and later.

This object is Read-only.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available for users with the Privacy Center license and the Manage Privacy Center Policies user permission.

## Fields

| Field | Details |
| --- | --- |
| CreationDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the policy job was created. |
| CurrentObject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object that the policy job is currently processing. |
| EndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the policy job finished executing. |
| FailureLog | TypetextareaPropertiesNillableDescriptionThe description of why the policy job failed to execute. |
| JobStartType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionHow the policy job session was started.Possible values are:manualscheduled |
| JobStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionRepresents the status of the policy job session.Possible values are:cancelledcompletedfailuresinactiverunningrunning_nextscheduledsuspended |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRepresents the job session record. This is a serialized, automatically generated number field. |
| OptionsProcessingFailed | TypebooleanPropertiesFilterDescriptionIndicates that the policy job session failed to process the records with the deletion or masking rules in the policy. |
| OptionsTraversalComplete | TypebooleanPropertiesFilterDescriptionIndicates that the policy job session was completed without errors. |
| OptionsTraversalFailed | TypebooleanPropertiesFilterDescriptionIndicates that the policy job session was completed with errors. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the owner of the account associated with this customer.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PolicyDescription | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of the policy the job session is associated with. |
| PolicyName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the policy the job session is associated with. |
| PolicyType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of policy the job session is associated with.Possible values are:datamanagement—Data Management.datamask—This policy type is reserved for future use.rtbf— Right to Be Forgotten. |
| PrivacyPolicyDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the policy the job session is executing for.This field is a relationship field.Relationship NamePrivacyPolicyDefinitionRelationship TypeLookupRefers ToPrivacyPolicyDefinition |
| PrivacyRtbfRequestId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Right to Be Forgotten request the policy job is executing for.This field is a relationship field.Relationship NamePrivacyRtbfRequestRelationship TypeLookupRefers ToPrivacyRTBFRequest |
| ScheduledTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the policy job session is scheduled to run. |
| SerializedPolicy | TypetextareaPropertiesNillableDescriptionThe serial ID of a snapshot of the policy the job session is for. A snapshot of the policy is taken to maintain consistent metadata for the policy the job is for, in case changes are made to the policy while the job is executing. |
| StartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the policy job session started executing. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrivacyJobSessionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PrivacyJobSessionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PrivacyJobSessionOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PrivacyJobSessionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
