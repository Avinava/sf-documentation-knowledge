---
title: "Salesforce Scheduler Apex Classes"
domain: salesforce-scheduler-developer-guide
topic: salesforce-scheduler-apex-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.539Z
estimatedTokens: 550
namespace: ConnectApi
keywords: [Salesforce, Scheduler, Apex, Classes, ConnectApi, Connect, LxScheduler, accessing, data, Business, APIs]
---

# Salesforce Scheduler Apex Classes

> Salesforce Scheduler provides the ConnectApi namespace (also called Connect in Apex) and LxScheduler namespace that contains classes for accessing the same data available
      in the Salesforce Scheduler Business APIs.

**Namespace:** `ConnectApi`

# Salesforce Scheduler Apex Classes

Salesforce Scheduler provides the ConnectApi namespace (also called Connect in Apex) and LxScheduler namespace that contains classes for accessing the same data available in the Salesforce Scheduler Business APIs.

You can use these apex classes as an alternative to the Salesforce Scheduler Business APIs to simplify appointment scheduling in Salesforce. For example, use the createServiceAppointment(createServiceAppointmentInput) method of the ConnectApi namespace as an alternative to the service-appointments Connect API to create service appointments.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

Salesforce Scheduler is built on the Salesforce platform (also known as Lighting Experience). The Salesforce platform specific Apex governor limits apply to the Salesforce Scheduler Apex classes and methods requests. For more information on the Lightning platform Apex governor limits, see [Apex Governor Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apexgov.htm "HTML (New Window)") in Salesforce Developer Limits and Allocations Quick Reference.

The following table lists the available Salesforce Scheduler Apex methods, as well as the corresponding Connect REST API.

| Apex Method | Connect REST API |
| --- | --- |
| createServiceAppointment(createServiceAppointmentInput) | service-appointments (POST) |
| updateServiceAppointment(updateServiceAppointmentInput) | service-appointments (PATCH) |
| getAppointmentCandidates(getAppointmentCandidatesInput) | getAppointmentCandidates (POST) |
| getAppointmentSlots(getAppointmentSlotsInput) | getAppointmentSlots (POST) |

#### See Also

-   [Salesforce Developer Limits and Allocations Quick Reference: About This Quick Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_overview.htm "Salesforce Developer Limits and Allocations Quick Reference: About This Quick Reference - HTML (New Window)")
