---
title: "ConnectApi.ExtensionsCapabilityInput"
domain: apex-reference
topic: connectapiextensionscapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.106Z
estimatedTokens: 258
keywords: [ConnectApi.ExtensionsCapabilityInput, extensions, associated, feed, element]
---

# ConnectApi.ExtensionsCapabilityInput

> Create or update extensions associated with a feed
    element.

# ConnectApi.ExtensionsCapabilityInput

Create or update extensions associated with a feed element.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| itemsToAdd | List<ConnectApi.​ExtensionInput> | List of extensions to associate with the feed element. | Required for creating an extensionOptional for updating an extension | 40.0 |
| itemsToRemove | List<String> | List of attachment IDs to remove from the feed element. | Optional for updating an extensionDon’t specify for creating an extension | 41.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm "A container for all capabilities that can be included when creating a feed element.")

## Related Topics

- ConnectApi.FeedElementCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ExtensionInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_extension.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.FeedElementCapabilitiesInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm)
