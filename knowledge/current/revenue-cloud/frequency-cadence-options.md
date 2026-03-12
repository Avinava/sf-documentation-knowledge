---
title: "Frequency Cadence Options"
domain: revenue-cloud
topic: frequency-cadence-options
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.985Z
estimatedTokens: 617
keywords: [Frequency, Cadence, Options, Input, representation, invoice, scheduler]
---

# Frequency Cadence Options

> Input representation of the frequency cadence options for an invoice
    scheduler.

# Frequency Cadence Options

Input representation of the frequency cadence options for an invoice scheduler.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recurring​Sub​Type | String | Subtype of the recurring frequency for the invoice run. Valid values are:Every—Specifies if the invoice scheduler must generate the invoices on a recurring frequency on a specific cadence. Use this value to generate invoices on a specific day of the month. For example, you can specify that the invoice scheduler must generate the invoices every first Monday of the month.SpecificDate—Specifies if the invoice scheduler must generate the invoices on a recurring frequency on a specific date. Use this value to generate invoices on a monthly basis on a specific date. | Required if the frequency​Cadence property is set to Monthly. | 62.0 |
| recurs​On | String | Cadence that specifies when the invoice scheduler must generate the invoices on a recurring frequency. For example, you can specify that the invoice scheduler must generate the invoices every first Monday of the month. Valid values are:FirstSecondThirdFourthLast | Required if the frequency​Cadence property is set to Monthly. | 62.0 |
| recursOn​Date | String | Date when the invoice scheduler must generate the invoices on a specific date. The supported values are:1 through 28—Specify any date from 1 through 28.L—Specifies that the invoice scheduler must generate the invoices on the last day of the month.L-1—Specifies that the invoice scheduler must generate the invoices on the second to last day of the month.L-2—Specifies that the invoice scheduler must generate the invoices on the third to last day of the month. | Required if the recurring​Sub​Type property is set to SpecificDate. | 62.0 |
| recursOn​Day | String | Day of the week when the invoice scheduler must generate the invoices on a recurring frequency. For example, you can specify that the invoice scheduler must generate the invoices every Monday or every first Monday of a month. Valid values are:SundayMondayTuesdayWednesdayThursdayFridaySaturday | Required if the frequency​Cadence property is set to Weekly or Monthly. | 62.0 |
| should​Exclude​Wkend​AndHldy | Boolean | Indicates whether to exclude weekends and holidays from the billing schedule (true) or not (false). | Required if the frequency​Cadence property is set to Monthly. | 62.0 |

## Code Examples

```
"frequencyCadenceOptions": {
        "recurringSubType" : "Every",
        "recursOn" : "First",
        "recursOnDay" : "Sunday",
        "shouldExcludeWkendAndHldy": true
    }
```
