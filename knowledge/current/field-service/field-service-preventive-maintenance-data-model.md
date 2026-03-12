---
title: "Field Service Preventive Maintenance Data Model"
domain: field-service
topic: field-service-preventive-maintenance-data-model
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:55.566Z
estimatedTokens: 740
keywords: [Field, Service, Preventive, Maintenance, Data, Model, Manage, periodic, maintenance, help, plans, which, define, schedule, specific, assets., typically, reflect, terms, customer’s]
---

# Field Service Preventive Maintenance Data Model

> Manage periodic maintenance with the help of maintenance plans, which define the
  maintenance schedule for specific assets. Maintenance plans typically reflect the terms in a
  customer’s service contract or entitlements.

# Field Service Preventive Maintenance Data Model

Manage periodic maintenance with the help of maintenance plans, which define the maintenance schedule for specific assets. Maintenance plans typically reflect the terms in a customer’s service contract or entitlements.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Asterisks in the following diagram signify required fields.

A maintenance plan can be linked to an account and contact—representing the customer—and, if the customer has one, to a service contract.

A maintenance plan can cover multiple assets. For example, you can create a maintenance plan to track the monthly maintenance of 20 laser printers installed in a customer’s office building. The assets covered by a maintenance plan are represented as child records of the maintenance plan called maintenance assets. For more complex reoccurring maintenance, you can define maintenance work rules for most assets and maintenance plans. With this feature you can, for example, set up a schedule for minor monthly maintenance and a major yearly service. You can also link a maintenance plan to a location to indicate where the assets are installed. For example, link a plan to a location of the Site type that represents the office building where the printers are installed.

After you create a maintenance plan or maintenance work rules, it’s time to generate work orders for the planned maintenance visits. Maintenance plans come with a Generate Work Orders quick action, which can also be called with Apex code. Your maintenance plan settings determine how many work orders and work order line items are generated at once and what their settings are. You can opt to generate one work order per maintenance asset for each visit, or a parent work order for each visit with one work order line item per maintenance asset.

Maintenance plans, maintenance assets, and maintenance work rules can be associated with a work type:

-   If you specify a work type on a maintenance plan, the plan’s work orders use that work type.
-   If you specify a work type on a maintenance asset, generated work orders that are associated with the maintenance asset use the maintenance asset’s work type.
-   If you specify a work type on a maintenance work rule, generated work orders that are associated with the maintenance work rule use the maintenance work rule’s work type.

![Maintenance diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_maint.png&folder=field_service_dev)

#### See Also

-   [Generate Work Orders on Maintenance Plans with Apex](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_code_samples_wo.htm "The Generate Work Orders action on maintenance plans can also be called using Apex code. The following code sample creates work order records by making an Apex callout to the generateWorkOrder action REST API resource.")

## Related Topics

- Generate Work Orders on Maintenance Plans with Apex (atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_code_samples_wo.htm)
