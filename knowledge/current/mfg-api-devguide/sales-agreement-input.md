---
title: "Sales Agreement Input"
domain: mfg-api-devguide
topic: sales-agreement-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.947Z
estimatedTokens: 189
keywords: [Sales, Agreement, Input, representation, convert, source]
---

# Sales Agreement Input

> Input representation to convert a source object to a sales
            agreement.

# Sales Agreement Input

Input representation to convert a source object to a sales agreement.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| salesAgreement​​​DefaultValues | Sales Agreement Default​​ Fields Input[] | Default field values for the SalesAgreement and SalesAgreementProduct entities that aren’t defined in the mapping definition.NoteYou can remove a mapping field from the definition by providing the output field value as blank for SalesAgreement or SalesAgreementProduct. | Optional | 51.0 |
| sourceObjectId | String | ID of the source object containing the mapping definition used to create the sales agreement record. | Required | 51.0 |

## Code Examples

```
{
  "sourceObjectId": "0kFT1000000000RMAQ",
  "salesAgreementDefaultValues": {
      "salesAgreement": {
          "StartDate": "2020-01-01",
          "ScheduleFrequency": "Monthly",
          "ScheduleCount": "10"
      },
      "salesAgreementProduct": {
          "PricebookEntry": "01uxx00000091jOAAQ",
          "Name": "test-sap1",
          "InitialPlannedQuantity":"1"
      }
  }
}
```

## Related Topics

- Sales Agreement Default​​ Fields
                                                Input (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_requests_sales_agreement_default_fields_input.htm)
