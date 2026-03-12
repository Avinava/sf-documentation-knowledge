---
title: "Custom Objects for Sync Management"
domain: retail-api
topic: custom-objects-for-sync-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.669Z
estimatedTokens: 2181
keywords: [Custom, Objects, Sync, Management, Consumer, Goods, Cloud, data, model, support]
---

# Custom Objects for Sync Management

> Consumer Goods Cloud data model provides custom objects and fields to support sync
  management.

# Custom Objects for Sync Management

Consumer Goods Cloud data model provides custom objects and fields to support sync management.

-   **[cgc\_sync\_\_Sync\_API\_Log\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_api_log__c.htm)**
    Stores performance information that's executed on synchronization endpoints. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Client\_App\_Profile\_Mapping\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_client_app_profile_mapping__c.htm)**
    Maps either a user, role, or profile to a specific sync configuration. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Client\_Registration\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__client_registration__c.htm)**
    Stores the details of the Consumer Goods Cloud offline mobile app device that a synchronization request to Salesforce is initiated from. This object is available in API version 61.0 and later.
-   **[cgc\_sync\_\_Sync\_Config\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_config__c.htm)**
    Represents the settings for synchronization engine client and its backend. For example, background sync, sync on startup, and Apex endpoint thresholds. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_ID\_Mapping\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_id_mapping__c.htm)**
    Contains information about the mappings of the local mobile application IDs to Salesforce IDs. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_History\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_history__c.htm)**
    Stores information about every sync that's performed on the mobile app along with its status information and associated Key Performance Indicators (KPIs). This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_History\_Detail\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_history_detail__c.htm)**
    Contains detailed information about all sync history records. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Message\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_message__c.htm)**
    Represents the messages that are exposed to a mobile app user during the sync process. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Message\_Translation\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_message_translation__c.htm)**
    Contains translated sync messages. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Metadata\_Changes\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_metadata_changes__c.htm)**
    Stores the timestamps for the changes that are made in the metadata. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_Component\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_component__c.htm)**
    Contains the settings for different customizable UI components in the theme. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_Domain\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_domain__c.htm)**
    Stores information about domains that are available as dropdown boxes in the mobile app. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_Depl\_Pkg\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_depl_pkg__c.htm)**
    Deployment packages that contain application runtime artifacts of the mobile app. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_Depl\_Pkg\_As\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_depl_pkg_as__c.htm)**
    Contains information about the recipient of the deployment package. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_Depl\_Pkg\_Inst\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_depl_pkg_inst__c.htm)**
    Maintains a record of the installed deployment packages, their installation timestamps, and devices on which those packages are deployed. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_Installation\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_installation__c.htm)**
    Contains information about the user to whom the deployment package is to be distributed. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_Log\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_log__c.htm)**
    Stores the error messages and warnings that occurred in the mobile app. Such error messages and warnings are uploaded every time a user runs the upload to Salesforce action in the mobile app. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_Macro\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_macro__c.htm)**
    Contains the color macros that are used for themes. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_PL\_Config\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_pl_config__c.htm)**
    Contains the mapping information of picklists for dropdown boxes in the mobile app. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_PL\_Map\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_pl_map__c.htm)**
    Contains the mapping information of picklists and dropdown boxes in the mobile application. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_PL\_Map\_Ext\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_pl_map_ext__c.htm)**
    Contains the mapping information of picklists and dropdown boxes in the mobile app. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_PL\_Repo\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_pl_repo__c.htm)**
    Represents the repository of dropdown boxes in a mobile app. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Mobile\_App\_Theme\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_mobile_app_theme__c.htm)**
    Represents the themes of a mobile app. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Named\_Fetch\_Tree\_Nodes\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_named_fetch_tree_nodes__c.htm)**
    Contains information about the nodes that are used to construct the tree structure of sync objects. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Named\_Query\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_named_query__c.htm)**
    Contains details and SOQL (Salesforce Object Query Language) statements for a named query. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Remote\_Request\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_remote_request__c.htm)**
    Stores requests to trigger technical activities on the mobile app. For example, data resupply and clean-up upload queue. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Report\_Links\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_report_links__c.htm)**
    Contains information about the conjunction object for reports and related logs. This object is available in API version 53.0 and later.
-   **[cgc\_sync\_\_Sync\_Tracked\_Object\_Config\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_tracked_object_config__c.htm)**
    Contains configurations for tracked objects including data distribution, sync settings, and client schema. This object is available in API version 53.0 and later.

## Related Topics

- cgc_sync__Sync_API_Log__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_api_log__c.htm)
- cgc_sync__Sync_Client_App_Profile_Mapping__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_client_app_profile_mapping__c.htm)
- cgc_sync__Sync_Client_Registration__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__client_registration__c.htm)
- cgc_sync__Sync_Config__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_config__c.htm)
- cgc_sync__Sync_ID_Mapping__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_id_mapping__c.htm)
- cgc_sync__Sync_History__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_history__c.htm)
- cgc_sync__Sync_History_Detail__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_history_detail__c.htm)
- cgc_sync__Sync_Message__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_message__c.htm)
- cgc_sync__Sync_Message_Translation__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_message_translation__c.htm)
- cgc_sync__Sync_Metadata_Changes__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgc_sync_r1__sync_metadata_changes__c.htm)
