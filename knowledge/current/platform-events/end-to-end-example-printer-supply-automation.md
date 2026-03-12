---
title: "End-to-End Example: Printer Supply Automation"
domain: platform-events
topic: end-to-end-example-printer-supply-automation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.789Z
estimatedTokens: 2113
keywords: [End-to-End, Printer, Supply, Automation, demonstrates, how, sure, office, printers, always, enough, paper, ink, two, platform]
---

# End-to-End Example: Printer Supply Automation

> This example demonstrates how to make sure that your office printers always have enough
    paper and ink by using two platform events and two flows.

# End-to-End Example: Printer Supply Automation

This example demonstrates how to make sure that your office printers always have enough paper and ink by using two platform events and two flows.

Your company just received a shipment of “smart” printers. You configure the printers to send information to Salesforce. You build a flow that uses the received information to decide whether to order more ink or paper from the vendor. Also, you build another flow to schedule installation of the new supplies the day after they’re delivered.

-   **[Platform Events: Printer Status and Vendor Response](atlas.en-us.platform_events.meta/platform_events/platform_events_example_printervendor.htm#platform_events_example_printervendor_events)**
    This example uses two platform events: one to hold the information coming from the printer (Printer Status) and one to hold the information coming from the vendor (Vendor Response).
-   **[Flow: Automation for Printer Status Events](atlas.en-us.platform_events.meta/platform_events/platform_events_example_printervendor.htm#platform_events_example_printervendor_process)**
    When the platform event–triggered flow receives a Printer Status event, the flow finds the asset record that’s associated with the printer. The flow evaluates whether the printer has low ink or paper, and if so, calls an Apex action to order ink or another action to order paper.
-   **[Flow: Automation for Vendor Response Events](atlas.en-us.platform_events.meta/platform_events/platform_events_example_printervendor.htm#platform_events_example_printervendor_flow)**
    The Install Printer Supplies flow is a platform event–triggered flow that subscribes to the Vendor Response platform event. When the vendor ships the printer part, they publish the Vendor Response platform event to notify their customer. This flow starts when it receives the Vendor Response event message. It creates a task for the asset owner to install the new printer part.

## Platform Events: Printer Status and Vendor Response

This example uses two platform events: one to hold the information coming from the printer (Printer Status) and one to hold the information coming from the vendor (Vendor Response).

The Printer Status platform event includes these custom fields.

| API Name | Field Label | Data Type | Description |
| --- | --- | --- | --- |
| Serial_Number | Serial Number | Text | The printer’s unique identifier. This value is used to locate the corresponding asset record. |
| Ink_Status | Ink Status | Text | Values: Full, Medium, Low, or Empty. |
| Paper_Level | Paper Level | Number | Paper level in percentage. |
| Total_Print_Count | Total Print Count | Number | Aggregate number of pages printed. |

The Vendor Response platform event includes these custom fields.

| API Name | Field Label | Data Type | Description |
| --- | --- | --- | --- |
| Order_Number | Order Number | Text | The order’s unique identifier. |
| Expected_Delivery_Date | Expected Delivery Date | Date | The date when the vendor expects the order to be delivered |
| Order_Status | Order Status | Text | Values: Ordered, Confirmed, Shipped, Delivered, Delayed, Canceled. |
| Part_Label | Part Label | Text | The label of the part to order. |
| Part_Number | Part Number | Text | The part number of the part to order. |
| Serial_Number | Serial Number | Text | The printer’s unique identifier. This value is sent in the order request and returned in the vendor response. It’s used to locate the corresponding asset record. |

## Flow: Automation for Printer Status Events

When the platform event–triggered flow receives a Printer Status event, the flow finds the asset record that’s associated with the printer. The flow evaluates whether the printer has low ink or paper, and if so, calls an Apex action to order ink or another action to order paper.

The flow starts when it receives a Printer Status platform event message.

![A platform event–triggered flow that evalutes Printer Status events](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fflow_example_printer_status_flow.png&folder=platform_events)

The Get Records element finds the related asset record by matching the asset's serial number with that of the incoming event message. The Get Records element provides us with the asset record fields that we use later in the flow.

![The Get Records element finds the asset](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fflow_example_printer_status_get_records.png&folder=platform_events)

### Order Ink or Paper

A Decision element evaluates whether the ink level is low. It checks whether the Ink\_Level\_\_c field value in the event message is equal to 'Low'.

![Decision element that checks the ink level](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fflow_example_printer_status_order_ink_decision.png&folder=platform_events)

If the ink level is low, the flow calls an Apex action that orders ink. The Apex action calls an invocable method and passes information about the ink type and the printer serial number as invocable variables.

![Apex action that orders ink](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fflow_example_apex_action_order_ink.png&folder=platform_events)

After the ink level is evaluated, another Decision element evaluates the paper level.

![Decision element that checks the paper level](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fflow_example_printer_status_order_paper_decision.png&folder=platform_events)

If the paper level is lower than 10%, the flow calls an Apex action to order paper. The Apex action calls an invocable method and passes the paper size and serial number as invocable variables.

![Apex action that orders paper](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fflow_example_apex_action_order_paper.png&folder=platform_events)

The implementation of Apex actions isn’t covered in this example. For more information about invocable Apex actions, see [InvocableMethod Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "HTML (New Window)") and [InvocableVariable Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm "HTML (New Window)") in the Apex Developer Guide. Typically, you call an external service to place an order. To do so from an Apex action, you use Apex callouts. For more information, see [Invoking Callouts Using Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts.htm) in the Apex Developer Guide.

## Flow: Automation for Vendor Response Events

The Install Printer Supplies flow is a platform event–triggered flow that subscribes to the Vendor Response platform event. When the vendor ships the printer part, they publish the Vendor Response platform event to notify their customer. This flow starts when it receives the Vendor Response event message. It creates a task for the asset owner to install the new printer part.

![Platform event–triggered flow that subscribes to the Vendor Response platform event](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fflow_example_vendor_response_flow.png&folder=platform_events)

The Get Records element finds the related asset by matching the asset's serial number with that of the received event message. Next, the Create Records element creates the installation task for the part.

![Create Records element that creates an installation task](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fflow_example_vendor_response_task.png&folder=platform_events)

In this example, some task fields reference flow resources that are created separately. The InstallationDate is a formula resource and is defined as follows.

![Formula resource for the installation date](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fflow_example_vendor_response_formula.png&folder=platform_events)

TaskDescription is a text template resource with the following body.

![Resource for the task description](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fflow_example_vendor_response_text_template.png&folder=platform_events)

## Related Topics

- Platform Events: Printer Status and Vendor Response (atlas.en-us.platform_events.meta/platform_events/platform_events_example_printervendor.htm)
- Flow: Automation for Printer Status Events (atlas.en-us.platform_events.meta/platform_events/platform_events_example_printervendor.htm)
- Flow: Automation for Vendor Response Events (atlas.en-us.platform_events.meta/platform_events/platform_events_example_printervendor.htm)
