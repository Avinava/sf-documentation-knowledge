---
title: "Commerce: Location Group Product Inventory Change Mapping"
domain: data-cloud
topic: commerce-location-group-product-inventory-change-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.309Z
estimatedTokens: 472
keywords: [Commerce, Location, Group, Product, Inventory, Change, Mapping, Omnichannel, connector, Data, Cloud, automatically, maps, source, objects]
---

# Commerce: Location Group Product Inventory Change Mapping

> The Omnichannel Inventory connector for Data Cloud automatically maps the data source
  objects to the data model objects (DMO) and establishes DMO relationships. The Location Group
  Product Inventory Change object represents a change to product inventory at a location
  group.

# Commerce: Location Group Product Inventory Change Mapping

The Omnichannel Inventory connector for Data Cloud automatically maps the data source objects to the data model objects (DMO) and establishes DMO relationships. The Location Group Product Inventory Change object represents a change to product inventory at a location group.

## Usage and Data Bundle

These mappings are used to power Commerce Intelligence visualizations of inventory performance metrics.

Bundle:

-   Salesforce CDP Salesforce Commerce

## DLO to DMO Mapping

These data mappings relate to the Location Group Product Inventory Change object used with the Omnichannel Inventory connector.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Location_Grp_Product Inventory_Change_IdCONCAT(Group, SKU, Last_Modified_Date) | text | Location Group Product Inventory Change | Id |
| Available_to_Fulfill | number | Location Group Product Inventory Change | AvailableToFulfillQuantity |
| Availalbe_to_Order | number | Location Group Product Inventory Change | AvailableToOrderQuantity |
| On_Hand | number | Location Group Product Inventory Change | OnHandQuantity |
| SKU | text | Location Group Product Inventory Change | SKUNumber |
| Last_Modified_Date | dateTime | Location Group Product Inventory Change | ChangeDateTime |
| Group | text | Location Group Product Inventory Change | ExternalLocationGroupIdentifier |
| Is_Deleted | boolean | Location Group Product Inventory Change | IsDeleted |
| Soft_Reserved | number | Location Group Product Inventory Change | GroupReservedQuantity |
| Reserved | number | Location Group Product Inventory Change | ReservedQuantity |
| Shared_Soft_Reserved | number | Location Group Product Inventory Change | SharedGroupReservedQuantity |
| Safety_Stock_Count | number | Location Group Product Inventory Change | SafetyStockQuantity |
