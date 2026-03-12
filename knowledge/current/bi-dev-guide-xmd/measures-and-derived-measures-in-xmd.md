---
title: "Measures and Derived Measures in XMD"
domain: bi-dev-guide-xmd
topic: measures-and-derived-measures-in-xmd
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.803Z
estimatedTokens: 1117
keywords: [Measures, Derived, XMD, specify, multiplier, measure]
---

# Measures and Derived Measures in XMD

> You can specify the format and multiplier for each measure. The XMD parameters are the
    same for measures and derived measures.

# Measures and Derived Measures in XMD

You can specify the format and multiplier for each measure. The XMD parameters are the same for measures and derived measures.

This XMD snippet shows the parameters used with the measures XMD parameter.

```

```

The measures and derived measures sections can have the following parameters.

| Parameter | Description |
| --- | --- |
| customFormat | Specifies the format and multiplier of the measure or derived measure."customFormat": "[format,multiplier]"formatFormat of the measure or derived measure. You can add a prefix, suffix, grouping separator, decimal separator, and leading and trailing zeros. You can also configure the number of digits. You can include any characters in prefixes and suffixes, such as minus signs or currency symbols.Use the following symbols to specify the format.0One digit. Use to add leading or trailing 0s. For example, when you apply the custom format #,###.00 to 56375, the result is 56,375.00.#Adds zero or one digit. Use to show digits when applicable. For example, when you apply the custom format #,###.## to 56375.56, the result is 56,375.56..Decimal separator, like in the number 375.56. The default separator is the decimal symbol (.) A custom separator can be defined in delimiters using the decimal attribute. The custom separator replaces the (.) for the final formatted result.,Grouping separator, like in 56,375. The default separator is the comma symbol (,). A custom separator can be defined in delimiters using the thousands attribute. The custom separator replaces the (,) for the final formatted result.Example: "customFormat": "["-$#,###.00$",1]"multiplierChanges a field’s values by the same factor—like multiplying by 100 to convert decimals to percents. The multiplier must be a positive number.Example: "customFormat": "["#,###",100]"For more examples, see Format Dataset Fields and Field Values with XMD. |
| delimiters | Allows custom delimiters to be specified for the decimal separator (.) and the thousands separator (,). Custom delimiters will replace the default delimiter values for the final formatted result. Custom delimiters are not honored in CSV downloads.Example: "delimiters": {"thousands": ".", "decimal": ","} |
| description | Description of the dataset field, no more than 1,000 characters.Example: "description": “Total value for the opportunity." |
| field | Identifier for the dataset field, which is the API name. |
| format | Contains the customFormat and the delimiters parameters used to format the measure . |
| label | Display name for the dataset field, up to 40 characters.Example: "label": "Sales Amount" |
| showInExplorer | (Boolean) Indicates whether the dataset field can be selected from the dashboard designer or explorer when creating dashboards and lenses. Even if showInExplorer is false, you can still use the field for SAQL queries, manually adding it in JSON, and accessing it using the Analytics REST API.Example: "showInExplorer": true |

#### See Also

-   [Change Display Labels for Dataset Fields and Values](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_change_labels.htm "When you change display labels for fields and values, the changes affect only the appearance in the UI. The changes don’t alter the underlying data stored in the dataset or the API names of the fields.")

-   [Change the Label for the Row Count Measure](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_change_count_measure.htm "When you add a row count measure, it appears as “Count of Rows” by default. You can change this label to whatever you want.")

-   [Hide Dataset Fields from the Explorer and Dashboard Designer](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_show_dataset_fields.htm "By default, all dataset fields are available in the UI. But you can hide fields so that users can’t select them when building queries and dashboards.")

-   [Multiply Measures by a Fixed Amount](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_multiply_by_fixed_amount.htm "You can multiply the values of a measure or derived measure by a fixed amount. For example, you can use the multiplier to convert a field’s decimal values to percents.")

-   [Format Measures](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_format_currency.htm "You can apply letters or symbols before or after the numeric value, such as for currency, perform decimal rounding, and add grouping and decimal separators.")

## Code Examples

```
"measures": [
  {
    "description" : "Amount",
    "field" : "Amount",
    "format" : {
      "customFormat": "["$###0",1]",
        "delimiters”: "{}"
    },
    "label" : "Amount",
    "showInExplorer" : true
  }
],
```

## Related Topics

- Format Dataset Fields and Field Values with XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_formatting_dataset_fields_and_values.htm)
- Change Display Labels for Dataset Fields and Values (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_change_labels.htm)
- Change the Label for the Row Count Measure (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_change_count_measure.htm)
- Hide Dataset Fields from the Explorer and Dashboard Designer (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_show_dataset_fields.htm)
- Multiply Measures by a Fixed Amount (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_multiply_by_fixed_amount.htm)
- Format Measures (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_format_currency.htm)
