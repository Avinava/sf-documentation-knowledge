---
title: "setTestGetFilePreview(communityId, repositoryId,
      repositoryFileId, formatType, startPageNumber, endPageNumber, result)"
domain: apex-reference
topic: settestgetfilepreviewcommunityid-repositoryid-repositoryfileid-formattype-startp
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetFilePreview, communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber, result, Register, ConnectApi.FilePreview, object, returned, matching, getFilePreview, method, called, test, context., same, parameters]
---

# setTestGetFilePreview(communityId, repositoryId,
      repositoryFileId, formatType, startPageNumber, endPageNumber, result)

> Register a ConnectApi.FilePreview object to be
    returned when the matching getFilePreview(communityId,
      repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber) method is
    called in a test context. Use the method with the same parameters or you receive an
    exception.

### setTestGetFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber, result)

Register a ConnectApi.FilePreview object to be returned when the matching getFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetFilePreview(String communityId, String repositoryId, String repositoryFileId, ConnectApi.FilePreviewFormat formatType, Integer startPageNumber, Integer endPageNumber, ConnectApi.FilePreview result)

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

result

Type: [ConnectApi.FilePreview](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview.htm#apex_connectapi_output_file_preview "A file preview.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getFilePreview(communityId, repositoryId, repositoryFileId, formatType, startPageNumber, endPageNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getFilePreview_4 "Get a page or page range of a repository file preview in an Experience Cloud site.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")