---
title: "Xmd Input"
domain: bi-dev-guide-rest
topic: xmd-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:03.027Z
estimatedTokens: 346
keywords: [Xmd, Input, extended, metadata, Analytics, dataset, version]
---

# Xmd Input

> The extended metadata (Xmd) for an Analytics dataset version.

# Xmd Input

The extended metadata (Xmd) for an Analytics dataset version.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataset | Xmd​Dataset​Input | Locale-specific information about the Dataset represented by this Xmd. | Optional | 36.0 |
| dates | Xmd​Date​Input[] | A list of dates with formatting information. | Optional | 36.0 |
| derived​Dimensions | Xmd​Derived​Dimension​Input[] | A list of derived dimensions with formatting information. | Optional | 36.0 |
| derived​Measures | Xmd​Derived​Measure​Input[] | A list of derived measures with formatting information. | Optional | 36.0 |
| dimensions | Xmd​Dimension​Input[] | A list of dimensions with formatting information. | Optional | 36.0 |
| measures | Xmd​Measure​Input[] | A list of measures with formatting information. | Optional | 36.0 |
| organizations | Xmd​Organization​Input[] | A list of organizations for multi-organization support. | Optional | 36.0 |
| show​Details​Default​Fields | String[] | An ordered list of dimensions and measures. Represents the default order to show them in the UI. | Optional | 36.0 |

#### See Also

-   [Xmd Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_main.htm "Returns the extended metadata (Xmd) for a version of a dataset and updates the user Xmd file.")

## Related Topics

- Xmd​Dataset​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dataset_input.htm)
- Xmd​Date​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_date_input.htm)
- Xmd​Derived​Dimension​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_dimension_input.htm)
- Xmd​Derived​Measure​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_measure_input.htm)
- Xmd​Dimension​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dimension_input.htm)
- Xmd​Measure​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_measure_input.htm)
- Xmd​Organization​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_organization_input.htm)
- Xmd Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_main.htm)
