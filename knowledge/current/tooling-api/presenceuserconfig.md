---
title: "PresenceUserConfig"
domain: tooling-api
topic: presenceuserconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.484Z
estimatedTokens: 748
keywords: [PresenceUserConfig, Represents, configuration, determines, presence, user’s, settings., API, version, 65.0, later., Supported, SOAP, Calls, REST, Special, Access, Rules, Fields]
---

# PresenceUserConfig

> Represents a configuration that determines a presence user’s settings. This
         object is available in API version 65.0 and later.

# PresenceUserConfig

Represents a configuration that determines a presence user’s settings. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Available only if Omni-Channel is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| AcwExtensionDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum length of time, measured in seconds, an agent can spend on After Conversation Work (ACW) each time they extend the timer. You must set this field if HasAcwExtensionEnabled is set to true. Specify a value from 10 through 3600. |
| AfterConvoWorkMaxTime | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum length of time, measured in seconds, an agent has to complete ACW. You must set this field if HasAfterConvoWorkTimer is set to true. Specify a value from 10 through 3600. |
| Capacity | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe maximum number of work units an agent can be assigned at one time. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| HasAcwExtensionEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether agents can extend their ACW time (true) or not (false). Available only if HasAfterConvoWorkTimer is set to true. If this field is set to true, you must also set the AcwExtensionDuration and MaxExtensions fields.The default value is false. |
| HasAfterConvoWorkTimer | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether ACW time can be configured for the agent (true) or not (false). If set to true, you must also set the AfterConvoWorkMaxTime field to true.The default value is false. |
| InterruptibleCapacity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of work units using interruptible capacity that can be assigned to an agent at a time. If the value in this field is empty it defaults to the value set in the Capacity field. This field is available only when the Interruptible Capacity feature is enabled. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the presence configuration. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the presence configuration. |
| MaxExtensions | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionMaximum number of times an agent can extend their ACW time. Specify a value from 1 through 10. You must set this field if HasAcwExtensionEnabled is set to true. |
