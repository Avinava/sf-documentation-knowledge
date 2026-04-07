---
title: "Lens Input"
domain: bi-dev-guide-rest
topic: lens-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:08.432Z
estimatedTokens: 511
keywords: [Lens, Input, Analytics]
---

# Lens Input

> An Analytics lens.

# Lens Input

An Analytics lens.

## Properties

Lens Input inherits properties from the abstract [Base Asset Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_reference_input.htm "The base Analytics asset."). These base properties appear in Lens Input alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| datasets | Asset​Reference​Input[] | The list of datasets used to create this lens. | Required for POST, optional for PATCH | 43.0 |
| folder | Asset​Reference​Input | The folder in which this lens is stored. | Required for POST, optional for PATCH | 36.0 |
| history​label | String | The history label of the lens version being saved. | Optional | 46.0 |
| state | Lens​State​Input | The state of the lens. | Required for POST, optional for PATCH | 36.0 |
| visibility | Connect​Wave​Asset​Visibility​Type | Indicates whether the asset is hidden from users with view access or not. Valid values are:All (Show all assets)Limited (Hide assets from viewers with view access) | Optional | 51.0 |
| visualization​Type | Connect​Wave​Visualization​Type​Enum | The visualization type of the lens. Valid values are:BulletCalendar​Heat​MapComboComparison​TableFlatgaugeGaugeHeat​MapHorizontal​BarHorizontal​DotLineMatrixParallel​CoordinatesPiePivot​TablePolargaugePyramidRatingScatterStack​WaterfallStacked​Horizontal​BarStacked​Vertical​BarTimeTime​BarTime​ComboValues​TableVertical​BarVertical​DotWaterfall | Required for POST, optional for PATCH | 36.0 |
| xmd | Xmd​Input | The asset XMD of the lens. | Optional | 43.0 |

#### See Also

-   [Lenses List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses.htm "Returns a list of Analytics lenses or creates a lens.")

-   [Lens Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id.htm "Returns, deletes, or updates the lens with the specified ID or API name.")

## Related Topics

- Base Asset Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_reference_input.htm)
- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
- Lens​State​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_lens_state_input.htm)
- Xmd​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_input.htm)
- Lenses List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses.htm)
- Lens Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id.htm)
