---
title: "Field Service Code Examples"
domain: field-service
topic: field-service-code-examples
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.155Z
keywords: [Field, Service, Code, Examples]
---

# Field Service Code Examples

# Field Service Code Examples

Use these code examples to get started working programmatically with Field Service features.

-   **[Create a Service Report with Apex](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_code_samples_sr.htm)**  
    The Create Service Report action on work orders, work order line items, and service appointments can also be called using Apex code. The code example shown creates a service report with two signatures by making an Apex callout to the createServiceReport action REST API resource.
-   **[Generate Work Orders on Maintenance Plans with Apex](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_code_samples_wo.htm)**  
    The **Generate Work Orders** action on maintenance plans can also be called using Apex code. The following code sample creates work order records by making an Apex callout to the generateWorkOrder action REST API resource.
-   **[Code Examples: Dispatcher Console Custom Actions](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_code_samples_dispatcher.htm)**  
    Learn how to configure Apex classes or Visualforce pages that you want to link to a custom action in the dispatcher console.
-   **[Create Service Appointment Lists in the Dispatcher Console](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_code_samples_sal.htm)**  
    You can create user-specific temporary appointment lists by adding the Create Temporary Service Appointment List custom permission in Field Service managed package. If the custom permission is enabled, the Field Service app creates a connection to the CreateFilterEvent\_\_e platform event channel and subscribes to related messages.