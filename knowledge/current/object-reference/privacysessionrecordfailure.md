---
title: "PrivacySessionRecordFailure"
domain: object-reference
topic: privacysessionrecordfailure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.125Z
estimatedTokens: 643
keywords: [PrivacySessionRecordFailure, error, messages, encountered, policy, job, executions, Privacy, Center, API, version, 59.0, later, Calls, Special]
---

# PrivacySessionRecordFailure

> Represents error messages encountered during policy job executions in Privacy
         Center. This object is available in API version 59.0 and later.

# PrivacySessionRecordFailure

Represents error messages encountered during policy job executions in Privacy Center. This object is available in API version 59.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available for users with the Privacy Center license and the Manage Privacy Center Policies user permission.

## Fields

| Field | Details |
| --- | --- |
| ErrorMessage | TypetextareaPropertiesNillableDescriptionThe description of the error encountered during the policy job execution. |
| ErrorType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of error encountered during the policy job execution. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRepresents the job session record. This is a serialized, automatically generated number field. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the owner of the account associated with the customer that the policy was executed for.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PrivacyObjectSessionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the object in the policy job session.This field is a relationship field.Relationship NamePrivacyObjectSessionRelationship TypeLookupRefers ToPrivacyObjectSession |
| RecordIdNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the record that failed to be processed by the policy job. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrivacySessionRecordFailureOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PrivacySessionRecordFailureShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PrivacySessionRecordFailureOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PrivacySessionRecordFailureShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
