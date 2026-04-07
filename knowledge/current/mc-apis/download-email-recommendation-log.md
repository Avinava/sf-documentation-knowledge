---
title: "Download Email Recommendation Log"
domain: mc-apis
topic: download-email-recommendation-log
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.083Z
estimatedTokens: 362
keywords: [Download, Email, Recommendation, Log, Marketers, retrieve, report, listing, count, recommendations, product, code, date, range, number, times, recommended, configuration, optionally, job, know, Items]
---

> Marketers can retrieve a report listing the count of email recommendations by product code. For a given date range, this report lists each product code and the number of the times that product was recommended for each email recommendation configuration, and, optionally, job id. To know which job id 

# Download Email Recommendation Log

Marketers can retrieve a report listing the count of email recommendations by product code. For a given date range, this report lists each product code and the number of the times that product was recommended for each email recommendation configuration, and, optionally, job id. To know which job id a recommendation is associated with, the email recommendation image must have a URL parameter named `sfmc_j`. The email job id is the parameter's value.

> Before attempting to run or download the report, turn it on in Personalization Builder.

## Parameters

To download an email recommendation log, you need these values.

| Value | Description |
| --- | --- |
| MID | The account MID that contains the data. |
| api_key | A valid API Key for that MID. |
| start_date | Start date for the report. |
| end_date | End date for the report. |
| aggregation_method | The only option available for this report is day. Personalization Builder rolls up counts per day. |

## Example

```
curl --header 'Content-Type: application/json' -XPOST https://
app.igodigital.com/api/v2/reporting/report/displays_by_item.csv -d '{
"mid": "1314420",
"api_key": "<redacted>",
"aggregation_method": "day",
"start_date": "2017-10-29",
"end_date": "2017-11-29"
}' > report.csv
```

## Related Items

[Enable Tracking for Personalization Builder Report](https://help.salesforce.com/articleView?id=mc_pb_displays_by_item.htm&type=5)
