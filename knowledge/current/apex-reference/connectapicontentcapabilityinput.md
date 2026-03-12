---
title: "ConnectApi.ContentCapabilityInput"
domain: apex-reference
topic: connectapicontentcapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.941Z
estimatedTokens: 421
keywords: [ConnectApi.ContentCapabilityInput, Attach, file, comment, new, already, uploaded, Salesforce]
---

# ConnectApi.ContentCapabilityInput

> Attach or update a file on a comment. Use this class to attach a new
      file or update a file that has already been uploaded to Salesforce.

# ConnectApi.ContentCapabilityInput

Attach or update a file on a comment. Use this class to attach a new file or update a file that has already been uploaded to Salesforce.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

To attach or remove files from a feed post (instead of a comment) in version 36.0 and later, use [ConnectApi.FilesCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_content_capability.htm "Attach up to 10 files that have already been uploaded or remove one or more files from a feed element.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| content​DocumentId | String | ID of the existing content. | Required for existing content | 32.0 |
| description | String | Description of the file to be uploaded. | Optional | 32.0 |
| sharingOption | ConnectApi.​FileSharing​Option | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | Optional | 35.0 |
| title | String | Title of the file. This value is used as the file name for new content. For example, if the title is My Title, and the file is a .txt file, the file name is My Title.txt. | Required for new content | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilitiesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm "A container for all capabilities that can be included when creating a feed element.")

## Related Topics

- ConnectApi.FeedElementCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm)
- ConnectApi.FilesCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_content_capability.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​FileSharing​Option (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.FeedElementCapabilitiesInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capabilities.htm)
