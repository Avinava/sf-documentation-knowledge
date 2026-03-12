---
title: "Commerce: Location Group Product Exclusion Change Mapping"
domain: data-cloud
topic: commerce-location-group-product-exclusion-change-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.302Z
estimatedTokens: 332
keywords: [Commerce, Location, Group, Product, Exclusion, Change, Mapping, Omnichannel, Inventory, connector, Data, Cloud, automatically, maps, source]
---

# Commerce: Location Group Product Exclusion Change Mapping

> The Omnichannel Inventory connector for Data Cloud automatically maps the data source
  objects to the data model objects (DMO) and establishes DMO relationships. The Location Group
  Product Exclusion Change object represents a change to the Location Group Product Exclusion
  list.

# Commerce: Location Group Product Exclusion Change Mapping

The Omnichannel Inventory connector for Data Cloud automatically maps the data source objects to the data model objects (DMO) and establishes DMO relationships. The Location Group Product Exclusion Change object represents a change to the Location Group Product Exclusion list.

## Usage and Data Bundle

These mappings are used to power Commerce Intelligence visualizations of inventory performance metrics.

Bundle:

-   Salesforce CDP Salesforce Commerce

## DLO to DMO Mapping

These data mappings relate to the Location Group Product Exclusion Change object used with the Omnichannel Inventory connector.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Location_Grp_Product Exclusion_Change_IdCONCAT(Group, SKU, Location, Last_Modified_Date) | text | Location Group Product Exclusion Change | Id |
| SKU | text | Location Group Product Exclusion Change | SKUNumber |
| Last_Modified_Date | dateTime | Location Group Product Exclusion Change | ChangeDateTime |
| Is_Deleted | boolean | Location Group Product Exclusion Change | IsDeleted |
| Group | text | Location Group Product Exclusion Change | ExternalLocationGroupIdentifier |
| Location | text | Location Group Product Exclusion Change | ExternalLocationIdentifier |
