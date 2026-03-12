---
title: "Set Up Salesforce Scheduler"
domain: salesforce-scheduler-developer-guide
topic: set-up-salesforce-scheduler
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.580Z
estimatedTokens: 339
keywords: [Salesforce, Scheduler, organization, Assign, permissions, access, users, tab, visibility, Configure, settings, multi-resource, scheduling, concurrent, multiple, org, multi, resource]
---

# Set Up Salesforce Scheduler

> Set up Salesforce Scheduler for your org. Assign permissions and
      object access for your users. Update related lists and tab visibility. Configure Salesforce
      Scheduler settings for multi resource scheduling, concurrent scheduling, multiple time zone
      selection, and map and location services. If necessary, set up Asset Scheduling for Salesforce
      Scheduler.

# Set Up Salesforce Scheduler

Set up Salesforce Scheduler for your org. Assign permissions and object access for your users. Update related lists and tab visibility. Configure Salesforce Scheduler settings for multi resource scheduling, concurrent scheduling, multiple time zone selection, and map and location services. If necessary, set up Asset Scheduling for Salesforce Scheduler.

-   **[Create Service Territories](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_create_service_territories.htm)**
    Create service territories, such as branch locations, to represent your branch or call center, to organize your service resources, and to ensure that the service resources are assigned to appointments near the home branch.
-   **[Create Service Resources](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_create_service_resources.htm)**
    Create service resources—individual users who can attend customer appointments—so that you can assign appointments to users. You can create a dummy resource, such as DummyResource1, Agent1, or Agent2 that users can schedule appointments with, and then create actual resources to whom these appointments can be assigned later.
-   **[Enable Concurrent Scheduling](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_enable_concurrent_scheduling.htm)**
    Enable concurrent scheduling so that users can use the dummy resource to schedule multiple appointments within the same time slot.
-   **[Assign Concurrent Operating Hours to the Dummy Resource](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_operating_hours_to_stm.htm)**
    Assign operating hours to a service territory member by using the Operating Hours field on the respective member record page. Concurrent time slots are applicable only to service territory members. Assign concurrent time slots to the dummy resource so that only the dummy resource is visible when creating an appointment with concurrent scheduling.
-   **[Configure Scheduling Policy to Enforce Operating Hours](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_scheduling_policy_to_dummy_resource.htm)**
    Use a scheduling policy to enforce one or more rules to find the best service resources for appointments. Apply a scheduling policy to your scheduling process to ensure that an appointment meets the criteria that the policy rules define. Create a scheduling policy for the dummy resource who has set up operating hours. Ensure that the resource is present only when creating an appointment.
-   **[Assign Regular Shifts to Actual Resources](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_shifts_to_actual_resource.htm)**
    Service resources can set up and update their frequently changing work hours by using shifts. Service resources can set up shifts for different work hours for the same service territory, for hours beyond the service territory’s operating hours, and even for multiple service territories. Shifts can also be used to assign service resources for periods that follow a flexible pattern. For example, different working hours at the same service territory or availability of the same service resource at different service territories.
-   **[Configure Scheduling Policy to Enforce Shifts](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_scheduling_policy_to_actual_resource.htm)**
    Use a scheduling policy to enforce one or more rules to find the best service resources for appointments. Apply a scheduling policy to your scheduling process to ensure that an appointment meets the criteria that the policy rules define. Create a scheduling policy for the actual resources who have created working hours by using shifts. Ensure that the resources are present only during appointment reassignment.

-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_create_appts_with_dummy_resources.htm "Book Concurrent Appointments with Dummy Resource")

## Related Topics

- Create Service Territories (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_create_service_territories.htm)
- Create Service Resources (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_create_service_resources.htm)
- Enable Concurrent Scheduling (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_enable_concurrent_scheduling.htm)
- Assign Concurrent Operating Hours to the Dummy Resource (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_operating_hours_to_stm.htm)
- Configure Scheduling Policy to Enforce Operating Hours (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_scheduling_policy_to_dummy_resource.htm)
- Assign Regular Shifts to Actual Resources (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_shifts_to_actual_resource.htm)
- Configure Scheduling Policy to Enforce Shifts (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_scheduling_policy_to_actual_resource.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_create_appts_with_dummy_resources.htm)
