---
title: "Create Service Resources"
domain: salesforce-scheduler-developer-guide
topic: create-service-resources
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.976Z
estimatedTokens: 265
keywords: [Service, Resources, resources—individual, users, attend, customer, appointments—so, assign, appointments, dummy, resource, DummyResource1, Agent1, Agent2, schedule]
---

# Create Service Resources

> Create service resources—individual users who can attend customer
      appointments—so that you can assign appointments to users. You can create a dummy
    resource, such as DummyResource1, Agent1, or Agent2 that users can schedule appointments with,
    and then create actual resources to whom these appointments can be assigned later.

# Create Service Resources

Create service resources—individual users who can attend customer appointments—so that you can assign appointments to users. You can create a dummy resource, such as DummyResource1, Agent1, or Agent2 that users can schedule appointments with, and then create actual resources to whom these appointments can be assigned later.

For more information on setting up service resources, see [Set Up Service Resources in Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_set_up_service_resources.htm&type=5&language=en_US "HTML (New Window)").

1.  From the App Launcher, find and open the Salesforce Scheduler Setup app.
2.  On the Service Resources tab, click **New**.
3.  Select a user and enter a resource name—typically, the user's name.
4.  To enable assigning the resource to appointments, activate the resource.
5.  For resource type, select **Technician**.
6.  Save your changes.

After a service resource is created, assign the resource to a service territory, and then add skills of the resource.
