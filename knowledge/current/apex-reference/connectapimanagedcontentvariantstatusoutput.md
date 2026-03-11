---
title: "ConnectApi.ManagedContentVariantStatusOutput"
domain: apex-reference
topic: connectapimanagedcontentvariantstatusoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.225Z
keywords: [ConnectApi.ManagedContentVariantStatusOutput, See]
---

# ConnectApi.ManagedContentVariantStatusOutput

# ConnectApi.ManagedContentVariantStatusOutput

Information about a managed content variant's status in the authoring space.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| label | String | Localized label for the status. | 60.0 |
| status | ConnectApi.​ManagedContent​VariantStatus | Status of the managed content variant. Values are:Draft—Content isn’t published.Published—Content is published and available for use in your live sites.Revised—Content that’s published and edited. Publish this content to make the changes available for use in your live sites. | 60.0 |

#### See Also

-   [ConnectApi.ManagedContentDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_document.htm "Information about a piece of managed content in an authoring space.")
    
-   [ConnectApi.ManagedContentVariant](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_variant.htm "Managed content variant.")