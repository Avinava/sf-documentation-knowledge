---
title: "IdeaReputation"
domain: object-reference
topic: ideareputation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.136Z
estimatedTokens: 553
keywords: [IdeaReputation, collection, statistics, scores, derived, user’s, activity, Ideas, zone, internal, organization, API, version, 28.0, later]
---

# IdeaReputation

> Represents a collection of statistics and scores derived from a
      user’s activity within an Ideas zone or internal organization. This object is available
      in API version 28.0 and later.

# IdeaReputation

Represents a collection of statistics and scores derived from a user’s activity within an Ideas zone or internal organization. This object is available in API version 28.0 and later.

## Supported Calls

query(), retrieve(),

## Fields

| Field | Details |
| --- | --- |
| CommentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of comments a user has created in a zone or the internal organization. This number excludes comments the user creates on his or her own idea. |
| CommentsReceivedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of comments a user has received in a zone or the internal organization. |
| ContextId | TypereferencePropertiesFilter, Group, Namepointing, Nillable, SortDescriptionThe ID of the zone or internal organization. |
| DownVotesGivenCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of down votes a user has given in a zone or the internal organization. |
| DownVotesReceivedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of down votes a user has received in a zone or the internal organization. |
| IdeaCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of ideas a user has created in a zone or the internal organization. |
| ReputationLevel | TypestringPropertiesNillableDescriptionThe reputation level that a user has achieved based on their score in a zone or within an organization. |
| Score | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total score of a user’s activity within a zone or within an organization. |
| UpVotesGivenCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of up votes a user has given in a zone or the internal organization. This number doesn’t include the default vote the system applies when the user creates the idea. |
| UpVotesReceivedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of up votes a user has received in a zone or the internal organization. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionThe user ID associated with the reputation. |

## Usage

Use to query a user’s reputation within a zone.
