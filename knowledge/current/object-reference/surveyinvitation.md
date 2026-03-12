---
title: "SurveyInvitation"
domain: object-reference
topic: surveyinvitation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.512Z
estimatedTokens: 1606
keywords: [SurveyInvitation, invitation, sent, participant, survey, Calls, Associated, Objects]
---

# SurveyInvitation

> Represents the invitation sent to a participant to complete the
			survey.

# SurveyInvitation

Represents the invitation sent to a participant to complete the survey.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| CommunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the Experience Cloud site that you want to send the survey to. |
| ContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the contact who received the invitation. This field is available in API v49.0 and later. |
| EmailBrandingId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the survey email branding object that’s associated with this invitation. |
| InvitationLink | TypeurlPropertiesGroup, NillableDescriptionThe URL to the survey that is sent to participants. To query on this field, you need access to the associated Survey record. |
| InviteExpiryDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the survey invitation expires. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether this is the default survey invitation to use when the survey is sent to participants. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this survey invitation. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this survey invitation. |
| LeadId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the lead who received the invitation. This field is available in API v49.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the survey invitation that appears in the UI. |
| OptionsAllowGuestUserResponse | TypebooleanPropertiesCreate, Filter, UpdateDescriptionDetermines whether participants who don’t have a Salesforce account can complete the survey. |
| OptionsAllowParticipantAccessTheirResponse | TypebooleanPropertiesCreate, Filter, UpdateDescriptionDetermines whether participants can access a copy of their responses after they complete the survey. |
| OptionsCollectAnonymousResponse | TypebooleanPropertiesCreate, Filter, UpdateDescriptionDetermines whether participants can complete the survey anonymously. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the survey invitation. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the participant if the participant is a Salesforce contact, user, or lead. |
| ResponseStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of a participant’s response to the survey that’s associated with the survey invitation. Possible values include:NotStarted — For an invitation with a ParticipantID, it means that the recipient hasn’t opened the survey. For an invitation without the ParticipantID, it means that none of the recipients have opened the survey.Started — For an invitation with a ParticipantID, it means that the recipient opened the survey. For an invitation without the ParticipantID, it means that the survey has been opened by at least one recipient.Paused — For an invitation with a ParticipantID, it means that the recipient has paused the survey. For an invitation without the ParticipantID, it means that the survey has been paused by any one of the recipients. Paused isn't available for invitations in which either OptionsAllowParticipantAccessTheirResponse or OptionsCollectAnonymousResponse is true.PartiallyCompleted— For an invitation with a ParticipantID field, it means that the recipient has partially completed the survey. For an invitation without the ParticipantID field, it means that at least one recipient has partially completed the survey. Available in API version 63.0 and later.Completed — For an invitation with a ParticipantID, it means that the recipient has submitted the survey. For an invitation without the ParticipantID, it means that the invitation has been submitted by at least one recipient. |
| SurveyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the survey that’s sent in the invitation. |
| UUID | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique user ID that's added to a survey invitation generated for a contact, lead,or user. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the user who received the invitation. This field is available in API v49.0 and later. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[SurveyInvitationChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[SurveyInvitationOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[SurveyInvitationShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SurveyInvitationChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- SurveyInvitationOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SurveyInvitationShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
