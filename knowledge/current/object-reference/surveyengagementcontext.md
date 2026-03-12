---
title: "SurveyEngagementContext"
domain: object-reference
topic: surveyengagementcontext
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.501Z
estimatedTokens: 472
keywords: [SurveyEngagementContext, context, survey, invitation, sent, received, API, version, 49.0, later, Calls, Associated, Objects]
---

# SurveyEngagementContext

> Represents the context based on which a survey invitation was sent or a survey
      response was received. This object is available in API version 49.0 and later.

# SurveyEngagementContext

Represents the context based on which a survey invitation was sent or a survey response was received. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

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

[SurveyEngagementContextShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SurveyEngagementContextShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
