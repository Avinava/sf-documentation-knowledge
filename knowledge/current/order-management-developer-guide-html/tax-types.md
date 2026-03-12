---
title: "Tax Types"
domain: order-management-developer-guide-html
topic: tax-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.166Z
estimatedTokens: 707
keywords: [Tax, Orders, include, two, taxes, sales, value-added, VAT]
---

# Tax Types

> Orders can include two types of taxes: sales tax and value-added
      tax (VAT).

# Tax Types

Orders can include two types of taxes: sales tax and value-added tax (VAT).

Sales tax is paid directly on the sale price of goods and services in countries such as the United States. The tax amount is displayed separately from the product prices. This display type is also referred to as “net.”

VAT is an indirect tax on goods and services. The displayed product price includes the tax. If tax fields appear, they usually display “included” instead of the amount. This display type is also referred to as “gross.”

To support both types, Order Management objects include fields for price amounts, tax amounts, combined amounts, and whether an order uses net or gross taxation. You configure page layouts and Salesforce Flow screens to show the appropriate fields for your business needs.

For example, to display net taxation in an order summary page layout, include the TotalAmount and TotalTaxAmount fields. To display gross taxation, include the GrandTotalAmount field. An order summary record always includes all three values, and the GrandTotalAmount always equals the sum of the TotalAmount and the TotalTaxAmount.

Default page layouts display net tax amounts. If your org supports only locales that use sales tax, you can use the default layouts. If your org supports a locale that uses VAT, configure your page layouts to display fields with gross tax amounts.

An org that supports multiple currencies can show net tax amounts for some orders and gross tax amounts for others. In that case, create a user profile for service agents in gross tax locales by cloning the standard user profile. Create page layouts that display gross tax amounts instead of net tax amounts, and assign them to the new profile.

For details about price and tax fields, see the Object Reference for Salesforce and Lightning Platform.

For information about how the B2C Commerce integration handles taxes, see the [Salesforce B2C Commerce Storefront Order Data Map](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_b2c_commerce_data_map.htm "These tables illustrate how data in a Salesforce B2C Commerce order packet maps to records in Salesforce Order Management. If you’re implementing your own storefront integration, this map can help you understand the order data requirements.").

#### See Also

-   [Manage Multiple Currencies Help Topic](https://help.salesforce.com/s/articleView?id=sales.admin_currency.htm&type=5&language=en_US)

-   [Taxation in Order Management](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_taxation.htm "Tax calculations can be complex, especially when supporting multiple currencies. Orders can have different tax types, and taxes can be affected by price adjustments.")

## Related Topics

- Salesforce B2C Commerce Storefront Order Data Map (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_b2c_commerce_data_map.htm)
- Taxation in Order Management (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_taxation.htm)
