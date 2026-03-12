---
title: "Xmd Measure Format"
domain: bi-dev-guide-rest
topic: xmd-measure-format
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.895Z
estimatedTokens: 398
keywords: [Xmd, Measure, extended, metadata, Analytics, dataset]
---

# Xmd Measure Format

> The extended metadata (Xmd) for the format of a measure in an Analytics
  dataset.

# Xmd Measure Format

The extended metadata (Xmd) for the format of a measure in an Analytics dataset.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| custom​Format | String | When customizing the display, you can add a prefix, suffix, grouping separator, decimal separator, and leading and trailing zeros. You can also configure the number of digits. You can include any characters in prefixes and suffixes, including minus signs or currency symbols. You can use the following symbols to specifying a format.0. One digit. Use to add leading or trailing 0s. For example, if you apply custom format #,###.00 to 56375, the result is 56,375.00.#. Adds zero or one digit. Use to show digits when applicable. For example, if you apply custom format #,###.## to 56375.56, the result is 56,375.56..(period). Symbol used as the decimal separator, like in the number 375.56. Analytics currently only supports the decimal symbol (.) as a decimal separator.,(comma). Symbol used as the grouping separator, like in 56,375. Analytics currently only supports the comma symbol (,) as a grouping separator. Example: ["-$#,###.00$",1] | Small, 36.0 | 36.0 |
| delimiters | Numeric​Separators | The separators for the thousands and decimal places in the format. | Small, 48.0 | 48.0 |
| unit​Multiplier | Double | The multiplier for the unit. The multiplier changes a field’s values by the same factor—like multiplying by 100 to convert decimals to percents. The multiplier must be a positive number. | Small, 36.0 | 36.0 |

## Related Topics

- Numeric​Separators (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_numeric_separators.htm)
