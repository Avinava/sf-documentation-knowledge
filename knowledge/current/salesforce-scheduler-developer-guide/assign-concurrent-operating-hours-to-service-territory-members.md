---
title: "Assign Concurrent Operating Hours to Service Territory Members"
domain: salesforce-scheduler-developer-guide
topic: assign-concurrent-operating-hours-to-service-territory-members
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.124Z
estimatedTokens: 219
keywords: [Assign, Concurrent, Operating, Hours, Service, Territory, Members, time, slots, applicable, member, respective, record]
---

# Assign Concurrent Operating Hours to Service Territory Members

> Concurrent time slots are applicable only to service territory members. Assign
      operating hours to a service territory member using the Operating Hours field on the
      respective record page.

# Assign Concurrent Operating Hours to Service Territory Members

Concurrent time slots are applicable only to service territory members. Assign operating hours to a service territory member using the Operating Hours field on the respective record page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

If you don’t assign operating hours to a service territory member, it automatically uses its service territory’s operating hours. And if you don’t assign operating hours to a work type, it’s considered to be always available.

1.  On a service territory member record page, edit the Operating Hours field.
2.  Select a set of operating hours from the list.
3.  Save your changes.

On the first page in your app, you must provide users an option to select a work type group for the appointment.
