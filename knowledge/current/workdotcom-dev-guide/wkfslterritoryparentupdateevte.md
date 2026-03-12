---
title: "wkfsl__Territory_Parent_Update_Evt__e"
domain: workdotcom-dev-guide
topic: wkfslterritoryparentupdateevte
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.584Z
estimatedTokens: 202
keywords: [wkfsl__Territory_Parent_Update_Evt__e, event, triggered, parent, territory, service, updated, territories, copied, location, records, setup, triggers, link, API]
---

# wkfsl__Territory_Parent_Update_Evt__e

> This event is triggered when the parent territory field on the service
      territory is updated. When service territories are copied from location records during setup,
      the event triggers to link a territory to its parent territory. This object is available
    in API version 48.0 and later.

# wkfsl\_\_Territory\_Parent\_Update\_Evt\_\_e

This event is triggered when the parent territory field on the service territory is updated. When service territories are copied from location records during setup, the event triggers to link a territory to its parent territory. This object is available in API version 48.0 and later.

## Supported Calls

create(), describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| ReplayId | TypestringPropertiesNillableDescriptionThis field is populated by the system when the event is delivered to subscribers. It refers to the position of the event in the event stream. |
| wkfsl__jsonField__c | TypetextareaPropertiesCreate, NillableDescriptionAn event message in JSON format. This field contains the JSON blob of the service territories being updated. |
