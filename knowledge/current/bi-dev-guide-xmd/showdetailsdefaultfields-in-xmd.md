---
title: "ShowDetailsDefaultFields in XMD"
domain: bi-dev-guide-xmd
topic: showdetailsdefaultfields-in-xmd
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.810Z
estimatedTokens: 259
keywords: [ShowDetailsDefaultFields, XMD, Specify, appear, Analytics, override, defaults, show]
---

# ShowDetailsDefaultFields in XMD

> Specify the default fields that appear in a Analytics values table. You can
    override the defaults and show other fields when you create a values table.

# ShowDetailsDefaultFields in XMD

Specify the default fields that appear in a Analytics values table. You can override the defaults and show other fields when you create a values table.

The ShowDetailsDefaultFields section doesn’t have children parameters.

| Parameter | Description |
| --- | --- |
| showDetailsDefaultFields | List of fields that display by default in a values table. If not specified, the first five dimensions and first five measures, alphabetically, appear.Example: "showDetailsDefaultFields":["Sales", "Profit", "Customer_Name", "Product_Category", "Product_Sub_Category"] |

#### See Also

-   [Change the Default Fields for a Values Table](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_values_table_set_default_fields.htm "When you create a values table, particular dataset fields are shown by default. When the fields are sorted in alphabetical order, which includes dates, the table shows the first five measures and first five dimensions. You can change the default fields by editing the XMD.")

## Related Topics

- Change the Default Fields for a Values Table (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_values_table_set_default_fields.htm)
