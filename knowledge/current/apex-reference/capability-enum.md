---
title: "Capability Enum"
domain: apex-reference
topic: capability-enum
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:29.437Z
estimatedTokens: 791
keywords: [Capability, Declares, which, functional, operations, external, system, supports., specifies, required, endpoint, settings, data, source, definition., Usage, Values]
---

# Capability Enum

> Declares which functional operations the external system supports. Also specifies
    required endpoint settings for the external data source definition.

# Capability Enum

Declares which functional operations the external system supports. Also specifies required endpoint settings for the external data source definition.

## Usage

The DataSource.Provider class returns DataSource.Capability enum values, which:

-   Specify the functional capabilities of the external system.
-   Determine which endpoint settings are available on the external data source definition in Salesforce.

## Enum Values

The following are the values of the DataSource.Capability enum.

| Value | Description |
| --- | --- |
| MULTI_PICKLIST | The external system supports multi-picklist fields. |
| PICKLIST | The external system supports picklist fields. |
| QUERY_PAGINATION_SERVER_DRIVEN | With server-driven paging, the external system determines the page sizes and batch boundaries. The external system’s paging settings can optimize the external system’s performance and improve the load times for external objects in your org. Also, the external data set can change while your users or the Lightning Platform are paging through the result set. Typically, server-driven paging adjusts batch boundaries to accommodate changing data sets more effectively than client-driven paging.If you enable server-driven paging on an external data source, Salesforce ignores the requested page sizes, including the default queryMore() batch size of 500 rows. The pages returned by the external system determine the batches, but each page can’t exceed 2,000 rows. Also, the Apex code must generate a query token and use it to determine and fetch the next batch of results. |
| QUERY_TOTAL_SIZE | The external system can provide the total number of rows that meet the query criteria, even when requested to return a smaller batch size. This capability enables you to simplify how you paginate results by using queryMore(). |
| REQUIRE_ENDPOINT | Requires the administrator to specify the endpoint in the URL field in the external data source definition. |
| REQUIRE_HTTPS | Requires the endpoint URL to use secure HTTP. If REQUIRE_ENDPOINT isn’t declared, REQUIRE_HTTPS is ignored. |
| ROW_CREATE | Allows creating of external data. |
| ROW_DELETE | Allows deleting external data. |
| ROW_QUERY | Allows API and SOQL queries of the external data. Also allows reports on the external objects. |
| ROW_UPDATE | Allows updating external data. |
| SEARCH | Allows SOSL and Salesforce searches of the external data.When the custom adapter declares the SEARCH capability, you can control which external objects are searchable by selecting or deselecting Allow Search on each external object. However, syncing always overwrites the external object’s search status to match the search status of the external data source.Only text, text area, and long text area fields on external objects can be searched. If an external object has no searchable fields, searches on that object return no records. |

#### See Also

-   [*Salesforce Help:* Validate and Sync an External Data Source](https://help.salesforce.com/apex/HTViewHelpDoc?id=ext_data_sync_database.htm&language=en_US "Salesforce Help: Validate and Sync an External Data Source - HTML (New Window)")
