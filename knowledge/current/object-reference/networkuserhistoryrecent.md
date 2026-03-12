---
title: "NetworkUserHistoryRecent"
domain: object-reference
topic: networkuserhistoryrecent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.279Z
estimatedTokens: 552
keywords: [NetworkUserHistoryRecent, Experience, Cloud, site, user’s, history, accessed, records, API, version, 42.0, later, Calls, Special, Access]
---

# NetworkUserHistoryRecent

> Represents an Experience Cloud site user’s history of accessed
   records. This object is available in API version 42.0 and later.

# NetworkUserHistoryRecent

Represents an Experience Cloud site user’s history of accessed records. This object is available in API version 42.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(),query(), undelete()

## Special Access Rules

Only users with the Modify All Data permission can view and delete these data.

## Fields

| Field | Details |
| --- | --- |
| AccessTimestamp | TypedatetimePropertiesCreate, Filter, SortDescriptionThe time at which the record was accessed. |
| ActionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the action type taken by the user. The possible values are:ReadWrite |
| DomainName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe domain used to access the record. |
| FeedCommentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionFeed comment accessed by the user. |
| FeedItemId | TypereferencePropertiesCreate, Filter, Group,Sort, UpdateDescriptionFeed item accessed by the user. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the Experience Cloud site used to access the record or comment. |
| NetworkUserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionUser’s Experience Cloud site user ID to access the record or comment. |
| RecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record that was accessed. |
| RecordKeyPrefix | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRecord’s ID key prefix. |
| Url | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe URL from which the user accessed the record. |
| UserType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of user who accessed this record. The possible values include:StandardPartnerCustomer Portal ManagerCustomer Portal UserGuestHigh Volume PortalCSN OnlySelf Service |

## Usage

Use the NetworkUserHistoryRecent object to delete comments, posts, or record access by Experience Cloud site users who would like all such activity to be removed.
