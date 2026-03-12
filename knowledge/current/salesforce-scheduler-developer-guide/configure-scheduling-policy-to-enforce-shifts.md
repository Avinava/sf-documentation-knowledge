---
title: "Configure Scheduling Policy to Enforce Shifts"
domain: salesforce-scheduler-developer-guide
topic: configure-scheduling-policy-to-enforce-shifts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.961Z
estimatedTokens: 270
keywords: [Configure, Scheduling, Policy, Enforce, Shifts, rules, best, service, resources, appointments, Apply, process, ensure, appointment, meets]
---

# Configure Scheduling Policy to Enforce Shifts

> Use a scheduling policy to enforce one or more rules to find the best service
      resources for appointments. Apply a scheduling policy to your scheduling process to ensure
      that an appointment meets the criteria that the policy rules define. Create a scheduling
    policy for the actual resources who have created working hours by using shifts. Ensure that the
    resources are present only during appointment reassignment.

# Configure Scheduling Policy to Enforce Shifts

Use a scheduling policy to enforce one or more rules to find the best service resources for appointments. Apply a scheduling policy to your scheduling process to ensure that an appointment meets the criteria that the policy rules define. Create a scheduling policy for the actual resources who have created working hours by using shifts. Ensure that the resources are present only during appointment reassignment.

For more information, see [Enfore Scheduling Policies in Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_scheduling_policies_overview.htm&type=5&language=en_US "HTML (New Window)").

1.  From Setup, in the Quick Find box, enter Scheduling Policies, and then select **Scheduling Policies**.
2.  Click **New**.
3.  Enter a name for your custom scheduling policy, and then select the **Use service territory member's shift** rule.

    This rule considers service territory members' shifts when determining the availability of service resources for appointments.

4.  Save your changes.
