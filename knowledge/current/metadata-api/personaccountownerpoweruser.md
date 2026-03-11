---
title: "PersonAccountOwnerPowerUser"
domain: metadata-api
topic: personaccountownerpoweruser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.944Z
keywords: [PersonAccountOwnerPowerUser, Version, Fields]
---

# PersonAccountOwnerPowerUser

# PersonAccountOwnerPowerUser

Represents a user who can own more than 50,000 customer or partner portal accounts. Person account owner power users can own a large number of either customer or partner users. They can’t change their role, look up to a parent role, or reparent their role. Person account owner power user objects can't be created if deferred sharing is turned on for your org. This object is available in API version 57.0 and later.

## Version

PersonAccountOwnerPowerUser components are available in API version 57.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| developerName | Field TypestringDescriptionRequired. The unique name of the object in the API. |
| masterLabel | Field TypestringDescriptionRequired. The label entered when the person account owner power user is created. |
| portalType | Field TypestringDescriptionRequired. The type of portal user account that the person account owner power user can own.Possible values are:CustomerPortal—Customer PortalPartner—Partner Portal |
| user | Field TypestringDescriptionRequired. The unique ID associated with the person account owner power user. |