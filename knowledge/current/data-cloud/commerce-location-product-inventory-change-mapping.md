---
title: "Commerce: Location Product Inventory Change Mapping"
domain: data-cloud
topic: commerce-location-product-inventory-change-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.602Z
estimatedTokens: 422
keywords: [Commerce, Location, Product, Inventory, Change, Mapping, Omnichannel, connector, Data, Cloud, automatically, maps, data, source, objects, model, DMO, establishes, relationships., represents]
---

# Commerce: Location Product Inventory Change Mapping

> The Omnichannel Inventory connector for Data Cloud automatically maps the data source
  objects to the data model objects (DMO) and establishes DMO relationships. The Location Product
  Inventory Change object represents a change to product inventory at a location.

# Commerce: Location Product Inventory Change Mapping

The Omnichannel Inventory connector for Data Cloud automatically maps the data source objects to the data model objects (DMO) and establishes DMO relationships. The Location Product Inventory Change object represents a change to product inventory at a location.

## Usage and Data Bundle

These mappings are used to power Commerce Intelligence visualizations of inventory performance metrics.

Bundle:

-   Salesforce CDP Salesforce Commerce

## DLO to DMO Mapping

These data mappings relate to the Location Product Inventory Change object used with the Omnichannel Inventory connector.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Location_Product_Inventory_Change_IdCONCAT(Location, SKU, Last_Modified_Date) | text | Location Product Inventory Change | Id |
| Available_to_Fulfill | number | Location Product Inventory Change | AvailableToFulfillQuantity |
| Available_to_Order | number | Location Product Inventory Change | AvailableToOrderQuantity |
| Effective_Date | dateTime | Location Product Inventory Change | EffectiveDateTime |
| On_Hand | number | Location Product Inventory Change | OnHandQuantity |
| SKU | text | Location Product Inventory Change | SKUNumber |
| Last_Modified_Date | dateTime | Location Product Inventory Change | ChangeDateTime |
| Location | text | Location Product Inventory Change | ExternalLocationIdentifier |
| Is_Deleted | boolean | Location Product Inventory Change | IsDeleted |
| Reserved | number | Location Product Inventory Change | ReservedQuantity |
| Safety_Stock_Count | number | Location Product Inventory Change | SafetyStockQuantity |
