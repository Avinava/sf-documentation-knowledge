---
title: "ProcessException"
domain: object-reference
topic: processexception
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.171Z
estimatedTokens: 1956
keywords: [ProcessException, business, exception, processing, failure, order, summary, separate, process, resolve, caused, continue, API, version, 50.0]
---

# ProcessException

> Represents a business exception, such as a processing failure on an
      order summary. A separate process is required to resolve the failure that caused the process
      exception before processing can continue. This object is available in API version 50.0
    and later.

# ProcessException

Represents a business exception, such as a processing failure on an order summary. A separate process is required to resolve the failure that caused the process exception before processing can continue. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttachedToId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the object associated with the ProcessException.This field is a polymorphic relationship field.Relationship NameAttachedToRelationship TypeLookupRefers ToAsyncOpSyndicationFeedFile, AsyncOperationTrackerCreditMemo, FulfillmentOrder, Invoice, Order, OrderItem, OrderItemSummary, OrderPaymentSummary, OrderSummary, Payment, PaymentAuthorization, Refund, ReturnOrder |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the case associated with the ProcessException.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| Category | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionProcessingException type. You can customize the category picklist to represent your business processes.Possible values are:FulfillmentInvoicingOrder ActivationOrder ApprovalOrder To AssetOrder Item Summary To AssetOrder To Billing SchedulePaymentThe default value is Order Activation. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for the currency of the OrderSummary associated with the ProcessException.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDetailed description of the ProcessException. |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of external entities associated with the ProcessException. |
| FlowOrchestrationInstRelaObj | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe flow orchestration instance related object associated with this record.This field is a relationship field.Relationship NameFlowOrchInstRelaObjRelationship TypeLookupRefers ToFlowOrchestrationInstRelaObj |
| GroupById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID used in the entity to group exceptions, such as the Async Operation Tracker.This field is a polymorphic relationship field.Relationship NameGroupByRefers ToAsyncOperationTracker |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. A null value can mean that this record has only been referenced (LastReferencedDate) and not viewed. |
| Message | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionShort description of the ProcessException |
| OrderSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the OrderSummary associated with the ProcessException. The ProcessException component is displayed on this OrderSummary.This field is a relationship field.Relationship NameOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the User who currently owns this ProcessException. Default value is the User who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionResolution priority for the ProcessException. You can customize the priority picklist to represent your business processes.Possible values are:HighLowThe default value is Low. |
| ProcessExceptionNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique name of the ProcessException, formatted as PE-(00000000). |
| Severity | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSeverity of the ProcessException. Each severity value corresponds to one severity category. You can customize the severity picklist to represent your business processes. If you customize the severity picklist, include at least one severity value for each severity category.Possible values are:HighLowThe default value is High. |
| SeverityCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSeverity category of the ProcessException. Each severity category corresponds to one or more severity values. The severity category is used to show the severity icon in the ProcessException list view.Possible values are:HIGHLOWMEDIUM |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionStatus of the ProcessException. Each status corresponds to one status category, shown here in parentheses. You can customize the status picklist to represent your business processes. If you customize the status picklist, include at least one status value for each status category.Possible values are:Ignored (Inactive)New (Active)Paused (Inactive)Resolved (Resolved)Triaged (Active)Voided (Inactive)The default value is New. |
| StatusCategory | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionStatus category of the ProcessException. Each status category corresponds to one or more statuses.Possible values are:ACTIVEINACTIVERESOLVED |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProcessExceptionChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[ProcessExceptionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProcessExceptionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

## Related Topics

- ProcessExceptionChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ProcessExceptionOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
