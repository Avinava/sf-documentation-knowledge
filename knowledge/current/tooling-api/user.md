---
title: "User"
domain: tooling-api
topic: user
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.009Z
estimatedTokens: 360
keywords: [User, Represents, user., retrieve, standard, fields, Tooling, API, custom, can’t, retrieved., Note, Supported, SOAP, Calls, REST, HTTP, Fields]
---

# User

> Represents a user. You can retrieve standard
            fields on User with the Tooling API, but custom fields
            can’t be retrieved.

# User

Represents a user. You can retrieve standard fields on User with the Tooling API, but custom fields can’t be retrieved.

This object is available in API version 32.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

User fields are exposed in SOAP API version 45.0 and later. You can use Tooling API to query for User fields in guest user mode in API version 44.0 and earlier. In API version 45.0 and later, use SOAP API to get this data in guest user mode. User is still exposed in Tooling API to User Profiles with the ViewSetup permission.

## Supported SOAP Calls

describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Supported REST HTTP Methods

GET, PATCH

## Fields

| Field | Details |
| --- | --- |
| FirstName | TypestringPropertiesCreate, Filter, Group, NillableSort, UpdateDescriptionThe user’s first name. |
| LastName | TypestringPropertiesCreate, Filter, Group, NillableSort, UpdateDescriptionThe user’s last name. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionConcatenation of FirstName and LastName. Limited to 121 characters. |
| Username | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the user in your organization. |
| WorkspaceId | TypeIDPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the last open Developer Console workspace. |
