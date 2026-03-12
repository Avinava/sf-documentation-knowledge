---
title: "RetrievalSummaryDataRefresh Class"
domain: financial-services-cloud-object-reference
topic: retrievalsummarydatarefresh-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.921Z
estimatedTokens: 224
keywords: [RetrievalSummaryDataRefresh, callable, wrapper, refresh, retrieval, summary, definition, associated, rollups]
---

# RetrievalSummaryDataRefresh Class

> Use the callable RetrievalSummaryDataRefresh wrapper class to refresh retrieval summary
    definition associated rollups.

# RetrievalSummaryDataRefresh Class

Use the callable RetrievalSummaryDataRefresh wrapper class to refresh retrieval summary definition associated rollups.

## Namespace

[fschousehold](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_namespace_fschousehold.htm "The fschousehold namespace provides classes used in the Financial Goals and Plans FlexCards.")

## Example

Refresh rollups that're associated with a retrieval summary definition.

-   Invoke sync.

    ```

    ```

-   Get the last refresh details of the record rollups.

    ```

    ```


-   **[RetrievalSummaryDataRefresh Methods](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_fschousehold_RetrievalSummaryDataRefresh_methods.htm)**
    RetrievalSummaryDataRefresh is a callable class. Its only method is call.

## Code Examples

```apex
Map<String, Object> args = new Map<String, Object>();
Map<String, String> input = new Map<String, String>();
Map<String, Object> output = new Map<String, Object>();
input.put('AccountId', '001SG00000iDsGQYA0');
input.put('RetrievalSummaryDefinitionDeveloperName', 'HouseholdAPIForWealthManagement');
args.put('input', input);
args.put('output', output);
fschousehold.RetrievalSummaryDataRefresh dataRefreshWrapper = new fschousehold.RetrievalSummaryDataRefresh();
dataRefreshWrapper.call('refreshRetrievalSummaryData', args);
System.debug(output);
```

```apex
Map<String, Object> args = new Map<String, Object>();
Map<String, String> input = new Map<String, String>();
Map<String, Object> output = new Map<String, Object>();
input.put('AccountId', '001SG00000iDsGQYA0');
input.put('RetrievalSummaryDefinitionDeveloperName', 'HouseholdAPIForWealthManagement');
args.put('input', input);
args.put('output', output);
fschousehold.RetrievalSummaryDataRefresh dataRefreshWrapper = new fschousehold.RetrievalSummaryDataRefresh();
dataRefreshWrapper.call(‘fetchLastRefreshDetails’, args);
System.debug(output);
```

## Related Topics

- fschousehold (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_namespace_fschousehold.htm)
- RetrievalSummaryDataRefresh Methods (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_fschousehold_RetrievalSummaryDataRefresh_methods.htm)
