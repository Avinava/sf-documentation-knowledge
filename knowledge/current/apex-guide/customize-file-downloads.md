---
title: "Customize File Downloads"
domain: apex-guide
topic: customize-file-downloads
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.945Z
estimatedTokens: 629
namespace: Sfc
keywords: [Customize, File, Downloads, customize, behavior, files, users, attempt, download, Apex, callback., ContentVersion, supports, modified, file, such, antivirus, scanning, information, rights]
---

# Customize File Downloads

> You can customize the behavior of files when users attempt to download them using an
  Apex callback. ContentVersion supports modified file behavior, such as antivirus scanning and
  information rights management (IRM), after the download operation. File download customization is
  available in API version 39.0 and later.

**Namespace:** `Sfc`

# Customize File Downloads

You can customize the behavior of files when users attempt to download them using an Apex callback. ContentVersion supports modified file behavior, such as antivirus scanning and information rights management (IRM), after the download operation. File download customization is available in API version 39.0 and later.

Customization code runs before download and determines whether the download can proceed.

The Sfc namespace contains Apex objects for customizing the behavior of Salesforce Files before they are downloaded. ContentDownloadHandlerFactory provides an interface for customizing file downloads. The ContentDownloadHandler class defines values related to whether download is allowed, and what to do otherwise. The ContentDownloadContext enum is the context in which the download takes place.

You can use Apex to customize multiple-file downloads from the Content tab in Salesforce Classic. The Apex function parameter List<ID> handles a list of ContentVersion IDs.

Customization also works on content packs and content deliveries. List<ID> is a list of the version IDs in a ContentPack. Setting isDownloadAllowed = false on a multi-file or ContentPack download causes the entire download to fail. You can pass a list of the problem files back to an error page via URL parameters in redirectUrl.

## Example

-   Prevent a file from downloading based on the user profile, device being used, or file type and size.
-   Apply IRM control to track information, such as the number of times a file has been downloaded.
-   Flag suspicious files before download, and redirect them for antivirus scanning.

## Flow Execution

When a download is triggered either from the UI, Connect API, or an sObject call retrieving ContentVersion.VersionData, implementations of the Sfc.ContentDownloadHandlerFactory are looked up. If no implementation is found, download proceeds. Otherwise, the user is redirected to what has been defined in the ContentDownloadHandler#redirectUrl property. If several implementations are found, they are cascade handled (ordered by name) and the first one for which the download isn’t allowed is considered.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If a SOAP API operation triggers a download, it goes through the Apex class that checks whether the download is allowed. If a download isn’t allowed, a redirection can’t be handled, and an exception containing an error message is returned instead.
