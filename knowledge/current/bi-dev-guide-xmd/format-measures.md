---
title: "Format Measures"
domain: bi-dev-guide-xmd
topic: format-measures
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.763Z
estimatedTokens: 1671
keywords: [Measures, apply, letters, symbols, numeric, currency, perform, decimal, rounding, add, grouping, separators, Formatting, Measure, Derived]
---

# Format Measures

> You can apply letters or symbols before or after the numeric value, such as for
    currency, perform decimal rounding, and add grouping and decimal separators.

# Format Measures

You can apply letters or symbols before or after the numeric value, such as for currency, perform decimal rounding, and add grouping and decimal separators.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

#### Note

XMD doesn't update formatting for user input or context-driven fields. Formatting can only be applied to a static or preset value.

## Formatting a Measure

In this example lens, the values in the Sales column don’t include decimals or currency symbols.

![The values table shows the Sales field values without any formatting.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_format_currency_before.png&folder=bi_dev_guide_xmd)

To relabel the Sales field and format its values, modify the XMD as indicated in the bold text.

```

```

The field now has the label “Sales (USD)” and its values include a currency symbol and two decimal places.

![The values table shows the Sales field with the new label and formatted values.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_format_currency_after.png&folder=bi_dev_guide_xmd)

## Formatting a Derived Measure

The following SAQL query contains a derived measure that calculates the average revenue per employee. As shown, the values in this derived field aren’t formatted.

![The values table shows the RevPerEmployee derived field values with no formatting.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_format_derived_measure_query.png&folder=bi_dev_guide_xmd)

To relabel the RevPerEmployee field and format its values, modify the XMD as indicated in the bold text.

```

```

The field now has the label “Revenue Per Employee” and its values include a currency symbol and a grouping separator.

![The values table shows the RevPerEmployee field with the new label and formatted values.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_format_derived_measure_display.png&folder=bi_dev_guide_xmd)

## More Formatting Examples

Check out these examples that illustrate how to use symbols to format measures and derived measures.

| Goal | XMD |
| --- | --- |
| Display 500000 as $500,000(prefix with “$”) | "measures": [                         {                         "description" : "Amount",                         "field" : "Amount",                         "format" : {                         "customFormat": "["$###0",1]"                         },                         "label" : "Amount",                         "showInExplorer" : true                         }                         ], |
| Display 500000 as $500,000(prefix with “$”, include grouping separator) | "derivedMeasures": [                         {                         "description" : "Amount",                         "field" : "Amount",                         "format" : {                         "customFormat": "["$###,#00",1]"                         },                         "label" : "Amount",                         "showInExplorer" : true                         }                         ], |
| Display 500000 as $500,000.00(prefix with “$”, include grouping separator, apply 2 decimal places) | "measures": [                         {                         "description" : "Amount",                         "field" : "Amount",                         "format" : {                         "customFormat": "["$###,#00.00",1]"                         },                         "label" : "Amount",                         "showInExplorer" : true                         }                         ], |
| Display 500000 as –$500,000.00USD(prefix with “–$”, include grouping separator, apply 2 decimal places, suffix with “USD”) | "measures": [                         {                         "description" : "Negative dollar amount",                         "field" : "Amount",                         "format" : {                         "customFormat": "["-$###,#00.00USD",1]"                          },                         "label" : "Amount",                         "showInExplorer" : true                         }                         ], |
| Display Canadian currency code as a suffix(include grouping separator, apply 2 decimal places, suffix with “CAD”) | "measures": [                         {                         "description" : "Amount",                         "field" : "Amount",                         "format" : {                         "customFormat": "["#,##0.00CAD",1]"                         },                         "label" : "Amount",                         "showInExplorer" : true                         }                         ], |
| Display -1,234.56 as –$1,234.56(use a semi-colon delimiter for negatives, pos;neg) | "measures": [                         {                         "description" : "Amount",                         "field" : "Amount",                         "format" : {                         "customFormat": "["$#,###.##;-$#,###.##",1]"                         },                         "label" : "Amount",                         "showInExplorer" : true                         }                         ], |
| Display -1,234.56 as ($1,234.56)(Optional. Use a semi-colon delimiter, parenthesis for negatives, pos;(neg) | "measures": [                         {                         "description" : "Amount",                         "field" : "Amount",                         "format" : {                         "customFormat": "["$#,###.##;($#,###.##)",1]"                         },                         "label" : "Amount",                         "showInExplorer" : true                         }                         ], |
| Display -1,234.56 as $1,234.56-(Optional. Use a semi-colon delimiter, ‘-’ after the second delimiter, pos;neg;zero) | "measures": [                         {                         "description" : "Amount",                         "field" : "Amount",                         "format" : {                         "customFormat": "["$#,###.##;$#,###.##;-",1]"                         },                         "label" : "Amount",                         "showInExplorer" : true                         }                         ], |

For more information about using symbols in the customFormat field, see [Measures and Derived Measures in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm#bi_xmd_reference_measures "You can specify the format and multiplier for each measure. The XMD parameters are the same for measures and derived measures.").

## Code Examples

```
"measures" : [
    {
      "field": "Sales",
      "format": {
        "customFormat": "["$#,###,###.##",1]"
      }, 
      "label": "Sales (USD)",
      "showInExplorer": true
    }
],
```

```
"derivedMeasures": [
  {
    "field": "RevPerEmployee",
    "format": {
      "customFormat": "["$#,###.##",1]"
    },
    "label": "Revenue Per Employee",
    "showInExplorer": true
  }
],
```

```
"measures": [
                        {
                        "description" : "Amount",
                        "field" : "Amount",
                        "format" : {
                        "customFormat": "["$###0",1]"
                        },
                        "label" : "Amount",
                        "showInExplorer" : true
                        }
                        ],
```

```
"derivedMeasures": [
                        {
                        "description" : "Amount",
                        "field" : "Amount",
                        "format" : {
                        "customFormat": "["$###,#00",1]"
                        },
                        "label" : "Amount",
                        "showInExplorer" : true
                        }
                        ],
```

```
"measures": [
                        {
                        "description" : "Amount",
                        "field" : "Amount",
                        "format" : {
                        "customFormat": "["$###,#00.00",1]"
                        },
                        "label" : "Amount",
                        "showInExplorer" : true
                        }
                        ],
```

## Related Topics

- Measures and Derived Measures in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_measures.htm)
