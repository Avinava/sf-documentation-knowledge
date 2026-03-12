---
title: "Store and Query Log Data with Event Log Objects"
domain: securityImplGuide
topic: store-and-query-log-data-with-event-log-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.889Z
estimatedTokens: 3104
keywords: [Store, Query, Log, Data, Event, Objects, framework, surfaces, stored, standard, They, critical, via, Salesforce, Platform]
---

# Store and Query Log Data with Event Log Objects

> The Event Log Object framework surfaces event data stored in standard objects called
                Event Log Objects. They store critical event data that you can query via Salesforce
                Platform APIs. Event log objects contain many but not all events currently
                represented in the Event Log File framework. Unlike Event Log Files, which surface
                event data as CSV files, Event Log Objects allow querying of similar data via
                SOQL.

# Store and Query Log Data with Event Log Objects

The Event Log Object framework surfaces event data stored in standard objects called Event Log Objects. They store critical event data that you can query via Salesforce Platform APIs. Event log objects contain many but not all events currently represented in the Event Log File framework. Unlike Event Log Files, which surface event data as CSV files, Event Log Objects allow querying of similar data via SOQL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

As of Spring 25’, the Event Log Object framework only supports SOQL queries.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

#### Important

This feature is only available to Hyperforce customers. Log data is retained for up to 30 days.

| Available in: Salesforce Classic (not available in all orgs), and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |

| User Permissions Needed |
| --- |
| To query and view event log object data: | View Event Log Object Data |

Event Log Object data is available with minimal delay, enabling earlier detection of security and performance incidents. Write advanced SOQL queries to filter or aggregate log data. Event Log Objects are also available to analyze in CRM Analytics using Salesforce Direct, so you can visualize data in a variety of chart types. Because you can access Event Log Objects via Salesforce Platform APIs, you can build custom applications in the Lightning UI for event specific use cases.

Enable Event Log Objects through the Event Manager tab in Setup:

1.  From Setup, in the Quick Find Box, enter Permission, and select **Permission Sets**.
2.  Select **View Event Log Object Data** to access all Event Log Objects. You can alternatively select **Event Monitoring User** to gain access to all of your Event Monitoring data.

## Example

Sample Queries by Use Case

-   Security Query: Which users are exporting the most rows via reports?

    SELECT UserIdentifier, SUM(RowCount) FROM ReportEventLog WHERE Origin='ReportExported' AND DAY\_ONLY(Timestamp) > LAST\_N\_DAYS:10 Group By UserIdentifier Order by SUM(RowCount) DESC

-   APM Query: What is the number of unexpected apex exceptions grouped by Exception Category?

    SELECT ExceptionCategory, COUNT(Timestamp) FROM ApexUnexpectedExcpEventLog WHERE DAY\_ONLY(Timestamp) > LAST\_N\_DAYS:10 GROUP BY ExceptionCategory ORDER BY COUNT(Timestamp) DESC

-   Product Intelligence Query: What are the most loaded lightning pages?

    SELECT COUNT(Timestamp), PageUrl FROM LightningPageViewEventLog WHERE DAY\_ONLY(Timestamp) > LAST\_N\_DAYS:10 GROUP BY PageUrl ORDER BY COUNT(Timestamp) DESC


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Depending on event delivery and processing time, expect log data to be available to query within 25-45 minutes after the event is logged.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

#### Important

You can only query 15 days of data at a time using the Timestamp column that’s present on all Event Log Objects. For more details on the limitations and valid formatting for this field see [Best Practices and Considerations for Leveraging Event Log Object Data](atlas.en-us.securityImplGuide.meta/securityImplGuide/elo_best_practices.htm "It’s important to understand the recommended practices and limitations for the Event Log Object framework to get the most out of your log data. Here are some tips to ensure your queries run smoothly.").

For information about available Event Log Objects, see these topics in the Object Reference for the Salesforce Platform.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

#### Important

Event log objects aren't available in Government Cloud instances. If your org migrates, there’s potential to lose access to event log object data after migration completion. Contact Salesforce for any issues related to org migration.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

#### Tip

Debug and troubleshoot performance issues by correlating logs using the customizable Request Identifier field, available in all Event Monitoring logs. To correlate logs pertaining to an API request call, set the X-SFDC-REQUEST-ID header with a 32 character OTEL compatible TraceId or a 22 -character alphanumeric Id. Using SOQL, search for the Event Monitoring logs with this RequestId to correlate the logs and see the unit of work performed as a part of the API transaction.

-   [AnalyticsChangeEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/ "HTML (New Window)")
-   [AnalyticsDownloadEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_analyticsdownloadeventlog.htm "HTML (New Window)")
-   [AnalyticsInteractEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_analyticsinteracteventlog.htm "HTML (New Window)")
-   [AnalyticsPerfEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_analyticsperfeventlog.htm "HTML (New Window)")
-   [ApexCalloutEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apexcallouteventlog.htm "html (New Window)")
-   [ApexExecutionEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apexexecutioneventlog.htm "HTML (New Window)")
-   [ApexExtlCalloutEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apexextlcallouteventlog.htm "HTML (New Window)")
-   [ApexRestApiEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apexrestapieventlog.htm "HTML (New Window)")
-   [ApexSoapApiEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apexsoapapieventlog.htm "HTML (New Window)")
-   [ApexTriggerEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextriggereventlog.htm "HTML (New Window)")
-   [ApexUnexpectedExcpEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apexunexpectedexcpeventlog.htm "HTML (New Window)")
-   [ApiTotalUsageEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apitotalusageeventlog.htm "HTML (New Window)")
-   [AsyncReportRunEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asyncreportruneventlog.htm "HTML (New Window)")
-   [AuraRequestEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_aurarequesteventlog.htm "HTML (New Window)")
-   [BulkApiEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_bulkapieventlog.htm "HTML (New Window)")
-   [BulkApi2EventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_bulkapi2eventlog.htm "HTML (New Window)")
-   [ConcurApexLimitEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concurapexlimiteventlog.htm "HTML (New Window)")
-   [ContentTransferEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contenttransfereventlog.htm "HTML (New Window)")
-   [FlowNavMetricEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flownavmetriceventlog.htm "HTML (New Window)")
-   [InsufficientAccessEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_insufficientaccesseventlog.htm "HTML (New Window)")
-   [KnowledgeArticleEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleeventlog.htm "HTML (New Window)")
-   [LightningLoggerEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lightningloggereventlog.htm "HTML (New Window)")
-   [LightningPageViewEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lightningpagevieweventlog.htm "HTML (New Window)")
-   [LoginEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_logineventlog.htm "HTML (New Window)")
-   [LoginAsEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_loginaseventlog.htm "HTML (New Window)")
-   [MetadataApiOpEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_metadataapiopeventlog.htm "HTML (New Window)")
-   [PackageInstallEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_packageinstalleventlog.htm "HTML (New Window)")
-   [ReportEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_reporteventlog.htm "HTML (New Window)")
-   [RestApiEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_restapieventlog.htm "HTML (New Window)")
-   [SandboxStatusEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_sandboxstatuseventlog.htm "HTML (New Window)")
-   [SiteEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_siteeventlog.htm "HTML (New Window)")
-   [SearchEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_searcheventlog.htm "HTML (New Window)")
-   [SearchClickEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_searchclickeventlog.htm "HTML (New Window)")
-   [SoapApiEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_soapapieventlog.htm "HTML (New Window)")
-   [TransactionSecurityEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_transactionsecurityeventlog.htm "HTML (New Window)")
-   [UriEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_urieventlog.htm "HTML (New Window)")
-   [VisualforceRequestEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_visualforcerequesteventlog.xml "HTML (New Window)")

-   **[Analyze Log Data with Salesforce Direct](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_elo_analytics.htm)**
    Transform your log data into clear, insightful visualizations. Explore Event Log Objects in CRM Analytics with Salesforce Direct using a variety of engaging chart types.
-   **[Best Practices and Considerations for Leveraging Event Log Object Data](atlas.en-us.securityImplGuide.meta/securityImplGuide/elo_best_practices.htm)**
    It’s important to understand the recommended practices and limitations for the Event Log Object framework to get the most out of your log data. Here are some tips to ensure your queries run smoothly.

## Related Topics

- Best Practices and Considerations for Leveraging Event Log
                                        Object Data (atlas.en-us.securityImplGuide.meta/securityImplGuide/elo_best_practices.htm)
- Analyze Log Data with Salesforce Direct (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_elo_analytics.htm)
- Best Practices and Considerations for Leveraging Event Log Object Data (atlas.en-us.securityImplGuide.meta/securityImplGuide/elo_best_practices.htm)
