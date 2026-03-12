---
title: "PrivacyObjectSession"
domain: object-reference
topic: privacyobjectsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.103Z
estimatedTokens: 1374
keywords: [PrivacyObjectSession, status, processed, past, ongoing, scheduled, policy, jobs, Privacy, Center, API, version, 59.0, later, Calls]
---

# PrivacyObjectSession

> Represents the status of each object being processed in past, ongoing, and
         scheduled policy jobs in Privacy Center. This object is available in API version 59.0
      and later.

# PrivacyObjectSession

Represents the status of each object being processed in past, ongoing, and scheduled policy jobs in Privacy Center. This object is available in API version 59.0 and later.

See the status of each object as a policy executes. For example, if a Data Management policy includes an Account object and a Contact object, then a PrivacyObjectSession record is created for each object.

Each object in a policy has five potential queues to enter. The first queue captures and stores records targeted by the policy filters. If the first queue run fails to capture every record, then the object goes through three retry attempts to capture the remaining records. The fifth queue stores the record IDs of any records that weren’t captured in any of the four attempts.

This object is Read-only.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available for users with the Privacy Center license and the Manage Privacy Center Policies user permission.

## Fields

| Field | Details |
| --- | --- |
| CurrentEntity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object in the policy. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRepresents the job session record. This is a serialized, automatically generated number field. |
| ObjectFailureLog | TypetextareaPropertiesNillableDescriptionThis field is reserved for later use. |
| ObjectStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe policy execution status for the object.Possible values are:processing_completedprocessing_failedprocessing_ongoingprocessing_pendingtraversal_completedtraversal_failedtraversal_ongoing |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the owner of the account associated with the customer that the policy was executed for.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PolicyNode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the object in the serialized policy. This field associates the object session in the policy execution with the coordinating object in the Privacy Center policy. |
| Position | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRepresents a record’s position in the batch queue for the object being processed. |
| PrivacyJobSessionObjectId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the policy job session.This field is a relationship field.Relationship NamePrivacyJobSessionObjectRelationship TypeLookupRefers ToPrivacyJobSession |
| ProcessType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of action being executed on the object in the policy.Possible values are:deletemaskretry_deleteretry_mask |
| ProcessedFailures | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records the policy execution failed to process. |
| ProcessedSuccesses | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records the policy execution successfully processed. |
| ProcessedTotal | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of records processed in the policy job. |
| Processor | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the deletion, masking, or traversal processor executing the policy job. |
| Queue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is reserved for later use. |
| QueueLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of records in the queue to be processed by the policy job. |
| RecordsAffected | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records processed by the policy job. |
| Retry | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe queue number of the retry session after a failed policy execution attempt. Each attempt to retry the policy execution is put into a retry queue. |
| TraversalEndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe end time of the record-capturing phase for the object session. |
| TraversalStartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe start time of the record-capturing phase for the object session. |
| UniqueConstraint | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionFor internal use only. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrivacyObjectSessionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PrivacyObjectSessionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PrivacyObjectSessionOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PrivacyObjectSessionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
