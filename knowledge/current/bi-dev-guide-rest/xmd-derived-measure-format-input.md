---
title: "Xmd Derived Measure Format Input"
domain: bi-dev-guide-rest
topic: xmd-derived-measure-format-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:03.008Z
estimatedTokens: 369
keywords: [Xmd, Derived, Measure, Input, extended, metadata, Analytics, dataset]
---

# Xmd Derived Measure Format Input

> The extended metadata (Xmd) for the format of a derived measure in an Analytics
  dataset.

# Xmd Derived Measure Format Input

The extended metadata (Xmd) for the format of a derived measure in an Analytics dataset.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| custom​Format | String | When customizing the display, you can add a prefix, suffix, grouping separator, decimal separator, and leading and trailing zeros. You can also configure the number of digits. You can include any characters in prefixes and suffixes, including minus signs or currency symbols. You can use the following symbols to specifying a format.0. One digit. Use to add leading or trailing 0s. For example, if you apply custom format #,###.00 to 56375, the result is 56,375.00.#. Adds zero or one digit. Use to show digits when applicable. For example, if you apply custom format #,###.## to 56375.56, the result is 56,375.56..(period). Symbol used as the decimal separator, like in the number 375.56. Analytics currently only supports the decimal symbol (.) as a decimal separator.,(comma). Symbol used as the grouping separator, like in 56,375. Analytics currently only supports the comma symbol (,) as a grouping separator. Example: ["-$#,###.00$",1] | Optional | 38.0 |
| unit​Multiplier | Double | The multiplier for the unit. The multiplier changes a field’s values by the same factor—like multiplying by 100 to convert decimals to percents. The multiplier must be a positive number. | Optional | 36.0 |
