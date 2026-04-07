---
title: "Xmd"
domain: bi-dev-guide-rest
topic: xmd
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:58.150Z
estimatedTokens: 731
keywords: [Xmd, extended, metadata, Analytics, dataset]
---

> The extended metadata (Xmd) for an Analytics dataset version.

# Xmd

The extended metadata (Xmd) for an Analytics dataset version.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| created​By | Wave​User | The user who created the Xmd. | Small, 36.0 | 36.0 |
| created​Date | Date | The time at which the Xmd was created, in ISO8601 date format. | Small, 36.0 | 36.0 |
| dataset | Xmd​Dataset | Locale-specific information about the dataset represented by this Xmd. | Small, 36.0 | 36.0 |
| dates | Xmd​Date[] | A list of dates with formatting information. | Small, 36.0 | 36.0 |
| derived​Dimensions | Xmd​Dimension[] | A list of derived dimensions with formatting information. | Small, 36.0 | 36.0 |
| derived​Measures | Xmd​Measure[] | A list of derived measures with formatting information. | Small, 36.0 | 36.0 |
| dimensions | Xmd​Dimension[] | A list of dimensions with formatting information. | Small, 36.0 | 36.0 |
| error​Message | String | The message if there was error copying forward the current version's user Xmd to the newly created version. | Small, 37.0 | 37.0 |
| language | Connect​Wave​Language​Enum | The language in which this Xmd is localized. Values are:bg: Bulgarianzh_CN: Chinese ​Simplifiedzh_TW: Chinese ​Traditionalhr: Croatiancs: Czechda: Danishnl_NL: Dutchen: Englishen_GB: English ​(United Kingdom)fi: Finnishfr: Frenchde: Germanel: Greekhu: Hungarianin: Indonesianit: Italianja: Japaneseko: Koreanno: Norwegianpl: Polishpt_PT: Portuguese ​(Portugal)pt_BR: Portuguese ​(Brazil)ro: Romanianru: Russiansk: Slovaksl: Slovenianes: Spanishes_MX: Spanish ​(Mexico)sv: Swedishth: Thaitr: Turkishuk: Ukrainianvi: Vietnamese | Small, 36.0 | 36.0 |
| last​Modified​By | Wave​User | The user who last updated the Xmd. | Small, 36.0 | 36.0 |
| last​Modified​Date | Date | The last time the Xmd was modified, in ISO8601 date format. | Small, 36.0 | 36.0 |
| measures | Xmd​Measure[] | A list of measures with formatting information. | Small, 36.0 | 36.0 |
| organizations | Xmd​Organization[] | A list of organizations for multi-organization support. | Small, 36.0 | 36.0 |
| show​Details​Default​Fields | String[] | An ordered list of dimensions and measures. The list defines the default order in which to show the dimensions and measures in the user interface. | Small, 36.0 | 36.0 |
| type | Connect​Wave​Xmd​Type​Enum | The type of Xmd. Values are:assetmainsystemuser | Small, 36.0 | 36.0 |
| url | String | The location where this Xmd is stored. | Small, 36.0 | 36.0 |

#### See Also

-   [Xmd Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_main.htm "Returns the extended metadata (Xmd) for a version of a dataset and updates the user Xmd file.")

-   [Asset Xmd Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_asset.htm "Returns the extended metadata (Xmd) that is associated with an asset, like a dashboard.")

## Related Topics

- Wave​User (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_user.htm)
- Xmd​Dataset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_dataset.htm)
- Xmd​Date (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_date.htm)
- Xmd​Dimension (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_dimension.htm)
- Xmd​Measure (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_measure.htm)
- Xmd​Organization (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_organization.htm)
- Xmd Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_main.htm)
- Asset Xmd Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_asset.htm)
