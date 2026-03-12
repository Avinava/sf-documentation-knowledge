---
title: "ServicePresenceStatus"
domain: object-reference
topic: servicepresencestatus
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.842Z
estimatedTokens: 417
keywords: [ServicePresenceStatus, presence, status, assigned, service, channel, API, version, 32.0, later, Calls, Special, Access, Rules]
---

# ServicePresenceStatus

> Represents a presence status that can be assigned to a service channel.
  This object is available in API version 32.0 and later.

# ServicePresenceStatus

Represents a presence status that can be assigned to a service channel. This object is available in API version 32.0 and later.

## Supported Calls

create(), query(), update(), retrieve()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the presence status. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe label of the presence status. |
