---
title: "Change the Label for the Row Count Measure"
domain: bi-dev-guide-xmd
topic: change-the-label-for-the-row-count-measure
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.750Z
estimatedTokens: 270
keywords: [Change, Label, Row, Count, Measure, add, appears, “Count, Rows”, whatever, want]
---

# Change the Label for the Row Count Measure

> When you add a row count measure, it appears as “Count of Rows” by default. You can
  change this label to whatever you want.

# Change the Label for the Row Count Measure

When you add a row count measure, it appears as “Count of Rows” by default. You can change this label to whatever you want.

Here’s the default label.

![The default label for a count measure is "Count of Rows."](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_count_rows_default_label.png&folder=bi_dev_guide_xmd)

You can specify a new label in the derivedMeasures section of the XMD. Because you’re counting rows and not a particular field, use \* as the field name.

```

```

This change yields the following results.

![The new label for a count measure is Count of Data Points.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_count_rows_custom_label.png&folder=bi_dev_guide_xmd)

#### See Also

-   [Measures and Derived Measures in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm "You can specify the format and multiplier for each measure. The XMD parameters are the same for measures and derived measures.")

## Code Examples

```
"derivedMeasures": [{
  "field": "*",
  "label": "Data Points"
}],
```

## Related Topics

- Measures and Derived Measures in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm)
