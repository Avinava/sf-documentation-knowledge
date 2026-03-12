---
title: "liveAgent:clientChatFileTransfer"
domain: pages
topic: liveagentclientchatfiletransfer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.699Z
estimatedTokens: 618
keywords: [liveAgent, clientChatFileTransfer, file, upload, area, chat, window, visitor, send, agent, Attributes]
---

# liveAgent:clientChatFileTransfer

> The file upload area in a chat window where a visitor can send a file to an agent.

# liveAgent:clientChatFileTransfer

The file upload area in a chat window where a visitor can send a file to an agent.

Must be used within <liveAgent:clientChat\>. Each chat window can have only one file upload.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| fileTransferCanceledLabel | String | A string specifying the message that appears in the chat log when the file transfer request is canceled; the default English label is "The agent has canceled the file transfer request.". |  | 30.0 |  |
| fileTransferCancelFileLabel | String | A string specifying the label for the button to be clicked to cancel the file transfer; the default English label is "Cancel". |  | 30.0 |  |
| fileTransferDropFileLabel | String | A string specifying the label that indicates where the file can be dropped; the default English label is "Drop here.". |  | 30.0 |  |
| fileTransferFailedLabel | String | A string specifying the message that appears in the chat log when the file transfer fails; the default English label is "Your file upload failed. Please wait for instructions from the agent.". |  | 30.0 |  |
| fileTransferSendFileLabel | String | A string specifying the label for the button to be clicked to upload the file; the default English label is "Send File". |  | 30.0 |  |
| fileTransferSuccessfulLabel | String | A string specifying the message that appears in the chat log when the file transfer is successful; the default English label is "Your file has been successfully uploaded to the agent.". |  | 30.0 |  |
| fileTransferUploadLabel | String | A string specifying the label that appears as a link which can be clicked to select a file to be uploaded; the default English label is "Upload or drag your file here.". |  | 30.0 |  |
| fileTransferUploadMobileLabel | String | A string specifying the label for mobile that appears as a link which can be clicked to select a file to be uploaded; the default English label is "Upload your file here.". |  | 30.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [liveAgent:clientChat](atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)

## Related Topics

- liveAgent:clientChat (atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)
