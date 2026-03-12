---
title: "DevOps Center Developer Guide"
domain: devops-center-dev
topic: devops-center-developer-guide
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:24.376Z
estimatedTokens: 831
keywords: [DevOps, Center, Developer, model, custom, objects]
---

# DevOps Center Developer Guide

> This guide describes the DevOps Center object model and provides reference information
  for the custom objects.

# DevOps Center Developer Guide

This guide describes the DevOps Center object model and provides reference information for the custom objects.

| Available in: Lightning Experience in Enterprise, Performance, Professional, Unlimited, and Developer Editions. |
| --- |
| Available in: Government Cloud Plus as interoperable. Turning on DevOps Center in Government Cloud Plus orgs can send data outside the authorization boundary. Contact your Salesforce account executive for more details. |
| Inoperable in: Government Cloud. Although DevOps Center appears in the Setup menu, don’t enable or install it because it won’t operate properly. |
| Not available in: EU Operating Zone. EU Operating zone is a special paid offering that provides an enhanced level of data residency commitment. DevOps Center is supported in orgs in the EU that are not part of EU OZ, per standard product terms and conditions. |


Salesforce DevOps Center provides an improved experience around change and release management that brings DevOps best practices to your development team, regardless of where you fall on the low-code to pro-code spectrum. All developers can work together to deliver value to customers in a repeatable and scalable way, whether you use declarative builders, write code in Salesforce Extensions for VS Code, leverage the power and flexibility of Salesforce CLI, or all three.

-   **[DevOps Center Release Notes](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_relnotes.htm)**
    The DevOps Center team releases new features, product enhancements, and bug fixes on a regular basis.
-   **[Understand the DevOps Center Data Model](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_datamodel.htm)**
    The DevOps Center object model consists of custom objects that are created when you install the DevOps Center managed package in an org. The top object is Project, which is the direct or indirect parent of almost all other objects. The only exception is Repository, which one or more projects reference.
-   **[DevOps Center Custom Objects](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_customobjects.htm)**
    The DevOps Center data model includes several custom objects.
-   **[DevOps Center Custom Field on the User Standard Object](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_standardobjects.htm)**
    The DevOps Center data model uses the User standard object and adds this custom field.
-   **[DevOps Center Custom Platform Events](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_platformevents.htm)**
    DevOps Center generates platform events for work items as they move through the development and promotion lifecycle.

#### See Also

-   [*Salesforce Help*: Manage and Release Changes Easily and Collaboratively with DevOps Center](https://help.salesforce.com/s/articleView?id=platform.devops_center_overview.htm&type=5&language=en_US "Salesforce Help: Manage and Release Changes Easily and Collaboratively with DevOps Center - HTML (New Window)")

-   [*Salesforce Help*: Install and Configure DevOps Center](https://help.salesforce.com/s/articleView?id=platform.devops_center_setup.htm&type=5&language=en_US "Salesforce Help: Install and Configure DevOps Center - HTML (New Window)")

## Related Topics

- DevOps Center Release Notes (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_relnotes.htm)
- Understand the DevOps Center Data Model (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_datamodel.htm)
- DevOps Center Custom Objects (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_customobjects.htm)
- DevOps Center Custom Field on the User Standard Object (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_standardobjects.htm)
- DevOps Center Custom Platform Events (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_platformevents.htm)
