---
title: "Billing Fields on Order"
domain: blng-dev
topic: billing-fields-on-order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.971Z
estimatedTokens: 753
keywords: [Billing, Order, Standard, custom, extend, represent, orders]
---

# Billing Fields on Order

> Standard and custom fields extend the standard Order object for use
         in Billing to represent information about orders.

# Billing Fields on Order

Standard and custom fields extend the standard Order object for use in Billing to represent information about orders.

## Fields

| Field | Details |
| --- | --- |
| blng__BillNow__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionCreates an invoice for all order products in the order. |
| blng__BilledAmountwithouttax__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount that has been billed for all the order products in the order, excluding tax. This amount is equal to the sum of Billed Amount (without tax) values of all the order products.This field is a calculated field. |
| blng__BilledTax__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of taxes that have been billed for all the order products in the order. This amount is equal to the sum of all Tax Amount values of all the order products.This field is a calculated field. |
| blng__BillingAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field isn't populated by default. If a user or process populates the Billing Account field before invoicing the order, the invoice's Account field inherits this value instead of the order's Account field.This field is a relationship field.Relationship Nameblng__BillingAccount__rRelationship TypeLookupRefers ToAccount |
| blng__BillingDayOfMonth__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe day of the month when the order's products are billed. Possible values are from 1 to 31. |
| blng__CanceledBillings__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount that was canceled and won't be billed for all the order products in the order. This amount is equal to the sum of all Canceled Billing Amount (without tax) values of all the order products.This field is a calculated field. |
| blng__InvoiceBatch__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionGroups orders for invoicing during invoice run evaluation. Null values are assigned to the same invoice run. |
| blng__PendingBillings__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount that hasn't been billed for all the order products in the order. This amount is equal to the sum of all Pending Billing Amount (without tax) values of all the order products.This field is a calculated field. |
| blng__TotalBilling__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount that has been billed for all the order products on the order, including tax. This amount is equal to the sum of all Billed Amount (without tax) values and all Billed Tax values of all the order products.This field is a calculated field. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: Order](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_order.htm)
