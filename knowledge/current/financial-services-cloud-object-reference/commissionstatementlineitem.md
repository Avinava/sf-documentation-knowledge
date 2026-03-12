---
title: "CommissionStatementLineItem"
domain: financial-services-cloud-object-reference
topic: commissionstatementlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.845Z
estimatedTokens: 1874
keywords: [CommissionStatementLineItem, commission, associated, service, item, API, version, later, Calls, Objects]
---

# CommissionStatementLineItem

> Represents commission information associated with a service or an item. This
      object is available in API version 61 and later.

# CommissionStatementLineItem

Represents commission information associated with a service or an item. This object is available in API version 61 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplyToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date to which the commission amount should be applied when crediting the commission to the producer. |
| BasisAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the basis amount on which the commission percent was applied to calculate the commission amount. |
| CarrierAccountName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the carrier associated with the insurance policy. |
| ClientAccountName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the client associated with the insurance policy. |
| CommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe commission amount associated with the insurance policy in the commission statement line item. |
| CommissionPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate that's used for the commission calculation. |
| CommissionStatementId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe commission statement associated with the commission statement line.This field is a relationship field.Relationship NameCommissionStatementRelationship TypeMaster-detailRefers ToCommissionStatement (the master object) |
| CommissionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of commission associated with the commission statement line item. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external reference number associated with the comission statement line item. |
| FailureMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe failure message when processing fails for the commission statement line item. |
| InsurancePolicyEffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe effective date of the insurance policy that's specified in the commission statement. |
| InsurancePolicyExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the insurance policy remains effective. |
| InsurancePolicyNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy number specified in the commission statement. |
| InsurancePolicyRenewalDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe renewal date of the insurance policy that's specified in the commission statement. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LineOfBusiness | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the line of business for the commission statement line item.Possible values are:Employee BenefitsProperty & Casualty |
| LineOfCoverage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the coverage type for the commission statement line item. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the commission statement line item. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReferenceRecordId | The reference record associated with the commission statement line item. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the commission statement line item. |
| TransactionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the transaction that generated the commission has occurred. |
| TransactionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the transaction type of the commission statement line item. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CommissionStatementLineItemChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[CommissionStatementLineItemHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CommissionStatementLineItemOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CommissionStatementLineItemShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CommissionStatementLineItemChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CommissionStatementLineItemHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CommissionStatementLineItemOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CommissionStatementLineItemShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
