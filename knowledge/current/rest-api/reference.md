---
title: "Reference"
domain: rest-api
topic: reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.693Z
estimatedTokens: 5027
keywords: [Reference, following, table, lists, supported, REST, resources, API, provides, brief, description, each., Note]
---

# Reference

> The following table lists supported REST resources in the API and provides a brief
		description for each.

# Reference

The following table lists supported REST resources in the API and provides a brief description for each.

In each case, the URI for the resource follows the base URI, https://MyDomainName.my.salesforce.com.

For example, to retrieve basic information about an Account object in version 66.0 use https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account.

For information about standard and custom objects that you access with sObject resources, see [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/).

Some of these resources are only available if you have the corresponding package installed or have the corresponding feature enabled.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

Some parts of request URIs are case-sensitive, such as IDs. Other parts of URIs aren't case-sensitive, such as object and field names. If your requests aren't successful, check that your URI has the right letter cases by comparing the URI to the reference and examples in this guide.

| Resource Name | URI and Description |
| --- | --- |
| Versions | /services/dataLists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root. |
| Resources by Version | /services/data/vXX.XLists available resources for the specified API version, including resource name and URI. |
| Invocable Actions | /services/data/vXX.X/actions/standard/services/data/vXX.X/actions/customUse actions to add more functionality to your applications. Choose from standard actions, such as posting to Chatter or sending email, or create actions based on your company’s needs. |
| Analytics(Accesses Reports and Dashboards REST API) | /services/data/vXX.X/analyticsAccesses Reports and Dashboards REST API resources. See the Salesforce Reports and Dashboards REST API Developer Guide. |
| Get AppMenu Types | /services/data/vXX.X/appMenu/Accesses App Menu types in the Salesforce app dropdown menu. |
| AppMenu Items | /services/data/vXX.X/appMenu/AppSwitcherAccesses App Menu items from the Salesforce app dropdown menu. |
| AppMenu Mobile Items | /services/data/vXX.X/appMenu/Salesforce1/Accesses App Menu items from the Salesforce mobile app for Android and iOS and the mobile web navigation menu. |
| Asset Management | /services/data/vXX.X/asset-managementMakes make lifecycle-managed asset data available for sales and account reps to view in Lightning Experience. See Customer Asset Lifecycle Management in the Connect REST API Developer Guide. |
| Async Queries | /services/data/vXX.X/async-queriesSubmits a SOQL query to be processed asynchronously. SeeAsync Query in the Connect REST API Developer Guide.Use Async SOQL with Real-Time Event Monitoring in the Salesforce Security Guide.Async SOQL Use Cases in the Big Objects Implementation Guide. |
| Chatter(Connect REST API) | /services/data/vXX.X/chatterAccesses Chatter features in the Connect REST API. See Chatter REST API Resources in the Connect REST API Developer Guide. |
| Commerce(Place Order REST API) | /services/data/vXX.X/commerceAccesses features in the Place Order REST API. See the Place Order REST API Developer Guide. |
| Compact Layouts | /services/data/vXX.X/compactLayouts?q=objectListReturns a list of compact layouts for multiple objects. |
| Composite | /services/data/vXX.X/compositeExecutes a series of REST API requests in a single POST request, or retrieves a list of other composite resources with a GET request. |
| Composite Batch | /services/data/vXX.X/composite/batchExecutes up to 25 subrequests in a single request. |
| Using Composite Graphs | /services/data/vXX.X/composite/graphProvides an enhanced way to perform composite requests. |
| sObject Tree | /services/data/vXX.X/composite/treeCreates one or more sObject trees with root records of the specified type. An sObject tree is a collection of nested, parent-child records with a single root record. |
| sObject Collections | /services/data/vXX.X/composite/sobjectsExecutes actions on multiple records in one request. |
| Connect REST API | /services/data/vXX.X/connectAccesses features in the Connect REST API. See the Connect REST API Resources in the Connect REST API Developer Guide. |
| Financial Services | /services/data/vXX.X/connect/financialservicesAccesses Financial Services objects. See the Financial Services Cloud Developer Guide. |
| Health Cloud | /services/data/vXX.X/connect/health/care-servicesAccesses Health Cloud objects. See the Health Cloud Developer Guide. |
| Manufacturing | /services/data/vXX.X/connect/manufacturingAccesses Manufacturing Cloud objects. See the Manufacturing Cloud Developer Guide. |
| Consumer Goods | /services/data/vXX.X/connect/object-detection/services/data/vXX.X/connect/visit/recommendationsAccesses the Consumer Goods Business API. See the Consumer Goods Cloud Developer Guide. |
| Consent | /services/data/vXX.X/consentTracks users’ consent preferences. |
| Contact Tracing | /services/data/vXX.X/contact-tracingTracks health contacts. See the Emergency Response Management for Public Health Developer Guide. |
| Dedupe | /services/data/vXX.X/dedupeLists duplicate resources, job definitions, and jobs. See the Connect REST API Developer Guide. |
| Domino | /services/data/vXX.X/dominoFor internal use only. |
| Eclair(geodata) | /services/data/vXX.X/eclairAccesses geodata definitions. See Charts Geodata Resource in the Analytics REST API Developer Guide. |
| Email Connect | /services/data/vXX.X/emailConnectFor internal use only. |
| Platform Event Schema by Schema ID | /services/data/vXX.X/event/eventSchema/schemaIdGets the definition of a platform event in JSON format for a schema ID. This resource is available in REST API version 40.0 and later. |
| Folders | /services/data/vXX.X/foldersUse the Analytics Folders API to perform operations on report and dashboard folders. See Folders in the Reports and Dashboards REST API Developer Guide. |
| Jobs(Bulk API 2.0) | /services/data/vXX.X/jobsAccesses jobs in the Bulk API 2.0. See the Bulk API 2.0 and Bulk API Developer Guide. |
| jsonxform(Analytics REST API) | /services/data/vXX.X/jsonxformTests the results of a rule in a Tableau template. See Rules Testing with jsonxform/transformation endpoint the Analytics Templates Developer Guide. |
| Knowledge Management | /services/data/vXX.X/knowledgeManagementAccesses Salesforce Knowledge features. See the Knowledge Developer Guide. |
| Licensing | /services/data/vXX.X/licensingFor internal use only. |
| Limits | /services/data/vXX.X/limitsLists information about limits in your org. For each limit, this resource returns the maximum allocation and the remaining allocation based on usage. |
| Record Count | /services/data/vXX.X/limits/recordCountLists information about object record counts in your organization. |
| Salesforce Surveys Translation Resources | /services/data/vXX.X/localizedvalueUse REST APIs to translate survey fields, view, update, or delete translated survey fields. The translated values of surveys fields are stored in Flow fields. |
| Metadata | /services/data/vXX.X/metadataAccesses features in the Metadata API. See the Metadata API Developer Guide. |
| Parameterized Search | /services/data/vXX.X/parameterizedSearch/?q=searchStringExecutes a simple REST search using parameters instead of a SOSL clause. Indicate parameters in the URI with the GET method. Or, use the POST method to create complex searches in a request body. |
| Payments | /services/data/vXX.X/paymentsFor internal use only. |
| Process Approvals | /services/data/vXX.X/process/approvalsAccesses all approval processes. Can also be used to submit a particular record if that entity supports an approval process and one has already been defined. Records can be approved and rejected if the current user is an assigned approver. |
| Process Rules | /services/data/vXX.X/process/rulesAccesses a list of all active workflow rules. Use the GET method to retrieve records or fields. Use the HEAD method to retrieve information in HTTP headers. Use the POST method to trigger all active workflow rules. |
| Query(SOQL) | /services/data/vXX.X/query/?q=soqlExecutes the specified SOQL query. |
| QueryAll(SOQL) | /services/data/vXX.X/queryAll/?q=soqlExecutes the specified SOQL query. Results can include deleted, merged, and archived records. |
| Quick Actions | /services/data/vXX.X/quickActionsReturns a list of global quick actions and their types, as well as custom fields and objects that appear in the Chatter feed. |
| Recently Viewed Items | /services/data/vXX.X/recentGets the most recently accessed items that were viewed or referenced by the current user. |
| Salesforce Scheduler Resources | /services/data/vXX.X/scheduling/Accesses Scheduler REST APIs to get appointment time slots or available service resources based on work type groups and service territories. |
| Search(SOSL) | /services/data/vXX.X/search/?q=soslExecutes the specified SOSL search. The search string must be URL-encoded. |
| Search Scope and Order | /services/data/vXX.X/search/scopeOrderReturns an ordered list of objects in the default global search scope of a logged-in user. Global search keeps track of which objects the user interacts with and how often and arranges the search results accordingly. Objects used most frequently appear at the top of the list. |
| Search Suggested Queries | /services/data/vXX.X/search/​suggestSearchQueries​?q=searchString​&language=languageOfQueryReturns a list of suggested searches based on the user’s query string text matching searches that other users have performed in Salesforce Knowledge. Provides a way to improve search effectiveness, before the user performs a search. This resource is available in REST API version 30.0 and later. |
| Search Suggested Article Title Matches | /services/data/vXX.X/search/suggestTitleMatches​?q=searchString​&language=articleLanguage​&publishStatus=articlePublicationStatusReturns a list of Salesforce Knowledge article titles that match the user’s search query string. Provides a shortcut to navigate directly to likely relevant articles before the user performs a search. |
| Search Result Layouts | /services/data/vXX.X/searchlayout/​?q=commaDelimitedObjectListReturns search result layout information for the objects in the query string. For each object, this call returns the list of fields displayed on the search results page as columns, the number of rows displayed on the first page, and the label used on the search results page. |
| Service Templates | /services/data/vXX.X/serviceTemplatesFor internal use only. |
| Smart Data Discovery(Insights API) | /services/data/vXX.X/smartdatadiscoveryUses the Insights API to embed insights into a website, application, or dashboard. See Get Descriptive and Diagnostic Insights Programmatically. |
| Describe Global | /services/data/vXX.X/sobjectsIn addition, it provides the org encoding, as well as the maximum batch size permitted in queries. For more information on encoding, see Internationalization and Character Sets. |
| Platform Event Schema by Event Name | /services/data/vXX.X/sobjects/eventName/eventSchemaGets the definition of a platform event in JSON format for an event name. |
| Lightning Exit by Page Metrics | /services/data/vXX.X/sobjects/LightningExitByPageMetricsReturns frequency metrics about the standard pages within which users switched from Lightning Experience to Salesforce Classic. |
| Lightning Toggle Metrics | /services/data/vXX.X/sobjects/LightningToggleMetricsReturns details about users who switched between Salesforce Classic and Lightning Experience. |
| Lightning Usage by App Type | /services/data/vXX.X/sobjects/LightningUsageByAppTypeMetricsReturns the total number of Lightning Experience and Salesforce Mobile users. This resource is available in REST API version 44.0 and later. |
| Lightning Usage by Browser | /services/data/vXX.X/sobjects/LightningUsageByBrowserMetricsReturns Lightning Experience usage results grouped by browser instance. |
| Lightning Usage by FlexiPage | /services/data/vXX.X/sobjects/LightningUsageByFlexiPageMetricsReturns details about the custom pages viewed most frequently in Lightning Experience. |
| Lightning Usage by Page | /services/data/vXX.X/sobjects/LightningUsageByPageMetricsRepresents standard pages users viewed most frequently in Lightning Experience. |
| sObject PlatformAction | /services/data/vXX.X/sobjects/PlatformActionQueries for actions displayed in the UI, given a user, a context, device format, and a record ID. Examples include standard and custom buttons, quick actions, and productivity actions. |
| sObject Relevant Items | /services/data/vXX.X/sobjects/relevantItemsGets the current user’s most relevant items. Relevant items include records for objects in the user’s global search scope and also most recently used (MRU) objects. |
| sObject Basic Information | /services/data/vXX.X/sobjects/sObjectRetrieves basic metadata for a specified object, or creates a new record for the specified object. |
| sObject Get Deleted | /services/data/vXX.X/sobjects/sObject/deleted/​​​?start=startDateAndTime&end=endDateAndTimeRetrieves the list of individual records that have been deleted within the given timespan for the specified object. |
| sObject Describe | /services/data/vXX.X/sobjects/sObject/describeCompletely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object. |
| sObject ApprovalLayouts | /services/data/vXX.X/sobjects/sObject/describe/approvalLayoutsRetrieve a list of approval layouts for a specified object. This resource is available in REST API version 30.0 and later. |
| sObject CompactLayouts | /services/data/vXX.X/sobjects/sObject/describe/compactLayoutsRetrieve a list of compact layouts for a specific object. This resource is available in REST API version 29.0 and later. |
| sObject Layouts | /services/data/vXX.X/sobjects/sObject/describe/layouts/services/data/vXX.X/sobjects/Global/describe/layoutsRetrieves lists of page layouts and their descriptions. You can request information for all of a specific object’s layouts or for layouts associated with a specified record type on a specific object. |
| sObject Named Layouts | /services/data/vXX.X/sobjects/sObject/describe/namedLayouts/layoutNameRetrieves information about alternate named layouts for a given object. This resource is available in REST API version 31.0 and later. |
| sObject Rows by External ID | /services/data/vXX.X/sobjects/sObject/fieldName/fieldValueCreates records or updates existing records (upserts records) based on the value of a specified external ID field. |
| List Views for an Object | /services/data/vXX.X/sobjects/sObject/listviews/services/data/vXX.X/sobjects/sObject/listviews/listViewIdReturns the list of list views for the specified sObject, including the ID and other basic information about each list view. You can also get basic information for a specific list view by ID. |
| List View Results | /services/data/vXX.X/sobjects/sObject/listviews/listViewID/resultsExecutes the SOQL query for the list view and returns the resulting data and presentation information. |
| List View Describe | /services/data/vXX.X/sobjects/sObject/listviews/queryLocator/describeReturns detailed information about a list view, including the ID, the columns, and the SOQL query. |
| Recent List Views | /services/data/vXX.X/sobjects/sObject/listviews/recentReturns the list of recently used list views for the given object. |
| sObject Quick Actions | /services/data/vXX.X/sobjects/sObject/quickActions/Access an object’s actions and the action details. |
| sObject Get Updated | /services/data/vXX.X/sobjects/sObject/updated/​​​?start=startDateAndTime&end=endDateAndTime |
| sObject Rows | /services/data/vXX.X/sobjects/sObject/idAccesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records. |
| sObject Blob Get | /services/data/vXX.X/sobjects/sObject/id/blobFieldRetrieves the specified blob field from an individual record and returns it as binary data. |
| sObject Relationships | /services/data/vXX.X/sobjects/sObject/id/relationshipNameAccesses records by traversing object relationships via friendly URLs. You can retrieve, update, or delete the record associated with the traversed relationship field. If there are multiple related records, you can retrieve the complete set of associated records. |
| sObject Rich Text Image Get | /services/data/vXX.X/sobjects/sObject/id/​richTextImageFields/fieldName/contentReferenceIdGets the specified image data from a specific rich text area field in a given record. |
| Delete Lightning Experience Event Series | /services/data/vXX.X/sobjects/Event/id/fromThisEventOnwardsRemoves one or more IsRecurrence2 events in a series. |
| Streaming Channel Push(Steaming API) | /services/data/vXX.X/sobjects/StreamingChannel/channelId/pushGets subscriber information, and pushes notifications for streaming channels. See the Streaming API Developer Guide. |
| sObject User Password | /services/data/vXX.X/sobjects/User/userId/passwordAccesses user passwords based on the specified user ID. Sets, resets, or gets the expiration status of a user password based on the HTTP method. Use the GET method to retrieve a password’s expiration status, the POST method to set a password, or the DELETE method to initiate a password reset. |
| sObject Self-Service User Password | /services/data/vXX.X/sobjects/SelfServiceUser/​selfServiceUserId/passwordAccesses self-service user passwords based on the specified user ID. Sets, resets, or gets the expiration status of a self-service user password based on the HTTP method. Use the GET method to retrieve a password’s expiration status, the POST method to set a password, or the DELETE method to initiate a password reset. |
| Data Category Groups | /services/data/vXX.X/support/dataCategoryGroupsGets data category groups that are visible to the current user. |
| Data Category Detail | /services/data/vXX.X/support/dataCategoryGroups/group/​dataCategories/​categoryGets data category details and the child categories by a given category. |
| Embedded Service Configuration Describe | /services/data/vXX.X/support/embeddedservice/​configuration/​serviceNameReturns information corresponding to one or more service report templates in field service. |
| Field Service Flow | /services/data/vXX.X/support/fieldservice/Flow​?developerNames=flowNameReturns information corresponding to a field service flow. See Field Service Flow in the Field Service Developer Guide. |
| Field Service Report Template | /services/data/vXX.X/support/fieldservice/​ServiceReportTemplateReturns information corresponding to one or more service report templates in field service. See Service Report Template in the Field Service Developer Guide. |
| Articles Details | /services/data/vXX.X/support/knowledgeArticles/articleId/services/data/vXX.X/support/knowledgeArticles/articleUrlNameGets all online article fields, accessible to the user. |
| Tabs | /services/data/vXX.X/tabsReturns a list of all tabs—including Lightning page tabs—available to the current user, regardless of whether the user has chosen to hide tabs via the All Tabs (+) tab customization feature. |
| Themes | /services/data/vXX.X/themeGets the list of icons and colors used by themes in the Salesforce application. |
| Tooling API | /services/data/vXX.X/toolingAccesses features in the Tooling API. See the Tooling API Developer Guide. |
| UI API | /services/data/vXX.X/ui-apiAccesses features in the UI API. See the User Interface API Developer Guide. |
| Wave(Analytics REST API) | /services/data/vXX.X/waveAccesses features in the Analytics REST API. See the Analytics REST API Developer Guide. |

## Related Topics

- Versions (atlas.en-us.api_rest.meta/api_rest/resources_versions.htm)
- Resources by Version (atlas.en-us.api_rest.meta/api_rest/resources_discoveryresource.htm)
- Invocable Actions (atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable.htm)
- Get AppMenu Types (atlas.en-us.api_rest.meta/api_rest/resources_appmenu_get.htm)
- AppMenu Items (atlas.en-us.api_rest.meta/api_rest/resources_appmenu.htm)
- AppMenu Mobile Items (atlas.en-us.api_rest.meta/api_rest/resources_appmenu_mobile_web.htm)
- Compact Layouts (atlas.en-us.api_rest.meta/api_rest/resources_compact_layouts.htm)
- Composite (atlas.en-us.api_rest.meta/api_rest/resources_composite_composite.htm)
- Composite Batch (atlas.en-us.api_rest.meta/api_rest/resources_composite_batch.htm)
- Using Composite Graphs (atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_introduction.htm)
