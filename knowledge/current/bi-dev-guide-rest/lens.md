---
title: "Lens"
domain: bi-dev-guide-rest
topic: lens
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.356Z
estimatedTokens: 628
keywords: [Lens, Analytics, lenses]
---

# Lens

> Am Analytics lenses.

# Lens

Am Analytics lenses.

## Properties

Lens inherits properties from the abstract [Base Templated Asset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_templated_asset.htm "A base Analytics asset created from a template."). These base properties appear in Lens alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| allow​Preview | Boolean | Indicates whether the user is allowed to preview the lens. | Small, 36.0 | 36.0 |
| dataset | Asset​Reference | DEPRECATED A reference to the dataset used to create this lens. | Small, 36.0 | 36.0-42.0 |
| datasets | Asset​Reference[] | A list of the datasets that the lens uses. | Small, 43.0 | 43.0 |
| date​Version | Integer | The version of dates used by the lens. Valid values are:12 | Small, 44.0 | 44.0 |
| files | Lens​File[] | The list of the lens files. | Medium, 36.0 | 36.0 |
| files​Url | String | The URL to the lens files. | Small, 36.0 | 36.0 |
| folder | Asset​Reference | A reference to the folder in which this lens is stored. | Small, 36.0 | 36.0 |
| histories​Url | String | The URL for the lens histories associated with this lens. | Small, 44.0 | 44.0 |
| refresh​Date | Date | The date of the most recent current dataset that is used by the lens, in ISO8601 date format. | Small, 36.0 | 36.0 |
| state | Lens​State | The state of the lens. | Big, 36.0 | 36.0 |
| visibility | Connect​Wave​Asset​Visibility​Type | Indicates whether the asset is hidden from users with view access or not. Valid values are:All (Show all assets)Limited (Hide assets from viewers with view access) | Small, 51.0 | 51.0 |
| visualization​Type | String | The visualization type used for this lens. Valid values are: Valid values are:BulletCalendar​Heat​MapComboComparison​TableFlatgaugeGaugeHeat​MapHorizontal​BarHorizontal​DotLineMatrixParallel​CoordinatesPiePivot​TablePolargaugePyramidRatingScatterStack​WaterfallStacked​Horizontal​BarStacked​Vertical​BarTimeTime​BarTime​ComboValues​TableVertical​BarVertical​DotWaterfall | Small, 36.0 | 36.0 |

#### See Also

-   [Lenses List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses.htm "Returns a list of Analytics lenses or creates a lens.")

-   [Lens Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id.htm "Returns, deletes, or updates the lens with the specified ID or API name.")

## Related Topics

- Base Templated Asset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_templated_asset.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Lens​File (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_file.htm)
- Lens​State (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_state.htm)
- Lenses List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses.htm)
- Lens Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id.htm)
