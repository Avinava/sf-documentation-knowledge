---
title: "AnalyticsSettings"
domain: metadata-api
topic: analyticssettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:36.862Z
estimatedTokens: 6550
keywords: [AnalyticsSettings, Represents, Analytics, settings, Salesforce., CRM, lets, explore, data, quickly, easily, providing, AI-powered, advanced, right, inside, Manage, datasets, query, Salesforce]
---

# AnalyticsSettings

> Represents Analytics settings in Salesforce. CRM
      Analytics lets you explore all your data quickly and easily by providing AI-powered advanced
      Analytics right inside Salesforce. Manage your datasets, query data with Salesforce Analytics
      Query Language (SAQL), and customize dashboards. You can use these settings to configure which
      Analytics features are available to users in your organization.

# AnalyticsSettings

Represents Analytics settings in Salesforce. CRM Analytics lets you explore all your data quickly and easily by providing AI-powered advanced Analytics right inside Salesforce. Manage your datasets, query data with Salesforce Analytics Query Language (SAQL), and customize dashboards. You can use these settings to configure which Analytics features are available to users in your organization.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AnalyticsSettings values are stored in the Analytics.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

AnalyticsSettings components are available in API version 46.0 and later.

## Special Access Rules

The AnalyticsSettings metadata type is accessible in all organizations. The fields that pertain to Reports and Dashboards are available in all organizations, but fields that pertain to CRM Analytics are only available in organizations with CRM Analytics enabled.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| always​Gen​Previews | boolean | Indicates whether Analytics asset previews are generated (true) or not (false). Available in API version 47.0 and later. |
| analytics​Adoption​Metadata | boolean | Indicates whether Adoption Analytics metadata collection can be installed via a dataflow in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| analytics​Calendar​App | boolean | Indicates whether the Analytics Calendar app for Industry templates can be installed in Salesforce (true) or not (false). Available in API version 49.0. Removed in API version 50.0. |
| auto​Install​Apps | boolean | Indicates whether CRM Analytics apps can be auto-installed in Salesforce (true) or not (false). Available in API version 54.0 and later. |
| bundle​Caching​Opt​Out | boolean | Indicates whether the default CRM Analytics dashboard bundle caching behavior is disabled (true) or enabled (false). Available in API version 58.0 and later. |
| can​Access​Analytics​Via​API | boolean | Indicates whether Analytics assets can be accessed via the Analytics REST API in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| can​Annotate​Dashboards | boolean | Indicates whether the Analytics dashboards Chatter annotation feature is enabled in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| can​Enable​BYOM​Zero​Day​Scoring | boolean | Indicates whether zero day scoring on user uploaded Einstein Discover model is enabled in Salesforce (true) or not (false). Available in API version 54.0 to 56.0. Removed in API version 57.0. |
| can​Enable​Live​Metrics | boolean | Indicates whether the Data Discovery live model metrics calculation feature is enabled in Salesforce (true) or not (false). Available in API version 48.0 and 49.0. Removed in API version 50.0. |
| can​Enable​Saved​View | boolean | Indicates whether the saved view feature for Analytics dashboards is enabled in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| can​Explore​Data​Conversationally | boolean | Indicates whether Analytics data can be explored via NLQ (true) rather than using strict SAQL statements (false). For example, "Show me all accounts that are closed won". Available in API version 47.0 and later. |
| can​Share​Apps​With​Communities | boolean | Indicates whether Analytics apps can be shared with Experience Builder sites and their users, outside of the standard Analytics Studio experience (true) or not (false). Available in API version 47.0 and later. |
| can​Subscribe​Dashboard​Widgets | boolean | Indicates whether a user can subscribe to Analytics dashboard widgets in Salesforce (true) or not (false). Available in API version 47.0 to 50.0. Removed in API version 51.0. |
| can​View​Thumbnail​Assets | boolean | Indicates whether the thumbnail representations of Analytics lenses and dashboards are viewable (true) or not (false). Available in API version 47.0 and later. |
| cdp​Query​Caching​Opt​In | boolean | Indicates whether caching is enabled for direct queries to Data 360 (true) or not (false). Available in API version 65.0 and later. |
| concurrency​Limit​Sharing | boolean | Indicates whether the concurrency limits of Data Prep dataflows and recipes can be shared (true) or not (false). Available in API version 60.0 and later. |
| disable​Incremental​Dataset​Creation | boolean | Indicates whether incremental dataset optimization is disabled (true) or not (false). Available in API version 65.0 and later. |
| enable​Amazon​Redshift​Output​Connector | boolean | Indicates whether the Amazon Redshift Output connector is enabled in Salesforce (true) or not (false). Available in API version 58.0 and later. |
| enable​Analytics​Encryption | boolean | Indicates whether encryption is enabled for Analytics in Salesforce (true) or not (false). Available in API version 48.0 and later. |
| enable​Analytics​Sharing​Enable | boolean | Indicates whether the Analytics sharing is enabled in Salesforce (true) or not (false). Available in API version 48.0 and later. |
| enable​Auto​Complete​Combo | boolean | Indicates whether using auto-complete when choosing reports and dashboards is enabled in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| enable​Autonomous​Experience | boolean | Indicates whether Ask Salesforce for Data is enabled in Salesforce (true) or not (false). Available as Beta in API version 54.0 and later. |
| enable​Azure​DL​Gen2​Output​Connector | boolean | Indicates whether the Azure DL Gen2 output connector is enabled in Salesforce (true) or not (false). Available in API version 54.0 and later. |
| enable​C360​Global​Profile​Data | boolean | Indicates whether the Customer 360 data validation dashboard connector is enabled in Salesforce (true) or not (false). Available in API version 48.0 or later. |
| enable​Create​Legacy​Dataflows | boolean | Indicates whether access to creating dataflows is available in Salesforce (true) or not (false). Available in API version 55.0 and later. |
| enable​Crma​Data​Cloud​Integration | boolean | Indicates whether platform integration between CRM Analytics and Data 360 is enabled (true) or not (false). Available in API version 58.0 and later. |
| enable​Crt​Setup​Lightning​UiPref | boolean | Indicates whether the enhanced custom report type setup pages is enabled in Salesforce (true) or not (false). Available in API version 64.0 and later. |
| enable​Dashboard​Change​Owner​Pref | boolean | Indicates whether changing ownership of Lightning Experience dashboards from one owner to another owner is enabled in Salesforce (true) or not (false). Available in API version 59.0. Removed in API version 60.0. |
| enable​Dashboard​Cmp​Refresh​Pref | boolean | Indicates whether Lightning Experience dashboard component refresh is enabled in Salesforce (true) or not (false). Available in API version 64.0. Removed in API 65.0. |
| enable​Dashboard​Component​Snapshot | boolean | Indicates whether posting dashboard component snapshots to feeds that are visible to all users is enabled in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| enable​Dashboard​Flexi​Table | boolean | Indicates whether access is enabled to flexible dashboard tables for all users in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| enable​Dashboard​To​PDF​Enable | boolean | Indicates whether a dashboard can be exported to a PDF in Salesforce (true) or not (false). Available in API version 48.0 and later. |
| enable​Dashboard​Sub​Org​Email​Pref | boolean | Indicates whether the unique org email for Lightning Experience dashboard subscriptions is enabled (true) or not (false). Available in API version 64.0 and later. |
| enable​Data​Cloud​Reporting​Pref | boolean | Indicates whether Data 360 reporting with the analytics query engine is enabled (true) or not (false). Available in API version 59.0 and later. |
| enable​Data​Blending | boolean | Indicates whether the Analytics Explorer data blending feature is available in Salesforce (true) or not (false). Available in API version 48.0 and 49.0. Removed in API version 50.0. |
| enable​Email​Reports​To​Portal​Users | boolean | Indicates whether this org allows Classic reports and dashboards to be sent to Portal Users (true) or not (false). Available in API version 47.0 and later. |
| enable​Firebird​Editor | boolean | Indicates whether the Firebird editor is available in Salesforce (true) or not (false). Available in API version 48.0 and later. |
| enable​Floating​Report​Headers | boolean | Indicates whether report results display floating headers when scrolling (true) or not (false). Available in API version 47.0 and later. |
| enable​Include​Disclaimer​Message | boolean | Indicates whether confidental data disclaimers are included with analytics assets (true) or not (false). Available in API version 64.0 and later. |
| enable​Incremental​Upsert | boolean | Indicates whether the incremental upsert operation is enabled for CRM Analytics recipe output nodes (true) or not (false). Available in API version 66.0 and later. |
| enable​Insights | boolean | Indicates whether CRM Analytics is enabled in Salesforce (true) or not (false). |
| enable​Insights​HC​Mode | boolean | Indicates whether CRM Analytics for Public Cloud is enabled in Salesforce (true) or not (false). Available in API version 58.0 and later. |
| enable​Lightning​Report​Builder | boolean | Indicates whether the Lightning Report Builder feature can be enabled or disabled on the Setup page in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| enable​Lotus​Notes​Images | boolean | Indicates whether the use of Lotus Notes-friendly images in dashboards and report emails is available in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| enable​Lwc​In​Dashboards | boolean | Indicates whether Lightning Web Components are enabled for use in CRM Analytics Dashboards (true) or not (false). Available as Beta in API version 53.0. Removed for GA in API version 54.0. |
| enable​Mass​Enable​Report​Builder | boolean | Indicates whether the Report Builder is available in Salesforce (true), overriding profile level settings, or not (false). Available in API version 47.0 and later. |
| enable​New​Charts​Engine | boolean | Indicates whether the New Charts Engine for reports and dashboards is available in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| enable​Null​Dimension | boolean | Indicates whether null values are supported as a grouping key value in a SAQL query in Salesforce (true) or not (false). Available in API version 48.0 and later. |
| enable​Org​Can​See​Live​Previews | boolean | Indicates whether admins can enable live previews of data in Salesforce (true) or not (false). Available in API version 57.0 and later. |
| enable​Org​Can​View​Tableau | boolean | Indicates whether admins can enable Tableau dashboards in Salesforce (true) or not (false). Available in API version 55.0 and later. |
| enable​Org​Can​View​Thumbnail​For​OA | boolean | Indicates whether admins can enable thumbnails for Lightning Experience reports and dashboards in Salesforce (true) or not (false). Available in API version 57.0 and later. |
| enable​Org​Ha​Mobile​Offline​Enabled | boolean | Indicates whether admins can enable mobile offline access in Salesforce (true) or not (false). Available in API version 51.0 and later. |
| enable​Org​Has​Watchlist​Enabled | boolean | Indicates whether admins can turn on watchlists for assets in Salesforce (true) or not (false). Available in API version 50.0 and later. |
| enable​Org​Wide​Email​Notification | boolean | Indicates whether a unique org email for CRM Analytics dashboard subscriptions and notifications is enabled (true) or not (false). Available in API version 65.0 and later. |
| enable​Power​Insights | boolean | Indicates whether admins can turn on Power Insights for this org (true) or not (false). Removed in API version 51.0. |
| enable​Pupparazzi​For​Notifications | boolean | Indicates whether the CRM Analytics Hyperforce headless browser service is enabled (true) or not (false). Available in API version 66.0 and above. |
| enable​Query​Live​Connectors | boolean | Indicates whether querying live connectors is available in Salesforce (true) or not (false). Available in API version 48.0 and later. |
| enable​Recommended​Report​Type​Pref | boolean | Indicates whether recommended report types for Lightning Reports are available in Salesforce (true) or not (false). Available in API version 54.0 to 56.0. Removed in API version 57.0. |
| enable​Remove​Footer​For​Rep​Display | boolean | Indicates whether the default disclaimer for the report run page and printable view page is removed (true) or not (false) in Salesforce. Available in API version 47.0 and later. |
| enable​Remove​Footer​From​Rep​Exp | boolean | Indicates whether the default footer from the exported (csv/excel) report is removed (true) or not (false) in Salesforce. Available in API version 47.0 and later. |
| enable​Report​Cdn​Pref | boolean | Indicates whether the content delivery network (CDN) feature in Lightning Experience Reports is available in Salesforce (true) or not (false). Available in API version 64.0 and later. |
| enable​Report​Custom​Text​Export​Pref | boolean | Indicates whether the export of custom text in Lightning Experience Reports is available in Salesforce (true) or not (false). Available in API version 66.0 and later. |
| enable​Report​Escape​Chars​Pref | boolean | Indicates whether the sanitization of malicious characters in CSV exports to prevent formula injection feature in Lightning Experience Reports is available in Salesforce (true) or not (false). Available in API version 65.0 and later. |
| enable​Report​Field​To​Field​Pref | boolean | Indicates whether the field-to-field filters feature in Lightning Experience Reports is available in Salesforce (true) or not (false). Available in API version 47.0. Removed in API version 48.0. |
| enable​Report​Crt​Auto​Add​Pref | boolean | Indicates whether the feature to automatically add new fields to relevant custom Lightning Experience report types when they’re created is available in Salesforce (true) or not (false). Available in API version 50.0 and 51.0. Removed in API version 52.0. |
| enable​Report​Hide​Xls​Export​Pref | boolean | Indicates whether the XLS export feature for Lightning Experience Reports is visible in Salesforce (true) or not (false). Available in API version 51.0 and later.NoteTo manage this setting, users must have the Export Reports user permission. |
| enable​Report​Inline​Edit​Pref | boolean | Indicates whether the inline editing feature for Lightning Experience Reports is available in Salesforce (true) or not (false). Available in API version 53.0 and later. |
| enable​Report​Interface​Pref | boolean | Indicates whether interfaces on Data 360 reports during packaging are enabled (true) or not (false). Available in API version 66.0 and later. |
| enable​Report​Notifications​Enable | boolean | Indicates whether the notification feature for Lightning Experience Reports is available in Salesforce (true) or not (false). Available in API version 48.0 and later. |
| enable​Report​Sub​Org​Email​Pref | boolean | Indicates whether the unique org email for Lightning Experience Report subscriptions is enabled (true) or not (false). Available in API version 61.0 and later. |
| enable​Report​Unique​Row​Count​Pref | boolean | Indicates whether the unique row count aggregate feature in Lightning Experience Reports is available in Salesforce (true) or not (false). Available in API version 47.0. Removed in API version 48.0. |
| enable​Request​Priority​Schdl | boolean | Indicates whether priority-based dataflow request scheduling is available in Salesforce (true) or not (false). Available in API version 50.0 and later. |
| enable​S1​Analytics​Eclair​Enable | boolean | Indicates whether EclairNG charts can be enabled for S1 Mobile Analytics in Salesforce (true) or not (false). Available in API version 48.0 and later. |
| enable​S3​Output​Connector | boolean | Indicates whether the S3 output data connector is available in Salesforce (true) or not (false). Available in API version 49.0 and later. |
| enable​SFX​Joined​Reports​Enable | boolean | Indicates whether the Lightning Experience joined report feature can be enabled or disabled on the Setup page in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| enable​Salesforce​Output​Connector | boolean | Indicates whether the Salesforce output data connector is available in Salesforce (true) or not (false). Available in API version 51.0 and later. |
| enable​Secure​Image​Sharing | boolean | Indicates whether secure image sharing and downloading is enabled in Salesforce (true) or not (false). Available in API version 50.0 and later. |
| enable​Smart​Data​Discovery | boolean | Indicates whether the org admin can enable Einstein Discovery in Salesforce (true) or not (false). Available in API version 49.0 and 50.0. Removed in API version 51.0. |
| enable​Snowflake​Output​Connector | boolean | Indicates whether the Snowflake output data connector is available in Salesforce (true) or not (false). Available in API version 49.0 and later. |
| enable​Summary​Filter​Org​Pref | boolean | Indicates whether Lightning Experience Report summary filters are enabled (true) or not (false). Available in API version 60.0 and later. |
| enable​Sql​Dataset | boolean | Indicates whether SQL datasets are available in Salesforce (true) or not (false). Available in API version 52.0. Removed in API version 53.0. |
| enable​Sql​Live​Dataset | boolean | Indicates whether SQL live datasets are available in Salesforce (true) or not (false). Available in API version 51.0 and 52.0. Removed in API version 53.0. |
| enable​Tableau​Hyper​Output​Connector | boolean | Indicates whether the Tableau hyper output data connector is available in Salesforce (true) or not (false). Available in API version 51.0 and later. |
| enable​Use​Old​Charts​Look​And​Feel | boolean | Indicates whether this org allows the old charts look and feel for Lightning Experience reports and dashboards (true) or not (false). Available in API version 47.0 and later. |
| enable​Wave​Assets​New​Date​Version | boolean | Indicates whether the new date version for timezone support in Analytics assets is enabled in Salesforce (true) or not (false). Available in API version 51.0 and later. |
| enable​Wave​Custom​Fiscal | boolean | Indicates whether custom fiscal year is enabled for Analytics in Salesforce (true) or not (false). When enabled, custom fiscal year lets admins import custom fiscal year definitions from Salesforce to Analytics. Available in API version 50.0 and later. |
| enable​Wave​Index​MV​Dim | boolean | Indicates whether multivalve dimension indexing is enabled in Salesforce (true) or not (false). Available in API version 50.0 and later. |
| enable​Wave​Index​MV​Dim​V2 | boolean | Indicates whether version 2 multivalve dimension indexing is enabled in Salesforce (true) or not (false). Available in API version 52.0 and later. |
| enable​Wave​Multicurrency | boolean | Indicates whether CRM Analytics multiple currencies is enabled (true) or not (false). Available in API version 56.0 and later. (Beta) |
| enable​Wave​Lwc​Dashboards | boolean | Indicates whether embedded Analytics dashboards are rendered in Lightning Experience using a Lightning Web Component (true) or the legacy Aura Component (false). Available in API version 55.0 and 56.0. Removed in API version 57.0. |
| enable​Wave​Record​Navigation | boolean | Indicates whether browser tab navigation for record actions from Analytics is enabled in Salesforce (true) or not (false). Available in API version 48.0 and later. |
| enable​Wave​Replication | boolean | Indicates whether replication (extract) for Salesforce objects is enabled in Salesforce (true) instead of SFDC Digest (false). Available in API version 47.0 and later. |
| enable​Wave​Sharing​Inheritance | boolean | Indicates whether Analytics data can inherit sharing and security settings for their source object in Salesforce (true) or not (false). Available in API version 47.0 and later. |
| enable​Wave​Sql​CF​Indexing | boolean | Indicates whether indexing for custom fiscal dates in SQL queries is enabled in Salesforce (true) or not (false). Available in API version 58.0 and later. |
| enable​Wave​Sql​In​Query​Api | boolean | Indicates whether SQL is enabled for CRM Analytics in the Query API in Salesforce (true) or not (false). Available as Beta in API version 53.0. Removed for GA in API version 54.0. |
| enable​Wave​Template | boolean | Indicates whether Analytics templates are enabled for this org (true) or not (false). Removed in API version 51.0. |
| enable​Wave​Trended​Dataset​Cleanup | boolean | Indicates whether this org allows automatic deletion of inactive trended datasets (true) or not (false). Available in API version 47.0 and later. |
| enable​Write​To​Data​Cloud | boolean | Indicates whether CRM Analytics recipe output to Data 360 is enabled (true) or not (false). Available in API version 60.0 and later. (Beta) |
| etl​Orchestration​Pref | boolean | Indicates whether Data Prep recipe orchestration is enabled (true) or not (false). Available in API version 54.0 and later. (Beta) |
| incremental​Upsert​Enabled | boolean | Indicates whether the incremental upsert operation is enabled for CRM Analytics recipe output nodes (true) or not (false). Available in API version 66.0 and later. |
| inherit​Sharing​For​Non​Oppty​Objects | boolean | Indicates whether medium visibility support for Analytics sharing inheritance for all Salesforce objects besides the Opportunity object is available in Salesforce (true) or not (false). Available in API version 48.0 and 49.0. Removed in API version 50.0. |
| inherit​Sharing​For​Oppty​Object | boolean | Indicates whether medium visibility support for Analytics sharing inheritance for the Opportunity object is available in Salesforce (true) or not (false). Available in API version 48.0 and 49.0. Removed in API version 50.0. |
| is​Discovery​Optimization​Enabled | boolean | Indicates whether Einstein Discovery optimization is enabled (true) or not (false). Available in API version 58.0 and later. (Beta) |
| is​High​Volume​Pushback​Enabled | boolean | Indicates whether Einstein Discovery high volume push back is enabled in Salesforce (true) or not (false). Available in API version 58.0 and later. |
| max​Hours​App​In​Progress | integer | The maximum number of hours an embedded application can have the status InProgress before it’s canceled. Available in API version 50.0 and later. |
| query​Caching​Opt​Out | boolean | Indicates whether the option to cache query results is enabled (true) or not (false). Available in API version 59.0 and later. |
| recipe​Direct​Data​Pref | boolean | Indicates whether the option to enable Data Prep recipe direct data loading is available (true) or not (false). Available in API version 53.0 and later. |
| recipe​Fiscal​Pref | boolean | Indicates whether the option to enable Data Prep recipe custom fiscal settings is available (true) or not (false). Available in API version 53.0 and later. |
| recipe​Pre​Caching​Opt​Out | boolean | Indicates whether the option to disable Data Prep recipe pre-step caching is available (true) or not (false). Available in API version 53.0 and later. |
| recipe​Staged​Data​Pref | boolean | Indicates whether staged data for Data Prep recipes is available in Salesforce (true) or not (false). Available in API version 53.0 and later. |
| replace​Blank​Measures​With​Nulls | boolean | Indicates whether null values are supported in measures (true) or not (false). If enabled (true), the implicit default value for blank measures is null. Available in API version 48.0 and later. |
| set​Wave​Is​Year​End​Fiscal​Year | boolean | Indicates whether the Analytics year end is the fiscal year end (true) or not (false). This preference is only applicable when enableWaveCustomFiscal is true. If false, the fiscal year end is the calendar year end. Available in API version 50.0 and later. |
| sonic​Enabled | boolean | Indicates whether the Sonic feature is available in Salesforce (true) or not (false). Available in API version 51.0 and later. |
| turn​On​Time​Zones | boolean | Indicates whether the timezone feature is available in Salesforce (true) or not (false). Available in API version 48.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of the Analytics.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the Analytics settings metadata:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AnalyticsSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableWaveTemplate>true</enableWaveTemplate>
    <enableInsights>true</enableInsights>
    <canAccessAnalyticsViaAPI>true</canAccessAnalyticsViaAPI>
</AnalyticsSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Analytics</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
