---
title: "Initialize the Upload"
domain: psc-api
topic: initialize-the-upload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:32.504Z
estimatedTokens: 210
keywords: [Initialize, Upload, user, selects, file, LWC, retrieves, Salesforce, Connect, API, Single-Part, Multi-Part]
---

# Initialize the Upload

> When a user selects a file, the LWC first retrieves the S3 upload parameters using the
  Salesforce Connect API.

# Initialize the Upload

When a user selects a file, the LWC first retrieves the S3 upload parameters using the Salesforce Connect API.

This retrieval is done through an Apex class (ConnectApiHelper) that calls the initializeFileUpload method. See [initializeFileUpload(inputRep)](atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_intilzeFileUploadMethod.htm "Used to create an outputRep instance with the below parameters.") to learn about the signature and parameters of the method.

## Single-Part Upload Response

Used for files less than or equal to 100 MB. The response contains a single fileUploadUrl.

```

```

## Multi-Part Upload Response

Used for files greater than 100 MB. The file is split into 100 MB chunks and the response provides an array of partUrl entries and an uploadId.

```

```

## Code Examples

```
{
"code": 200,
"contentHubUploadUrlRepresentations": [],
"fileId": "__sfdcroot__/Case/500SG000010DywSYAS/filename.txt",
"fileName": "filename.txt",
"fileUploadUrl": "https://<aws-bucket>.s3.us-east-2.amazonaws.com/...",
"message": "Initiate request for External file upload has been successfully completed for fileName: filename.txt",
"isMultiPartUpload": false,
"partSize": 0,
"repositoryId": "0XCSG0000002jfN",
"uploadId": null
}
```

```
{
//upload urls for each chunk
"code": 200,
"contentHubUploadUrlRepresentations": [
{ "partNumber": 1, "partUrl": "https://<aws-bucket>.s3.us-east-2.amazonaws.com/..." },
{ "partNumber": 2, "partUrl": "https://<aws-bucket>.s3.us-east-2.amazonaws.com/..." }
// ...
],
"fileId": "__sfdcroot__/Case/500SG000010DywSYAS/filename.mov",
"fileName": "filename.mov",
"fileUploadUrl": null,
"isMultiPartUpload": true,
"message": "Initiate request for External file upload has been successfully completed for fileName: filename.mov",
"partSize": 104857600,
"repositoryId": "0XCSG0000002jfN",
"uploadId": "7WOBJuX30tzKY9fVBWdH9vaoQM0GDzFlI3o4ZPCjI7U4byCSdgMBjUhYGBx7..."
}
```

## Related Topics

- initializeFileUpload(inputRep) (atlas.en-us.psc_api.meta/psc_api/apex_PublicSectrSltn_ContentHubFileUploadConnect_intilzeFileUploadMethod.htm)
