---
title: "Lightning Web Components for Enterprise Sales Management"
domain: esm-developer-guide
topic: lightning-web-components-for-enterprise-sales-management
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.963Z
estimatedTokens: 1175
keywords: [Lightning, Web, Components, Enterprise, Sales, Management, LWCs, supplement, Vlocity, incorporating, calls, SDK, APIs, Cart-Based, Digital]
---

# Lightning Web Components for Enterprise Sales Management

> Enterprise Sales Management Lightning Web Components (LWCs) supplement Vlocity Lightning Web Components by incorporating calls to the Enterprise Sales Management SDK, which makes calls to Enterprise Sales Management APIs, Cart-Based APIs, Digital Commerce cacheable APIs, and Integration Procedures.

# Lightning Web Components for Enterprise Sales Management

Enterprise Sales Management Lightning Web Components (LWCs) supplement Vlocity Lightning Web Components by incorporating calls to the Enterprise Sales Management SDK, which makes calls to Enterprise Sales Management APIs, Cart-Based APIs, Digital Commerce cacheable APIs, and Integration Procedures.

Vlocity Lightning Web Components are industry-specific components and widgets built on Web Component standards that work with all modern browsers and can be distributed with any JavaScript library or framework. Web components allow you to create new custom, reusable, encapsulated HTML tags to use in your web pages or applications.

List of Enterprise Sales Management Lightning Web Components
| Component | Description |
| --- | --- |
| b2bAdjustPriceModal | Render a modal on the offer configuration page that is used to adjust and override one-time or recurring prices for a product. |
| b2bApplyDiscountModal | Render a modal on the offer configuration page that is used to display any available discounts for the product and will display any discounts that have already been applied. |
| b2bAttributeConfigOffer | Render options for making changes to the product attribute configuration. |
| B2BBaseComponent | A base class that is extended by other lightning web componentsB2BBaseComponent includes methods to load the Newport Design System (NDS) and to show a toast message. |
| b2bButton | Render a generic button for configuring actions and inputs.Examples: Add and Preview buttons in the cart summary, group and product buttons on the Location and Subscriber subtabs |
| B2BCartSummary | Render the cart summary, including name, price info and actions. |
| B2BCategoriesList | Render all product categories and child categories. |
| B2BCategoryItem | Render the specified product category item within the categories list.Examples: Devices or Ethernet |
| b2bConfigCard | Render each line item on the offer configuration page if the configuration of the product can be done in its line item. |
| b2bDataRowDetail | Render additional details (if any) for a row on the Locations or Subscriber subtabs |
| b2bDataTable | Render data uploaded for locations or subscribers, grouping, filters, search, sorting, and pagination. |
| b2bDataTableCell | Render editable cells in each row of the Location and Subscriber subtabs. |
| b2bDataTableCellList | Render a list of inline row cells for each record in the data table on the Locations and Subscribers subtabs and the quote summary. |
| b2bDataTableWrapper | A container for the file upload, data table, and map components |
| b2bFileUpload | Render file selector and field mapping options. |
| b2bHeader | Render a header on the offer selection and configuration pages with options for searching, sorting, selecting and assigning services to quote members, and so on. |
| B2BItemsGrid | A container for rendering product items and promotions from the selected price list in a grid |
| B2BItemsList | A container for rendering product items and promotions from the selected price list in a list |
| b2bMap | Render addresses of locations or subscribers in a Google Map view when a user selects the Show Map toggle. |
| b2bNavigationUtil | Stores and updates route data. A data variable holds the name of the navigational component, such as configureOffer or memberUpload. |
| b2bOfferAddons | Container for rendering child line items or virtual group items recursively |
| B2BOfferConfig | Retrieve the selected offer details and support offer configuration, such as applying adjustments. |
| B2BOfferSelection | Container for rendering product categories, products, and any promotions for the product. |
| B2BProductItem | Render the products based on the selected category. |
| b2bQuoteSummary | Render a summary of the entire quote, including quote line items per subscriber and location. |
| b2bSDKFactory | Stores user data and generic methods used by VIPs and Data Mappers. |
| b2bSampleApp | Conditionally render application components based on the current route. |
| b2bShowMore | Render product title on the offer selection page. |
| b2bStatusBar | Render the number of records when users add quote members to a group or add products to the selection. |
| b2bTotalBar | Render price totals, the selected number of locations or subscribers, and the add button to add quote members and navigate to the quote summary. |
| b2bUtils | Provides generic functions of Apex remote calls, Data Mappers, and VIPs. |

See Also: [Vlocity Lightning Web Components](https://help.salesforce.com/s/articleView?id=xcloud.os_omnistudio_lightning_web_components_58153.htm&type=5&language=en_US)
