---
title: "ServiceContract"
domain: object-reference
topic: servicecontract
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.814Z
estimatedTokens: 2678
keywords: [ServiceContract, customer, support, contract, business, agreement, API, version, 18.0, later, Calls, Associated, Objects]
---

# ServiceContract

> Represents a customer support contract
				(business agreement).
		This object is available in API version 18.0 and later.

# ServiceContract

Represents a customer support contract (business agreement). This object is available in API version 18.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the account associated with the service contract. |
| ActivationDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe initial day the service contract went into effect (whereas StartDate may include a renewal date). |
| AdditionalDiscount | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionExtra discount percentage for the service contract. Available in API version 55.0 and later. |
| ApprovalStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionApproval status of the service contract. |
| BillingAddress (beta) | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the billing address. Read-only. See Address Compound Fields for details on compound address fields. |
| BillingCity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address. Maximum size is 40 characters. |
| BillingCountry | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address. Maximum size is 40 characters. |
| BillingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country code for the service contract’s billing address. |
| BillingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLongitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| BillingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLatitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| BillingPostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address. Maximum size is 20 characters. |
| BillingState | TypestringPropertiesGroup, Sort, Filter, NillableDescriptionDetails for the billing address. Maximum size is 20 characters. |
| BillingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO state code for the service contract’s billing address. |
| BillingStreet | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionStreet address for the billing address. |
| ContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the Contact associated with the service contract. Must be a valid ID. |
| ContractNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionUnique number automatically assigned to the service contract. |
| Description | TypetextareaPropertiesNillableDescriptionDescription of the service contract. |
| Discount | TypepercentPropertiesFilter, Nillable, SortDescriptionDiscount percentage for the service contract. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe last day the service contract is in effect. |
| GrandTotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal price of the service contract plus shipping and taxes. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| LineItemCount | TypeintPropertiesFilter, Nillable, Group, SortDescriptionNumber of ContractLineItem records associated with the service contract. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the service contract. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns the service contract. |
| ParentServiceContractId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service contract’s parent service contract, if it has one. |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Pricebook2 associated with the service contract. Must be a valid ID. |
| RootServiceContractId | TypereferencePropertiesFilter, Group, Nillable, SortDescription(Read only) The top-level service contract in a service contract hierarchy. Depending on where a service contract lies in the hierarchy, its root could be the same as its parent. |
| ShippingAddress (beta) | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the shipping address. Read-only. See Address Compound Fields for details on compound address fields. |
| ShippingCity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails of the shipping address. Maximum size is 40 characters. |
| ShippingCountry | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails of the shipping address. Country maximum size is 40 characters. |
| ShippingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country code for the service contract’s shipping address. |
| ShippingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLongitude to specify the precise geolocation of a shipping address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| ShippingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLatitude to specify the precise geolocation of an address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| ShippingPostalCode | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionDetails of the shipping address. Postal code maximum size is 20 characters. |
| ShippingState | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionDetails of the shipping address. State maximum size is 20 characters. |
| ShippingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO state code for the service contract’s shipping address. |
| ShippingStreet | TypetextareaPropertiesCreate, Filter, Nillable, UpdateDescriptionThe street address of the shipping address. Maximum of 255 characters. |
| SpecialTerms | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAny terms specifically agreed to and tracked in the service contract. |
| StartDate | TypedatePropertiesCreate, Filter, Nillable, UpdateDescriptionThe first day the service contract is in effect. |
| Status | TypepicklistPropertiesFilter, NillableDescriptionThe status of the service contract, such as Inactive. |
| Subtotal | TypecurrencyPropertiesFilter, NillableDescriptionTotal of the service contract line items (products) before discounts, taxes, and shipping are applied. |
| Tax | TypecurrencyPropertiesCreate, Filter, Nillable, UpdateDescriptionTotal taxes for the service contract. |
| Term | TypeintPropertiesCreate, Filter, Nillable, UpdateDescriptionNumber of months that the service contract is valid. |
| TotalPrice | TypecurrencyPropertiesFilter, NillableDescriptionTotal of the contract line items (products) after discounts and before taxes and shipping. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceContractChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

[ServiceContractFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 23.0)

Feed tracking is available for the object.

[ServiceContractHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ServiceContractOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ServiceContractShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [ServiceContractOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicecontractownersharingrule.htm "Represents the rules for sharing a ServiceContract (customer service agreement) with users other than the owner. This object is available in API version 18.0 and later.")

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- ServiceContractChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ServiceContractFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ServiceContractHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ServiceContractOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ServiceContractShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- ServiceContractOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicecontractownersharingrule.htm)
