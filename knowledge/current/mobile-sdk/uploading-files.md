---
title: "Uploading Files"
domain: mobile-sdk
topic: uploading-files
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.565Z
estimatedTokens: 250
keywords: [Uploading, Files, Native, mobile, platforms, support, file, provide, path, local, uploaded, title, know, MIME, specify]
---

# Uploading Files

> Native mobile platforms support a method for uploading a file.
You provide a path to the local file to be uploaded, the name or title
of the file, and a description. If you know the MIME type, you can
specify that as well. The upload method returns a platform-specific
request object that can upload 

# Uploading Files

Native mobile platforms support a method for uploading a file. You provide a path to the local file to be uploaded, the name or title of the file, and a description. If you know the MIME type, you can specify that as well. The upload method returns a platform-specific request object that can upload the file to the server. When you send this request to the server, the server creates a file with version set to 1.

Use the following methods for the given app type:

| App Type | Upload Method | Signature |
| --- | --- | --- |
| Android native | FileRequests.uploadFile() | public static RestRequest  uploadFile( File theFile,  String name,  String description,  String mimeType)  throws UnsupportedEncodingException |
| iOS native | - requestForUploadFile: name:description:mimeType: | - (SFRestRequest *)  requestForUploadFile:(NSData *)data  name:(NSString *)name  description:(NSString *)description  mimeType:(NSString *)mimeType |
| Hybrid (Android and iOS) | N/A | N/A |

## Code Examples

```apex
public static RestRequest 
uploadFile(
File theFile, 
String name, 
String description, 
String mimeType) 
throws UnsupportedEncodingException
```

```
- requestForUploadFile:
name:description:mimeType:
```

```
- (SFRestRequest *) 
requestForUploadFile:(NSData *)data 
name:(NSString *)name 
description:(NSString *)description 
mimeType:(NSString *)mimeType
```
