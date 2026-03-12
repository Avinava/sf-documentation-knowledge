---
title: "Upload Files"
domain: uiapi
topic: upload-files
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:20.062Z
estimatedTokens: 586
keywords: [Upload, Files, documents, images, file, new, version]
---

# Upload Files

> Upload documents and images or update the file with a new
      version.

# Upload Files

Upload documents and images or update the file with a new version.

Salesforce stores files uploaded to a record or group as a ContentDocument. Each file has a ContentVersion record that corresponds to a specific version of the file. Additionally, ContentDocumentLink holds the polymorphic relationships between a file and where it's shared, such as a users, groups, and records. For information about working with files, see [ContentDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm "HTML (New Window)") in *Object Reference for Salesforce and Lightning Platform*.

User Interface API provides two ways to upload a file in a request.

-   [Upload a New File](#upload-file)
-   [Upload a File Version](#upload-version)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

To prevent duplication of file uploads, such as in situations where the network connection is unstable, use [Idempotency Record Writes](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_idempotent.htm "Use idempotent record writes to avoid duplication of records and server operations, which can occur when an app or client encounters a network connection issue.").

## Upload a New File

This request uploads an image with the .csv file extension. It creates a new ContentDocument, ContentVersion, and ContentDocumentLink in one request. After the file is uploaded, you can view it in [Files home](https://help.salesforce.com/s/articleView?id=experience.collab_files_using.htm&type=5&language=en_US).

Example POST Request

```

```

```

```

Example CURL Request

```

```

Example Response

```

```

## Upload a File Version

This request uploads a new version of an image file with a new file name. It creates a new ContentVersion, and updates the existing objects to reference the new ContentVersion.

Example POST Request

```

```

```

```

Example CURL Request

```

```

Example Response

```

```

#### See Also

-   [Upload a New File Version](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_contentdocument.htm "Upload a new document or image version.")

-   [Upload a File](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_contentversion.htm "Upload a file such as a document or image.")

## Code Examples

```
POST /ui-api/records/content-documents/content-versions
```

```
{
  "description": "My test file",
  "title": "CSV File"
}
```

```
curl -H "X-PrettyPrint: 1"
-F 'json={"title":"CSV File", "description":"My test file"};type=application/json'
-F 'fileData=@aa.csv;type=application/octet-stream'
-X POST https://{instance-name}.salesforce.com/services/data/v57.0/ui-api/records/content-documents/content-versions
-H 'Authorization: Bearer your_access_token_here'
```

```
{
  "contentDocument" : {
    "apiName" : "ContentDocument",
    "childRelationships" : { },
    "eTag" : "32e236323d9e6feea5412bb694a9b33d",
    "fields" : {
      "CreatedDate" : {
        "displayValue" : "11/2/2022, 11:13 AM",
        "value" : "2022-11-02T18:13:53.000Z"
      },
      "Description" : {
        "displayValue" : null,
        "value" : "My test file"
      },
      "Id" : {
        "displayValue" : null,
        "value" : "069RM0000008MbJYAU"
      },
      "LastModifiedById" : {
        "displayValue" : null,
        "value" : "005RM000002dpIzYAI"
      },
      "LastModifiedDate" : {
        "displayValue" : "11/2/2022, 11:13 AM",
        "value" : "2022-11-02T18:13:53.000Z"
      },
      "SystemModstamp" : {
        "displayValue" : null,
        "value" : "2022-11-02T18:13:54.000Z"
      },
      "Title" : {
        "displayValue" : null,
        "value" : "CSV File"
      }
    },
    "id" : "069RM0000008MbJYAU",
    "lastModifiedById" : "005RM000002dpIzYAI",
    "lastModifiedDate" : "2022-11-02T18:13:53.000Z",
    "recordTypeId" : null,
    "recordTypeInfo" : null,
    "systemModstamp" : "2022-11-02T18:13:54.000Z",
    "weakEtag" : 1667412834000
  },
  "contentDocumentLinks" : [ {
    "apiName" : "ContentDocumentLink",
    "childRelationships" : { },
    "eTag" : "a9e9ca5f7e2eb85af2aef5ed122350c2",
    "fields" : {
      "ContentDocumentId" : {
        "displayValue" : null,
        "value" : "069RM0000008MbJYAU"
      },
      "Id" : {
        "displayValue" : null,
        "value" : "06ARM00000095a72AA"
      },
      "LinkedEntityId" : {
        "displayValue" : null,
        "value" : "005RM000002dpIzYAI"
      },
      "ShareType" : {
        "displayValue" : "Inferred",
        "value" : "I"
      },
      "SystemModstamp" : {
        "displayValue" : null,
        "value" : "2022-11-02T18:13:54.000Z"
      }
    },
    "id" : "06ARM00000095a72AA",
    "lastModifiedById" : null,
    "lastModifiedDate" : null,
    "recordTypeId" : null,
    "recordTypeInfo" : null,
    "systemModstamp" : "2022-11-02T18:13:54.000Z",
    "weakEtag" : 1667412834000
  } ],
  "contentVersion" : {
    "apiName" : "ContentVersion",
    "childRelationships" : { },
    "eTag" : "0cbf5c6af463dbda0d0741eeda132d7a",
    "fields" : {
      "ContentSize" : {
        "displayValue" : null,
        "value" : "26224"
      },
      "CreatedDate" : {
        "displayValue" : "11/2/2022, 11:13 AM",
        "value" : "2022-11-02T18:13:53.000Z"
      },
      "Description" : {
        "displayValue" : null,
        "value" : "My test file"
      },
      "Id" : {
        "displayValue" : null,
        "value" : "068RM0000008SBhYAM"
      },
      "LastModifiedById" : {
        "displayValue" : null,
        "value" : "005RM000002dpIzYAI"
      },
      "LastModifiedDate" : {
        "displayValue" : "11/2/2022, 11:13 AM",
        "value" : "2022-11-02T18:13:53.000Z"
      },
      "SystemModstamp" : {
        "displayValue" : null,
        "value" : "2022-11-02T18:13:54.000Z"
      },
      "Title" : {
        "displayValue" : null,
        "value" : "CSV File"
      },
      "VersionDataUrl" : {
        "displayValue" : null,
        "value" : "https://{instance-name}.documentforce.com/sfc/servlet.shepherd/version/download/068RM0000008SBh"
      }
    },
    "id" : "068RM0000008SBhYAM",
    "lastModifiedById" : "005RM000002dpIzYAI",
    "lastModifiedDate" : "2022-11-02T18:13:53.000Z",
    "recordTypeId" : "012000000000000AAA",
    "recordTypeInfo" : null,
    "systemModstamp" : "2022-11-02T18:13:54.000Z",
    "weakEtag" : 1667412834000
  }
```

```
POST /ui-api/records/content-documents/069RM0000008MbEYAU/content-versions
```

## Related Topics

- Idempotency Record Writes (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_idempotent.htm)
- Upload a New File Version (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_contentdocument.htm)
- Upload a File (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_contentversion.htm)
