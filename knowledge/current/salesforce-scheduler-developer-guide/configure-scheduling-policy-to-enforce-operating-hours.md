---
title: "Configure Scheduling Policy to Enforce Operating Hours"
domain: salesforce-scheduler-developer-guide
topic: configure-scheduling-policy-to-enforce-operating-hours
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.964Z
estimatedTokens: 269
keywords: [Configure, Scheduling, Policy, Enforce, Operating, Hours, rules, best, service, resources, appointments, Apply, process, ensure, appointment]
---

# Configure Scheduling Policy to Enforce Operating Hours

> Use a scheduling policy to enforce one or more rules to find the best service
      resources for appointments. Apply a scheduling policy to your scheduling process to ensure
      that an appointment meets the criteria that the policy rules define. Create a scheduling
    policy for the dummy resource who has set up operating hours. Ensure that the resource is
    present only when creating an appointment.

# Configure Scheduling Policy to Enforce Operating Hours

Use a scheduling policy to enforce one or more rules to find the best service resources for appointments. Apply a scheduling policy to your scheduling process to ensure that an appointment meets the criteria that the policy rules define. Create a scheduling policy for the dummy resource who has set up operating hours. Ensure that the resource is present only when creating an appointment.

For more information, see [Enfore Scheduling Policies in Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_scheduling_policies_overview.htm&type=5&language=en_US "HTML (New Window)").

1.  From Setup, in the Quick Find box, enter Scheduling Policies, and then select **Scheduling Policies**.
2.  Click **New**.
3.  Enter a name for your custom scheduling policy, and then deselect the **Use service territory member's shift** rule.

    This rule considers service territory member’s operating hours when determining the availability of service resources for appointments.

4.  Save your changes.
