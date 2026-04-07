---
title: "ListClassificationEnum"
domain: mc-apis
topic: listclassificationenum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:17.777Z
estimatedTokens: 137
keywords: [ListClassificationEnum, how, application, acts, subscribers, time, send]
---

> The ListClassificationEnum object indicates how the application acts on a list of subscribers at the time of a send.

# ListClassificationEnum

The ListClassificationEnum object indicates how the application acts on a list of subscribers at the time of a send.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ExactTargetList | Enumeration | Indicates to the application processes that the list is a subscriber list. |
| PublicationList | Enumeration | Indicates to the application processes that the list is a publication list. |
| SuppressionList | Enumeration | Indicates to the application processes that the list is a supression list. |
