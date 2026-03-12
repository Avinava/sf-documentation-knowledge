---
title: "Multiply Measures by a Fixed Amount"
domain: bi-dev-guide-xmd
topic: multiply-measures-by-a-fixed-amount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.774Z
estimatedTokens: 392
keywords: [Multiply, Measures, Fixed, Amount, measure, derived, multiplier, convert, field’s, decimal, percents]
---

# Multiply Measures by a Fixed Amount

> You can multiply the values of a measure or derived measure by a fixed amount. For
    example, you can use the multiplier to convert a field’s decimal values to percents.

# Multiply Measures by a Fixed Amount

You can multiply the values of a measure or derived measure by a fixed amount. For example, you can use the multiplier to convert a field’s decimal values to percents.

In this example lens, the values in the Discount column are shown as decimal values.

![The values table shows the Discount field values in decimal form.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_multiply_by_amount_before.png&folder=bi_dev_guide_xmd)

To change the decimal value to a percentage, modify the XMD file as shown in this example. Add “%” after the value, and change the field label to "Discount %".

```

```

The Discount column now has the label Discount %, and the values are in percentages.

![The values table shows the Discount field values as a percent.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_multiply_by_amount_after.png&folder=bi_dev_guide_xmd)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

#### Note

If a measure field has a multiplier of “0”, downloading the data to an .xls or .csv file results in all values for that field displaying as “0”. A “0” multiplier has this format: "format":{"customFormat":"\["#,###",0\]}.

#### See Also

-   [Measures and Derived Measures in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm "You can specify the format and multiplier for each measure. The XMD parameters are the same for measures and derived measures.")

## Code Examples

```
{
  “Measures” : [
    {
      "field": "Discount",
      "format": {
        "customFormat": "["##.##%",100]"
      },
      "label": "Discount %",
      "showInExplorer": true
    }
],
```

## Related Topics

- Measures and Derived Measures in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm)
