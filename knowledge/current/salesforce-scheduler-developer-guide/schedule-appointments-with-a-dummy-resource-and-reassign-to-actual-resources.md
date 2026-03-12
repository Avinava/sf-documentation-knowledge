---
title: "Schedule Appointments with a Dummy Resource and Reassign to Actual
      Resources"
domain: salesforce-scheduler-developer-guide
topic: schedule-appointments-with-a-dummy-resource-and-reassign-to-actual-resources
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.007Z
estimatedTokens: 553
keywords: [Schedule, Appointments, Dummy, Resource, Reassign, Actual, Resources, how, concurrent, later, scenarios, scheduled, assigned, wealth, management]
---

# Schedule Appointments with a Dummy Resource and Reassign to Actual
      Resources

> Learn how to create concurrent appointments by using a dummy resource and to reassign
    the appointments to actual resources later in scenarios where appointments are scheduled before
    actual resources can be assigned. For example, a wealth management advisory desk that accepts 50
    or more appointments for various time slots between 10:00 AM and 5:00 PM. The desk can reassign
    these appointments to the actual resources only two days before the appointment date. Or, a call
    center whose resources are assigned randomly in real time, but can schedule 50 appointments for
    various time slots in a day.

# Schedule Appointments with a Dummy Resource and Reassign to Actual Resources

Learn how to create concurrent appointments by using a dummy resource and to reassign the appointments to actual resources later in scenarios where appointments are scheduled before actual resources can be assigned. For example, a wealth management advisory desk that accepts 50 or more appointments for various time slots between 10:00 AM and 5:00 PM. The desk can reassign these appointments to the actual resources only two days before the appointment date. Or, a call center whose resources are assigned randomly in real time, but can schedule 50 appointments for various time slots in a day.

| Salesforce Scheduler is available for an extra cost in Lightning Experience. |
| --- |
| Available in: Enterprise, Performance, and Unlimited Editions |


1.  [Set Up Salesforce Scheduler](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_setup_scheduler.htm)
    Set up Salesforce Scheduler for your org. Assign permissions and object access for your users. Update related lists and tab visibility. Configure Salesforce Scheduler settings for multi resource scheduling, concurrent scheduling, multiple time zone selection, and map and location services. If necessary, set up Asset Scheduling for Salesforce Scheduler.
2.  [Book Concurrent Appointments with Dummy Resource](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_create_appts_with_dummy_resources.htm)
    Use the concurrent scheduling feature of Salesforce Scheduler to easily schedule multiple service appointments in the same time slot. An event is created for each service appointment. Create concurrent appointments by using the dummy resource for the various time slots available for the day.
3.  [Modify Appointments to Reassign to Actual Resources](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_reassign_appts_to_actual_resources.htm)
    Retrieve and show the service appointments scheduled against the dummy resource. Branch managers or administrators can reassign the retrieved appointments to the actual resources.

## Related Topics

- Set Up Salesforce Scheduler (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_setup_scheduler.htm)
- Book Concurrent Appointments with Dummy Resource (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_create_appts_with_dummy_resources.htm)
- Modify Appointments to Reassign to Actual Resources (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_reassign_appts_to_actual_resources.htm)
