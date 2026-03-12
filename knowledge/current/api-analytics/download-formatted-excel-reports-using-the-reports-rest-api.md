---
title: "Download Formatted Excel Reports Using the Reports REST API"
domain: api-analytics
topic: download-formatted-excel-reports-using-the-reports-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.761Z
estimatedTokens: 322
keywords: [Download, Formatted, Excel, Reports, REST, API, printer-friendly, Output]
---

# Download Formatted Excel Reports Using the Reports REST API

> You can use the Reports REST API to request reports in printer-friendly Excel format.

# Download Formatted Excel Reports Using the Reports REST API

You can use the Reports REST API to request reports in printer-friendly Excel format.

To execute a report and obtain the results, the Salesforce Lightning Report Builder issues a REST request to the Analytics API. The API is a POST to the endpoint /services/data/vXX.x/analytics/reports/<reportId>.

After the report is created, use a GET request to obtain the results. By default, results are returned in JSON format, which the Report Run page renders. This format is specified in the Accept header information.

## Request Excel Output

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_analytics)

#### Note

This endpoint isn’t designed for concurrent export of large formatted reports. To avoid impact on overall system load, don’t run more than one large report export at a time.

To request Excel instead of JSON format, change the Accept value in the request header to application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.

Now when you execute a GET request, the Excel file is created. The raw response includes the Excel filename, as shown in bold in the following example. You can add code to your application to download the file from the response stream.

```

```

## Code Examples

```apex
Raw Response
HTTP/1.1 200 OK
Date: Wed, 06 Jun 2018 17:23:58 GMT
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Content-Security-Policy: upgrade-insecure-requests 
Cache-Control: no-cache,must-revalidate,max-age=0,no-store,private
Set-Cookie: BrowserId=YJXhUq42SRyZ3hhgDPFxog;Path=/;Domain=.salesforce.com;Expires=Sun, 05-Aug-2018 17:23:58 GMT;Max-Age=5184000
Expires: Thu, 01 Jan 1970 00:00:00 GMT
Sforce-Limit-Info: api-usage=4/15000
Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
Content-Disposition: attachment; filename="New Opportunities Report-2018-05-06-10-23-59.xlsx"
Transfer-Encoding: chunked
```
