---
title: "Package Usage Logs Schema"
domain: pkg2-dev
topic: package-usage-logs-schema
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.902Z
estimatedTokens: 2547
keywords: [Package, Usage, Logs, Schema, informed, development, decisions, log, data, Analyze, adoption, user, behavior, company, Lightning]
---

# Package Usage Logs Schema

> Make informed development decisions based on package usage log data. Analyze adoption,
    user behavior, company information, and Lightning app and page usage data. Package usage logs
    list activity during a 24-hour period, between 12:00 AM and 11:59 PM UTC.

# Package Usage Logs Schema

Make informed development decisions based on package usage log data. Analyze adoption, user behavior, company information, and Lightning app and page usage data. Package usage logs list activity during a 24-hour period, between 12:00 AM and 11:59 PM UTC.

| Field | Description |
| --- | --- |
| api_type | The type of API request.Examples:BULK_APIE: SOAP EnterpriseP: SOAP PartnerREST |
| api_version | The version of the API that’s used. Example: 45.0. |
| app_name | The name of the Lightning application the user accessed.Examples:one:oneFieldServiceAppChatter |
| bulk_batch_id | The batch ID for the Bulk API job. |
| bulk_job_id | The ID for the Bulk API job. |
| bulk_operation | The operation for the Bulk API job.Examples:deletehardDeleteinsertqueryqueryAllupdateupsert |
| class_name | The name of the Apex class.Examples:Help_HomeControllerROAppController_v2FSL |
| cloned_from_organization_id | The ID of the org from which this subscriber org was cloned. Applies to sandbox orgs only. Example: 00Dxx0000000000 |
| custom_entity | The developer name of the component or custom object. |
| custom_entity_type | The type of component or custom object that the user viewed or manipulated.Examples:AnalyticsDashboardAnalyticsLensAnalyticsRecipeApexClassApexTriggerCustomInteractionFailureCustomInteractionLabelCustomObjectExternalObjectLightningComponentLightningPageVisualforcePage |
| entry_point | The entry point of the executed Apex event.GeneralCloner.cloneAndInsertRecordsVF- /apex/CloneUser |
| event | The name or ID of the platform event.Examples:/event/011xx0000005akxSomeCustomEvent |
| event_count | The number of platform events consumed by the subscriber. Example: 2. |
| event_subscriber | The ID of the platform event subscriber. Example: 01qxx0000004Coy. |
| http_method | The type of HTTP request method. Example: GET. |
| http_status_code | The HTTP response status code. Example: 404. |
| interaction_id_token | A hashed token representing the interaction ID provided when the custom interaction was logged. In compliance with privacy regulations, Salesforce can’t store an actual user interaction ID. |
| line_number | The line number in the Apex file. |
| login_key | The hashed string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the session expiring. All log lines with the same login key occurred during the same user login session. |
| log_record_type | Type of log record.Examples:AnalyticsAssetViewAnalyticsAssetRunAPIApexExecutionApexRestApiApexSoapApexUnexpectedExceptionBulkApiV1BulkApiV2CronJobCustomInteractionLightningInteractionLightningPageViewPlatformEventConsumerQueuedExecRestApiUnassociatedCRUDURIVFRemotingVisualforceRequestA log_record_type value of UnassociatedCRUD is assigned when a create, read, update, or delete (CRUD) event occurs on a custom object that isn’t associated with a log record type that App Analytics captures or that is associated with unknown log records. |
| managed_package_namespace | Namespace of the package. |
| method_name | The name of the Apex method.Examples:getUserAccessLevelBeangetCurrentDocumentsRatesgetAdditionalHelpTemplate |
| num_fields | The number of fields accessed by the user in this transaction. |
| num_soql_queries | The number of SOQL queries completed during the executed Apex event. |
| operation_count | The definition of operation_count depends on the operation_type performed.When operation_type is INSERT, READ, UPDATE, or DELETE, operation_count is the number of records associated with the custom_entity affected by the operation in this transaction.When operation_type is SOQL_QUERY, operation_count is the number of SOQL queries associated with the custom_entity performed in this transaction.When operation_type is SOSL_QUERY, operation_count is the number of SOSL queries associated with the custom_entity performed in this transaction. |
| operation_type | The operation performed on the component or custom object.Examples:INSERTREADUPDATEDELETESOSL_QUERYSOQL_QUERY |
| organization_country_code | The ISO-3166 two-character country code corresponding to the subscriber org’s address at the time of sign-up.Examples:USCAFR |
| organization_edition | The name of the Salesforce edition the subscriber org is using.Examples:Developer EditionEnterprise EditionUnlimited Edition |
| organization_id | The 15-character ID of the subscriber org. |
| organization_instance | The name of the subscriber org’s instance.Examples:AP2EU7NA44 |
| organization_language_locale | The 2–5 character code that represents the language and locale ISO-639 code of the subscriber org. This code controls the language for the labels displayed in an application.Examples:de-DEen-USfr-CA |
| organization_name | The name of the subscriber org. Example: Acme, Inc. |
| organization_status | The paid status of the subscriber org.Examples:ActiveDemoFreeTrial |
| organization_time_zone | The default time zone of the subscriber org.Examples:America/New YorkAmerica/Los AngelesEurope/Paris |
| organization_type | The subscriber org environment type.Examples:ProductionSandbox |
| package_id | The ID of the package. |
| package_version_id | The ID of the package version. |
| page_app_name | The internal name of the Lightning application that the user accessed from the App Launcher.Examples:LightningSalesChatter |
| page_context | The context of the Lightning page where the event occurred. Example: clients:cardContainer. |
| page_entity_type | The Lightning entity type of the event.Examples:ContactTask |
| page_url | The relative URL of the top-level Lightning Experience or Salesforce mobile app page that the user accessed. The page can contain one or more Lightning components. Multiple record IDs can be associated with page_url. Example: /sObject/0064100000JXITSASS/view |
| parent_ui_element | The parent scope of the Lightning page element where the event occurred. Example: ChatterFeed. |
| prevpage_url | The relative URL of the previous Lightning Experience or Salesforce mobile app page that the user opened. Example: /sObject/0064100000 |
| quiddity | The type of outer execution associated with the executed Apex event.Examples:A: QueryLocator Batch ApexB: Bulk API and Bulk API 2.0BA: Batch ApexC: Scheduled ApexE: Inbound Email ServiceF: FutureH: Apex RESTI: Invocable ActionK: Quick ActionL: LightningM: Remote ActionQ: QueuableR: Synchronous UncategorizedS: Serial Batch ApexTA: Tests AsyncTD: Tests DeploymentTS: Tests SynchronousV: VisualforceW: SOAP WebservicesX: Execute Anonymous |
| referrer_uri | The referring URI from the HTTP request. URIs are redacted in these ways.Query strings are removed.User IDs display as hashed tokens.Subscriber-created URIs, such as VisualForce pages, are removed. |
| related_list | A section of a record or other detail page that lists items related to that record.Examples:Open ActivitiesStage History |
| request_id | The ID of the HTTP request made to the server by the browser. If multiple log lines have the same request ID, they all occurred as part of the same user interaction. |
| request_size | The size of the callout request body in bytes. |
| request_status | The status of the HTTP request for the page or action that accesses a component or custom object in a package.Examples:A = Auth ErrorF = FailureN = 404 errorR = RedirectS = SuccessU = Undefined |
| response_size | The size of the callout response in bytes. |
| rows_processed | The number of rows that were processed in the request. |
| session_key | The HTTP session ID for the HTTP request to access a component or custom object in a package. The session ID is hashed. |
| stack_trace | The stack trace associated with the Apex exception. |
| target_ui_element | The Lightning target page element where the event occurred.Examples:label body truncatetabitem-link |
| timestamp_derived | The access time of a component or custom object in a package in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ). Example: 2018-07-27T11:32:59.555Z. |
| ui_event_sequence_num | An auto-incremented sequence number of the current Lightning event since the session started. |
| ui_event_source | The user action on the Lightning record or records. This value indicates whether the user’s action was on a single record or multiple records. For example, read indicates that one record was read, such as on a record detail page. In contrast, reads indicates that multiple records were read, such as in a list view.Examples:clickcreatedeletehoverreadupdate |
| ui_event_type | The type of Lightning event.Examples:crudsystemuser |
| url | The redacted URL of the request to access a component or custom object in a package. URLs are redacted in these ways.Query strings are removed.User IDs display as hashed tokens.Subscriber-created URIs, such as VisualForce pages, are removed.For Lightning-based URLs, only /aura is displayed. For Visualforce-based URLs that aren’t pages owned by the managed package, either /apex or /apexrest is displayed. |
| user_agent | The browser and operating system of the device used to make the request.Examples:Mozilla/5.0 (iPhone; CPU iPhone // 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36 |
| user_country_code | The default ISO-3166 two-character country code of the user.Examples:CAFRUS |
| user_id_token | The hashed token representing the ID of the user who accessed the package. The ID persists, even if a user’s details change. The token also persists across any packages that the user interacts with.The user ID token starts with the prefix 005-. In compliance with privacy regulations, our systems can’t access the actual user ID. Likewise, the hashed token can’t be linked to the user ID. |
| user_time_zone | The default time zone of the user. Example: America/New_York. |
| user_type | The user license category of the user accessing Salesforce services through the UI or API.Examples:GuestPartnerStandard |
