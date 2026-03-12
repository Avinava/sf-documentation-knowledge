---
title: "Calendar"
domain: object-reference
topic: calendar
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.931Z
estimatedTokens: 412
keywords: [Calendar, user, resource, holiday, API, version, 45.0, later, Calls, Special, Access, Rules]
---

# Calendar

> Represents a calendar. This can be a default user calendar, public
         calendar, resource calendar, or holiday calendar. This object is available in API
      version 45.0 and later.

# Calendar

Represents a calendar. This can be a default user calendar, public calendar, resource calendar, or holiday calendar. This object is available in API version 45.0 and later.

Newly created users are assigned a default calendar automatically. Similarly, holiday calendars are created automatically for each organization.

## Supported Calls

describeSObjects(), query(), retrieve(), search()

## Special Access Rules

Users with "View Setup and Configuration" user permissions can create, edit, and delete public and resource calendars in the user interface. All users, even those without the “View Setup and Configuration” user permission, can view calendars via the API.

## Fields

All fields are readable only.

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThis field indicates whether a user can save events to the calendar. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionA user provided name that identifies the calendar. It is text-indexed for searchability. Note that this is not an enumerated field; it can be any string to a maximum length of 80 characters. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of the calendar. Possible values are:Holiday (Holiday Calendar)Public (Public Calendar)Resource (Resource Calendar)User (User Calendar) |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user that owns that calendar record. If Type=User, there’s a UserID associated (foreign key reference to the user). Otherwise, the user field is null. |
