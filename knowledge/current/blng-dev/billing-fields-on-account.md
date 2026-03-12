---
title: "Billing Fields on Account"
domain: blng-dev
topic: billing-fields-on-account
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.945Z
estimatedTokens: 545
keywords: [Billing, Account, Standard, custom, extend, represent, accounts]
---

# Billing Fields on Account

> Standard and custom fields extend the standard Account object for use
         in Billing to represent information about accounts.

# Billing Fields on Account

Standard and custom fields extend the standard Account object for use in Billing to represent information about accounts.

## Fields

| Field | Details |
| --- | --- |
| blng__BillToContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPrimary contact for the billed account.This field is a relationship field.Relationship Nameblng__BillToContact__rRelationship TypeLookupRefers ToContact |
| CustomerProfileId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAuthorize.Net payment gateways require this value to communicate with Salesforce Billing. For accounts with Authorize.Net payment gateways, Salesforce Billing creates a customer profile ID when a user selects Save for future use in the Payment Center. It also creates a profile ID when a user creates a credit card payment method on the account. Salesforce Billing then passes the ID to Authorize.Net when it communicates with the payment gateway. |
| blng__DefaultPaymentType__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed in payment runs. A payment run picks up an invoice if the run and the invoice have matching Default Payment Type values. Salesforce Billing provides two ways to set Default Payment Type on the invoice:Relate a payment method to the account and select the payment method’s Autopay field. The account’s default payment type inherits the value of the payment method’s Type field. All the account’s invoices inherit the account’s default payment type. Use this setup to quickly set a default payment type for all of the account’s invoices.Enter a payment method in the invoice’s Override Autopay Payment Method field. The invoice’s default payment type ignores the account’s payment method and inherits the Type value from the Override Autopay Payment Method instead. Use this setup to temporarily change the payment method used for a specific invoice. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm)
