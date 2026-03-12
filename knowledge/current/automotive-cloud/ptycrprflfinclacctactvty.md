---
title: "PtyCrPrflFinclAcctActvty"
domain: automotive-cloud
topic: ptycrprflfinclacctactvty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.465Z
estimatedTokens: 719
keywords: [PtyCrPrflFinclAcctActvty, payments, made, borrower, reported, credit, bureau, Reveals, borrower's, payment, behavior, past, debts, indicating, timely]
---

# PtyCrPrflFinclAcctActvty

> Represents information about the payments made by a borrower reported by a
         credit bureau. Reveals a borrower's payment behavior on past debts, indicating timely,
         delayed, or skipped payments. This object is available in API version 65.0 and later.

# PtyCrPrflFinclAcctActvty

Represents information about the payments made by a borrower reported by a credit bureau. Reveals a borrower's payment behavior on past debts, indicating timely, delayed, or skipped payments. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsPaymentMadeOnTime | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the payment was made on time (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| PartyCreditPrflFinclAcctId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe financial account associated with the payment activity.This field is a relationship field.Relationship NamePartyCreditPrflFinclAcctRelationship TypeMaster-detailRefers ToPartyCreditPrflFinclAcct (the master object) |
| PaymentMonth | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe month of payment.Possible values are:JuneAugustFebruary |
| PaymentYear | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe year of payment. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PtyCrPrflFinclAcctActvtyChangeEvent](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PtyCrPrflFinclAcctActvtyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

## Related Topics

- PtyCrPrflFinclAcctActvtyChangeEvent (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_associated_objects_change_event.htm)
