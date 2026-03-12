---
title: "Salesforce B2C Commerce Storefront Order Data Map"
domain: order-management-developer-guide-html
topic: salesforce-b2c-commerce-storefront-order-data-map
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.080Z
estimatedTokens: 18761
keywords: [Salesforce, B2C, Commerce, Storefront, Order, Data, Map, tables, illustrate, how, packet, maps, records, Management, you’re]
---

# Salesforce B2C Commerce Storefront Order Data Map

> These tables illustrate how data in a Salesforce B2C Commerce order packet maps to
  records in Salesforce Order Management. If you’re implementing your own storefront integration,
  this map can help you understand the order data requirements.

# Salesforce B2C Commerce Storefront Order Data Map

These tables illustrate how data in a Salesforce B2C Commerce order packet maps to records in Salesforce Order Management. If you’re implementing your own storefront integration, this map can help you understand the order data requirements.

## Integration Notes

General:

-   B2C Commerce sends orders in New or Open status to Salesforce Order Management. To delay sending an order, for example, to perform a fraud check, keep it in Created status.
-   B2C Commerce sends order data to Salesforce Order Management according to a set frequency and when the packet of pending orders reaches a certain size. The process is similar to the one used for Commerce Cloud Order Management. In addition, the integration contacts B2C Commerce every 5 minutes to request any pending order data.
-   The B2C Integration can’t create an order with a combined total of more than 200 OrderItems and OrderItemAdjustmentLineItems. For example, it can create an order with 150 OrderItems and 45 OrderItemAdjustmentLineItems, but can’t create an order with 110 OrderItems and 100 OrderItemAdjustmentLineItems. To import an order that exceeds this limit, use Bulk API 2.0. For information about manually importing orders into Order Management, see [Importing Order Data](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_import_data.htm "Salesforce Order Management handles order data imported from your storefront. You can bulk load historical order data from a legacy system into a new Order Management org or implement a custom import process for new orders from your storefront.").
-   The integration associates sites in B2C Commerce with SalesChannels in Order Management. It identifies the SalesChannel for an order by searching for a SalesChannelName value that matches the site/site-id value in the order data.
-   For details of the B2C Commerce order data format, see [the Order XSD Schema](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/DWAPI/xsd/order.xsd "HTML (New Window)") in the B2C Commerce Infocenter.
-   The B2C Integration service user is an internal Salesforce user. If you set internal organization-wide sharing defaults for any objects accessed by the integration, set them to **Public Read/Write** access.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

    #### Note

    For information about organization-wide sharing defaults, see [Organization-Wide Sharing Defaults](https://help.salesforce.com/s/articleView?id=platform.security_sharing_owd_about.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

-   If the Salesforce org ID or login URL changes, or if you run DBInit on your B2C Commerce storefront, the integration requires updating. To reprovision the integration, open a case with Salesforce Customer Support as described in the Order Management Implementation Guide.
-   If you refresh a sandbox org, or change the Tenant ID of a B2C Commerce instance, repeat the implementation process as described in the Order Management Implementation Guide. For information on sandbox orgs, see the [sandbox topics](https://help.salesforce.com/articleView?id=platform.deploy_sandboxes_parent.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.
-   To deactivate the integration, open a case with Salesforce Support.
-   To stop sending orders from a site, log in to Business Manager, navigate to **Merchant Tools** | **Site Preferences** | **Order**, and turn off the **Include in Order Management** setting.

Shopper Accounts:

-   When the order/billing-address/company-name value in the order data is not null, Order Management always uses a standard account and contact to represent the shopper.
-   If you enable Person Accounts, don’t change the names or API names of the two default Account record types. The B2C Integration uses those types to represent shopper accounts.
-   You can configure the integration to identify existing shoppers by applying your org’s duplicate and matching rules for Accounts, Contacts, and Person Accounts. To enable this feature, in Setup, in Order Management Settings, turn on **B2C Integration Data Matching Rules**. For more information on configuring duplicate management, see [Manage Duplicate Records](https://help.salesforce.com/s/articleView?id=sales.managing_duplicates_overview.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

    #### Note

    If your org’s matching rules identify multiple potential duplicate records, the integration selects the one with the highest match score. If multiple records tie for the highest match score, you can’t guarantee which is selected.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

    #### Note

    Applying complex custom matching rules can affect the integration’s performance.

-   The integration can’t look up any encrypted fields on Salesforce objects. Encrypting any of the fields it uses to look up records causes order ingestion to fail. If you want to encrypt the Account.Name, Account.PersonEmail, or Contact.Email field, then you must implement custom duplicate and matching rules that don’t use any encrypted fields. For more information on encryption restrictions, see [General Shield Platform Encryption Considerations](https://help.salesforce.com/s/articleView?id=xcloud.security_pe_considerations_general.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.
-   For detailed information on the storage and identification of shopper accounts, see [Order Management Shopper Records](https://help.salesforce.com/articleView?id=commerce.om_shopper_records.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Order Management in Salesforce Help.

International Considerations

-   If the order/taxation value for an order is net, then the integration creates an OrderItemTaxLineItem record for each OrderItem and OrderItemAdjustmentLineItem record.
-   If Salesforce state and country/territory picklists aren’t enabled:
    -   The state-code values in order data must match a standard 2-character ISO state or province code. The integration copies them to State fields on Salesforce records.
    -   The country-code values in order data must match a standard 2-character ISO country/territory code. The integration copies them to Country fields on Salesforce records.
-   If Salesforce state and country/territory picklists are enabled:
    -   The state-code values in order data must match the state code of an entry in the Salesforce state picklist. The integration copies them to StateCode fields on Salesforce records. The corresponding State fields are set to the matching integration values from the picklist.
    -   The country-code values in order data must match the country/territory code of an entry in the Salesforce country/territory picklist. The integration copies them to CountryCode fields on Salesforce records. The corresponding Country fields are set to the matching integration values from the picklist.

Payments

-   Order data includes a paired payment instrument and payment transaction for each payment associated with the order.
-   If an order/payments/payment/transaction-type value in the order data starts with auth, then the integration creates a PaymentAuthorization record for that transaction. If the value is sale or capture, then it creates a Payment record. These checks aren’t case-sensitive.
-   For a credit or debit card payment type, the payments/payment/credit-card/card-type value in the order data must match a value in the CardType picklist on the CardPaymentMethod object.
-   To handle a payment method that doesn’t match a CardPaymentMethod CardType or DigitalWallet Type, create a custom payment method as described later in this section.
-   If you use Salesforce Payments, the integration sets different values for some of the fields on AlternativePaymentMethod, CardPaymentMethod, and DigitalWallet. The details are described in the map tables.
-   The integration recognizes certain custom attributes on order/payments/payment and copies them to standard fields on the PaymentGatewayLog record in Salesforce. To take advantage of this feature, create and populate custom attributes with the following exact names on the Order Payment Transaction object in B2C Commerce:
    -   authCode (value copied to PaymentGatewayLog.GatewayAuthCode)
    -   avsResultCode (value copied to PaymentGatewayLog.GatewayAvsCode)
    -   approvalStatus (value copied to PaymentGatewayLog.GatewayResultCode)
-   The integration can copy other custom attributes on order/payments/payment to standard fields on AlternativePaymentMethod, CardPaymentMethod, DigitalWallet, Payment, and PaymentAuthorization records in Salesforce.
-   An OrderPaymentSummary for a B2C Commerce order only has a FullName value if the payment method is a credit card. Other payment methods don’t include the data value that the integration uses to set the FullName.

Promotions

-   The integration creates an OrderAdjustmentGroup record for each order-level price-adjustments/price-adjustment/promotion-id and for each item-level price-adjustments/price-adjustment/promotion-id that applies to more than one item in the order. For each OrderAdjustmentGroup, it creates an OrderItemAdjustmentLineItem record for each OrderItem in the order that the associated promotion applies to. If an OrderItem is affected by multiple promotions, then it can have an OrderItemAdjustmentLineItem for each one.
-   If the order/taxation value for an order is net, then the integration creates an OrderItemTaxLineItem record for each OrderItemAdjustmentLineItem record.

For information on the Salesforce state and country/territory picklists, see [Let Users Select State and Country from Picklists](https://help.salesforce.com/articleView?id=xcloud.admin_state_country_picklists_overview.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## Set Up Payment Gateways

Configure a payment gateway adapter for each merchant account. If you use multiple currencies or payment methods through a single payment processor, you can optionally set up multiple payment gateways for that processor. By default, the Order Management integration with Salesforce B2C Commerce only supports credit card and digital wallet payment types, but you can create your own customizations.

You can use Apex and the Connect REST API to set up payment gateways. See [commercepayments namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_namespace_commercepayments.htm "HTML (New Window)") and [Use Cases for the commercepayments Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_commercepayments_use_cases.htm "HTML (New Window)") in the Apex Developer Guide, and [Commerce Payments Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_payments.htm "HTML (New Window)") in the Connect REST API Developer Guide.

## Payment Method Processing

The B2C Commerce integration processes each storefront payment method in the order data as follows:

1.  Does the payment method ID in the order data match the following non-case-sensitive regular expression? If so, then create a DigitalWallet record in Salesforce.

    ```

    ```

2.  Does the payment method ID in the order data match the Gateway Provider Payment Method Type of a GtwyProvPaymentMethodType record in Salesforce? If so, then create a record in Salesforce according to the GtwyProvPaymentMethodType’s Payment Method Type.
3.  Does the card type in the order data match an entry in the Card Type picklist on the CardPaymentMethod object in Salesforce? If so, then create a CardPaymentMethod record in Salesforce.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

    #### Note

    You can’t customize the Card Type picklist.

4.  Return an error message that the payment method isn’t supported.

To support a different payment type, set up a custom payment method as described in the next section.

## Create Custom Payment Methods

If you use a storefront payment method that meets both of the following criteria, configure a custom payment method for it.

-   The default regular expression doesn’t identify it as a DigitalWallet method.
-   It doesn’t match any of the standard card types for a CardPaymentMethod.

To configure a custom payment method as an AlternativePaymentMethod, first create a RecordType for the AlternativePaymentMethod object. Give the record type a name that represents the payment method. For information on creating record types, see [Create Record Types](https://help.salesforce.com/articleView?id=creating_record_types.htm&language=en_US "HTML (New Window)") in Salesforce Help.

Define a custom payment method by creating a GtwyProvPaymentMethodType (Gateway Provider Payment Method Type) record. The gateway provider payment method type associates the custom payment method with a payment gateway and defines it as an AlternativePaymentMethod, CardPaymentMethod, or DigitalWallet.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

You can’t create or access a **GtwyProvPaymentMethodType record** in the Salesforce UI. To create one, insert a record using a tool like Postman or Apex code. The API name of the object is GtwyProvPaymentMethodType, at the URL /services/data/vversion/sobjects/GtwyProvPaymentMethodType.

Set the GtwyProvPaymentMethodType fields as described here.

Comments

Optional description.

Developer Name

The unique API name of the record.

Master Label

A human-readable name for the record.

Gateway Provider Payment Method Type

The name of the payment method in the storefront. This value must exactly match the payment method ID used in B2C Commerce.

Payment Gateway Provider Id

Reference to the Payment Gateway Provider record associated with the payment processor for the payment method.

Payment Method Type

AlternativePaymentMethod CardPaymentMethod, or DigitalWallet. To use AlternativePaymentMethod, first create a corresponding RecordType record.

Record Type Id

If using an AlternativePaymentMethod, this value is a reference to the RecordType record.

Here’s an example of a gateway provider payment method definition:

```

```

## Integrate Custom B2C Commerce Storefront Data

The integration can pass custom data on certain B2C Commerce objects to Order Management. To set up the transfer, add custom attributes to objects in B2C Commerce, and add matching custom fields to the corresponding objects in Order Management. The integration compares the B2C Commerce attribute ID and the Order Management field name at the API level. (It doesn’t consider their UI labels.) If they match and the data types match, the integration includes those values when it creates Order Management records. If you also create a matching field on the corresponding summary object, Order Management includes the custom data when it creates a summary record.

You can add custom attributes to product options that exist as product line items, but not to product options that exist as attributes on parent products. You can’t add an attribute to an attribute.

If you add a custom field to an object used in a flow, customize the flow to handle it.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=order_management_developer_guide_html)

#### Important

A change order is an Order record. If you add a required custom field to the Order object, update the service flows to set that field when they create a change order. Otherwise, the flow fails.

If order data includes a custom attribute value, but the corresponding Salesforce object has no matching custom field, the integration ignores that attribute. If a custom field exists in Salesforce, and order data doesn’t include a matching custom attribute value, the integration ignores it.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=order_management_developer_guide_html)

#### Important

If a custom field in Salesforce is required, and it corresponds to a custom storefront attribute, then order data must include a value for that attribute. Without that value, the integration can’t create the corresponding Salesforce record. In that case, the integration fails with an error.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

At the API level, custom field names in Salesforce always end in \_\_c. Don’t include it in the names of the matching attributes on your storefront objects. However, if you include a custom namespace in a custom field name, also include it in the name of the matching storefront object attribute. For example, if the API name of your custom field in Salesforce is mynamespace\_FieldName\_\_c, name your matching storefront object attribute mynamespace\_FieldName. Limit your custom field names to 40 characters (37 plus \_\_c).

You can support product bundles by passing that information as custom data. To set up product bundle associations, define a custom guid attribute for the line item object in your storefront. In Salesforce, define a matching field on OrderItem and OrderItemSummary. When creating an order, assign the same value to the custom attribute on line items that belong together. You can define another custom attribute to identify a line item as part of a bundle. Then build logic into your fulfillment process to handle them accordingly.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

When using custom attributes to support bundles, customize your return and cancel flows to handle them according to your business rules. For example, design your cancel process so that when you cancel a bundle product, any associated bundle products are also canceled. Likewise, you can design your return process to disallow the return of only some of the products in a bundle.

You can match custom attributes and fields on these sets of objects. For High-Scale Order Integration (HSOI), custom fields are only necessary on the summary objects. HSOI directly maps to these fields. When using HSOI, don’t add custom fields to standard objects. Setup is streamlined by keeping custom fields in a single location.

| B2C Commerce | Salesforce Order Management |
| --- | --- |
| Product line item, gift certificate line item, and shipping line item | OrderItem and OrderItemSummary |
| Order | Order and OrderSummary |
| Order payment instrument and order payment transaction | AlternativePaymentMethod, CardPaymentMethod, DigitalWallet, Payment, PaymentAuthorization, and PaymentGatewayLog (see note) |
| Shipment | OrderDeliveryGroup and OrderDeliveryGroupSummary |
| Buyer Address on Order | Account (including Person Account) and Contact |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

You can’t add custom fields to the PaymentGatewayLog object. However, the integration recognizes certain custom attributes on order/payments/payment and copies them to standard fields on the PaymentGatewayLog record in Salesforce. To take advantage of this feature, create and populate custom attributes with the following exact names on the Order Payment Transaction object in B2C Commerce:

-   authCode (value copied to PaymentGatewayLog.GatewayAuthCode)
-   avsResultCode (value copied to PaymentGatewayLog.GatewayAvsCode)
-   approvalStatus (value copied to PaymentGatewayLog.GatewayResultCode)

The integration supports the following data types for matching custom attributes and fields:

-   Boolean
-   Currency
-   Datetime (Date isn’t supported)
-   Double
-   Email
-   Multipicklist
-   Phone
-   Picklist
-   String
-   TextArea
-   URL

The Order Management B2C Service permission set provides the integration with access to Salesforce records. When you add a custom field to a Salesforce object, update that permission set by adding read and edit access to the new field. You also must add edit access to the permission set that provides access for your Order Management users.

1.  From Setup, in the Quick Find box, enter Permission Sets, and then select **Permission Sets**.
2.  Select **Order Management B2C Service**.
3.  In the Apps section, click **Object Settings**.
4.  Select the object that has the custom field.
5.  Click **Edit**.
6.  In the Field Permissions section, select the **Edit Access** checkbox for the custom field.
7.  Click **Save**.
8.  Return to the list of permission sets by selecting **Permission Sets** in the Setup navigation menu.
9.  Select the permission set that controls access for your Order Management users. Normally, it’s called **OM Console**.
10.  In the Apps section, click **Object Settings**.
11.  Select the object that has the custom field.
12.  Click **Edit**.
13.  In the Field Permissions section, select the **Edit Access** checkbox for the custom field.
14.  Click **Save**.

## Sync Data with Manual Data Map Refresh

Sync the order data map in Salesforce Order Management with your B2C Commerce org, for example after adding new custom attributes. Trigger the data map refresh to instantly access new schema changes instead of waiting for the next scheduled sync.

1.  Click App Launcher, and then select **Administration** | **Global Preferences** | **Salesforce Order Management Configuration**.
2.  Click **Refresh Data Map**.
3.  Save your changes.

## Account Object (Standard or PersonAccount)

Order Management always uses standard accounts to represent shoppers that have company names. If an order includes an order/billing-address/company-name value, and no matching account record exists, then the integration creates a standard account, regardless of the Person Accounts for Shoppers setting.

Changing the Person Accounts for Shoppers admin setting doesn’t affect existing shopper data. However, it changes the way that the B2C Commerce integration stores new shopper data and whether it recognizes existing shopper data.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

If the B2C Integration Data Matching Rules setting is on, this behavior can vary depending on your org’s matching rules.

-   While Order Management is configured to use standard accounts: the integration recognizes existing shoppers that are stored as person accounts. It associates their new orders with their existing person accounts. If an existing shopper has records of both types, it associates new orders with their standard account and contact.
-   While Order Management is configured to use person accounts: the integration doesn’t recognize existing shoppers that are stored as standard accounts and contacts. If one of those shoppers places an order, the integration creates a person account record for them and associates the new order with it. Order Management treats the accounts as separate shoppers. If an existing shopper has records of both types, the integration associates new orders with their person account.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| order/billing-address/company-name or order/billing-address/first-name and order/billing-address/last-name | Name | If order/billing-address/company-name has a value in the order data packet, then it’s copied to this value. If it has no value in the order data, this value is set as follows:If this record is a person account, this value isn’t set.If this record isn’t a person account, this value is set to order/billing-address/first-name + " " + order/billing-address/last-name. |
| order/billing-address/first-name and order/billing-address/second-name | FirstName | This value is only set for person accounts. It’s set to order/billing-address/first-name + " " + order/billing-address/second-name. |
| order/billing-address/last-name | LastName | This value is only set for person accounts. |
| order/customer/customer-email | PersonEmail | This value is only set for person accounts. |
| order/billing-address/title | PersonTitle | This value is only set for person accounts. |
| order/billing-address/address1, order/billing-address/address2, and order/billing-address/address3 | BillingStreet | This value is only set for person accounts. It’s set to order/billing-address/address1 + " " + order/billing-address/address2 + " " + order/billing-address/address3. |
| order/billing-address/city | BillingCity | This value is only set for person accounts. |
| order/billing-address/postal-code | BillingPostalCode | This value is only set for person accounts. |
| order/billing-address/state-code | BillingState | This value is only set for person accounts. Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/billing-address/state-code. It must be a standard 2-character ISO state or province code.Picklists enabled—This value is set to the picklist integration value corresponding to the state code that matches order/billing-address/state-code. |
| order/billing-address/state-code | BillingStateCode | This value is only set for person accounts, and only when state and country/territory picklists are enabled on your org. order/billing-address/state-code must match the state code of an entry in the Salesforce state picklist. |
| order/billing-address/country-code | BillingCountry | This value is only set for person accounts. Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/billing-address/country-code. It must be a standard 2-character ISO country/territory code.Picklists enabled—This value is set to the picklist integration value corresponding to the country/territory code that matches order/billing-address/country-code. |
| order/billing-address/country-code | BillingCountryCode | This value is only set for person accounts, and only when state and country/territory picklists are enabled on your org. order/billing-address/country-code must match the country/territory code of an entry in the Salesforce country/territory picklist. |
| order/billing-address/phone | Phone | This value is set for both person accounts and regular accounts. |

## AlternativePaymentMethod Object

The integration checks the payment\_method value of each payment instrument in an order. If it matches the Gateway Provider Payment Method Type of a GtwyProvPaymentMethodType record, then the integration creates a record according to the GtwyProvPaymentMethodType’s Payment Method Type value. If the Payment Method Type is AlternativePaymentMethod, then the integration creates an AlternativePaymentMethod record using the associated RecordType.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

To use AlternativePaymentMethod, first create a RecordType and GtwyProvPaymentMethodType for your custom payment type as described in the Create Custom Payment Methods section.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| N/A | RecordTypeId | This value is set to the ID of the RecordType record assigned to the GtwyProvPaymentMethodType. |
| order/payments/payment/credit-card/card-token | GatewayToken |  |
| order/customer/customer-email | Email |  |
| N/A | Status | This picklist value is always set to Active. |
| order/billing-address/company-name | CompanyName |  |
| payment instrument payment_type or payment_method | Type | The value depends on whether you’re using Salesforce Payments.Salesforce Payments—This value is set to the payment instrument payment_type.Other Payment Processor—This value is set to the payment instrument payment_method. |
| payment instrument payment_type or payment_method | PaymentMethodType | The value depends on whether you’re using Salesforce Payments. If the payment instrument value isn’t present, a PaymentMethodType isn’t set. |
| payment instrument payment_bank | PaymentMethodSubType | The value depends on whether you’re using Salesforce Payments. If the payment instrument value isn’t present, a PaymentMethodSubType isn’t set. |
| payment instrument payment_account_last_digits | PaymentMethodDetails |  |
| order/billing-address/address1, order/billing-address/address2, and order/billing-address/address3 | PaymentMethodStreet | This value is set to order/billing-address/address1 + " " + order/billing-address/address2 + " " + order/billing-address/address3. |
| order/billing-address/city | PaymentMethodCity |  |
| order/billing-address/state-code | PaymentMethodState | Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/billing-address/state-code. It must be a standard 2-character ISO state or province code.Picklists enabled—This value is set to the picklist integration value corresponding to the state code that matches order/billing-address/state-code. |
| order/billing-address/state-code | PaymentMethodStateCode | This value is only set when state and country/territory picklists are enabled on your org. order/billing-address/state-code must match the state code of an entry in the Salesforce state picklist. |
| order/billing-address/postal-code | PaymentMethodPostalCode |  |
| order/billing-address/country-code | PaymentMethodCountry | Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/billing-address/country-code. It must be a standard 2-character ISO country/territory code.Picklists enabled—This value is set to the picklist integration value corresponding to the country/territory code that matches order/billing-address/country-code. |
| order/billing-address/country-code | PaymentMethodCountryCode | This value is only set when state and country/territory picklists are enabled on your org. order/billing-address/country-code must match the country/territory code of an entry in the Salesforce country/territory picklist. |
| order/billing-address/phone | Phone |  |
| orderremoteHost | IpAddress |  |
| N/A | AccountId | This value is set to the ID of the Account or Person Account record associated with the shopper. |
| N/A | PaymentGatewayId | This value is set to the ID of the PaymentGateway record associated with the PaymentGatewayProvider record assigned to the GtwyProvPaymentMethodType. |
| N/A | ProcessingMode | This value is always set to External. It specifies that an external payment provider handles payment transactions. |
| order/payments/payment/custom_attribute or a custom attribute on the payment type | custom_attribute_name | If the Salesforce AlternativePaymentMethod object has a custom field matching a custom attribute on the storefront payment type or order payment transaction object, the value is copied to the AlternativePaymentMethod record. If a custom field is non-nillable, then order data must include a value for the corresponding custom attribute. If the value is missing, the integration fails. |

## CardPaymentMethod Object

The integration checks the payment\_method value of each payment instrument in an order against the following regex. If it matches, then the integration creates a DigitalWallet record for the instrument. If it doesn’t match, then the integration checks the payment/credit-card/card-type value against the CardType picklist on the CardPaymentMethod object. If the picklist contains a match, then the integration creates a CardPaymentMethod record for the instrument. Otherwise, to support the payment method, you must set up a custom payment method for it.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

The regex isn’t case-sensitive.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| payment instrument payment_brand or order/payments/payment/credit-card/card-type | CardType | The value depends on whether you’re using Salesforce Payments.Salesforce Payments—This value is set to the payment instrument payment_brand.Other Payment Processor—This value is set to order/payments/payment/credit-card/card-type.The value must match a card type in the CardType picklist on the CardPaymentMethod object. To handle a different card type, create a custom payment method as described in the Order Management Implementation Guide. |
| order/payments/payment/credit-card/card-number | InputCardNumber |  |
| order/payments/payment/credit-card/card-holder | CardHolderName |  |
| order/payments/payment/credit-card/expiration-year | ExpiryYear |  |
| order/payments/payment/credit-card/expiration-month | ExpiryMonth |  |
| [order payment method] | CardCategory | This value can be CreditCard or DebitCard. The default value is CreditCard. |
| N/A | Status | This picklist value is always set to Active. |
| order/payments/payment/credit-card/card-token | GatewayToken |  |
| payment instrument payment_brand or credit_card_type | PaymentMethodType | The value depends on whether you’re using Salesforce Payments. If the payment instrument value isn’t present, the value is set to Other.Salesforce Payments—This value is set to the payment instrument payment_brand.Other Payment Processor—This value is set to the payment instrument credit_card_type. |
| payment instrument payment_wallet_type or payment_method | PaymentMethodSubType | The value depends on whether you’re using Salesforce Payments.Salesforce Payments—This value is set to the payment instrument payment_wallet_type.Other Payment Processor—This value is set to the payment instrument payment_method. |
| payment instrument payment_account_last_digits or masked_credit_card_number | PaymentMethodDetails | The value depends on whether you’re using Salesforce Payments.Salesforce Payments—This value is set to the payment instrument payment_account_last_digits.Other Payment Processor—This value is set to the payment instrument masked_credit_card_number. |
| order/billing-address/address1, order/billing-address/address2, and order/billing-address/address3 | PaymentMethodStreet | This value is set to order/billing-address/address1 + " " + order/billing-address/address2 + " " + order/billing-address/address3. |
| order/billing-address/city | PaymentMethodCity |  |
| order/billing-address/state-code | PaymentMethodState | Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/billing-address/state-code. It must be a standard 2-character ISO state or province code.Picklists enabled—This value is set to the picklist integration value corresponding to the state code that matches order/billing-address/state-code. |
| order/billing-address/state-code | PaymentMethodStateCode | This value is only set when state and country/territory picklists are enabled on your org. order/billing-address/state-code must match the state code of an entry in the Salesforce state picklist. |
| order/billing-address/postal-code | PaymentMethodPostalCode |  |
| order/billing-address/country-code | PaymentMethodCountry | Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/billing-address/country-code. It must be a standard 2-character ISO country/territory code.Picklists enabled—This value is set to the picklist integration value corresponding to the country/territory code that matches order/billing-address/country-code. |
| order/billing-address/country-code | PaymentMethodCountryCode | This value is only set when state and country/territory picklists are enabled on your org. order/billing-address/country-code must match the country/territory code of an entry in the Salesforce country/territory picklist. |
| N/A | AccountId | This value is set to the ID of the Account or Person Account record associated with the CardPaymentMethod. |
| N/A | PaymentGatewayId | This value is set to the ID of the PaymentGateway record whose ExternalReference value matches the processor ID value of the order payment instrument. |
| N/A | ProcessingMode | This value is always set to External. It specifies that an external payment provider handles payment transactions. |
| order/payments/payment/custom_attribute or a custom attribute on the payment type | custom_attribute_name | If the Salesforce CardPaymentMethod object has a custom field matching a custom attribute on the storefront payment type or order payment transaction object, the value is copied to the CardPaymentMethod record. If a custom field is non-nillable, then order data must include a value for the corresponding custom attribute. If the value is missing, the integration fails. |

## Contact Object

When using person accounts, access shopper contact data using person account records, not contact records. When using standard accounts and contacts, the BillToContactId field on these objects points to the associated contact record:

-   Credit Memo
-   Fulfillment Order
-   Invoice
-   Order
-   Order Summary

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| N/A | AccountId | This value is set to the ID of the Account record that represents the shopper. |
| order/customer/customer-email | Email |  |
| order/billing-address/first-name | FirstName |  |
| order/billing-address/last-name | LastName |  |
| order/billing-address/phone | Phone |  |

## DigitalWallet Object

The integration checks the payment\_method value of each payment instrument in an order. If it matches the following regex, then the integration creates a DigitalWallet record for the instrument. If it doesn’t match, then the integration tries to create an AlternativePaymentMethod or a CardPaymentMethod record for the instrument.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

The regex isn’t case-sensitive.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| N/A | Status | This picklist value is always set to Active. |
| payment instrument payment_type or payment_method | Type | The value depends on whether you’re using Salesforce Payments.Salesforce Payments—This value is set to the payment instrument payment_type.Other Payment Processor—This value is set to the payment instrument payment_method. |
| order/payments/payment/credit-card/card-token | GatewayToken |  |
| payment instrument payer_email | Email |  |
| payment instrument payment_type or payment_method | PaymentMethodType | The value depends on whether you’re using Salesforce Payments.Salesforce Payments—This value is set to the payment instrument payment_type.Other Payment Processor—This value is set to the payment instrument payment_method. |
| payment instrument payment_type or payment_method | PaymentMethodSubType | The value depends on whether you’re using Salesforce Payments.Salesforce Payments—This value is set to the payment instrument payment_type.Other Payment Processor—This value is set to the payment instrument payment_method. |
| payment instrument payment_reference | PaymentMethodDetails |  |
| order/billing-address/address1, order/billing-address/address2, and order/billing-address/address3 | PaymentMethodStreet | This value is set to order/billing-address/address1 + " " + order/billing-address/address2 + " " + order/billing-address/address3. |
| order/billing-address/city | PaymentMethodCity |  |
| order/billing-address/state-code | PaymentMethodState | Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/billing-address/state-code. It must be a standard 2-character ISO state or province code.Picklists enabled—This value is set to the picklist integration value corresponding to the state code that matches order/billing-address/state-code. |
| order/billing-address/state-code | PaymentMethodStateCode | This value is only set when state and country/territory picklists are enabled on your org. order/billing-address/state-code must match the state code of an entry in the Salesforce state picklist. |
| order/billing-address/postal-code | PaymentMethodPostalCode |  |
| order/billing-address/country-code | PaymentMethodCountry | Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/billing-address/country-code. It must be a standard 2-character ISO country/territory code.Picklists enabled—This value is set to the picklist integration value corresponding to the country/territory code that matches order/billing-address/country-code. |
| order/billing-address/country-code | PaymentMethodCountryCode | This value is only set when state and country/territory picklists are enabled on your org. order/billing-address/country-code must match the country/territory code of an entry in the Salesforce country/territory picklist. |
| N/A | AccountId | This value is set to the ID of the Account or Person Account record associated with the DigitalWallet. |
| N/A | PaymentGatewayId | This value is set to the ID of the PaymentGateway record whose ExternalReference value matches the processor ID value of the order payment instrument. |
| N/A | ProcessingMode | This value is always set to External. It specifies that an external payment provider handles payment transactions. |
| order/payments/payment/custom_attribute or a custom attribute on the payment type | custom_attribute_name | If the Salesforce DigitalWallet object has a custom field matching a custom attribute on the storefront payment type or order payment transaction object, the value is copied to the DigitalWallet record. If a custom field is non-nillable, then order data must include a value for the corresponding custom attribute. If the value is missing, the integration fails. |

## Order Object

The integration uses both the order/order-no and catalog/catalog-id values to check for duplicate orders. It looks for an existing order record with an OrderReferenceNumber matching the order-no and a SalesChannelId pointing to a SalesChannel that matches the catalog-id. If it finds one, it doesn’t create a duplicate order.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

If the catalog ID for a sales channel changes and an existing order is received with a different catalog ID, the integration considers it a new order and creates a duplicate record.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| N/A | Pricebook2Id | This value is set to the ID of the Pricebook2 record for the standard price book. |
| order/customer/customer-name | Name |  |
| N/A | Status | When the Order record is created, this value is set to Draft. The last step in the Composite API call that creates the records related to the order sets this value to Active. |
| N/A | EffectiveDate | This value is set to the current datetime when the record is created. |
| catalog/catalog-id and order/order-no | OrderManagementReferenceIdentifier | This value is set to B2C realm ID + “_” + B2C instance ID + "@" + catalog/catalog-id + "@" + order/order-no. |
| order/order-no | OrderReferenceNumber |  |
| order/billing-address/address1, order/billing-address/address2, and order/billing-address/address3 | BillingStreet | This value is set to order/billing-address/address1 + " " + order/billing-address/address2 + " " + order/billing-address/address3. |
| order/billing-address/city | BillingCity |  |
| order/billing-address/state-code | BillingState | Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/billing-address/state-code. It must be a standard 2-character ISO state or province code.Picklists enabled—This value is set to the picklist integration value corresponding to the state code that matches order/billing-address/state-code. |
| order/billing-address/state-code | BillingStateCode | This value is only set when state and country/territory picklists are enabled on your org. order/billing-address/state-code must match the state code of an entry in the Salesforce state picklist. |
| order/billing-address/postal-code | BillingPostalCode |  |
| order/billing-address/country-code | BillingCountry | Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/billing-address/country-code. It must be a standard 2-character ISO country/territory code.Picklists enabled—This value is set to the picklist integration value corresponding to the country/territory code that matches order/billing-address/country-code. |
| order/billing-address/country-code | BillingCountryCode | This value is only set when state and country/territory picklists are enabled on your org. order/billing-address/country-code must match the country/territory code of an entry in the Salesforce country/territory picklist. |
| order/billing-address/phone | BillingPhoneNumber |  |
| order/order-date | OrderedDate |  |
| order/customer/customer-email | BillingEmailAddress |  |
| N/A | BillToContactId | This value is set to the ID of the Contact record that represents the shopper. When using person accounts, this value isn’t set. In that case, access shopper contact information via the Account instead of the Contact. |
| N/A | AccountId | This value is set to the ID of the Account or Person Account record that represents the shopper. |
| catalog/catalog-id | SalesChannelId | This value is set to the ID of the SalesChannel record whose SalesChannelName field matches the catalog/catalog-id in the order data packet. |
| order/taxation | TaxLocaleType | This value is set to Net or Gross based on the value of order/taxation. If using Net taxation, this value is set to Net and the integration creates OrderItemTaxLineItem records for the order. If using Gross taxation, this value is set to Gross and the integration doesn’t create OrderItemTaxLineItem records for the order. If the value isn’t set, then the default value is Net. |
| order/currency | CurrencyIsoCode | This value is only set if the Salesforce org has Multicurrency enabled. |
| order/custom_attribute | custom_attribute_name | If the Salesforce Order object has a custom field matching a custom attribute on the storefront order object, the value is copied to the Order record. If the Salesforce OrderSummary object also has a matching custom field, it’s copied to both records. If a custom field is non-nillable, then order data must include a value for the corresponding custom attribute. If the value is missing, the integration fails. |

## OrderAdjustmentGroup Object

The integration creates one OrderAdjustmentGroup record for each promotion that applies to an entire order or to multiple items in an order. For an order-level promotion, it assigns the OrderAdjustmentGroup to one OrderItemAdjustmentLineItem record for each OrderItem record in the order. It creates the OrderAdjustmentGroup even if the order only contains one OrderItem. For an item-level promotion that applies to multiple OrderItems, it assigns the OrderAdjustmentGroup to one OrderItemAdjustmentLineItem record for each OrderItem record in the Order that the promotion applies to. If an item-level promotion only applies to one OrderItem, the integration doesn’t create an OrderAdjustmentGroup for it.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

Shipping adjustments that aren’t part of an order-level promotion are treated as item-level promotions. An example of an order-level promotion is “20% off and free shipping.”

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| order/price-adjustments/price-adjustment/promotion-id | Name |  |
| order/price-adjustments/price-adjustment/promotion-id | Description |  |
| N/A | Type | This picklist value depends on the promotion level:Order-level—This value is set to Header.Item-level—This value is set to SplitLine. |
| N/A | OrderId | This value is set to the ID of the associated original Order record. |
| N/A | AdjustmentCauseId | This value is set to the ID of the associated Promotion record. |

## OrderDeliveryGroup Object

The integration creates an OrderDeliveryGroup record for each shipment (also called a LineItemGroup in B2C Commerce) in the order data.

For order changes such as returns and cancellations that include prorated delivery amounts, the proration considers the OrderDeliveryGroups containing OrderItems that are part of the change. For example, consider an order that has three OrderDeliveryGroups, each with multiple OrderItems. A return of two OrderItems, each from a different OrderDeliveryGroup, uses the total delivery charges associated with those two OrderDeliveryGroups. It prorates that amount across the OrderItems in those OrderDeliveryGroups by OrderItem price. The shipping refund equals the prorated delivery amounts for the two returned OrderItems. The return doesn’t consider any delivery charges associated with the third OrderDeliveryGroup.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| order/customer/customer-email | EmailAddress |  |
| order/shipments/shipment/shipping-address/city | DeliverToCity |  |
| order/shipments/shipment/shipping-address/country-code | DeliverToCountry | Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/shipments/shipment/shipping-address/country-code. It must be a standard 2-character ISO country/territory code.Picklists enabled—This value is set to the picklist integration value corresponding to the country/territory code that matches order/shipments/shipment/shipping-address/country-code. |
| order/shipments/shipment/shipping-address/country-code | DeliverToCountryCode | This value is only set when state and country/territory picklists are enabled on your org. order/shipments/shipment/shipping-address/country-code must match the country/territory code of an entry in the Salesforce country/territory picklist. |
| order/shipments/shipment/shipping-address/title, order/shipments/shipment/shipping-address/first-name, order/shipments/shipment/shipping-address/last-name, and order/shipments/shipment/shipping-address/suffix | DeliverToName | If the DeliveryGroup contains gift certificate items, this value will contain the buyer_name: firstName + ' ' + lastName. Otherwise, the shipping address name is set to: order/shipments/shipment/shipping-address/title + " " + order/shipments/shipment/shipping-address/first-name + " " + order/shipments/shipment/shipping-address/last-name + " " + order/shipments/shipment/shipping-address/suffix. |
| order/shipments/shipment/shipping-address/postal-code | DeliverToPostalCode |  |
| order/shipments/shipment/shipping-address/state-code | DeliverToState | Usage depends on whether state and country/territory picklists are enabled in Salesforce.Picklists not enabled—This value is set to order/shipments/shipment/shipping-address/state-code. It must be a standard 2-character ISO state or province code.Picklists enabled—This value is set to the picklist integration value corresponding to the state code that matches order/shipments/shipment/shipping-address/state-code. |
| order/shipments/shipment/shipping-address/state-code | DeliverToStateCode | This value is only set when state and country/territory picklists are enabled on your org. order/shipments/shipment/shipping-address/state-code must match the state code of an entry in the Salesforce country/territory picklist. |
| order/shipments/shipment/shipping-address/address1, order/shipments/shipment/shipping-address/address2, and order/shipments/shipment/shipping-address/address3 | DeliverToStreet | This value is set to order/shipments/shipment/shipping-address/address1 + " " + order/shipments/shipment/shipping-address/address2 + " " + order/shipments/shipment/shipping-address/address3. |
| order/shipments/shipment/shipping-address/phone | PhoneNumber |  |
| order/shipments/shipment/gift | IsGift | This value is only populated if order/shipments/shipment/gift=true. |
| order/shipments/shipment/gift-message | GiftMessage | This value is only populated if order/shipments/shipment/gift=true. |
| order/shipments/shipment/shipping-method | OrderDeliveryMethodId | This value is set to the ID of the OrderDeliveryMethod record whose ReferenceNumber field matches the order/shipments/shipment/shipping-method value in the order data. |
| N/A | OrderId | This value is set to the ID of the associated original Order record. |
| order/shipments/shipment/custom_attribute | custom_attribute_name | If the Salesforce OrderDeliveryGroup object has a custom field matching a custom attribute on the storefront shipment object, the value is copied to the OrderDeliveryGroup record. If the Salesforce OrderDeliveryGroupSummary object also has a matching custom field, it’s copied to both records. If a custom field is non-nillable, then order data must include a value for the corresponding custom attribute. If the value is missing, the integration fails. |

## OrderItem Object

If an order has a TaxLocaleType of Net, then the integration also creates an OrderItemTaxLineItem record for each OrderItem record.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| order/product-lineitems/product-lineitem/lineitem-text | Description | If the record represents a shipping charge, this value is set to Shipping. Otherwise, it’s set to order/product-lineitems/product-lineitem/lineitem-text. |
| N/A | Type | If the record represents a shipping charge, this picklist value is set to Delivery Charge. Otherwise, it’s set to Order Product. |
| order/product-lineitems/product-lineitem/quantity | Quantity |  |
| order/product-lineitems/product-lineitem/net-price | TotalLineAmount |  |
| N/A | LineNumber | Each order’s OrderItems that represent physical products and non-shipping charges are assigned sequential LineNumber values starting at 1. OrderItems that represent shipping charges are assigned sequential LineNumber values starting at 1000, so in order detail views, they appear after all other OrderItems.Each delivery group has it's own line numbering, so there may be multiple OrderItems with LineNumber: 1 if there are multiple delivery groups.Order Management doesn’t directly support kit items or line item options, so it stores them as OrderItem records with their own LineNumbers. An OrderItem’s LineNumber is unrelated to its order line position in B2C Commerce. |
| order/product-lineitems/product-lineitem/base-price or order/product-lineitems/product-lineitem/net-price and order/product-lineitems/product-lineitem/quantity | UnitPrice | The integration calculates this value to a limited number of decimal places and includes it for reference. Because the calculation can introduce small rounding errors, Order Management doesn’t use this value for any processing. The calculation formula depends on the tax locale type of the order:Net Taxation—base-priceGross Taxation—net-price / quantity |
| order/product-lineitems/product-lineitem/base-price or order/product-lineitems/product-lineitem/gross-price and order/product-lineitems/product-lineitem/quantity | GrossUnitPrice | The integration calculates this value to a limited number of decimal places and includes it for reference. Because the calculation can introduce small rounding errors, Order Management doesn’t use this value for any processing. The calculation formula depends on the tax locale type of the order:Net Taxation—gross-price / quantityGross Taxation—base-price |
| order/product-lineitems/product-lineitem/base-price | ListPrice | This value is only set if the Optional Price Books feature is enabled. It’s needed when the OrderItem has no associated PriceBookEntry. |
| N/A | OrderId | This value is set to the ID of the associated original Order record. |
| N/A | OrderDeliveryGroupId | This value is set to the ID of the associated OrderDeliveryGroup record. |
| N/A | PricebookEntryId | This value is set to the ID of the associated PriceBookEntry record. If the Optional Price Books feature is enabled, this value isn’t set. |
| N/A | Product2Id | This value is set to the ID of the associated Product2 record. |
| order/product-lineitems/product-lineitem/custom_attribute, order/giftcertificate-lineitems/giftcertificate-lineitem/custom_attribute, or order/shipping-lineitems/shipping-lineitem/custom_attribute | custom_attribute_name | If the Salesforce OrderItem object has a custom field matching a custom attribute on the storefront product-lineitem object, giftcertificate-lineitem object, or shipping-lineitem object, the value is copied to the OrderItem record. If the Salesforce OrderItemSummary object also has a matching custom field, it’s copied to both records. If a custom field is non-nillable, then order data must include a value for the corresponding custom attribute. If the value is missing, the integration fails. |

## OrderItemAdjustmentLineItem Object

An OrderItemAdjustmentLineItem record represents the application of a promotion to an OrderItem record. Thus, an OrderItem record has one associated OrderItemAdjustmentLineItem record for each promotion that applies to it.

If an order has a TaxLocaleType of Net, then the integration also creates an OrderItemTaxLineItem record for each OrderItemAdjustmentLineItem record.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| order/product-lineitems/product-lineitem/product-id and order/price-adjustments/price-adjustment/lineitem-text | Name | This value is set to order/product-lineitems/product-lineitem/product-id + "-" + order/price-adjustments/price-adjustment/lineitem-text. |
| price-adjustments/price-adjustment/net-price | Amount |  |
| price-adjustments/price-adjustment/tax | TotalTaxAmount |  |
| order/price-adjustments/price-adjustment/lineitem-text | PromotionText |  |
| N/A | OrderItemId | This value is set to the ID of the OrderItem record that the adjustment applies to. |
| N/A | OrderAdjustmentGroupId | For an order-level promotion, or an item-level promotion that applies to multiple OrderItems, this value is set to the ID of the parent OrderAdjustmentGroup record. For an item-level promotion that applies to only one OrderItem, it isn’t set. |
| N/A | AdjustmentCauseId | This value is set to the ID of the associated Promotion record. |

## OrderItemTaxLineItem Object

If an order has a TaxLocaleType of Net, then the integration creates an OrderItemTaxLineItem record for each OrderItem and OrderItemAdjustmentLineItem record in the order. If an order has a TaxLocaleType of Gross, then the integration doesn’t create any OrderItemTaxLineItem records for it.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| See notes | Name | This value is generated based on the Type of the associated OrderItem or OrderItemAdjustmentLineItem record and, if applicable, the StockKeepingUnit of the associated Product2:OrderItem:Order Product—StockKeepingUnit + " - Tax"Delivery Charge—"Delivery Charge - Tax"OrderItemAdjustmentLineItem:Product—StockKeepingUnit + " - Adjustment Tax"Shipping—"Delivery Charge - Adjustment Tax" |
| N/A | Type | This picklist value is always set to Estimated. |
| order/product-lineitems/product-lineitem/tax | Amount |  |
| order/product-lineitems/product-lineitem/tax-rate | Rate |  |
| order/order-date | TaxEffectiveDate |  |
| N/A | OrderItemId | If the tax applies to an OrderItem record, this value is set to the ID of that order item. If it applies to an OrderItemAdjustmentLineItem record, this value is set to the ID of the order item that the adjustment applies to. |
| N/A | OrderItemAdjustmentLineItemId | This value is only set for tax that applies to an OrderItemAdjustmentLineItem record. |

## Payment Object

If an order/payments/payment/transaction-type value in the order data is sale or capture, then the integration creates a Payment record for that transaction. If the value starts with auth, then it creates a PaymentAuthorization record. These checks aren’t case-sensitive.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| N/A | PaymentGatewayId | This value is set to the ID of the PaymentGateway record whose ExternalReference value matches the processor ID value of the order payment instrument associated with the order payment transaction. |
| N/A | PaymentGatewayLogId | This value is set to the ID of the PaymentGatewayLog record associated with the payment. |
| order/payments/payment/amount | Amount |  |
| N/A | ProcessingMode | This picklist value is always set to External. |
| N/A | Status | This picklist value is always set to Processed. |
| order/payments/payment/transaction-id | GatewayRefNumber | This value isn’t required in the order data. The default value is null. |
| order/customer/customer-email | Email |  |
| order/order-date | Date |  |
| order/payments/payment/transaction-type | Type |  |
| order/billing-address/phone | Phone |  |
| N/A | PaymentGroupId | This value is set to the ID of the PaymentGroup record associated with the payment. |
| N/A | AccountId | This value is set to the ID of the Account or Person Account record associated with the shopper. |
| N/A | PaymentMethodId | This value is set to the ID of the CardPaymentMethod or DigitalWallet record associated with the payment. |
| order/currency | CurrencyIsoCode | This value is only set if the Salesforce org has Multicurrency enabled. |
| order/payments/payment/custom_attribute or a custom attribute on the payment type | custom_attribute_name | If the Salesforce Payment object has a custom field matching a custom attribute on the storefront payment type or order payment transaction object, the value is copied to the Payment record. If a custom field is non-nillable, then order data must include a value for the corresponding custom attribute. If the value is missing, the integration fails. |

## PaymentAuthorization Object

If an order/payments/payment/transaction-type value in the order data starts with auth, then the integration creates a PaymentAuthorization record for that transaction. If the value is sale or capture, then it creates a Payment record. These checks aren’t case-sensitive.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| N/A | PaymentGatewayId | This value is set to the ID of the PaymentGateway record whose ExternalReference value matches the processor ID value of the order payment instrument associated with the order payment transaction. |
| N/A | PaymentGatewayLogId | This value is set to the ID of the PaymentGatewayLog record associated with the payment authorization. |
| order/payments/payment/amount | Amount |  |
| N/A | ProcessingMode | This picklist value is always set to External. |
| N/A | Status | This picklist value is always set to Processed. |
| order/payments/payment/transaction-id | GatewayRefNumber | This value isn’t required in the order data. The default value is null. |
| (custom attribute) order/payments/payment/authCode | GatewayAuthCode | The default Payment Transaction object in B2C Commerce doesn’t include an authCode attribute. To use it, add it as a custom attribute and populate it before sending the order data. If you name it authCode, the integration automatically copies it to the GatewayAuthCode field. |
| N/A | PaymentGroupId | This value is set to the ID of the PaymentGroup record associated with the payment authorization. |
| N/A | AccountId | This value is set to the ID of the Account or Person Account record associated with the shopper. |
| N/A | PaymentMethodId | This value is set to the ID of the CardPaymentMethod or DigitalWallet record associated with the payment authorization. |
| order/currency | CurrencyIsoCode | This value is only set if the Salesforce org has Multicurrency enabled. |
| order/payments/payment/custom_attribute or a custom attribute on the payment type | custom_attribute_name | If the Salesforce PaymentAuthorization object has a custom field matching a custom attribute on the storefront payment type or order payment transaction object, the value is copied to the PaymentAuthorization record. If a custom field is non-nillable, then order data must include a value for the corresponding custom attribute. If the value is missing, the integration fails. |

## PaymentGatewayLog Object

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| N/A | PaymentGatewayId | This value is set to the ID of the PaymentGateway record whose ExternalReference value matches the processor ID value of the order payment instrument associated with the order payment transaction. |
| N/A | InteractionStatus | This picklist value is always set to Success. |
| order/payments/payment/transaction-type | InteractionType | The default value is Authorization. |
| (custom attribute) order/payments/payment/authCode | GatewayAuthCode | The default Payment Transaction object in B2C Commerce doesn’t include an authCode attribute. To use it, add it as a custom attribute and populate it before sending the order data. If you name it authCode, the integration automatically copies it to the GatewayAuthCode field. |
| (custom attribute) order/payments/payment/avsResultCode | GatewayAvsCode | The default Payment Transaction object in B2C Commerce doesn’t include an avsResultCode attribute. To use it, add it as a custom attribute and populate it before sending the order data. If you name it avsResultCode, the integration automatically copies it to the GatewayAvsCode field. |
| (custom attribute) order/payments/payment/approvalStatus | GatewayResultCode | The default Payment Transaction object in B2C Commerce doesn’t include an approvalStatus field. To use it, add it as a custom attribute and populate it before sending the order data. If you name it approvalStatus, the integration automatically copies it to the GatewayResultCode field. |

## PaymentGroup Object

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| N/A | SourceObjectId | This value is set to the ID of the original Order record that the payments in the group apply to. |
| order/currency | CurrencyIsoCode | This value is only set if the Salesforce org has Multicurrency enabled. |

## PendingOrderSummary Object

PendingOrderSummary is only used by High Scale Orders. It holds order data that’s been ingested into ZOS and is waiting for its Salesforce records to be created. You can trigger creation of the records, including the Summary records, by importing a PendingOrderSummary from the Pending Order Summaries page in the Salesforce UI.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| N/A | AccountId | This value is set to the ID of the Account or Person Account record that represents the shopper. |
| N/A | BillToContactId | This value is set to the ID of the Contact record that represents the shopper. When using person accounts, this value isn’t set. In that case, access shopper contact information via the Account instead of the Contact. |
| order/customer/customer-email | BillingEmailAddress |  |
| order/billing-address/phone | BillingPhoneNumber |  |
| order/currency | CurrencyIsoCode | This value is only set if the Salesforce org has Multicurrency enabled. |
| catalog/catalog-id and order/order-no | ExternalReferenceIdentifier | Used internally to prevent duplicate records. This value is case-sensitive. On creation, this value is set to B2C realm ID + "_" + B2C instance ID + "@" + catalog/catalog-ID + "@" + order/order-no. |
| all price, adjustment, and tax values | GrandTotalAmount | Total amount, including adjustments and tax, of the order. |
| order/order-no | OrderNumber |  |
| order/order-date | OrderedDate |  |
| all data | Payload | This field contains the entire order data payload. |
| N/A | PayloadType | The datatype of the Payload. Possible values are JSON_GZIP or JSON_RAW. |
| catalog/catalog-id | SalesChannelId | This value is set to the ID of the SalesChannel record whose SalesChannelName field matches the catalog/catalog-id in the order data packet. |
| N/A | SalesStoreId | This value is set to the ID of the RetailStore or WebStore record associated with the order. |
| order/billing-address/first-name and order/billing-address/last-name | ShopperName | This value is set to order/billing-address/first-name + " " + order/billing-address/last-name. |

## PricebookEntry Object

Salesforce Order Management doesn’t use the PricebookEntry object. It creates a PriceBookEntry record for each Product2 because the OrderItem object requires a PricebookEntryId value.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

If you turn on the [Optional Price Books feature](https://help.salesforce.com/articleView?id=customize_order_enable_without_pricebooks.htm&language=en_US "HTML (New Window)"), then Order Management doesn’t create price book entries for product records that it creates from order data. If you turn off the feature, then you must add price book entries manually.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| N/A | Pricebook2Id | This value is set to the ID of the Pricebook2 record for the standard price book. |
| N/A | Product2Id | This value is set to the ID of the associated Product2 record. |
| order/product-lineitems/product-lineitem/base-price | UnitPrice | This value is only set when the PriceBookEntry record is created. It isn’t updated when an OrderItem associated with the same Product2 is created. It isn’t used for any calculations in Order Management. |
| order/currency | CurrencyIsoCode | This value is only set if the Salesforce org has Multicurrency enabled. |

## Product2 Object

The integration identifies products by first searching for a Product2 with a ProductCode value that matches the product-id value in the order data. If it doesn’t find one, it looks for a Product2 with a StockKeepingUnit value that matches the product-id value. If it still doesn’t find one, then it creates a Product2 record.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| order/product-lineitem/lineitem-text | Description |  |
| order/product-lineitem/product-name | Name |  |
| order/product-lineitem/product-id | StockKeepingUnit | If the product is an electronic gift certificate, this value is set to eGiftCertificate. |
| order/product-lineitem/product-id | ProductCode | If the product is an electronic gift certificate, this value is set to eGiftCertificate. |
| N/A | IsActive | The default value is true. |

## Promotion Object

For information on the Promotion object, see the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_promotion.htm "HTML (New Window)").

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| order/price-adjustments/price-adjustment/promotion-id | Name |  |
| order/price-adjustments/price-adjustment/lineitem-text | DisplayName |  |
| order/price-adjustments/price-adjustment/lineitem-text | Description |  |
| N/A | StartDate | The default value is the current date. |
| N/A | IsCommercePromotion | The default value is true. |
| N/A | IsActive | The default value is true. |

## SalesChannel Object

The integration associates B2C Commerce site IDs with Salesforce SalesChannels.

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| site/site-id | Description |  |
| site/site-id | SalesChannelName |  |
| N/A | Type |  |

## WebStore Object

The integration looks for a WebStore matching the currency and locale of the order, and creates one if needed. It associates one WebStore with each combination of currency and locale that appears in order data. For example, let’s say that you have one site that supports US orders in US dollars. A second site supports UK orders in pounds or Euros, and also supports French orders in Euros. Create four Web Stores to represent them:

-   USD - en\_US
-   GBP - en\_GB
-   EUR - en\_GB
-   EUR - fr\_FR

| B2C Commerce XSD Value | Salesforce Object Field | Notes |
| --- | --- | --- |
| catalog/catalog-id and order/currency | Name | For a single-currency org, this value is the order catalog/catalog-id, for example SiteGenesis. For a multicurrency org, it’s the order catalog/catalog-id plus the currency associated with the WebStore, for example SiteGenesis USD. |
| order/currency | CurrencyIsoCode | This value is only set if the Salesforce org has Multicurrency enabled. |
| order/customer-locale | DefaultLanguage | The order locale ID must be a valid value for a WebStore DefaultLanguage. It can’t be default. |
| order/taxation | DefaultTaxLocaleType | This value is set to Net or Gross based on the value of order/taxation. If using Net taxation, this value is set to Net. If using Gross taxation, this value is set to Gross. If the value isn’t set, then the default value is Net. |
| order/order-no and catalog/catalog-id | ExternalReference | This value is set to B2C realm ID + “_” + B2C instance ID + "@" + catalog/catalog-id. |
| N/A | LocationId | The system creates a location and sets this value to its ID. It sets the new location’s LocationType field to Virtual and its ExternalReference field to null. If you include any custom validations for the Location object, they must account for these values. |
| order/currency | SupportedCurrencies | This value is only set if the Salesforce org has Multicurrency enabled. It matches the value of CurrencyIsoCode. |
| order/customer-locale | SupportedLanguages | The order locale ID must be a valid value for a WebStore DefaultLanguage. It can’t be default. It matches the value of DefaultLanguage. |
| N/A | Type | This value is always set to B2CE. |

## Code Examples

```
paypal|visa_checkout|pay_by_check|.*(apple|google|android|amazon|ali).*(pay)*
```

```
{
  "DeveloperName" : "BankTransfer"
  "MasterLabel" : "Bank Transfer",
  "GtwyProviderPaymentMethodType" : "directBanking",
  "PaymentGatewayProviderId" : "0cJaa0000000001E67",
  "PaymentMethodType" : "AlternativePaymentMethod",
  “RecordTypeId” : "012aa000000008A34F"
}
```

```
paypal|visa_checkout|pay_by_check|.*(apple|google|android|amazon|ali).*(pay)*
```

```
paypal|visa_checkout|pay_by_check|.(apple|google|android|amazon|ali).(pay)*
```

## Related Topics

- Importing Order Data (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_import_data.htm)
