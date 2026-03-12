---
title: "Standard Platform Event Object List"
domain: platform-events
topic: standard-platform-event-object-list
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.905Z
estimatedTokens: 5434
keywords: [Standard, Platform, Event, Salesforce, publishes, events, action, occurred, org, report, errors, LoginEventStream, monitors, user, login]
---

# Standard Platform Event Object List

> Salesforce publishes standard platform events in response to an action that occurred in
    the org or to report errors. For example, LoginEventStream monitors user login activity and
    BatchApexErrorEvent reports errors encountered in batch Apex jobs. You can subscribe to a
    standard platform event using the subscription mechanism that the event supports.

# Standard Platform Event Object List

Salesforce publishes standard platform events in response to an action that occurred in the org or to report errors. For example, LoginEventStream monitors user login activity and BatchApexErrorEvent reports errors encountered in batch Apex jobs. You can subscribe to a standard platform event using the subscription mechanism that the event supports.

-   **[AcademicTermGpaCalcEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_academictermgpacalcevent.htm)**
    Represents the resources required for the execution of the academic term GPA calculation policy rule. This object is available in API version 63.0 and later.
-   **[AcadRgstrApplnEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_acadrgstrapplnevent.htm)**
    Represents the resources required to apply an academic term registration timeline on an academic term enrollment. This object is available in API version 65.0 and later.
-   **[AcadRgstrEligCritRunEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_acadrgstreligcritrunevent.htm)**
    Represents the resources required to run an eligibility criteria (expression set) calculation on an academic term enrollment for an academic term registration timeline. This object is available in API version 65.0 and later.
-   **[AiJobRunStatusEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_aijobrunstatusevent.htm)**
    Notifies subscribers when an AiJobRun object changes status to InProgress, Completed, or Failed. This object is available in API version 65.0 and later.
-   **[AIPredictionEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_aipredictionevent.htm)**
    Notifies subscribers when an Einstein feature, such as Prediction Builder or Case Classification, has written prediction results back to a target object and AI prediction field. This object is available in API version 46.0 and later.
-   **[AIUpdateRecordEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_aiupdaterecordevent.htm)**
    Notifies subscribers when Einstein Case Classification has generated a case field value prediction and potentially updated a case record. This object is available in API version 47.0 and later.
-   **[AppointmentSchedulingEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_appointmentschedulingevent.htm)**
    Notifies subscribers when an appointment schedule is added, updated, or deleted. This object is available in API version 50.0 and later.
-   **[AssetCancelInitiatedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assetcancelinitiatedevent.htm)**
    Notifies subscribers when the process started by the /asset-management/assets/collection/actions/initiate-cancellation process is complete. If the process is successful, use this event to learn about the cancellation order that was created. If the process isn't successful, use the RevenueTransactionErrorLog records to learn about the errors and how to fix them. This object is available in API version 55.0 and later.
-   **[AssetAmendInitiatedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assetamendinitiatedevent.htm)**
    Notifies subscribers when the process started by the /asset-management/assets/collection/actions/initiate-amend-quantity REST request is complete. If the process is successful, use this event to learn about the amendment order that was created. If the process isn't successful, use the RevenueTransactionErrorLog records to learn about the errors and how to fix them. This object is available in API version 56.0 and later.
-   **[AssetRenewInitiatedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assetrenewinitiatedevent.htm)**
    Notifies subscribers when the process started by the /asset-management/assets/collection/actions/initiate-renew REST request is complete. If the process is successful, use this event to learn about the renewal order that was created. If the process isn't successful, use the RevenueTransactionErrorLog records to learn about the errors and how to fix them. This object is available in API version 55.0 and later.
-   **[AssetTokenEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assettokenevent.htm)**
    Notifies subscribers of asset token issuance and registration of a connected device as an Asset. This object is available in API version 39.0 and later.
-   **[AppvlWorkItemNtfcnEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_appvlworkitemntfcnevent.htm)**
    Tracks the asynchronous management of notification systems in Advanced Approvals. This object is available in API version 66.0 and later.
-   **[BatchApexErrorEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_batchapexerrorevent.htm)**
    Notifies subscribers of errors and exceptions that occur during the execution of a batch Apex class. This object is available in API version 44.0 and later.
-   **[BillingScheduleCreatedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_billingschedulecreatedevent.htm)**
    Notifies subscribers when the /actions/standardCreateBillingScheduleFromOrderItem request is complete. This object is available in API version 55.0 and later.
-   **[BulkApi2JobEvent (Beta)](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_bulkapi2jobevent.htm)**
    Notifies subscribers of changes to the status of Bulk API 2.0 query jobs and provides URLs for downloading partial results. This object is available in API version 63.0 and later.
-   **[CallCoachConfigModifyEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_callcoachconfigmodifyevent.htm)**
    Notifies subscribers of a Conversation Insights configuration change. This object is available in API version 49.0 and later.
-   **[CartToOrderCompletedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_carttoordercompletedevent.htm)**
    Each row represents information that notifies subscribers when the /actions/standard/createOrderFromCart REST request is complete. If the request is successful, use this event to learn about the Order record. If the request isn’t successful, use this event to learn about the errors associated with the request. This object is available in API version 66.0 and later.
-   **[CommerceDiagnosticEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_commercediagnosticevent.htm)**
    Tracks checkout, pricing, search, and other activity within your Commerce implementation to monitor events and diagnose issues. This object is available in API version 49.0 and later.
-   **[ConsentEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_consentevent.htm)**
    Notifies subscribers of changes to consent fields or contact information on all core objects. This object is available in API version 50.0 and later.
-   **[ConsentUnsubscribeAllEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_consentunsubscribeallevent.htm)**
    Notifies subscribers when a user unsubscribes from all communications on a preference form created in Preference Manager. This object is available in API version 60.0 and later.
-   **[ConversationInsightEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_conversationinsightevent.htm)**
    Notifies subscribers whenever an Einstein Insight rule is triggered. This object is available in API version 60.0 and later.
-   **[CreateAssetOrderEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_createassetorderevent.htm)**
    Notifies subscribers that the process started by the /actions/standard/createOrUpdateAssetFromOrder or /actions/standard/createOrUpdateAssetFromOrderItem request is complete. If the process is successful, use this event to learn about the new assets. If the request isn't successful, use this event to learn about the errors and how to fix them. This object is available in API version 55.0 and later.
-   **[CreditInvoiceProcessedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_creditinvoiceprocessedevent.htm)**
    Notifies subscribers when the process started by the /commerce/invoicing/invoices/{invoiceId}/actions/credit request is complete. This object is available in API version 55.0 and later.
-   **[CreditMemoProcessedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_creditmemoprocessedevent.htm)**
    Notifies subscribers when the process started by the /commerce/invoicing/credit-memos request is complete. This object is available in API version 55.0 and later.
-   **[DataObjectDataChgEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_dataobjectdatachgevent.htm)**
    Notifies subscribers of an action within Data Cloud. This object is available in API version 53.0 and later.
-   **[DataObjectMetadataChgEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_dataobjectmetadatachgevent.htm)**
    Notifies subscribers of a metadata change within Data Cloud for these objects: Data Lake, Data Model, and Calculated Insight. This object is available in API version 53.0 and later.
-   **[DatasetExportEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_datasetexportevent.htm)**
    Notifies subscribers on the export of an Analytics dataset. This object is available in API version 41.0 and later.
-   **[DiscoveryPredictionEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_discoverypredictionevent.htm)**
    Notifies subscribers when Einstein Discovery has written prediction history results. This object is available in API version 57.0 and later.
-   **[EmailCapturedMatchEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_emailcapturedmatchevent.htm)**
    For internal use only.
-   **[ExtlRecShrEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_extlrecshrevent.htm)**
    Tracks the record data published from a vendor’s Salesforce org to a connected partner’s org for Partner Connect. This object is available in API version 62.0 and later.
-   **[ExtlRecShrResultEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_extlrecshrresultevent.htm)**
    Tracks the data and the result of the export or update of the external record share published between a vendor and partner system for Partner Connect. This object is available in API version 62.0 and later.
-   **[FirstBillPaymentSetupEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_firstbillpaymentsetupevent.htm)**
    Notifies subscribers when a first bill payment is set up. This object is available in API version 60.0 and later.
-   **[FlowDebugRefreshEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_flowdebugrefreshevent.htm)**
    Notifies subscribers when a flow debug run pauses or completes and its debug output panel in Flow Builder can be refreshed. This object is available in API version 65.0 and later.
-   **[FlowExecutionErrorEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_flowexecutionerrorevent.htm)**
    Notifies subscribers of errors related to screen flow executions. This object is available in API version 47.0 and later.
-   **[FlowOrchestrationEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_floworchestrationevent.htm)**
    Notifies subscribers that a paused instance of an orchestration is ready to be resumed. This object is available in API version 53.0 and later.
-   **[FOStatusChangedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_fostatuschangedevent.htm)**
    Notifies subscribers of changes to the status of a fulfillment order record. Use this event to trigger flows and processes in your order workflow. This object is available in API version 48.0 and later.
-   **[FulfillOrdItemQtyChgEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_fulfillorditemqtychgevent.htm)**
    Notifies subscribers of changes to the quantity of a fulfillment order line item record. Use this event to trigger flows and processes in your order workflow. This object is available in API version 53.0 and later.
-   **[InsPlcyEndrStatusEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_insplcyendrstatusevent.htm)**
    Notifies subscribers of the status of the insurance policy endorsement. This object is available in API version 65.0 and later.
-   **[InsPolicyRnwlQuoteStatusEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_inspolicyrnwlquotestatusevent.htm)**
    Notifies subscribers of the status of a renewal quote during the policy renewal process. This object is available in API version 64.0 and later.
-   **[InsPolicyRnwlStatusEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_inspolicyrnwlstatusevent.htm)**
    Notifies subscribers of the status of the policy renewal. This object is available in API version 64.0 and later.
-   **[InteropTopicSubcrEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_interoptopicsubcrevent.htm)**
    Represents the structure of the interoperability topic subscription event that's sent from the publisher to Mulesoft. This object is available in API version 64.0 and later.
-   **[InvoiceProcessedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_invoiceprocessedevent.htm)**
    Notifies subscribers when the process started by the /commerce/billing/invoices request is complete. The process groups billing schedules by grouping keys and creates one invoice per grouping key. InvoiceProcessedEvent is a top-level object that contains a list of InvoiceProcessedDetailEvents, where each detail event represents an attempt to create one invoice. This object is available in API version 55.0 and later.
-   **[InvoiceProcPymtExclEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_invoiceprocpymtexclevent.htm)**
    Represents the notification to the subscribers regarding the results of /commerce/invoicing/invoices/collection/actions/generate request to generate an invoice from billing schedules without processing payments. This object is available in API version 63.0 and later.
-   **[NegInvcLineProcessedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_neginvclineprocessedevent.htm)**
    Notifies subscribers when a negative invoice line is converted to a credit memo. This object is available in API version 56.0 and later.
-   **[OmniTrackingEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_omnitrackingevent.htm)**
    Notifies subscribers about a user interaction with a FlexCard or OmniScript that's tracked for OmniAnalytics. This object is available in API version 60.0 and later.
-   **[OrderStatusChangedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_orderstatuschangedevent.htm)**
    Notifies subscribers of changes to the status of an order record. Use this event to trigger flows and processes in your order workflow. This object is available in API version 51.0 and later.
-   **[OrderSummaryCreatedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_ordersummarycreatedevent.htm)**
    Notifies subscribers of the creation of an order summary record. Use this event to trigger flows and processes in your order workflow. This object is available in API version 48.0 and later.
-   **[OrderSumStatusChangedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_ordersumstatuschangedevent.htm)**
    Notifies subscribers of changes to the status of an order summary record. Use this event to trigger subscribers such as flows in your order workflow. This object is available in API version 48.0 and later.
-   **[PaymentCreationEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_paymentcreationevent.htm)**
    Notifies subscribers when the process started by the /actions/standard/paymentSale request is complete. This object is available in API version 55.0 and later.
-   **[PendingOrdSumProcEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_pendingordsumprocevent.htm)**
    Notifies subscribers that a PendingOrderSummary record was processed. If the process succeeded, an OrderSummary was created and the PendingOrderSummary can be deleted. Use this event to trigger subscribers such as flows in your order workflow. This object is available in API version 56.0 and later.
-   **[PlaceOrderCompletedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_placeordercompletedevent.htm)**
    Notifies subscribers of an order being created or updated by invoking the Place Order API or the Place Sales Transaction API. This object is available in API version 63.0 and later.
-   **[PlatformStatusAlertEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_platformstatusalertevent.htm)**
    Notifies subscribers of alerts that occur during the processing of a user request or service job execution. This object is available in API version 45.0 and later.
-   **[ProcessExceptionEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_processexceptionevent.htm)**
    Notifies subscribers of errors that occur during payment processing (capture, apply, and refund) on an order summary. Use this event to trigger subscribers such as flows in your order workflow. This object is available in API version 50.0 and later.
-   **[QuoteSaveEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_quotesaveevent.htm)**
    Notifies subscribers that the process started by the /actions/standard/quotesaveevent request is complete. If the process is successful, use this event to learn about the updated quote. If the request isn't successful, use this event to learn about the errors and how to fix them. This object is available in API version 58.0 and later.
-   **[QuoteToOrderCompletedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_quotetoordercompletedevent.htm)**
    Notifies subscribers when the /actions/standard/createOrderFromQuote REST request is complete. If the request is successful, use this event to learn about the Order record. If the request isn’t successful, use this event to learn about the errors associated with the request. This object is available in API version 56.0 and later.
-   **[RealtimeAlertEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_realtimealertevent.htm)**
    Notifies subscribers of Amazon CloudWatch alarm events from your Service Cloud Voice Amazon Connect instance. This object is available in API version 54.0 and later.
-   **[RemoteKeyCalloutEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_remotekeycalloutevent.htm)**
    Notifies subscribers of callouts that fetch encrypted key material from a customer endpoint. This object is available in API versions 45.0 and later.
-   **[SrcPredJobStatusChgEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_srcpredjobstatuschgevent.htm)**
    Notifies subscribers that the Data Cloud prediction job’s status is changed. This object is available in API version 50.0 and later.
-   **[SearchIndexJobStatusEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_searchindexjobstatusevent.htm)**
    Notifies subscribers of changes to the status of the Data Cloud search index job, such as index refresh status and index run-time status. This object is available in API version 60.0 and later.
-   **[ServiceAppointmentEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_serviceappointmentevent.htm)**
    Notifies subscribers of the service appointment details that are generated from the event platform. This object is available in API version 59.0 and later.
-   **[VoidInvoiceProcessedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_voidinvoiceprocessedevent.htm)**
    Notifies subscribers when the process started by the /commerce/invoicing/invoices/{invoiceId}/actions/void request is complete. The request attempts to void an invoice by crediting an invoice and changing its status to Voided, which prevents further changes. This object is available in API version 55.0 and later. This object is available in API version 55.0 and later.
-   **[WebCartAbandonedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_webcartabandonedevent.htm)**
    Notifies subscribers of an abandoned cart. This object is available in API version 63.0 and later.
-   **[WebStoreUserCreatedEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_webstoreusercreatedevent.htm)**
    Notifies subscribers of the creation of a new user for a WebStore. This object is available in API version 59.0 and later.
-   **[Real-Time Event Monitoring Objects](atlas.en-us.platform_events.meta/platform_events/platform_events_objects_monitoring.htm)**
    Check out the standard platform event and object pairs for Real-Time Event Monitoring. For most platform events used in Real-Time Event Monitoring, corresponding objects store the event data. For more information, see [Real-Time Event Monitoring](https://help.salesforce.com/s/articleView?id=xcloud.real_time_event_monitoring_overview.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## Related Topics

- AcademicTermGpaCalcEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_academictermgpacalcevent.htm)
- AcadRgstrApplnEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_acadrgstrapplnevent.htm)
- AcadRgstrEligCritRunEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_acadrgstreligcritrunevent.htm)
- AiJobRunStatusEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_aijobrunstatusevent.htm)
- AIPredictionEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_aipredictionevent.htm)
- AIUpdateRecordEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_aiupdaterecordevent.htm)
- AppointmentSchedulingEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_appointmentschedulingevent.htm)
- AssetCancelInitiatedEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assetcancelinitiatedevent.htm)
- AssetAmendInitiatedEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assetamendinitiatedevent.htm)
- AssetRenewInitiatedEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_assetrenewinitiatedevent.htm)
