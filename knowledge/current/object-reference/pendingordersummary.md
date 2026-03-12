---
title: "PendingOrderSummary"
domain: object-reference
topic: pendingordersummary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.702Z
estimatedTokens: 1813
keywords: [PendingOrderSummary, representing, B2C, Commerce, order, ingested, via, High, Scale, Orders, OrderSummary, created, Optimized, online, transaction]
---

# PendingOrderSummary

> Object representing a B2C Commerce order ingested via High Scale Orders
         before an OrderSummary is created for it. Optimized for online transaction processing
         (OLTP). This object is available in API version 55.0 and later.

# PendingOrderSummary

Object representing a B2C Commerce order ingested via High Scale Orders before an OrderSummary is created for it. Optimized for online transaction processing (OLTP). This object is available in API version 55.0 and later.

## Supported Calls

describeLayout(), query()

## Special Access Rules

## Fields

This object is only available in Salesforce Order Management orgs where the High Scale Orders feature is enabled.

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the account or person account associated with the PendingOrderSummary. It represents the shopper in the storefront.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| BillToContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Contact associated with the PendingOrderSummary. It represents the shopper in the storefront when not using person accounts.This field is a relationship field.Relationship NameBillToContactRelationship TypeLookupRefers ToContact |
| BillingEmailAddress | TypeemailPropertiesFilter, Group, SortDescriptionEmail address on the billing address. |
| BillingPhoneNumber | TypephonePropertiesFilter, Group, Nillable, SortDescriptionPhone number of the billing address. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for the currency of the original Order associated with the PendingOrderSummary.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescription of the PendingOrderSummary. |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is used internally.This field isn’t synced with ZOS, so you can’t use it in a query or insert operation. |
| ExternalReferenceIdentifier | TypestringPropertiesFilter, Group, SortDescriptionUsed internally to prevent duplicate records. This value is case-sensitive. On creation, this value is set to B2C realm ID + "_" + B2C instance ID + "@" + B2C Commerce catalog/domain ID + "@" + B2C Commerce order number.When the OrderSummary is created, this value is copied to its ExternalReferenceIdentifier field. If you ingest orders from multiple sources, you can maintain uniqueness by including a prefix based on the source. |
| GrandTotalAmount | TypecurrencyPropertiesFilter, SortDescriptionTotal amount, including adjustments and tax, of the PendingOrderSummary. |
| OrderNumber | TypestringPropertiesFilter, Group, SortDescriptionName of the PendingOrderSummary. |
| OrderedDate | TypedateTimePropertiesFilter, SortDescriptionDate of the original order associated with this PendingOrderSummary. |
| Payload | TypetextareaPropertiesDescriptionThe order data payload. |
| PayloadType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe datatype of the Payload.Possible values are:JSON_GZIPJSON_RAW |
| ProcessingInstructions | TypetextareaPropertiesNillableDescriptionInstructions about how the HSOI service should create the order summary. Options include using the default without customizations or using a custom flow.Also includes instructions about how the HSOI service should dedupe account and contact information using platform duplication and matching rules or by using simple email methods. |
| SalesChannelId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the SalesChannel associated with this PendingOrderSummary. The SalesChannel Name matches the B2C Commerce catalog/domain ID.This field is a relationship field.Relationship NameSalesChannelRelationship TypeLookupRefers ToSalesChannel |
| SalesStoreId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the RetailStore or WebStore associated with this PendingOrderSummary.This field is a relationship field.Relationship NameSalesStoreRelationship TypeLookupRefers ToWebStore |
| ShopperName | TypestringPropertiesFilter, Group, SortDescriptionThe first name and last name of the shopper that placed the original order. |

## Usage

If you need to view or service an ingested B2C Commerce order before the automated High Scale Orders process has created an OrderSummary for it, you can manually trigger creation of the OrderSummary. In Salesforce, open the PendingOrderSummaries list, find the record, and click **Import**.

PendingOrderSummary only supports certain methods and queries. It doesn’t support Apex triggers.

Supported Apex Methods:

-   Database.query(queryString)
-   Database.query(queryString, accessLevel)

Supported SOAP API Methods:

-   create()
-   delete()
-   describeLayout()
-   query()
-   queryMore()

Supported REST API Methods:

-   /services/data/vXX.X/sobjects/sObject/ GET
-   /services/data/vXX.X/sobjects/sObject/id/ GET
-   /services/data/vXX.X/sobjects/sObject/id/ DELETE
-   /services/data/vXX.X/sobjects/sObject/id/ POST
-   /services/data/vXX.X/sobjects/sObject/describe/compactLayouts/ GET
-   /services/data/vXX.X/sobjects/sObject/quickActions/ GET

Supported Queries:

convertCurrency() function

Example: SELECT Id, convertCurrency(AnnualRevenue) FROM Account

Child-to-Parent subquery

Example: SELECT ExternalReferenceIdentifier, Account.Name FROM PendingOrderSummary WHERE ExternalReferenceIdentifier = 'a'

Limit clause

Example: SELECT ExternalReferenceIdentifier FROM PendingOrderSummary WHERE ExternalReferenceIdentifier = 'a' LIMIT 1

Filter by index

Example: SELECT ExternalReferenceIdentifier FROM PendingOrderSummary WHERE ExternalReferenceIdentifier = 'a'

Filter by secondary index

Example: SELECT ExternalReferenceIdentifier FROM PendingOrderSummary WHERE AccountId = 'xxx'

ORDER BY clause

When using ORDER BY, you don’t need to specify a direction. However, if you sort ASC, you can’t use NULLS LAST. If you sort DESC, you can only use NULLS LAST.

Example: SELECT ExternalReferenceIdentifier FROM PendingOrderSummary ORDER BY ExternalReferenceIdentifier

Example: SELECT ExternalReferenceIdentifier FROM PendingOrderSummary ORDER BY ExternalReferenceIdentifier ASC NULLS FIRST

Example: SELECT ExternalReferenceIdentifier FROM PendingOrderSummary ORDER BY ExternalReferenceIdentifier DESC NULLS LAST

Equality filter

Range filters aren’t supported.

Example: SELECT ExternalReferenceIdentifier FROM PendingOrderSummary WHERE ExternalReferenceIdentifier = 'realm\_tenant@storesite@0000001'

Invalid example: SELECT ExternalReferenceIdentifier FROM PendingOrderSummary WHERE ExternalReferenceIdentifier < 'a'

#### See Also

-   [OrderSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm "Represents the current properties and state of an order. Corresponds to one or more order objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

-   [Order](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm "Represents an order associated with a contract or an account.")

## Related Topics

- OrderSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm)
- Order (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm)
