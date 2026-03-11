---
title: "Search Configuration Item"
domain: agentforce
topic: search-configuration-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:08:17.805Z
keywords: [Search, Configuration, Item, Request, SearchObject, Properties, FilterCriteria, SortCriteria, Response, Note]
---

# Search Configuration Item

# Search Configuration Item

Perform a paginated search across configuration items with filtering and sorting options. Returns a list of configuration items that match the search criteria.

## Request

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| searchObject | SearchObject | An object containing filter criteria, pagination parameters, and sort options for the search query. | Required | 66.0 |

## SearchObject Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cursor_position | String | A Base64-encoded cursor string used for pagination. Use the next_cursor value from the previous response to fetch the next page of results. | Optional | 66.0 |
| filters | FilterCriteria | An array of filter criteria objects that define the conditions to apply when searching configuration items. | Optional | 66.0 |
| pageSize | Integer | The maximum number of configuration item records to return in each page of results. If not specified, the value defaults to 10 records per page. The maximum value is 20. | Optional | 66.0 |
| sort | SortCriteria | An array of sort criteria objects that specify how to order the search results. | Optional | 66.0 |

## FilterCriteria Properties

Use FilterCriteria to filter search results based on field values.

```

```

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | SearchableField (enumeration of type string) | The field name to use for filtering the search results. Valid values are:id—Unique IDci_type—Configuration Item Typeci_type_developer_name—Configuration Item Type Developer Namecreated_at—Created timeupdated_at—Last modified timeSD_ApNa—Application NameSD_AsId—Asset IDSD_AsNa—Asset NameSD_AwLoBaN—AWS Load Balancer NameSD_CiLo—Configuration Item LocationSD_CiOw—Configuration Item OwnerSD_CiOwGr—Configuration Item Owner GroupSD_Co—CompanySD_DeId—Device ID/Deployment IDSD_DeLo—Device LocationSD_DeMaNa—Device Manufacturer NameSD_DeMoNa—Device Model NameSD_DeNa—Device NameSD_DeSeNu—Device Serial NumberSD_De—DescriptionSD_DnHoNa—DNS Host NameSD_EsNa—ESXi NameSD_GrNa—Group NameSD_HaVe—Hardware VendorSD_HoNa—Host NameSD_ImNu—IMEI NumberSD_InNa—Instance NameSD_InOw—Instance OwnerSD_IpAd—IP AddressSD_LiPrNa—License Product NameSD_Ma—ManufacturerSD_MeMa—Memory ManufacturerSD_MoNu—Model NumberSD_NeHo—Network HostSD_NeInNa—Network Interface NameSD_NoNa—Node NameSD_OpSy—Operating SystemSD_OsTy—OS TypeSD_OsVe—OS VendorSD_PrDnNa—Private DNS NameSD_PrIpAd—Private IP AddressSD_PrNa—Process Name/Processor NameSD_PuDnNa—Public DNS NameSD_PuIpAd—Public IP AddressSD_Re—RegionSD_SeNu—Serial NumberSD_SeIpAd—Server IP AddressSD_SeNa—Server NameSD_SoNa—Software NameSD_WeNa—Website NameSD_WeTi—Website TitleSD_St—StatusSD_OsCl—OS ClassSD_Usu—UsedBy (User)SD_UsuGr—UsedBy (User Group)SD_MaAd—MAC Address | Required | 66.0 |
| operator | FilterOperator (enumeration of type string) | The comparison operator to use for filtering. Valid values are:CONTAINS—Matches if the field contains the specified value. Use with exactly one value in the values array.ENDS_WITH—Matches if the field value ends with the specified value. Use with exactly one value in the values array.EQUALS—Matches a single exact value. Use with exactly one value in the values array.GREATER_THAN—Matches if the field value is greater than the specified value. Use with exactly one value in the values array.GREATER_THAN_OR_EQUAL—Matches if the field value is greater than or equal to the specified value. Use with exactly one value in the values array.IN—Matches any value in a list. Use with multiple values in the values array.IS_BETWEEN—Matches if the field value is between two specified values (inclusive). Use with exactly two values in the values array.IS_EMPTY—Matches if the field is empty or null. The values array should be empty or omitted.LESS_THAN—Matches if the field value is less than the specified value. Use with exactly one value in the values array.LESS_THAN_OR_EQUAL—Matches if the field value is less than or equal to the specified value. Use with exactly one value in the values array.NOT_BETWEEN—Matches if the field value is not between two specified values (inclusive). Use with exactly two values in the values array.NOT_CONTAINS—Matches if the field does not contain the specified value. Use with exactly one value in the values array.NOT_EMPTY—Matches if the field is not empty or null. The values array should be empty or omitted.NOT_EQUALS—Does not match a single exact value. Use with exactly one value in the values array.NOT_IN—Does not match any value in a list. Use with multiple values in the values array.STARTS_WITH—Matches if the field value starts with the specified value. Use with exactly one value in the values array. | Required | 66.0 |
| values | Array of String | An array of values to match against the specified field. For EQUALS provide exactly one value. For IN provide one or more values. | Required | 66.0 |

## SortCriteria

Use SortCriteria to specify how search results should be ordered.

```

```

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sortKey | sortFields (enumeration of type string) | The field name to use for sorting the search results. Valid values are:id—Unique IDci_type—Configuration Item Typecreated_at—Created timeupdated_at—Last modified timeci_type_developer_name—Configuration Item Type Developer NameSD_ApNa—Application NameSD_AsId—Asset IDSD_AsNa—Asset NameSD_AwLoBaN—AWS Load Balancer NameSD_CiLo—Configuration Item LocationSD_CiOw—Configuration Item OwnerSD_CiOwGr—Configuration Item Owner GroupSD_Co—CompanySD_DeId—Device ID/Deployment IDSD_DeLo—Device LocationSD_DeMaNa—Device Manufacturer NameSD_DeMoNa—Device Model NameSD_DeNa—Device NameSD_DeSeNu—Device Serial NumberSD_De—DescriptionSD_DnHoNa—DNS Host NameSD_EsNa—ESXi NameSD_GrNa—Group NameSD_HaVe—Hardware VendorSD_HoNa—Host NameSD_ImNu—IMEI NumberSD_InNa—Instance NameSD_InOw—Instance OwnerSD_IpAd—IP AddressSD_LiPrNa—License Product NameSD_Ma—ManufacturerSD_MeMa—Memory ManufacturerSD_MoNu—Model NumberSD_NeHo—Network HostSD_NeInNa—Network Interface NameSD_NoNa—Node NameSD_OpSy—Operating SystemSD_OsTy—OS TypeSD_OsVe—OS VendorSD_PrDnNa—Private DNS NameSD_PrIpAd—Private IP AddressSD_PrNa—Process Name/Processor NameSD_PuDnNa—Public DNS NameSD_PuIpAd—Public IP AddressSD_Re—RegionSD_SeNu—Serial NumberSD_SeIpAd—Server IP AddressSD_SeNa—Server NameSD_SoNa—Software NameSD_WeNa—Website NameSD_WeTi—Website TitleSD_St—StatusSD_OsCl—OS ClassSD_Usu—UsedBy (User)SD_UsuGr—UsedBy (User Group)SD_MaAd—MAC Address | Required | 66.0 |
| sortOrder | SortOrder (enumeration of type string) | The sort direction for the results. Valid values are:ASC—AscendingDESC—Descending | Required | 66.0 |

## Response

JSON example

This example is a sample response from the searchCI query.

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| totalCount | Integer | The total number of configuration item records that match the search criteria across all pages, regardless of pagination. | 66.0 |
| hasMoreRecords | Boolean | Indicates whether additional pages of results are available. Returns true if there are more records beyond the current page, false if this is the last page. | 66.0 |
| data | [CI] | An array of configuration item objects returned for the current page of results. Each object contains the fields requested in the query for matching configuration items. | 66.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=agentforce_it_service_dev_guide)

#### Note

When using the searchCI operation, you can request any available attribute to be included in the response. The attributes you can include:

-   Standard Attributes: Many attributes are available out-of-the-box.
-   Custom Attributes: You can create and include custom attributes using the sObject API.

Add any attribute using its Developer Name (for example, SD\_AsNa—Asset Name) to specify exactly which information you want to receive for your Configuration Items (CIs).