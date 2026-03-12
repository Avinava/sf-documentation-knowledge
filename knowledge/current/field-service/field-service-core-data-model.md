---
title: "Field Service Core Data Model"
domain: field-service
topic: field-service-core-data-model
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:55.557Z
estimatedTokens: 1454
keywords: [Field, Service, Core, Data, Model, Service’s, core, objects, complete, essential, field, service, tasks, such, managing, work, orders, defining, territories, tracking]
---

# Field Service Core Data Model

> Use Field Service’s core objects to complete essential field service tasks such as
  managing work orders, defining your service territories, and tracking your workforce.

# Field Service Core Data Model

Use Field Service’s core objects to complete essential field service tasks such as managing work orders, defining your service territories, and tracking your workforce.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Asterisks in the following diagrams signify required fields.

Work orders represent work to be completed for your customers, and are central to field service operations in Salesforce. To divide the work further for billing purposes or to track subtasks, add work order line items, which are child records of work orders.

![Work Order diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_wo.png&folder=field_service_dev)

Work orders offer a great deal of flexibility. They can be associated with many types of records, including:

-   Assets, to track work performed on a specific asset
-   Cases, to indicate that the work is being performed as part of a customer case
-   Accounts and contacts, representing the customer
-   Entitlements and service contracts, to indicate that the work is being done to fulfill a service-level agreement

While work orders describe the work to be performed, service appointments represent the visits your team makes to the field to perform the work. They include scheduling settings such as an arrival window, scheduled start and end times, and appointment duration. Every service appointment has a parent record. The parent record is typically a work order or work order line item, but you can also add child service appointments to accounts, assets, leads, or opportunities to track related visits. A record can have multiple child service appointments; for example, a work order may have two service appointments if two visits were needed to complete the work.

![Service appointment diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_sa.png&folder=field_service_dev)

If your team often performs the same tasks for multiple customers, create work types to standardize your field service work. Work types are templates that can be applied to work orders and work order line items. On a work type, you can define the duration of the work and add skill requirements to indicate the level of expertise needed to complete the work. You can also opt to auto-create a child service appointment on any record that uses the work type.

Work orders and service appointments are supported by a variety of objects that control when and where the work occurs, the nature of the work, and who performs it.

![Core diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_core.png&folder=field_service_dev)

## Who Performs the Work

Members of your mobile workforce are represented in Salesforce as service resources. A service resource represents an individual technician who can be assigned to a service appointment. You can also create service crews, which are groups of service resources with complementary skills and experience that can be assigned to appointments as a unit.

To assign a service resource to a service appointment, create an assigned resource record. Assigned resources contain lookups to a service resource and a service appointment. To assign a service crew to an appointment, first create a representative service resource record with a resource type of Crew. Then, create an assigned resource record that looks up to the Crew service resource.

Service resources come with several objects that let you define their skills and availability:

-   Service resource skills represent a service resource’s certifications or levels of expertise.
-   Resource capacity records track the hourly or job-based capacity of contractors.
-   Resource absences represent time when a service resource needs to miss work.
-   Resource preferences designate specific service resources as preferred, required, or excluded on a work order or account.

## Where the Work Occurs

Service territories are the places where your team can perform field service work and are a way to organize your service resources. They typically represent geographic territories such as cities or counties but may also represent functional divisions like sales versus service. A work order can be associated with one service territory. Service resources are assigned to one or more service territories as service territory members to indicate that they are available to work in the territory.

![Territory diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_territory.png&folder=field_service_dev)

## When the Work Occurs

Operating hours indicate when your team can perform field service work. They can be assigned to accounts, service territories, and service territory members. To add detail to operating hours, create time slots, which represent the hours of operation in a particular day.

![Operating hours diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_oh.png&folder=field_service_dev)

If a customer entitlement includes terms regarding when the customer has access to field service, you can track these hours on the entitlement using the **Operating Hours** field (API name: SvcApptBookingWindowsId). For example, if Customer A is entitled to service Monday through Friday from 8 AM to noon, but Customer B is entitled to 24/7 service, you can create operating hours for each customer and assign them to the related entitlement.

#### See Also

-   [Guidelines for Creating Operating Hours for Field Service](https://help.salesforce.com/articleView?id=fs_oh_considerations.htm&language=en_US "Guidelines for Creating Operating Hours for Field Service - HTML (New Window)")
