---
title: "FlowInterview"
domain: object-reference
topic: flowinterview
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.266Z
estimatedTokens: 1160
keywords: [FlowInterview, flow, interview, running, instance, API, version, 32.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# FlowInterview

> Represents a flow interview. A flow interview is a
         running instance of a flow. This object is available in API version 32.0 and
      later.

# FlowInterview

Represents a flow interview. A flow interview is a running instance of a flow. This object is available in API version 32.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To delete a flow interview, you must have the “Manage Flow” user permission. All other calls require the “Run Flows” user permission or the Flow User field enabled on the user detail page. If **Override default behavior and restrict access to enabled profiles or permission sets** is selected for an individual flow, access to that specific flow and its interviews is given to users by profile or permission set.

## Fields

| Field Name | Details |
| --- | --- |
| CurrentElement | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe flow element at which the interview is paused. |
| CurrentFlowVersion | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionFor internal use only. |
| EngineType | TypepicklistPropertiesFilter, Group, SortDescriptionThe engine type used to run the flow interview. |
| Error | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe error message that explains why the flow interview failed. This field is available in API version 62.0 and later. |
| FlowVersionViewId | TypestringPropertiesFilter, Nillable, SortDescriptionThis field is a relationship field. This field is available in API version 51.0 and later.Relationship NameFlowVersionViewRelationship TypeLookupRefers ToFlowVersionView |
| Guid | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionGlobally unique identifier for the interview. |
| InterviewLabel | TypestringPropertiesFilter, Nillable, SortDescriptionLabel for the interview. This label helps users and administrators differentiate interviews from the same flow.In the user interface, this label appears in the Paused Flow Interviews component on the user’s Home tab and in the list of paused flow interviews in Setup. |
| InterviewStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionStatus of the interview. Valid values are:Completed—This flow is complete. There are no more records to process.Error—This flow has one or more errors. To resolve each error, check the error code for instructions.Paused—This flow is paused. No new processes are added until the flow is resumed.Running—This flow is running or is ready to run.VersionPaused—This flow version is paused. No more records are processed until the flow is resumed. This value is available in API version 60.0 and later.This field is available in API version 50.0 and later. |
| MasterFlowVersion | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionFor internal use only. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for the interview. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns the interview. Only this user or an admin can resume the interview.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PauseLabel | TypestringPropertiesFilter, Nillable, SortDescriptionInformation about why the interview was paused. This string is entered by the user who paused the flow interview. The label is Why Paused. |
| SerializedView | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionFor internal use only. |
| WasPausedFromScreen | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether the flow interview was paused by a user from a flow Screen element (true ) or not (false ). This field is available in API version 46.0 and later. |

## Associated Objects

This object has these associated objects. Unless noted, these objects are available in the same API version as this object.

[FlowInterviewOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FlowInterviewShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FlowInterviewOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FlowInterviewShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
