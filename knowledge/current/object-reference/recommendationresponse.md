---
title: "RecommendationResponse"
domain: object-reference
topic: recommendationresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.028Z
estimatedTokens: 869
keywords: [RecommendationResponse, user, responses, presented, offer, recommendation, Einstein, Best, Action, API, version, 51.0, later, Calls, Special]
---

# RecommendationResponse

> Represents the user responses to a presented offer or recommendation
         for Einstein Next Best Action. This object is available in API
         version
         51.0 and later.

# RecommendationResponse

Represents the user responses to a presented offer or recommendation for Einstein Next Best Action. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated() query(), retrieve(),

## Special Access Rules

You must have one of these user permissions to read, delete, or update recommendation responses:

-   Modify All Data
-   Manage Next Best Action Recommendations
-   Manage Next Best Action Strategies

## Fields

| Field | Details |
| --- | --- |
| ActionReference | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe full name of an action flow at the time of the response. The full name includes the action’s namespace. |
| ContextRecord | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of context record that contains the Einstein Next Best Action component. For example, if the Einstein Next Best Action component is on a case record the ContextRecord is the ID of the case record. |
| ContextRecordName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the context record. |
| ContextRecordType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object that’s associated with the value stored in the ContextRecord field. For example, Account, Case, or Contact. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the Experience Cloud site associated with the recommendation (if applicable). This is a relationship field.Relationship NameNetworkRelationship TypeLookupRefers ToNetwork |
| OnBehalfOf | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe user ID or record that is indirectly reacting to the recommendation. |
| OnBehalfOfName | TypestringPropertiesFilter, Group, SortDescriptionName of the value stored for OnBehalfOf at time of response. |
| OnBehalfOfType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object that’s associated with the value stored in the OnBehalfOf field. For example, Account, Case, or Contact. |
| RecommendationKey | TypestringPropertiesCreate, Filter, Group, SortDescriptionRecommendationId if available, otherwise a generated string that represents the recommendation name. |
| RecommendationName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionName of the recommendation returned from the recommendation strategy. |
| RecommendationType | TypestringPropertiesCreate, Filter, Group, SortDescriptionObject type of the recommendation. It can be Recommendation or any object type mapped to the Recommendation object. For example, if you map Product to Recommendation, the RecommendationType is Product. |
| Response | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe user’s response to the recommendation.Possible values are:AcceptedRejected |
| StrategyReference | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe full name of a recommendation strategy flow at the time of the response. The response is formatted as namespace underscore prefix double underscore flowname, such as namespace_prefix__flowname. |
| StrategyVersion | TypestringPropertiesFilter, Group, SortDescriptionThe recommendation strategy version that’s active at the time of the response. |

## Usage

The RecommendationResponse object can’t be customized with additional fields.
