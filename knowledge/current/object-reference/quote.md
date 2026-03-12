---
title: "Quote"
domain: object-reference
topic: quote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.856Z
estimatedTokens: 5073
keywords: [Quote, record, showing, proposed, prices, products, services, API, version, 18.0, later, Calls, Usage, Associated, Objects]
---

# Quote

> Represents a quote, which is a record showing proposed prices for
			products and services. Available in API version 18.0 and later.

# Quote

Represents a quote, which is a record showing proposed prices for products and services. Available in API version 18.0 and later.

Quotes can be created from and synced with opportunities, and emailed as PDFs to customers

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the account that’s associated with the quote. |
| AdditionalAddress | TypeaddressPropertiesFilter, NillableDescriptionCompound form of the additional address. Read-only. See Address Compound Fields for details on compound address fields. |
| AdditionalCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity for the quote's additional address. Up to 40 characters allowed. |
| AdditionalCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry for the quote's additional address. Up to 80 characters allowed. |
| AdditionalCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionISO country code for the quote’s additional address. |
| AdditionalLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with AdditionalLongitude to specify the precise geolocation of an additional address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| AdditionalLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with AdditionalLatitude to specify the precise geolocation of an additional address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| AdditionalName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName associated with the quote's additional address. Limited: 255 characters. |
| AdditionalPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal Code for the quote's additional address. |
| AdditionalState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState for the quote's additional address. Up to 80 characters allowed. |
| AdditionalStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionISO state code for the quote’s additional address. |
| AdditionalStreet | TypetextareaPropertiesCreate, Filter, Nillable, Group, Sort, UpdateDescriptionStreet name for the quote's additional address. |
| BillToContactId | TypereferencePropertiesCreate, Filter, Nillable, Group, Sort, UpdateDescriptionID of the contact that the order is billed to. This field is available in API version 56.0 and later. This field is available with Subscription Management. |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescriptionCompound form of the billing address. Read-only. See Address Compound Fields for details on compound address fields. |
| BillingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity for the quote's billing address. Up to 40 characters allowed. |
| BillingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry for the quote's billing address. Up to 80 characters allowed. |
| BillingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionISO country code for the quote’s billing address. |
| BillingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLongitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| BillingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLatitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| BillingName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionEntity that the quote is billed to. |
| BillingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal Code for the quote's billing address. |
| BillingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState for the quote's billing address. Up to 80 characters allowed. |
| BillingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionISO state code for the quote’s billing address. |
| BillingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet name for the quote's billing address. |
| CalculationStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionPrice calculations are performed by Salesforce. Tax calculations are performed by a third-party tax provider integration with Salesforce. Both of these calculations are asynchronous, and you can use this field to see the status of the asynchronous processes.This field is available with Subscription Management or Revenue Cloud.Possible values are:CompletedWithPricing—Indicates that pricing is complete and tax will now be calculated.CompletedWithTax—Indicates that pricing and tax calculation are complete.CompletedWithoutPricing—Indicates that pricing and tax calculation were skipped.ConfigurationFailed—Indicates that configuration failed. Available in API version 62.0ConfigurationInProgress—Indicates that the configuration is in progress. Available in API version 62.0GroupRampConfigurationFailed—Indicates that the checks for group ramps have failed. Available in API version 65.0 and later.NotStartedPriceCalculationFailed—Indicates that pricing failed. Available in API version 58.0 and later.PriceCalculationInProgress—Available in API version 58.0 and later.PriceCalculationQueued—The request is sent to the asynchronous price calculation process, but the process hasn’t started. Available in API version 58.0 and later.QuoteRequestFailed—Indicates that the requested quote changes weren’t saved. Available in API version 62.0QuoteRequestPartiallySaved—Indicates that the requested quote changes were partially saved. Available in API version 62.0ReconciliationFailed—Indicates that the arrangement of quote data failed. Available in API version 62.0ReconciliationInProgress—Indicates that the arrangement of data is in progress. For a sales rep, this value appears as Saving on the quote page. Available in API version 62.0SaveFailedOrIncomplete—Some or all of the records couldn’t be saved. For example, some of the quote line item records weren’t saved. Available in API version 58.0 and later.SavingTaxCalculationFailedTaxCalculationInProcessTaxCalculationSuccess—Available in API versions 56.0 and 57.0TaxCalculationWaitingThe default value is NotStarted. |
| CanCreateQuoteLineItems | TypebooleanPropertiesCreate, Defaulted on create, GroupDescriptionThis field isn’t used. |
| ContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the contact that’s associated with the quote. |
| ContractId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contract that’s associated with the quote. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Restricted picklistDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization.If the organization has multicurrency and a Pricebook2Id specified on the quote, then the currency value of this field must match the currency of the PricebookEntry objects that are associated with any quote line items it has.This value is copied from the related Opportunity and can't be changed. |
| Description | TypetextareaPropertiesNillableDescriptionText description of the quote. Limit: 32,000 characters. |
| Discount | TypepercentPropertiesFilter, Nillable, SortDescriptionThe difference between the QuoteLineItem record’s subtotal and its discounted total, divided by the QuoteLineItem’s subtotal. Expressed as a percentage. |
| Email | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionThe email address of the contact who’s associated with the quote. |
| ExpirationDate | TypedatePropertiesCreate, Filter, Nillable, UpdateDescriptionThe date when this quote is no longer valid. |
| Fax | TypephonePropertiesCreate, Filter, Nillable, UpdateDescriptionThe fax number for the contact who’s associated with the quote. |
| GrandTotal | TypecurrencyPropertiesFilter, NillableDescriptionThe total price of the quote plus shipping and taxes.NoteThe GrandTotal is a system-calculated summary field and is not directly referenceable or usable in custom formula fields on the Quote object. Attempts to do so result in an error message. For example, "Error: Field GrandTotal does not exist. Check spelling." To perform calculations based on the total value of a quote, consider using a Roll-Up Summary field from related Quote Line Items or performing calculations directly on the QuoteLineItem object. |
| IsSyncing | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the quote is syncing with an opportunity. |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view but not viewed it directly. |
| LineItemCount | TypeintPropertiesFilter, NillableDescriptionThe number of line items on the quote. |
| Name | TypestringPropertiesCreate, Filter, idLookup, UpdateDescriptionRequired. Name for the quote. Limit: 225 characters. |
| OpportunityId | TypereferencePropertiesCreate, FilterDescriptionID for the opportunity associated with the quote. |
| Phone | TypephonePropertiesCreate, Filter, Nillable, UpdateDescriptionThe phone number of the contact who’s associated with the quote. |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the price book associated with the quote. |
| QuoteAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account associated with the quote. This field is available in API version 58.0 and later only when the Create Quotes Without a Related Opportunity setting on the Quotes Settings page is enabled.This field is a relationship field.Relationship NameQuoteAccountRefers ToAccount |
| QuoteNumber | TypestringPropertiesDefaulted on create, FilterDescriptionA system-generated number that identifies the quote. |
| QuoteToAddress | TypeaddressPropertiesFilter, NillableDescriptionCompound form of the quote to address. Read-only. See Address Compound Fields for details on compound address fields. |
| QuoteToCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity for the address to send the quote to for approval, such as a third party-agency representing a buyer. Up to 40 characters allowed. |
| QuoteToCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry for the address to send the quote to for approval. Up to 80 characters allowed. |
| QuoteToLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with QuoteToLongitude to specify the precise geolocation of a quote to address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| QuoteToLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with QuoteToLatitude to specify the precise geolocation of a quote to address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| QuoteToName | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionThe name of the entity (such as a person or business) that the quote is sent to for approval. Limit: 255 characters. |
| QuoteToPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code for the address to send the quote to for approval. |
| QuoteToState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState for the address to send the quote to for approval. Up to 80 characters allowed. |
| QuoteToStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet name for the address to send the quote to for approval. |
| RecordSource | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the source application context for the record.This field is available with Digital Insurance in API version 66.0 and later.Possible values are:DigitalInsuranceNull |
| RecordTypeID | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the record type assigned to the object. |
| RelatedWorkId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionRelationship field that’s visible only if Field Service and Quotes are enabled in the Salesforce org. This field refers to the work order that the quote is created from. When a mobile worker creates a quote using the New Quote action in the Field Service mobile app, this field is automatically populated. This field is used in the related list that shows all of the quotes related to the work order. |
| ShippingAddress | TypeaddressPropertiesFilter, NillableDescriptionCompound form of the shipping address. Read-only. See Address Compound Fields for details on compound address fields. |
| ShippingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity for the quote's shipping address. Up to 40 characters allowed. |
| ShippingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry for the quote's shipping address. Up to 80 characters allowed. |
| ShippingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionISO country code for the quote’s shipping address. |
| ShippingHandling | TypecurrencyPropertiesCreate, Filter, Nillable, UpdateDescriptionThe total shipping and handling costs for the quote. |
| ShippingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLongitude to specify the precise geolocation of a shipping address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| ShippingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLatitude to specify the precise geolocation of an address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| ShippingName | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionThe name of the entity (such as a person or business) that the quote is sent to for approval. |
| ShippingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code for the quote's shipping address. |
| ShippingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState for the quote's shipping address. Up to 80 characters allowed. |
| ShippingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionISO state code for the quote’s shipping address. |
| ShippingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet name for the quote's shipping address. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Nillable, UpdateDescriptionThe status of the quote. The standard options are:—None—DraftNeeds ReviewIn ReviewApprovedRejectedPresentedAcceptedDenied |
| Subtotal | TypecurrencyPropertiesFilter, NillableDescriptionThe sum of sales price multiplied by quantity for line items, not including the discount. |
| Tax | TypecurrencyPropertiesCreate, Filter, Nillable, UpdateDescriptionThe total taxes for the quote. |
| TotalPrice | TypecurrencyPropertiesFilter, NillableDescriptionThe total of the quote line items after discounts and before taxes and shipping. |
| TotalPriceWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of TotalPrice and TotalTaxAmount. This field is available in API version 55.0 and later. This field is available if Subscription Management is enabled in your org. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of all taxes. This field is available in API version 55.0 and later. This field is available if Subscription Management is enabled in your org.This field is a calculated field. |

## Usage

Use Quote to manage proposed product prices for customers. To update a Quote, your client application needs “Edit” permission.

-   Client applications can create, update, delete, and query Attachment records associated with a quote via the API.
-   You can sync a quote and its parent Opportunity.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[QuoteChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

[QuoteFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 39.0)

Feed tracking is available for the object.

[QuoteHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 57.0)

History is available for tracked fields of the object.

[QuoteOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 41.0)

Sharing rules are available for the object.

[QuoteShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 41.0)

Sharing is available for the object.

#### See Also

-   [QuoteLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm "Represents a quote line item, which is a member of the list of Product2 products associated with a quote, along with other information about those line items on that quote. Available in API version 18.0 and later.")

-   [QuoteDocument](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotedocument.htm "Represents a quote in document format. Available in API version 18.0 and later.")

-   [Opportunity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm "Represents an opportunity, which is a sale or pending deal.")

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- QuoteLineItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm)
- QuoteChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- QuoteFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- QuoteHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- QuoteOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- QuoteShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- QuoteDocument (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotedocument.htm)
- Opportunity (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm)
