---
title: "SurveyEngagementContext"
domain: salesforce-feedback-management-dev-guide
topic: surveyengagementcontext
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.622Z
estimatedTokens: 415
keywords: [SurveyEngagementContext, context, survey, invitation, sent, received, API, version, 49.0, later, Calls, Associated, Objects]
---

# SurveyEngagementContext

> Represents the context based on which a survey invitation was sent or a survey
      response was received. This object is available in API version 49.0 and later.

# SurveyEngagementContext

Represents the context based on which a survey invitation was sent or a survey response was received. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

#### Note

You can’t define custom fields for the SurveyEngagementContext object using the Object Manager.

## Fields

| Field | Details |
| --- | --- |
| ContextType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContext type based on which the survey invitation was sent or the response was received. |
| ContextValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContext based on which the survey invitation was sent or the response was received. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record's owner. |
| SurveyInvitationId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the survey invitation. |
| SurveyResponseId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the survey response. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

SurveyEngagementContextShare

Sharing is available for the object.
