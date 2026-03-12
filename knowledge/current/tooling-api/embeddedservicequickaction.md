---
title: "EmbeddedServiceQuickAction"
domain: tooling-api
topic: embeddedservicequickaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.326Z
estimatedTokens: 300
keywords: [EmbeddedServiceQuickAction, quick, action, associated, EmbeddedServiceLiveAgent, setup., includes, pre-chat, form, fields, embedded, chat, window, displays, shows, order, which, displayed., Tooling, API]
---

# EmbeddedServiceQuickAction

> Returns a quick
            action that is associated with an EmbeddedServiceLiveAgent setup. The quick action
            includes the pre-chat form fields that the embedded chat window displays and shows the
            order in which the fields are displayed. Available in Tooling API version 39.0 and
        later.

# EmbeddedServiceQuickAction

Returns a quick action that is associated with an EmbeddedServiceLiveAgent setup. The quick action includes the pre-chat form fields that the embedded chat window displays and shows the order in which the fields are displayed. Available in Tooling API version 39.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, POST, PUT, PATCH

## Fields

| Field | Details |
| --- | --- |
| EmbeddedServiceLiveAgentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the embedded chat deployment. |
| Order | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionOrder in which this quick action appears in the embedded chat pre-chat form. |
| QuickActionDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to a quick action. |
| QuickActionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionQuick action type. One of the following values:Prechat–Pre-chatOfflineCase–Offline support (Cases)Available in API version 43.0 and later. |
