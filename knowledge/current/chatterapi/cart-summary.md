---
title: "Cart Summary"
domain: chatterapi
topic: cart-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.611Z
estimatedTokens: 1398
keywords: [Cart, Summary, contents]
---

# Cart Summary

> Summary of information about a cart and its contents.

# Cart Summary

Summary of information about a cart and its contents.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account for the cart. | Small, 49.0 | 49.0 |
| asyncOperation​Status | String | Asynchronous processing status of the cart, if asynchronous processing is enabled for the store. Values are:CompletedErroredProcessing | Small, 59.0 | 59.0 |
| cartId | String | ID of the cart. | Small, 49.0 | 49.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the cart. | Small, 49.0 | 49.0 |
| custom​Fields | sObject[] | Array of sObjects and viewable custom fields for the sObjects. Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. If no custom fields were specified, returns an empty collection.NoteThis field isn't included in the API response for Checkout resources. | Small, 61.0 | 61.0 |
| firstPymtGrand​TotalAmount | String | First payment amount for subscription products, plus the total payment amount for non-subscription products. Includes taxes. | Small, 60.0 | 60.0 |
| firstPymt​TotalAmount | String | The total amount on the first payment of the cart. | Small, 63.0 | 63.0 |
| firstPymt​TotalListPrice | String | The total list price on the first payment of the cart. | Small, 63.0 | 63.0 |
| firstPymtTotal​TaxAmount | String | Tax amount on the first payment for any subscription products, plus the total tax amount on non-subscription products. | Small, 60.0 | 60.0 |
| grandTotal​Amount | String | Grand total amount including shipping and tax for items in the cart, in the currency of the cart. | Small, 49.0 | 49.0 |
| hasGift | Boolean | Specifies whether the cart contains a gift (true) or not (false). | Small, 64.0 | 64.0 |
| isSecondary | Boolean | Specifies whether the cart is secondary (true) or not (false). | Small, 53.0 | 53.0 |
| name | String | Name of the cart. | Small, 49.0 | 49.0 |
| ownerId | String | ID of the owner of the cart. | Small, 49.0 | 49.0 |
| orderOwnerId | String | ID of the owner of the order. | Small, 58.0 | 58.0 |
| purchaseOrder​Number | String | Purchase order for the cart. | Small, 50.0 | 50.0 |
| status | String | Status of the cart. Values are:Active—Cart is created and available for modifications, like adding or removing products or promotions.Checkout—Cart is in checkout. If the customer modifies the cart, the current checkout session is canceled.Closed—Checkout is complete and an order was created. The cart cannot be modified.PendingClosed—Cart is marked to be closed, but the request isn't completed yet. The cart can’t be modified. This value is available in API version 57.0 and later.PendingDelete—Cart is marked for delete, but the request isn't completed yet. The cart can’t be modified.Processing—Cart is processing. For example, taxes are being calculated. The cart can’t be modified. | Small, 49.0 | 49.0 |
| taxType | String | Tax type of the cart.Automatic—Automatic taxation policy.Gross—Gross taxation policy.Net—Net taxation policy. | Small, 55.0 | 55.0 |
| totalAmount​WithItem​Adjustment | String | Total amount, including both tier and item level discounts but excluding cart level discounts, for all items in the cart. | Small, 61.0 | 61.0 |
| totalCartLevel​Adjustment​Amount | String | Total cart level discount amount for the cart. | Small, 61.0 | 61.0 |
| totalCharge​Amount | String | Total amount for shipping and other charges in the currency of the cart. Includes adjustments from shipping promotions. | Small, 49.0 | 49.0 |
| totalListPrice | String | Total list price for all cart items plus shipping adjustments. | Small, 49.0 | 49.0 |
| totalProduct​Amount | String | Total amount including discounts, but excluding shipping and tax, for product items in the cart. | Small, 49.0 | 49.0 |
| totalProduct​AmountAfter​Adjustments | String | Total product amount, including promotions. | Small, 52.0 | 52.0 |
| totalProduct​Count | String | Total count of items in the cart. This field may not be accurate when faster add-to-cart is turned on and quantity rules are enabled for products in the cart. | Small, 49.0 | 49.0 |
| totalProduct​LineItemCount | Integer | Total count of line items, of the type Product, in the cart. | Small, 60.0 | 60.0 |
| totalProduct​ListAmount | String | Total list price for all products in the cart without any adjustments. | Small, 59.0 | 59.0 |
| totalPromotional​AdjustmentAmount | String | Total promotional adjustment amount for items in the cart. | Small, 52.0 | 52.0 |
| totalSubProductCount | String | Total quantity of all cart items with the selling model type Evergreen or Term-Defined. | Small, 60.0 | 60.0 |
| totalTaxAmount | String | Total tax amount for the cart, including tax on shipping, if applicable. | Small, 49.0 | 49.0 |
| type | String | Type of cart. Values are:Cart—Cart created by a customer.PayNowReadOnly—Clone of a Template cart that the customer can check out with using the Pay Now feature.Template—Cart created by an internal user. | Small, 49.0 | 49.0 |
| uniqueProduct​Count | Integer | Total count of unique items, or SKUs, in the cart. This field is supported when faster add-to-cart is turned off. | Small, 49.0 | 49.0 |
| webstoreId | String | ID of the webstore of the cart. | Small, 49.0 | 49.0 |

#### See Also

-   [Cart Item Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_collection.htm "A collection of items in a cart.")

## Related Topics

- Cart Item Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_collection.htm)
