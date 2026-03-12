---
title: "LearningPractice"
domain: object-reference
topic: learningpractice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.724Z
estimatedTokens: 894
keywords: [LearningPractice, Feedback, exercise, Enablement, program, Users, submit, sample, their, work, peers, managers, video, call, Einstein]
---

# LearningPractice

> Represents a Feedback Request exercise in an Enablement program.
         Users can submit a sample of their work and request feedback from their peers and managers.
         Or, users can submit a video call and Einstein Coach generates feedback from the call’s
         transcription. This object is available in API version 59.0 and later, but Einstein
      Coach feedback is available only in API version 61.0 and later.

# LearningPractice

Represents a Feedback Request exercise in an Enablement program. Users can submit a sample of their work and request feedback from their peers and managers. Or, users can submit a video call and Einstein Coach generates feedback from the call’s transcription. This object is available in API version 59.0 and later, but Einstein Coach feedback is available only in API version 61.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

-   For Enablement admins to create, update, and delete Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.
-   For users who take Enablement programs, the Take Enablement Programs permission is required. This permission is enabled by default as part of the Use Enablement Programs permission set, which comes with the Enablement add-on license.
-   To access exercises that use Einstein Coach, the Use Einstein Coach permission is required. This permission is enabled by default as part of the Access Einstein Coach permission set, which comes with the Enablement add-on license.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, SortDescriptionInstructions to the user to provide context for completing the Feedback Request exercise. For example, Record yourself giving a sales pitch and request feedback from your peers. |
| InviteeQuantity | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of peers or managers that the user is required to invite for giving feedback when Type is PeerFeedback. Each peer or manager receives an invitation to the assessment survey associated with the Feedback Request exercise.When Type is AIFeedback, this value is always 1. |
| LearningItemId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the LearningItem record for the Feedback Request exercise. The value must be unique. This field is a relationship field.Relationship NameLearningItemRelationship TypeLookupRefers ToLearningItem |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe title of the Feedback Request exercise. For example, Practice Your Sales Pitch. |
| PromptTemplate | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe prompt template to use with this exercise when Type is AIFeedback.Available in API version 61.0 and later. |
| SurveyId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the assessment survey that’s sent to peers and managers when Type is PeerFeedback. This field is a relationship field.Relationship NameSurveyRelationship TypeLookupRefers ToSurvey |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe type of feedback used with this exercise. Possible values are:AIFeedback—Users submit a video call, and Einstein Coach generates feedback from the call’s transcription. With this type, PromptTemplate is required. Available in API version 61.0 and later.PeerFeedback—Users submit a URL to a sample of their work, and select peers and managers to review their work. Selected peers and managers complete an assessment survey. With this type, SurveyId is required. Available in API version 61.0 and later.Survey—Users complete a survey as part of their enrolled employee enablement program. Available in API version 64.0 and later. |
