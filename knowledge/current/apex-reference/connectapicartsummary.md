---
title: "ConnectApi.CartSummary"
domain: apex-reference
topic: connectapicartsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.554Z
estimatedTokens: 1273
keywords: [ConnectApi.CartSummary, cart, summary]
---

# ConnectApi.CartSummary

> A cart summary.

# ConnectApi.CartSummary

A cart summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accountId | String | ID of the account for the cart. | 49.0 |
| asyncOperation​Status | String | Asynchronous processing status of the cart, if asynchronous processing is enabled for the store. This property returns Completed in Apex, because Apex operations always run synchronously. | 59.0 |
| cartId | String | ID of the cart. | 49.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the cart. | 49.0 |
| customFields | List<SObject> | Array of sObjects and viewable custom fields for the sObjects. Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. If no custom fields were specified, returns an empty collection. | 61.0 |
| firstPymtGrand​TotalAmount | String | First payment amount for subscription products, plus the total payment amount for non-subscription products. Includes taxes. | 60.0 |
| firstPymt​TotalAmount | String | The total amount on the first payment of the cart. | 63.0 |
| firstPymt​TotalListPrice | String | The total list price on the first payment of the cart. | 63.0 |
| firstPymtTotal​TaxAmount | String | Tax amount on the first payment for any subscription products, plus the total tax amount on non-subscription products. | 60.0 |
| grandTotal​Amount | String | Grand total amount including shipping and tax for items in the cart, in the currency of the cart. | 49.0 |
| hasGift | Boolean | Specifies whether the cart contains a gift (true) or not (false). | 64.0 |
| isSecondary | Boolean | Specifies whether the cart is secondary (true) or not (false). | 53.0 |
| name | String | Name of the cart. | 49.0 |
| ownerId | String | ID of the owner of the cart. | 49.0 |
| ownerOrderId | String | ID of the owner of the order. | 58.0 |
| purchaseOrder​Number | String | Purchase order for the cart. | 50.0 |
| status | ConnectApi.​CartStatus | Status of the cart. Values are:Active—Cart is created and available for modifications, like adding or removing products or promotions.Checkout—Cart is in checkout. If the customer modifies the cart, the current checkout session is canceled.Closed—Checkout is complete and an order was created. The cart cannot be modified.PendingClosed—Cart is marked to be closed, but the request isn't completed yet. The cart can’t be modified. This value is available in API version 57.0 and later.PendingDelete—Cart is marked for delete, but the request isn't completed yet. The cart can’t be modified.Processing—Cart is processing. For example, taxes are being calculated. The cart can’t be modified. | 49.0 |
| taxType | String | Tax type of the cart.Automatic—Automatic taxation policy.Gross—Gross taxation policy.Net—Net taxation policy. | 55.0 |
| totalAmount​WithItem​Adjustment | String | Total amount, including both tier and item level discounts but excluding cart level discounts, for all items in the cart. | 61.0 |
| totalCartLevel​Adjustment​Amount | String | Total cart level discount amount for the cart. | 61.0 |
| totalChargeAmount | String | Total amount for shipping and other charges in the currency of the cart. Includes adjustments from shipping promotions. | 49.0 |
| totalListPrice | String | Total list price for all cart items plus shipping adjustments. | 49.0 |
| totalProduct​Amount | String | Total amount including discounts, but excluding shipping and tax, for product items in the cart. | 49.0 |
| totalProductAmount​AfterAdjustments | String | Total product amount, including promotions. | 52.0 |
| totalProduct​Count | String | Total count of items in the cart. This field may not be accurate when faster add-to-cart is turned on and quantity rules are enabled for products in the cart. | 49.0 |
| totalProduct​LineItemCount | Integer | Total count of line items, of the type Product, in the cart. | 60.0 |
| totalProduct​ListAmount | String | Total list price for all products in the cart without any adjustments. | 59.0 |
| total​Promotional​AdjustmentAmount | String | Total promotional adjustment amount for items in the cart. | 52.0 |
| totalSubProduct​Count | String | Total quantity of all cart items with the selling model type Evergreen or Term-Defined. | 60.0 |
| totalTaxAmount | String | Total tax amount for the cart, including tax on shipping, if applicable. | 49.0 |
| type | ConnectApi.​CartType | Type of cart. Values are:Cart—Cart created by a customer.PayNowReadOnly—Clone of a Template cart that the customer can check out with using the Pay Now feature.Template—Cart created by an internal user. | 49.0 |
| uniqueProduct​Count | Integer | Total count of unique items, or SKUs, in the cart. This field is supported when faster add-to-cart is turned off. | 49.0 |
| webstoreId | String | ID of the webstore of the cart. | 49.0 |

#### See Also

-   [ConnectApi.CartItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_collection.htm "A collection of items in a cart.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​CartStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​CartType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.CartItemCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_collection.htm)
