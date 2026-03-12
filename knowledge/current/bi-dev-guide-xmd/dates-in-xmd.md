---
title: "Dates in XMD"
domain: bi-dev-guide-xmd
topic: dates-in-xmd
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.788Z
estimatedTokens: 516
keywords: [Dates, XMD, Specify, date, conventions, Analytics, dashboards, lenses]
---

# Dates in XMD

> Specify date conventions for Analytics dashboards and lenses.

# Dates in XMD

Specify date conventions for Analytics dashboards and lenses.

```

```

The dates section can have the following parameters.

| Parameter | Description |
| --- | --- |
| alias | Identifier (API name) for the dataset field used to generate the date part fields in the dataset. For example, Order_Date generates Order_Date_Month and Order_Date_Minute. |
| fields | Array of the date part fields, like CloseDate_Day, CloseDate_Year, and CloseDate_Hour. Specify all date parts. If fiscalMonthOffset is set in the dataflow or XMD file for CSV data, you must also specify fiscal date parts, like CloseDate_Week_Fiscal.To specify a date part, use the format <date_field_name>_<date_part>. For example, for the week date part for the CloseDate field, enter CloseDate_Week. |
| firstDayOfWeek | This parameter is deprecated at the dataset level. You can set this property in the sfdcDigest transformation for Salesforce data or in the metadata (schema) file for CSV uploads (using the UI or External Data API). |
| fiscalMonthOffset | This parameter is deprecated at the dataset level. You can set this property in the sfdcDigest transformation for Salesforce data or in the metadata (schema) file for CSV uploads (using the UI or External Data API). |
| label | Display name for the dataset field, up to 40 characters.Example: "label": "Closing Date"NoteIn the dataset XMD file, if the user defines a label for a date field, the label value is used as the alias value for that field when the dataset is generated. |
| showInExplorer | (Boolean) Indicates whether the dataset field can be selected from the dashboard designer or explorer when creating dashboards and lenses. Even if showInExplorer is false, you can still use the field for SAQL queries, manually adding it in JSON, and accessing it using the Analytics REST API.Example: "showInExplorer": true |

For more information about date parts and the first day of the week, see [Date Handling in Datasets](https://help.salesforce.com/articleView?id=bi_integrate_date_generation.htm&language=en_US).

## Code Examples

```
"dates" : [
  {
    "alias" : "Order_Date",
    "label" : "Order Date", 
    "firstDayOfWeek" : -1,
    "fiscalMonthOffset":0,
    "fields" : {
      "day" : "Order_Date_Day",
      "epochDay" : "Order_Date_day_epoch",
      "epochSecond" : "Order_Date_sec_epoch",
      "fullField" : "Order_Date",
      "hour" : "Order_Date_Hour",
      "minute" : "Order_Date_Minute",
      "month" : "Order_Date_Month",
      "quarter" : "Order_Date_Quarter",
      "second" : "Order_Date_Second",
      "week" : "Order_Date_Week",
      "year" : "Order_Date_Year"
    }
  },
  {
    "alias" : "Ship_Date",
    "label" : "Ship Date",
    "firstDayOfWeek" : -1,
    "fiscalMonthOffset":0,
    "fields" : {
      "day" : "Ship_Date_Day",
      "epochDay" : "Ship_Date_day_epoch",
      "epochSecond" : "Ship_Date_sec_epoch",
      "fullField" : "Ship_Date",
      "hour" : "Ship_Date_Hour",
      "minute" : "Ship_Date_Minute",
      "month" : "Ship_Date_Month",
      "quarter" : "Ship_Date_Quarter",
      "second" : "Ship_Date_Second",
      "week" : "Ship_Date_Week",
      "year" : "Ship_Date_Year"
    },
    "showInExplorer" : false
  }
],
```
