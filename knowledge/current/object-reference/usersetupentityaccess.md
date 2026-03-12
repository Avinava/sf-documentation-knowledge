---
title: "UserSetupEntityAccess"
domain: object-reference
topic: usersetupentityaccess
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.016Z
estimatedTokens: 543
keywords: [UserSetupEntityAccess, enabled, custom, permissions, running, user, API, version, 48.0, later, Calls, Usage]
---

# UserSetupEntityAccess

> Represents the enabled custom permissions of the running user. This
      object is available in API version 48.0 and later.

# UserSetupEntityAccess

Represents the enabled custom permissions of the running user. This object is available in API version 48.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the custom permission in the API.In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field isn't used. |
| KeyPrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe first 3 characters of the SetupEntityId. |
| LastCacheUpdate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last modified date and time of the running user's info. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that’s associated with the custom permission. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| SetupEntityId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the custom permission assigned to the user. |

## Usage

API users without the View Setup and Configuration permission can use this object to check their assigned custom permissions.
