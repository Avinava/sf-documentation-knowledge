---
title: "PaymentRequestLine"
domain: financial-services-cloud-object-reference
topic: paymentrequestline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.369Z
estimatedTokens: 1639
keywords: [PaymentRequestLine, line, item, financial, compensation, API, version, 54.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# PaymentRequestLine

> Represents the line item details of the financial compensation request.
      This object is available in API version 54.0 and later.

# PaymentRequestLine

Represents the line item details of the financial compensation request. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if the add-on license for Claims Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdjustment amount for reasons such as copay, deductible, and coinsurance. |
| AdjustmentReason | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe reason for adjustment.Possible values include:CoinsuranceCopayDeductible |
| BenefitName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of benefit associated with the payment request line, such as Physical Therapy or Ambulance Transportation. |
| ClaimItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim item associated with the payment request line.This is a relationship field.Relationship NameClaimItemRelationship TypeLookupRefers ToClaimItem |
| DiagnosticCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe diagnostic code associated with the payment request line.This is a polymorphic relationship field.Relationship NameDiagnosticCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of services represented in the payment request line. |
| FacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility associated with the payment request line. This is a polymorphic relationship field.Relationship NameFacilityRelationship TypeLookupRefers ToAccount, Location |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Payment Request Line. |
| PaymentRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe payment request associated with the payment request line.This is a relationship field.Relationship NamePaymentRequestRelationship TypeLookupRefers ToPaymentRequest |
| Quantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of units the payment request line represents, such as number of days in hospital. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnit of measure for the quantity field.Possible values include:DaysNightsVisits |
| RequestedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount that the requestor is seeking for payment, which is the service amount minus the adjustment amount. |
| ServiceAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal service amount for the payment request line before adjustments. |
| ServiceCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service code associated with the payment request line.This is a polymorphic relationship field.Relationship NameServiceCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| ServiceProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service provider associated with the payment request line.This is a polymorphic relationship field.Relationship NameServiceProviderRelationship TypeLookupRefers ToAccount, Contact |
| ServiceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of requested service.Possible values include:DeviceMedicationProcedureRepairs |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of services represented in the payment request line. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the payment request line.Possible values include:PaidPartially PaidReceived |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUnit Price for the quantity and quantity unit of measure. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PaymentRequestLineChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 63.0 and later.

[PaymentRequestLineFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PaymentRequestLineHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PaymentRequestLineChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- PaymentRequestLineFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PaymentRequestLineHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
