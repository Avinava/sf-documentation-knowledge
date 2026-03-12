---
title: "MessagingConfiguration"
domain: object-reference
topic: messagingconfiguration
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.810Z
estimatedTokens: 245
keywords: [MessagingConfiguration, Messaging, configuration, API, version, 47.0, later, Calls]
---

# MessagingConfiguration

> Represents the details for a Messaging configuration. This
      object is available in API version 47.0 and later.

# MessagingConfiguration

Represents the details for a Messaging configuration. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe API name for this Messaging configuration.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of this Messaging configuration. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for the Messaging configuration. |
| MessagingServiceUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL for the Messaging service. |
| ProvisioningServiceUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL for the provisioning service. |
