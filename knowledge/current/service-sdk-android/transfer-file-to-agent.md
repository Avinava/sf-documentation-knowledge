---
title: "Transfer File to Agent"
domain: service-sdk-android
topic: transfer-file-to-agent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.673Z
estimatedTokens: 952
keywords: [Transfer, File, Agent, Give, users, ability, files, chat, they, share, their, issues]
---

> Give users the ability to transfer files during a chat so they can share
    information about their issues.

# Transfer File to Agent

Give users the ability to transfer files during a chat so they can share information about their issues.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

The agent can request that the user transfer a file by clicking the **Attach File** button from the Service Cloud Console.

![Attach file in Service Cloud](/docs/resources/img/en-us/noversion?doc_id=images%2Flive-agent-attach-file.png&folder=service_sdk_android)

See [Transfer Files During a Chat](https://help.salesforce.com/apex/HTViewHelpDoc?id=live_agent_transfer_files.htm&language=en_US) in Salesforce Help for details about setting up this functionality in the Service Cloud Console.

With the default UI, the user sees a **FILE TRANSFER REQUESTED** message in the app and can then send a file using the camera button.

![Attach file from app](/docs/resources/img/en-us/noversion?doc_id=images%2Flive-agent-attach-file-android-app.png&folder=service_sdk_android)

If you're using the default UI, no coding is necessary in your app to get this behavior.

However, if you're using the [Core API](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_core_api.htm#android_chat_core_api "With the Chat Core API, you can access the functionality of Chat without a UI. This API is useful if you want to build your own UI and not use the default."), you must present your own file transfer UI based on file transfer events. Create a [FileTransferRequestListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/FileTransferRequestListener.html) and pass it to the [ChatClient](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatClient.html) using the [addFileTransferRequestListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatClient.html#addFileTransferRequestListener\(com.salesforce.android.chat.core.FileTransferRequestListener\)) method. This listener gives you access to two events.

onFileTransferRequest

The SDK calls this method when an agent requests a file transfer. You're given a [FileTransferAssistant](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/FileTransferAssistant.html) object, which lets you upload a file with the uploadFile method.

onFileTransferStatusChanged

The SDK calls this method when the status of a file transfer has changed. You're given a [FileTransferStatus](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/FileTransferStatus.html) enumerated type that describes the status of the file transfer.

You can use the following code sample as a starting point for your listener implementation.

In Java:

```

```

In Kotlin:

```

```

## Code Examples

```apex
class MyFileTransferRequestListener implements FileTransferRequestListener {

  private byte[] uploadFile = new byte[]; // TO DO: File to upload
  private String fileType = "image/png";  // TO DO: File type

  @Override 
  public void onFileTransferRequest (FileTransferAssistant fileTransferAssistant) {

    // TO DO: Prompt user and read the file from storage

    fileTransferAssistant.uploadFile(uploadFile, fileType);
  }

  @Override 
  public void onFileTransferStatusChanged (FileTransferStatus status) {

    switch (status) {
      case Completed:
        // TO DO: File transfer completed
        break;
      case Canceled:
        // TO DO: File transfer canceled
        break;
      case Failed:
        // TO DO: File transfer failed
        break;
      case LocalError:
        // TO DO: Local error with transfer
        break;
      case Requested:
        // TO DO: File transfer requested
        // NOTE: You'll also get a call to 
        // onFileTransferRequest during this state, 
        // where you can handle the request and 
        // then upload a file...
        break;
    }
  }
}
```

```
class MyFileTransferRequestListener : FileTransferRequestListener {

  var uploadFile = ByteArray(32768)   // TO DO: File to upload
  var fileType: String = "image/png"  // TO DO: File type

  override fun onFileTransferRequest(fileTransferAssistant: FileTransferAssistant?) {

    // TO DO: Prompt user and read the file from storage

    fileTransferAssistant?.uploadFile(uploadFile, fileType)
  }

  override fun onFileTransferStatusChanged(status: FileTransferStatus?) {

    when (status) {
      FileTransferStatus.Completed -> {
        // TO DO: File transfer completed
      }
      FileTransferStatus.Canceled -> {
        // TO DO: File transfer canceled
      }
      FileTransferStatus.Failed -> {
        // TO DO: File transfer failed
      }
      FileTransferStatus.LocalError -> {
        // TO DO: Local error with transfer
      }
      FileTransferStatus.Requested -> {
        // TO DO: File transfer requested
        // NOTE: You'll also get a call to
        // onFileTransferRequest during this state,
        // where you can handle the request and
        // then upload a file...
      }
    }
  }
}
```

## Related Topics

- Core
        API (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_core_api.htm)
