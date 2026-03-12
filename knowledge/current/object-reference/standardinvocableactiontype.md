---
title: "StandardInvocableActionType"
domain: object-reference
topic: standardinvocableactiontype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.420Z
estimatedTokens: 335
namespace: Type
keywords: [StandardInvocableActionType, collection, granular, user, permissions, access, standard, invocable, action, Flow, Builder, API, version, 60.0, later]
---

# StandardInvocableActionType

> Represents a collection of fields to set up granular user permissions for access to a standard invocable action in Flow Builder. This object is available in API
		version 60.0 and later.

**Namespace:** `Type`

# StandardInvocableActionType

Represents a collection of fields to set up granular user permissions for access to a standard invocable action in Flow Builder. This object is available in API version 60.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Marketing Cloud Growth edition and the Manage Flow user permission or View Flows user permission are required.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name and namespace combination of the invocable action. This combination must be unique. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language code of the invocable action. For a full list of supported languages and their codes, see Supported Languages. This field is available in API version 60.0 and later. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for the invocable action. This display value is the internal label that doesn’t get translated. This field is available in API version 60.0 and later. |
| Namespace | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the invocable action. Enter a value only if you’re using the invocable action in Flow Builder or with Apex. |
