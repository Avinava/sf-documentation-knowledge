---
title: "Change Events for PricebookEntry"
domain: change-data-capture
topic: change-events-for-pricebookentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.711Z
estimatedTokens: 85
keywords: [Change, Events, PricebookEntry, payload, include, system, sCreatedById, CreatedDate, LastModifiedById, LastModifiedDate, due, highly, customized, nature, prevents]
---

# Change Events for PricebookEntry

> The Create Change Events payload does not include the system fields (sCreatedById, 
  CreatedDate, LastModifiedById, and LastModifiedDate). This is due to the highly customized 
  nature of the PricebookEntry object, which prevents these specific fields from being captured 
  at the time the event is generated.

# Change Events for PricebookEntry

The Create Change Events payload does not include the system fields (sCreatedById, CreatedDate, LastModifiedById, and LastModifiedDate). This is due to the highly customized nature of the PricebookEntry object, which prevents these specific fields from being captured at the time the event is generated.
