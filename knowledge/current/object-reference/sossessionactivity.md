---
title: "SOSSessionActivity"
domain: object-reference
topic: sossessionactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.392Z
estimatedTokens: 241
keywords: [SOSSessionActivity, Captures, specific, events, occur, SOS, video, call, begins, ends, API, version, 34.0, later, Calls]
---

# SOSSessionActivity

> Captures information about specific events that occur during an SOS
			video call, such as when an SOS call begins or ends. This object is available in
		API version 34.0 and later.

# SOSSessionActivity

Captures information about specific events that occur during an SOS video call, such as when an SOS call begins or ends. This object is available in API version 34.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ActivityTime | TypedateTimePropertiesCreate, Filter, SortDescriptionThe time at which the activity occurred. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, idLookup, Filter, SortDescriptionThe name of the activity. |
| SessionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the SOS session that’s associated with the event. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe kind of activity that occurred. |

## Usage

Use this object to query and manage SOS session activities.
