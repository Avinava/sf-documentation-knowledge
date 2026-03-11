---
title: "Starter Data Bundles"
domain: data-cloud
topic: starter-data-bundles
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.574Z
keywords: [Starter, Data, Bundles]
---

# Starter Data Bundles

# Starter Data Bundles

A starter data bundle is a Salesforce-defined data stream definition that includes mapping from a data source to the Data Cloud DMO structure. Bundles can be customized and some connectors offer multiple data bundle options.

When data is ingested from a data source, it’s stored in a data lake object (DLO). These DLOs represent your source data, whether that is from a Salesforce source or an external data source. Find reference information about the starter bundles available for Data Cloud.

-   **[B2C Commerce: Bundles Product Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_b2ccommerce_bundlesproduct.htm)**  
    After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Bundles Product object represents products that can be purchased as a group. Bundle products can contain independent inventory records for the bundle and the product that make up the bundle.
-   **[B2C Commerce: Customer Profile Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_b2ccommerce_customerprofile.htm)**  
    After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Customer Profile object represents a customer profile for a registered customer.
-   **[B2C Commerce: Goods Product Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_b2ccommerce_goodproduct.htm)**  
    After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Goods Product object represents hard goods that can be purchased.
-   **[B2C Commerce: Master Product Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_b2ccommerce_masterproduct.htm)**  
    After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Master Product object is a container for some types of products. Master products don’t have inventory records.
-   **[B2C Commerce: Product Catalog Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_b2ccommerce_productcatalog.htm)**  
    After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Product Catalog object represents categories and products used to organize merchandise.
-   **[B2C Commerce: Product Category Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_b2ccommerce_productcategory.htm)**  
    After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Product Category object represents categories of products.
-   **[B2C Commerce: Product Category Product Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_b2ccommerce_productcategoryproduct.htm)**  
    After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Product Category Product object represents categories of products.
-   **[B2C Commerce: Sales Order Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_b2ccommerce_salesorder.htm)**  
    After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Sales Order object represents an order.
-   **[B2C Commerce: Sales Order Customer Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_b2ccommerce_salesorder_customer.htm)**  
    After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Sales Order Customer object represents a customer making an order. 
-   **[B2C Commerce: Sales Order Product Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_b2ccommerce_salesorder_product.htm)**  
    After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Sales Order Product object represents an order.
-   **[Commerce: Account Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_account.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Account data indicates how a shopper interacts with a store. For example, billing and shipping information.
-   **[Commerce: Coupon Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_coupon.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Coupon data shows the method for a buyer to compensate a seller for a purchased good or service.
-   **[Commerce: Fulfillment Order Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_fulfillmentorder.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Fulfillment Order data is information about how a sales order is delivered to a customer and who delivers it. For example, the warehouse that fills an order and the required information about the process.
-   **[Commerce: Fulfillment Order Line Item](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_fulfillmentorder_lineitem.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Fulfillment Order Line data is a shippable product or service that is part of a fulfillment order.
-   **[Commerce: Fulfillment Order Item Adjustment](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_fulfillmentorder_itemadj.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Fulfillment Order Item Adjustment data is a price adjustment that is calculated at the level of a specific fulfillment order product.
-   **[Commerce: Fulfillment Order Item Tax](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_fulfillmentorder_itemtax.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Fulfillment Order Item Tax data is a tax that is calculated on the base price of a fulfillment order product.
-   **[Commerce: Location Group Product Exclusion Change Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_oci_locationgroupproductexclusionchange.htm)**  
    The Omnichannel Inventory connector for Data Cloud automatically maps the data source objects to the data model objects (DMO) and establishes DMO relationships. The Location Group Product Exclusion Change object represents a change to the Location Group Product Exclusion list.
-   **[Commerce: Location Group Product Inventory Change Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_oci_locationgroupproductinventorychange.htm)**  
    The Omnichannel Inventory connector for Data Cloud automatically maps the data source objects to the data model objects (DMO) and establishes DMO relationships. The Location Group Product Inventory Change object represents a change to product inventory at a location group.
-   **[Commerce: Location Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_location.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Location data is the location that fulfills orders, such as a warehouse or a retail store.
-   **[Commerce: Location Product Inventory Change Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_oci_locationproductinventorychange.htm)**  
    The Omnichannel Inventory connector for Data Cloud automatically maps the data source objects to the data model objects (DMO) and establishes DMO relationships. The Location Product Inventory Change object represents a change to product inventory at a location.
-   **[Commerce: Order Adjustment Group Summary Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_order_item_adgroupsum.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Adjustment Group Summary data is a change to the price of a product that’s made before order fulfillment. A sales order price adjustment can be composed of sales order Product price adjustments that allocate the overall adjustment amount to products and services.
-   **[Commerce: Order Delivery Method Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_orderdelivery.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Delivery Method data is a standardized method for transferring purchased products or services to the fulfillment destination. A delivery method characterized by the type of transportation used and by the delivering organization or group.
-   **[Commerce: Order Delivery Group Summary Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_orderdeliv_grsum.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Delivery Group Summary data is information about the method that the buyer uses to compensate a seller for a service or product purchased.
-   **[Commerce: Order Item Adjustment Line Summary Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_order_item_ajdsum.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Item Adjustment Line Summary data is information about a change to the price of a sales order product that is made before order fulfillment. A sales order product price adjustment can stand alone or be related to a sales order level adjustment.
-   **[Commerce: Order Item Summary Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_order_itemsum.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Item Summary data is information about a component of a sales order that identifies a product or service sold to the customer.
-   **[Commerce: Order Item Summary Change Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_orderitemsum.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Item Summary Change data is a change log for a sales order.
-   **[Commerce: Order Item Tax Line Item Summary Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_order_item_tax.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Item Tax Line Item Summary data is a charge imposed by a government entity. The tax types are aligned to phases of the process: SalesOrderTax, FulfillmentProductTax, and ShipmentProductTax.
-   **[Commerce: Order Payment Summary Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_order_pay.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Payment Summary data is about one or more payments that have the same payment method applied to a single sales order.
-   **[Commerce: Order Summary Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_order_sum.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Summary data is about an internal document generated by the seller indicating that the customer is ready to purchase products and services.
-   **[Commerce: Payment Method Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_paymentmethod.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Payment Method data refers to the method for a buyer to compensate a seller for a purchased good or service.
-   **[Commerce: Process Exception Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_processexception.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Process Exception data is about events related to a business process or data that affects normal order processing. Errors in programs or communication aren’t process exceptions, but can cause process exceptions.
-   **[Commerce: Product Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_product.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product data is about the product that a company is selling. The Product object includes fields for quantity and revenue.
-   **[Commerce: Product Attribute Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_process_att.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product Attribute data is information about product attributes, for example, the type of material used for ShoeXYZ.
-   **[Commerce: Product Catalog Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_product_cat.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product Catalog data is a catalog used for a business process. For example, inventory or merchandising.
-   **[Commerce: Product Category Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_product_category.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product Category data is about categories and subcategories organize and group products in your catalog and on your storefront. For example, an outdoors outfitter site uses the Boots, Climbing Gear, and Outerwear categories to organize products on their storefront.
-   **[Commerce: Product Category Product Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_product_catprod.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product Category Product data is the assignment of a product to categories. For example, ShoeXYZ is assigned to the Shoes and Running categories.
-   **[Commerce: Promotion Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_promotion.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Promotion data is any type of marketing communication used to inform or persuade target audiences of the merits of a product, service, brand, or issue.
-   **[Commerce: Return Order Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_returnorder.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Return Order data is about the return of order products in Salesforce Order Management.
-   **[Commerce: Return Order Item Adjustment Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_returnorder_itemadj.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Return Order Item Adjustment data is information about the change in price of the item in the return order product.
-   **[Commerce: Return Order Item Tax Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_returnorder_itemtax.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Return Order Item Tax data is information about the tax amount adjustments made for the return order product.
-   **[Commerce: Return Order Line Item Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_returnorder_line.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Return Order Line Item data is information about a product that a customer has returned to the seller.
-   **[Commerce: Sales Channel Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_saleschannel.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Sales Channel data is the channel used to sell goods. For example, a web store or a retail store.
-   **[Commerce: Web Store Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_webstore.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Web Store data represents a Direct-to-Consumer (D2C) commerce store selling products to the public.
-   **[Commerce: Web Store Catalog Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_webstorecatalog.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Web Store Catalog data is information about the products available at a store. Each record in a WebStoreCatalog data source object specifies a product catalog that organizes the products in a store.
-   **[Commerce: Web Store Network Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_commerce_webstorenetwork.htm)**  
    After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMOs) in Data Cloud. WebStoreNetwork data represents the relationship between a web store and an experience site.
-   **[Marketing Cloud Account Engagement: Email Activity Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_mcae_email_activity.htm)**  
    After a data stream is deployed, the Marketing Cloud Account Engagement data stream maps source objects from Account Engagement to data model objects (DMOs) in Data Cloud. The Email Activity object includes email engagement data.
-   **[Marketing Cloud Account Engagement: Form Activity Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_mcae_form_activity.htm)**  
    After a data stream is deployed, the Marketing Cloud Account Engagement data bundle maps source objects from Account Engagement to data model objects (DMOs) in Data Cloud. The Form Activity object includes form engagement data from forms embedded in Account Engagement landing pages.
-   **[Marketing Cloud Account Engagement: Web Page Activity Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_mcae_web_page_activity.htm)**  
    After a data stream is deployed, the Marketing Cloud Account Engagement data stream maps source objects from Account Engagement to data model objects (DMOs) in Data Cloud. The Web Page Activity object includes form engagement data from forms embedded in Account Engagement landing pages and data from Account Engagement tracking codes.
-   **[Marketing Cloud Engagement: Campaigns and Journeys Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_mce_campaigns.htm)**  
    After a data stream is deployed, the Marketing Cloud Engagement starter data bundle automatically maps data from Marketing Cloud Engagement to data model objects (DMO)s in Data Cloud. The Campaigns and Journeys data includes the following DLOs and associated data streams: SFMC Campaign, SFMC Email Publication, SFMC Email Template, SFMC Journey, SFMC Journey Activity, SFMC Push Template, SFMC SMS Template, and SFMC WhatsApp Message Template.
-   **[Marketing Cloud Engagement: Contact Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_mce_contact.htm)**  
    After a data stream is deployed, the Marketing Cloud Engagement starter data bundle automatically maps data from Marketing Cloud Engagement to data model objects (DMO)s in Data Cloud. Contact data includes the following system-generated DLOS and associated data streams: SFMC Contact Point App, SFMC Contact Point Email, SFMC Contact Point Phone, SFMC Contact Point WhatsApp, and SFMC Subscriber.
-   **[Marketing Cloud Engagement: Engagement Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_mce_engagement.htm)**  
    After a data stream is deployed, the Marketing Cloud Engagement starter data bundle automatically maps data from Marketing Cloud Engagement to data model objects (DMO)s in Data Cloud. Engagement data includes the following system-generated DLOS and associated data streams: SFMC EES Email Snapshot, SFMC EES Push Snapshot, SFMC Einstein Email Scores, SFMC Email Complaint, SFMC Email Engagement Bounce, SFMC Email Engagement Click, SFMC Email Engagement Open, SFMC Email Engagement Send, SFMC Email Unsubscribe, SFMC Msg Engagement Event, SFMC Push Engagement Event, SFMC Push Undeliver Event, SFMC WhatsApp Tracking Event, SFMC WhatsApp MO Event, and SFMC WhatsApp Send Event.
-   **[Salesforce CRM: Account Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_account.htm)**  
    After a data stream is deployed, the Salesforce CRM starter data bundle automatically maps data from Sales Cloud or Service Cloud to data model objects (DMO)s in Data Cloud. The Sales Cloud and Service Cloud bundles deploy mappings to Contact Point type DMOs. Identity Resolution uses the DMOs, which link multiple records into a unified customer profile.
-   **[Salesforce CRM: Agent Work Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_agent_work.htm)**  
    These data mappings are for the AgentWork DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Agent Work Skill Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_agent_work_skill.htm)**  
    These data mappings are for the AgentWorkSkill DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Alert Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_alert.htm)**  
    These data mappings are for the Alert DLO found in the Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Benefit Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_benefit.htm)**  
    These data mappings are for the Benefit DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Benefits are offered to members of a loyalty program. Benefits can be offered to members based on their assigned tier or based on their engagement.
-   **[Salesforce CRM: Benefit Type Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_benefit_type.htm)**  
    These data mappings are for the Benefit DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A benefit type is used to categorize benefits that are offered to members of the loyalty program.
-   **[Salesforce CRM: Business Hours](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_business_hours.htm)**  
    These data mappings are for the BusinessHours DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Card Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_card.htm)**  
    These data mappings are for the Card DLO found in the Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Case Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_case.htm)**  
    After a data stream is deployed, the Salesforce CRM starter data bundle automatically maps data from Sales Cloud or Service Cloud to data model objects (DMO)s in Data Cloud. The Sales Cloud and Service Cloud bundles deploy mappings to Contact Point type DMOs. Identity Resolution uses the DMOs, which link multiple records into a unified customer profile.
-   **[Salesforce CRM: Case Article Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_case_article.htm)**  
    These data mappings are for the CaseArticle DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Case History 2 Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_case_history_2.htm)**  
    These data mappings are for the CaseHistory2 DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Category Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_category.htm)**  
    These data mappings are for the Category DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A category of products that the company sells.
-   **[Salesforce CRM: Contact Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_contact.htm)**  
    After a data stream is deployed, the Salesforce CRM starter data bundle automatically maps data from Sales Cloud or Service Cloud to data model objects (DMO)s in Data Cloud. The Sales Cloud and Service Cloud bundles deploy mappings to Contact Point type DMOs. Identity Resolution uses the DMOs, which link multiple records into a unified customer profile.
-   **[Salesforce CRM: Conversation Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_ai_Conversation.htm)**  
    These data mappings are for the Conversation DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: ConversationParticipant Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_ai_ConversationParticipant.htm)**  
    These data mappings are for the ConversationParticipant DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: ConversationReason Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_ai_ConversationReason.htm)**  
    These data mappings are for the ConversationReason DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: ConversationReasonExcerpt Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_ai_ConversationReasonExcerpt.htm)**  
    These data mappings are for the ConversationReasonExcerpt DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: ConversationReasonGroup Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_ai_ConversationReasonGroup.htm)**  
    These data mappings are for the ConverationReasonGroup DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: ConversationReasonReportDefinition Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_ai_ConversationReasonReportDefinition.htm)**  
    These data mappings are for the ConvReasonReportDefinition DLO used with the Salesforce CRM Connector found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: ConvReasonReportSegmentDefinition Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_ai_ConvReasonReportSegmentDefinition.htm)**  
    These data mappings are for the ConvReasonReportSegmentDefinition DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Data Category Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_data_cat.htm)**  
    These data mappings are for the DataCategory DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Email Message Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_email_message.htm)**  
    These data mappings are for the EmailMessage DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Data Category Group Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_data_cat_group.htm)**  
    These data mappings are for the DataCategoryGroup DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Financial Account Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_finacct.htm)**  
    These data mappings are for the FinancialAccount DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Financial Account Role Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_finacct_role.htm)**  
    These data mappings are for the FinancialAccountRole DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Financial Goal Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_fin_goal.htm)**  
    These data mappings are for the FinancialGoal DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Financial Goal Party Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_fin_goal_party.htm)**  
    These data mappings are for the FinancialGoalParty DLO found in the Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Financial Holding Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_fin_holding.htm)**  
    These data mappings are for the FinancialHolding DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Group Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_group.htm)**  
    These data mappings are for the Group DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Group Member Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_group_member.htm)**  
    These data mappings are for the GroupMember DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Journal Subtype Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_journal_subtype.htm)**  
    These data mappings are for the Journal Subtype DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Journal subtypes help categorize the types of member activities for which transaction journals are created.
-   **[Salesforce CRM: Journal Type Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_journal_type.htm)**  
    These data mappings are for the Journal type DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A journal type is used to categorize transaction journals based on the types of members activities for which members can be rewarded.
-   **[Salesforce CRM: Knowledge Article Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_ka.htm)**  
    These data mappings are for the Knowledge\_ka DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Knowledge Article Engagement Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_knowledge_article_engagement.htm)**  
    The data mappings are for KnowledgeArticleView DLO created by the Knowledge Article Views Ingestion API for Data Cloud. The mappings are for the KnowledgeArticleEngagement DMO
-   **[Salesforce CRM: Knowledge Article Version Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_kav.htm)**  
    These data mappings are for the Knowledge\_kav DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Knowledge Data Category Selection Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_knowledge_dc_selection.htm)**  
    These data mappings are for the Knowledge\_DataCategorySelection DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Linked Article Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_linked_article.htm)**  
    These data mappings are for the LinkedArticle DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Lead Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_lead.htm)**  
    After a data stream is deployed, the Salesforce CRM starter data bundle automatically maps data from Sales Cloud or Service Cloud to data model objects (DMO)s in Data Cloud. The Sales Cloud and Service Cloud bundles deploy mappings to Contact Point type DMOs. Identity Resolution uses the DMOs, which link multiple records into a unified customer profile.
-   **[Salesforce CRM: Loyalty Aggregated Point Expiration Ledger Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loyalty_agg.htm)**  
    These data mappings are for the Loyalty Aggregated Point Expiration Ledger DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A ledger that contains the details of a member’s fixed-type non-qualifying points that are set to expire on a particular date.
-   **[Salesforce CRM: Loyalty Ledger Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loyalty_ledger.htm)**  
    These data mappings are for the Loyalty Ledger DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A ledger contains information about credited, debited, or adjusted member activity points by transaction journals.
-   **[Salesforce CRM: Loyalty Member Currency Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loyalty_lmember_curr.htm)**  
    These data mappings are for the Loyalty Member Currency DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Information about the qualifying and non-qualifying currency points that are available in members’ point balances.
-   **[Salesforce CRM: Loyalty Member Tier Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loyalty_member_tier.htm)**  
    These data mappings are for the Loyalty Member Tier DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A tier that is assigned to a member based on their engagement with the loyalty program.
-   **[Salesforce CRM: Loyalty Partner Product Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_partner_prod.htm)**  
    These data mappings are for the Loyalty Partner Product DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data refers to a product or service offered by a partner of the loyalty program to members of the loyalty program. Members can accrue or redeem points by purchasing partner products or services.
-   **[Salesforce CRM: Loyalty Program Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog.htm)**  
    These data mappings are for the Loyalty Program DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This object includes data about a company’s loyalty program.
-   **[Salesforce CRM: Loyalty Program Badge Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_badge.htm)**  
    These data mappings are for the Loyalty Program Badge DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data refers to a badge assigned to a member as a reward for engaging with the loyalty program.
-   **[Salesforce CRM: Loyalty Program Currency Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_cur.htm)**  
    These data mappings are for the Loyalty Program Currency DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Loyalty program credits points of a specific currency to members when they engage with the loyalty program. Qualifying currency points help members qualify for tiers of the loyalty program. Members can redeem non-qualifying currency points credited for their purchases.
-   **[Salesforce CRM: Loyalty Program Engagement Attribute Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_eng_att.htm)**  
    These data mappings are for the Loyalty Program Engagement Attribute DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. An engagement attribute is used to track a member’s long-term behavior. For example, an attribute can track a member’s cumulative monthly spend or the number of times the member has logged in to the company’s shopping app.
-   **[Salesforce CRM: Loyalty Program Engagement Attribute Promotion Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_eng_att_promo.htm)**  
    These data mappings are for the Loyalty Program Engagement Attribute Promotion DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data refers to an association between a promotion and an engagement attribute. Use engagement attributes to track the progress of loyalty program members towards achieving promotion targets.
-   **[Salesforce CRM: Loyalty Program Group Member Relationship Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_group.htm)**  
    These data mappings are for the Loyalty Program Group Member Relationship DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data includes the association between a loyalty program member and their groups, along with details of a member’s points contribution towards the associated group.
-   **[Salesforce CRM: Loyalty Program Member Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_mem.htm)**  
    These data mappings are for the Loyalty Program Member DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data includes information about a member of the loyalty program and their individual or corporate membership details.
-   **[Salesforce CRM: Loyalty Program Member Attribute Value Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_mem_att.htm)**  
    These data mappings are for the Loyalty Program Member Attribute Value DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data refers to the value achieved by a loyalty program member for an engagement attribute. A member’s progress towards the target for an engagement attribute is tracked across periods or for individual periods.
-   **[Salesforce CRM: Loyalty Program Member Badge Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_mem_bad.htm)**  
    These data mappings are for the Loyalty Program Member Badge DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data includes information about a badge assigned to a member as a reward for engaging with the loyalty program.
-   **[Salesforce CRM: Loyalty Program Member Case Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_mem_case.htm)**  
    These data mappings are for the Loyalty Program Member Case DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data refers to an association between a loyalty program member and a case created by the member.
-   **[Salesforce CRM: Loyalty Program Member Promotion Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_mem_promo.htm)**  
    These data mappings are for the Loyalty Program Member Promotion DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data about a member’s promotion usage. For cumulative type promotions, the member’s progress is tracked towards achieving the target of the promotion.
-   **[Salesforce CRM: Loyalty Program Partner Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_partner.htm)**  
    These data mappings are for the Loyalty Program Partner DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Loyalty program partners offer their products and services to members of the loyalty program. Partners can choose to allow members to accrue or redeem points by purchasing partner products. Partners can also run promotions in collaboration with the loyalty program.
-   **[Salesforce CRM: Loyalty Program Partner Promotion Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_prog_part_promo.htm)**  
    These data mappings are for the Loyalty Program Partner Promotion DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data refers to a promotion that a loyalty program runs in collaboration with a loyalty program partner.
-   **[Salesforce CRM: Loyalty Tier Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_tier.htm)**  
    These data mappings are for the Loyalty Tier DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Tiers are used to categorize members based on their engagement with the loyalty program. The rewards and benefits offered to members can differ based on their assigned tier. ...
-   **[Salesforce CRM: Loyalty Tier Benefit Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_tier_ben.htm)**  
    These data mappings are for the Loyalty Tier Benefit DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A benefit that’s associated with a member’s tier in the loyalty program.
-   **[Salesforce CRM: Loyalty Tier Group Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_loy_tier_group.htm)**  
    These data mappings are for the Loyalty Tier Group DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A tier group consists of a set of tiers that can be assigned to members based on their engagement with the loyalty program.
-   **[Salesforce CRM: Member Benefit Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_member_benefit.htm)**  
    These data mappings are for the Journal type DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A benefit that has been assigned to a member. Members are assigned benefits based on their tier or based on their engagement with the loyalty program.
-   **[Salesforce CRM: Participant Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_ai_Participant.htm)**  
    These data mappings are for the Participant DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Party Expense Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_party_expense.htm)**  
    These data mappings are for the PartyExpense DLO found in the Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Party Income Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_party_income.htm)**  
    These data mappings are for the PartyIncome DLO found in the Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Person Life Event Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_perlife_event.htm)**  
    These data mappings are for the PersonLifeEvent DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Product Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_product.htm)**  
    These data mappings are for the Product DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A product that the company sells.
-   **[Salesforce CRM: Promotion Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_promotion.htm)**  
    These data mappings are for the Promotion DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Information about a promotion that’s offered to members of a loyalty program.
-   **[Salesforce CRM: Promotion Loyalty Partner Product Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_promo_loy.htm)**  
    These data mappings are for the Promotion Loyalty Partner Product DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A product that’s eligible for a promotion. Members are provided with the promotion’s reward when they purchase a product that’s eligible for the promotion.
-   **[Salesforce CRM: Promotion Market Segment Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_promo_mark_seg.htm)**  
    These data mappings are for the Promotion Market Segment DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Promotions are associated with market segments that the promotions are targeted towards.
-   **[Salesforce CRM: Securities Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_securities.htm)**  
    These data mappings are for the Securities DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Segment Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_segment.htm)**  
    These data mappings are for the Segment DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Segments in Data Cloud are used to determine the target audience for promotions and used to determine the type of rewards provided to members.
-   **[Salesforce CRM: Service Presence Status Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_service_presence_status.htm)**  
    These data mappings are for the ServicePresenceStatus DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Skill Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_skill.htm)**  
    These data mappings are for the Skill DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Survey Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_survey.htm)**  
    These data mappings are for the Survey DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Survey Invitation Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_survey_invitation.htm)**  
    These data mappings are for the SurveyInvitation DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Survey Page Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_survey_page.htm)**  
    These data mappings are for the SurveyPage DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Survey Question Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_survey_question.htm)**  
    These data mappings are for the SurveyQuestion DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Survey Question Response Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_survey_question_response.htm)**  
    These data mappings are for the SurveyQuestionResponse DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Survey Response Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_survey_response.htm)**  
    These data mappings are for the SurveyResponse DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Survey Subject Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_survey_subject.htm)**  
    These data mappings are for the SurveySubject DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Survey Version Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_survey_version.htm)**  
    These data mappings are for the SurveyVersion DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Topic Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_fsc_topic.htm)**  
    These data mappings are for the Topic DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Transaction Journal Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_transaction_journal.htm)**  
    These data mappings are for the Transaction Journal DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Transaction journals are used to track member activities, member behavior, and adjustments.
-   **[Salesforce CRM: Unit of Measure Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_unit_measure.htm)**  
    These data mappings are for the Unit of Measure DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. The unit of measure for a product purchased by a loyalty program member.
-   **[Salesforce CRM: User Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_user.htm)**  
    These data mappings are for the User DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: User Role Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_user_role.htm)**  
    These data mappings are for the UserRole DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: User Service Presence Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_cloud_user_service_presence.htm)**  
    These data mappings are for the UserServicePresence DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.
-   **[Salesforce CRM: Voucher Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_voucher.htm)**  
    These data mappings are for the Voucher DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data is about a voucher issued to a loyalty program member.
-   **[Salesforce CRM: Voucher Definition Mapping](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_crm_voucher_def.htm)**  
    These data mappings are for the Voucher Definition DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A voucher definition is a template that used to issue vouchers to members of a loyalty program.