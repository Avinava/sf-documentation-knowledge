---
title: "Flow for Health Cloud"
domain: health-cloud-object-reference
topic: flow-for-health-cloud
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.047Z
estimatedTokens: 631
keywords: [Flow, Health, Cloud, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic]
---

# Flow for Health Cloud

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Health Cloud

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Health Cloud exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Health Cloud include:appointment—Create or book a new appointment.createQuoteForHomeVisits—Create a quote for patient home visits based on the specified visit details.createReferral—Create a patient referral record.createTemplateOfServiceAppt—Create a template service appointment with a status of Cancelled to manually schedule home visits.getResources—Search for available resources, such as healthcare providers or medical assets, based on specified search criteria..getResourcesForMnlScheduling—Get recommended resources that can be used when you manually schedule a start of care visit or recurring visits.getTranscriptForConversation—Gets the transcript for a specified conversation record such as voice call, messaging session, or chat transcript. This value is available in API version 64.0 and later.handleResourceAbsence—Remove a service resource’s visit assignments for a specified period and optionally update the status of the affected visits to a specified value.invokeGenericFHIR—Invoke an external service by including the provided payload as the request body and return the response received from the external service.processReceivedDocument—Create a record with the processed results of a received document.scheduleHomeVisitManually—Create start of care or recurring home healthcare visits and assign care resources that are manually selected by the scheduler to the visits.scheduleHomeVisit—Schedule a home visit for the patient to assess the condition before scheduling the recurring visits for the patient care.scheduleRecurringHomeVisit—Create a set of recurring home healthcare visits and assign service resources to them based on the specified scheduling policy. |

#### See Also

-   [*Metadata API Developer Guide*: Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm "Metadata API Developer Guide: Flow - HTML (New Window)")
