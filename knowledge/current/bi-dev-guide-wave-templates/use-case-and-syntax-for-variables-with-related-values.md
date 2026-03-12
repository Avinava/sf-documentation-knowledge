---
title: "Use Case and Syntax for Variables with Related Values"
domain: bi-dev-guide-wave-templates
topic: use-case-and-syntax-for-variables-with-related-values
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.708Z
estimatedTokens: 451
keywords: [Case, Variables, Construct, dataset, dates, dimensions, measures, Variable]
---

# Use Case and Syntax for Variables with Related Values

> Construct variables that reference related values, for example an object and fields from
    the object, and a dataset and dates, dimensions, and measures from the dataset.

# Use Case and Syntax for Variables with Related Values

Construct variables that reference related values, for example an object and fields from the object, and a dataset and dates, dimensions, and measures from the dataset.

For example, the first question on a wizard page asks the user to select an object (sObjectType variable). The next questions can ask the user to select fields (sObjectFields variable) from that object. The wizard populates the questions about fields with sObjectFields from the sObject selected in the first question. The following image shows an sObject picker first, followed by an sObjectField picker.

![This diagram depicts the sObject and sObjectField pickers.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_sobject_sobjectfield.png&folder=bi_dev_guide_wave_templates)

You can take the same approach with datasets and dataset dates, measures, and dimensions. The first question references a dataset (datasetType variable). Subsequent questions reference dates (datasetDateType), dimensions (datasetDimensionType), and measures (datasetMeasureType) from the dataset selected in the first question.

Following is template JSON used to render the UI shown in the image, using sObject and sObjectFields variables. In the variables section, notice CSATField variable's type info: the defaultValue contains a reference to the variable's value CSATObj and the syntax is {{Variables.CSATObj.sobjectName}}. The intention here’s to replace {{Variables.CSATObj.sobjectName}} with the value that the user picked for the variable CSATObj.

The ui.json file for the template, shown at the top of the example, orders the wizard questions defined in variables.json.

```

```

## Variable Value Reference Syntax

```

```

## Code Examples

```
{
  "ui" : {
    "pages" : [
      {
        "title ": "Page1",
        "variables" : [
          {
            "name" : "CSATObj"
          },
          {
            "name" : "CSATField"
          }
        ]
      }
    ]
  },
  "variables" : {
    "CSATObj" : {
      "description" : "Service Analytics defaults to the Case object. If you use a different object to track CSAT, select it from the list below",
      "label" : "1. What object do you use to track customer satisfaction?",
      "required" : true,
      "variableType" : {
        "type" : "SObjectType"
      },
      "defaultValue" : {
        "sobjectName" : "Case"
      }
    },
    "CSATField" : {
      "description" : "Service Analytics uses your choice to provide a single numerical score to indicate customer satisfaction rating.",
      "label" : "2. Which field on the object you just selected do you use to track CSAT?",
      "defaultValue" : {
        "datasetId" : "{{Variables.CSATObj.sobjectName}}",
        "fieldName" : ""
      },
      "required" : true,
      "excludeSelected" : true,
      "variableType" : {
        "type" : "SobjectFieldType",
        "datatype" : "xsd:double"
      }
    }
  }
}
```

```
"${Variables.Dataset1.datasetId}
${Variables.<SObjectVariableName>.sobjectName}"
```
