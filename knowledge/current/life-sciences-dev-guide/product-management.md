---
title: "Product Management"
domain: life-sciences-dev-guide
topic: product-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:43.729Z
estimatedTokens: 922
keywords: [Product, Management, centers, products, essential, business, activities, system, modeled, hierarchy, mirror, company's, SKU, structure, scenarios]
---

# Product Management

> Product Management centers on products, which are essential for business activities
  within the system. Products are modeled in a hierarchy that can mirror a company's SKU structure
  and are used in scenarios such as selling to pharmacies and delivering messages and samples to
  healthcare professionals. Product alignment is key to ensuring that users have access to products
  and related data to perform their jobs effectively. To maintain compliance and adherence to
  regulatory standards, user access to products can be controlled. Users can access and discuss only
  products available to them and not restricted for the target customer.

# Product Management

Product Management centers on products, which are essential for business activities within the system. Products are modeled in a hierarchy that can mirror a company's SKU structure and are used in scenarios such as selling to pharmacies and delivering messages and samples to healthcare professionals. Product alignment is key to ensuring that users have access to products and related data to perform their jobs effectively. To maintain compliance and adherence to regulatory standards, user access to products can be controlled. Users can access and discuss only products available to them and not restricted for the target customer.

Life Sciences Marketable Product stores information about all of the products that a Life Science company manufactures, markets, sells, or competes with. This information can include any type of product or product area that is discussed or detailed, including brands, indications, and therapeutic areas. Store additional information about physical products that are sampled, ordered, or distributed as promotional items in the Product2 object.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_product_mgmt_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/product-management.html "HTML (New Window)").

-   **[LifeSciMarketableProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimarketableproduct.htm)**
    Represents information about all products a Life Science company manufactures, markets, sells, or competes with, including brands, indications, and therapeutic areas. It also represents additional information on physical products that are sampled, ordered, or distributed as promotional items. This object is available in API version 65.0 and later.
-   **[LifeSciProductAcctRstrc](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciproductacctrstrc.htm)**
    Represents information about product use limitations for an account. Product restrictions help facilitate compliance with product detailing and sampling regulations and company policies. This object is available in API version 65.0 and later.
-   **[ProductGuidance](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productguidance.htm)**
    Represents information about key product messages, product objectives, or other information that can assist or guide users when working with the product. This object is available in API version 65.0 and later.
-   **[ProductTerritoryAvailability](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productterritoryavailability.htm)**
    Represents information about the products aligned to territories. This object is available in API version 65.0 and later.
-   **[ProductTerrDtlAvailability](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productterrdtlavailability.htm)**
    Represents the details of the products aligned to territories. This object is an extension of the information stored in the Product Territory Availability object and is used for internal purposes. This object is available in API version 65.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Product2](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_product2.htm)

## Related Topics

- LifeSciMarketableProduct (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimarketableproduct.htm)
- LifeSciProductAcctRstrc (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciproductacctrstrc.htm)
- ProductGuidance (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productguidance.htm)
- ProductTerritoryAvailability (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productterritoryavailability.htm)
- ProductTerrDtlAvailability (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productterrdtlavailability.htm)
