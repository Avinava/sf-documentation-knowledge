---
title: "Test Custom Integrations"
domain: pkg2-dev
topic: test-custom-integrations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.054Z
estimatedTokens: 745
keywords: [Test, Custom, Integrations, nonproduction, environment, AppExchange, App, Analytics, Simulation, Mode, Submit, query, receive, sample, usage]
---

# Test Custom Integrations

> To test your custom integrations in a nonproduction environment, use AppExchange App
        Analytics Simulation Mode. Submit an App Analytics query request and receive sample usage
        data.

# Test Custom Integrations

To test your custom integrations in a nonproduction environment, use AppExchange App Analytics Simulation Mode. Submit an App Analytics query request and receive sample usage data.


| User Permissions Needed |
| --- |
| To enable simulation mode: | ModifyMetadata |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

AppExchange App Analytics is subject to certain usage restrictions as described in the [AppExchange Program Policies](https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Agreements/alliance-agreements-and-terms/salesforce-partner-program-policies.pdf "HTML (New Window)").

To receive sample usage data, enable simulation mode, then submit a query request that includes a simulation mode package ID.

1.  Enable simulation mode in your test org using the Metadata API [AppAnalyticsSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_appanalyticssettings.htm "HTML (New Window)") enableSimulationMode org preference.
2.  To simulate package usage log, usage summary, or subscriber snapshot downloads, complete the required fields in your SOAP API [AppAnalyticsQueryRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_appanalyticsqueryrequest.htm "HTML (New Window)"). Include DataType, and leave OrganizationIDs blank. For PackageIDs, include at least one simulation mode package ID that matches the scenario you’re testing.

    | Package Dataset | Simulation Mode Package ID | Description |
    | --- | --- | --- |
    | Small Dataset | 033xx00SIMsmall | Contains a small amount of data. For use with all query types. Use this package ID to download data for any query-allowed timespan. |
    | Large Dataset | 033xx00SIMlarge | Contains a large amount of data for two org IDs (00Dxx00SIM00foo and 00Dxx00SIM00bar). For use only with package usage log queries. |
    | Empty Dataset | Use any other 15-character package ID prefixed with 033xx00SIM.Examples:033xx00SIMempty033xx00SIM44444 | Contains no data. For use with all query types. Use one of these package IDs to return an empty dataset. |

3.  Submit your query.
4.  Check your API request.
    1.  If successful, retrieve the App Analytics Query Request object created in the API request. The DownloadURL field populates when the request is completed.
    2.  If you get an error, edit your query. Use a smaller time window, such as a 14 days, or specify one org ID. Then resubmit your query.
5.  Download the comma-separated value (.csv) file containing sample usage data from the DownloadURL field in the App Analytics Query Request object.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg2_dev)

#### Important

When simulation mode is enabled, you can only access our sample usage data. Disable simulation mode to access your production data.
