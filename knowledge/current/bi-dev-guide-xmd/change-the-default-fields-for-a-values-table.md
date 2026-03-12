---
title: "Change the Default Fields for a Values Table"
domain: bi-dev-guide-xmd
topic: change-the-default-fields-for-a-values-table
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.816Z
estimatedTokens: 329
keywords: [Change, particular, dataset, shown, sorted, alphabetical, order, includes, dates, five, measures, dimensions, editing, XMD]
---

# Change the Default Fields for a Values Table

> When you create a values table, particular dataset fields are shown by default. When the
    fields are sorted in alphabetical order, which includes dates, the table shows the first five
    measures and first five dimensions. You can change the default fields by editing the
    XMD.

# Change the Default Fields for a Values Table

When you create a values table, particular dataset fields are shown by default. When the fields are sorted in alphabetical order, which includes dates, the table shows the first five measures and first five dimensions. You can change the default fields by editing the XMD.

For example, the explorer shows the following default fields.![The values table shows the first 5 measures and first 5 dimensions, when they are sorted alphabetically.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_values_table_default_fields.png&folder=bi_dev_guide_xmd)

To change the default fields, specify the field names, not the labels, in the XMD.

```

```

After applying the XMD to the dataset, here’s the values table with the default fields.![The values table shows the new, default fields.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_values_table_custom_fields.png&folder=bi_dev_guide_xmd)

#### See Also

-   [ShowDetailsDefaultFields in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_showDetailsDefaultFields.htm "Specify the default fields that appear in a Analytics values table. You can override the defaults and show other fields when you create a values table.")

## Code Examples

```
"showDetailsDefaultFields":[
  "CreatedDate_day_epoch",
  "Id",
  "Type",
  "Name",
  "Owner.Name",
  "Account.Name",
  "Amount"
]
```

## Related Topics

- ShowDetailsDefaultFields in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_showDetailsDefaultFields.htm)
