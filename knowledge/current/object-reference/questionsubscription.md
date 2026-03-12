---
title: "QuestionSubscription"
domain: object-reference
topic: questionsubscription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.782Z
estimatedTokens: 461
keywords: [QuestionSubscription, subscription, user, Question, API, version, 24.0, later, Calls, Usage]
---

# QuestionSubscription

> Represents a subscription for a user
        following a Question. This object is available in API version 24.0 and
    later.

# QuestionSubscription

Represents a subscription for a user following a Question. This object is available in API version 24.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CommunityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the zone associated with the Question the user is following. This field can’t be updated. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe name of the question subscription. |
| QuestionCreatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRequired. Creation date of the Question which the user is following. This field can’t be updated. |
| QuestionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. ID of the Question which the user is following. This field can’t be updated. |
| SubscriberId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. ID of the User who is following the Question. This field can’t be updated. |

## Usage

Things to consider when following a Question:

-   A user can only follow questions that they have permission to view.
-   Administrators and users with the “Modify All Data” permission can configure other users to follow questions that the other user has read access to.
-   Administrators and users with the “Modify All Data” permission can configure users to stop following questions.

Queries on QuestionSubscription:

-   Users with the “Read” permission on Question can see which questions other users are following.
-   A query must include a LIMIT clause and the limit can’t exceed 1,000.
-   A query using a WHERE clause can only filter by fields on Question.
