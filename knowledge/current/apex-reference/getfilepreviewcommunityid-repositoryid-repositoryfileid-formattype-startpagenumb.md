---
title: "getFilePreview(communityId, repositoryId, repositoryFileId,
      formatType, startPageNumber, endPageNumber)"
domain: apex-reference
topic: getfilepreviewcommunityid-repositoryid-repositoryfileid-formattype-startpagenumb
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.055Z
keywords: [getFilePreview, communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber, Get, page, range, repository, file, preview, Experience, Cloud, site., API, Version, Requires, Chatter]
---

# getFilePreview(communityId, repositoryId, repositoryFileId,
      formatType, startPageNumber, endPageNumber)

> Get a page or page range of a repository file preview in an Experience Cloud
    site.

### getFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber)

Get a page or page range of a repository file preview in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FilePreview getFilePreview(String communityId, String repositoryId, String repositoryFileId, ConnectApi.FilePreviewFormat formatType, Integer startPageNumber, Integer endPageNumber)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository file.

formatType

Type: [ConnectApi.FilePreviewFormat](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FilePreviewFormat_enum)

Specifies the format of the file preview. Values are:

-   Audio—Preview format is MP3.
-   Jpg—Preview format is JPG.
-   Pdf—Preview format is PDF.
-   Svg—Preview format is compressed SVG.
-   Thumbnail—Preview format is 240 x 180 PNG.
-   ThumbnailBig—Preview format is 720 x 480 PNG.
-   ThumbnailTiny—Preview format is 120 x 90 PNG.
-   Video—Preview format is MP4.

PDF previews are available for files of type DOC, DOCX, PPT, PPTX, TEXT, XLS, and XLSX. SVG files are generated on demand.

If you’re concerned that feature-rich SVG previews don’t work in your org, choose alternative file previews. To use JPG file previews, enter general in the Quick Find box in Setup. Select General Settings, and then select **Display alternative file previews**.

startPageNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The starting page number in the range of file preview URLs.

endPageNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The ending page number in the range of file preview URLs.

#### Return Value

Type: [ConnectApi.FilePreview](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview.htm#apex_connectapi_output_file_preview "A file preview.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetFilePreview_4 "Register a ConnectApi.FilePreview object to be returned when the matching getFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")