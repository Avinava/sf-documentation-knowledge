---
title: "Analytics Asset Collection Query Input"
domain: bi-dev-guide-rest
topic: analytics-asset-collection-query-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:08.173Z
estimatedTokens: 582
keywords: [Analytics, Asset, Collection, Query, Input, assets]
---

# Analytics Asset Collection Query Input

> The query parameters used to request a collection of Analytics assets.

# Analytics Asset Collection Query Input

The query parameters used to request a collection of Analytics assets.

## Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter​Placeholder​Datasets | Boolean | Indicates whether to filter the assets with placeholder datasets from the collection (true) or not (false). | Optional | 50.0 |
| filters | Map<String, Analytics​Asset​Filter​Input> | A map of filters to apply to the collection query. | Optional | 47.0 |
| include​Subfolders | Boolean | Indicates whether to include the assets in subfolders in the collection (true) or not (false). | Optional | 56.0 |
| limit | Integer | The limit of assets to include in the collection. | Optional | 47.0 |
| mobile​Hidden | Boolean | Indicates whether to exclude mobile assets from the collection (true) or not (false). | Optional | 47.0 |
| next​Page​Token | String | The next page token value for the collection. | Optional | 47.0 |
| offset | Integer | The offset value for the collection. | Optional | 47.0 |
| order | Connect​Wave​Sort​Order​Type​Enum | The type of sort order to be applied to the returned collection. Valid values are:AppCreated​ByCreated​By​IdCreated​DateFolder​NameLast​ModifiedLast​Modified​ByLast​Modified​By​IdLast​Modified​DateLocationMru (Most Recently Used, last viewed date)NameOutcomeOwnerRefresh​Date (for assets like datasets)Run​Date (for assets like reports)StatusTitleType | Optional | 52.0 |
| scope | Connect​Wave​Scope​Type​Enum | The type of scope to be applied to the returned collection. Valid values are:BrowseCreated​By​MeInsights​Applications​Is​Cans​EditMru (Most Recently Used)Shared​With​Me | Optional | 38.0 |
| search​Term | String | The search term to use for assets in the collection. | Optional | 47.0 |
| sortDirection | Connect​Wave​Sort​Order​Enum | The ordering applied to the collection results. Valid values are:AscendingDescending | Optional | 52.0 |
| use​Auto​Suggestions | Boolean | Indicates whether to use automated suggestions to populate the collection (true) or not (false). | Optional | 48.0 |

#### See Also

-   [Analytics Assets Collection Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_analytics_assets.htm "Returns a collection of Analytics assets.")

## Related Topics

- Analytics​Asset​Filter​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_analytics_asset_filter_input.htm)
- Analytics Assets Collection Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_analytics_assets.htm)
