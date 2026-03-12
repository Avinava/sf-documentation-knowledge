---
title: "Contract"
domain: object-reference
topic: contract
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.304Z
estimatedTokens: 3905
keywords: [Contract, business, agreement, associated, Account, Calls, Usage, Objects]
---

# Contract

> Represents a contract (a business agreement) associated with an
			Account.

# Contract

Represents a contract (a business agreement) associated with an Account.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort,UpdateDescriptionRequired. ID of the Account associated with this contract.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActivatedById | TypereferencePropertiesFilter, Group, Nillable, Sort,UpdateDescriptionID of the User who activated this contract.This field is a relationship field.Relationship NameActivatedByRelationship TypeLookupRefers ToUser |
| ActivatedDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionDate and time when this contract was activated. |
|  |  |
| ActivityMetricId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen Einstein Activity Capture with Activity Metrics is enabled, the ID of the related activity metric.This field is a relationship field.Relationship NameActivityMetricRefers ToActivityMetric |
| ActivityMetricRollupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen Einstein Activity Capture with Activity Metrics is enabled, the ID of the related activity metric rollup.This field is a relationship field.Relationship NameActivityMetricRollupRefers ToActivityMetricRollup |
| AggregationStrategy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe aggregation strategy when creating a pricing contract.Valid value is Cumulative. This field is available with Revenue Cloud in API version 64.0 and later. |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the billing address. Read-only. See Address Compound Fields for details on compound address fields. |
| BillingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. The maximum size is 40 characters. |
| BillingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address of this account. The maximum size is 80 characters. |
| BillingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country code for the contract's billing address. |
| BillingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe accuracy of the geocode for the billing address.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| BillingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLongitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| BillingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLatitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| BillingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address of this account. The maximum size is 20 characters. |
| BillingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. The maximum size is 80 characters. |
| BillingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO state code for the contract's billing address. |
| BillingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet address for the billing address. |
| CompanySignedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date your organization signed the contract. |
| CompanySignedId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the user who signed the contract.This field is a relationship field.Relationship NameCompanySignedRelationship TypeLookupRefers ToUser |
| ContractNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionNumber of the contract. |
| ContractTerm | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of months that the contract is valid. |
| CustomerSignedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the customer signed the contract. |
| CustomerSignedId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Contact who signed this contract.This field is a relationship field.Relationship NameCustomerSignedRelationship TypeLookupRefers ToContact |
| CustomerSignedTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTitle of the customer who signed the contract. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the contract. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, Sort,DescriptionRead-only. Calculated end date of the contract. This value is calculated by adding the ContractTerm to the StartDate. If the Auto-calculate Contract End Date setting is disabled, the contract end date is editable. |
| HasContractCotermination | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the contract can be coterminated (true) or not (false).The default value is false. This field is available with Revenue Cloud in API version 65.0 and later. |
| IsPricingContract | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the contract has related contract item prices (true) or if there are no contract item prices for the contract (false). This field is available with Revenue Cloud in API version 63.0 and later. |
| IsDeleted | TypebooleanPropertiesDefaulted on create or filterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). The label is Deleted. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionValue is the most recent:The due date of the most recent event is logged against the record.The due date of the most recently closed task associated with the record. |
| LastApprovedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionLast date the contract was approved. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate) but didn’t view it. |
| OwnerExpirationNotice | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionNumber of days ahead of the contract end date (15, 30, 45, 60, 90, and 120). Used to notify the owner in advance that the contract is ending. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the contract.This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the pricebook, if any, associated with this contract. |
| PricingSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSource of the pricing for the contract.Valid values are:LastTransactionPriceBookListPrice—Price Book or List PriceAvailable in API version 60.0 and later. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the record type assigned to this object. |
| RenewalTerm2 | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe default subscription term for renewals. For example, if the Renewal Term Unit is months and you want a 6-month term, set the Renewal Term to 6. Available in API version 60.0 and later. |
| RenewalTermUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of time for a subscription term.Valid values are:Annual—UI label is YearsMonthsQuarterly—Available in API version 61.0 and later.Semi-Annual—Available in API version 61.0 and later.Available in API version 60.0 and later. |
| ShippingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the shipping address. Read-only. See Address Compound Fields for details on compound address fields. |
| ShippingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address. City maximum size is 40 characters. |
| ShippingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address. Country maximum size is 80 characters. |
| ShippingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country code for the contract's shipping address. |
| ShippingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe accuracy of the geocode for the shipping address.Valid values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZipAvailable in API version 60.0 and later. |
| ShippingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLongitude to specify the precise geolocation of a shipping address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| ShippingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLatitude to specify the precise geolocation of an address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| ShippingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address. The postal code maximum size is 20 characters. |
| ShippingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address. The maximum size for the state is 80 characters. |
| ShippingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO state code for the contract's shipping address. |
| ShippingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street address of the shipping address. The maximum size is 255 characters. |
| SourceQuoteId | TypereferencePropertiesCreate, Filter, Group, Sort,UpdateDescriptionID of the source quote associated with this contract. This field is available with Revenue Cloud in API version 64.0 and later.This field is a relationship field.Relationship NameContractRelationship TypeLookupRefers ToQuote |
| SpecialTerms | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecial terms that apply to the contract. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort,UpdateDescriptionStart date for this contract. The label is Contract Start Date. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe picklist of values that indicate order status. Each value is within one of two status categories defined in StatusCode. For example, the status picklist may contain: Ready to Ship, Shipped, Received as values within the Activated StatusCode.Valid values are:ActivatedDraftIn Approval ProcessAvailable in API version 60.0 and later. |
| StatusCode | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status category for the contract. A contract can be Draft, InApproval, or Activated. Label is Status Category.Valid values are:ActivatedDraftInApprovalAvailable in API version 60.0 and later. |
| UnitPriceUplift | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the percentage increase of a line item’s unit price. This field is available with Revenue Cloud in API version 64.0 and later. |

## Usage

The Contract object represents a business agreement.

The Status field specifies the current state of a contract. Status strings (defined in the ContractStatus object) represent its current state (Draft, InApproval, or Activated).

Client applications must initially create a Contract in a non-Activated state. Client applications can subsequently activate a Contract by updating it and setting the value in its Status field to Activated; however, the Status field is the only field you can update when activating the Contract.

After a Contract has been activated, your client application can't change its status; however, before activation, your client application can change the status value from Draft to InApproval via the API. Also, your client application can delete contracts whose status is Draft or InApproval but not when a contract status is Activated.

Client applications can use the API to create, update, delete, and query any Attachment associated with a contract.

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 46.0)

Change events are available for the object.

[ContractFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 18.0)

Feed tracking is available for the object.

[ContractHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

#### See Also

-   [ContractContactRole](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractcontactrole.htm "Represents the role that a Contact plays on a Contract.")

-   [ContractStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractstatus.htm "Represents the status of a Contract, such as Draft, InApproval, Activated, Terminated, or Expired.")

## Related Topics

- Address Compound
												Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- AccountChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ContractFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ContractHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ContractContactRole (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractcontactrole.htm)
- ContractStatus (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractstatus.htm)
