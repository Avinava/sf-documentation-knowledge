---
title: "Upload File Content to Amazon S3"
domain: psc-api
topic: upload-file-content-to-amazon-s3
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:32.508Z
estimatedTokens: 169
keywords: [Upload, File, Content, Amazon, code, snippet, below, LWC, component, add, Lightning, Single-Part, Multi-Part]
---

# Upload File Content to Amazon S3

> Use the code snippet below to create an LWC component to upload the file and add it to a
  Lightning page.

# Upload File Content to Amazon S3

Use the code snippet below to create an LWC component to upload the file and add it to a Lightning page.

Here, uploadParams is the output from the getS3UploadUrl function in the ConnectApiHelper Apex class. The LWC uses the URLs from the response of Initialize Upload to upload the files to the Amazon S3 bucket.

## Single-Part Upload

```

```

## Multi-Part Upload

For large files, the LWC splits the file into chunks of 100 MB and uploads them.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

Capture the E-tag returned by Amazon S3 for every successfully uploaded chunk.

```

```

## Code Examples

```
export default class SinglePartUploader {
async upload() {
const uploadUrl = this.uploadParams.fileUploadUrl.replaceAll('&amp;', '&');
const response = await fetch(uploadUrl, {
method: 'PUT',
body: this.file,
headers: {
'Content-Type': this.file.type
}
});

if (response.status !== 200) {
// Handle the error
}

// The upload completion process will be discussed in the next step
this.onComplete();
}
}
```

```
export default class MultiPartUploader {
async upload() {
const promises = this.uploadParams.contentHubUploadUrlRepresentations
.map(uploadUrlRep => this.uploadFileInParts(uploadUrlRep));
await Promise.all(promises);
// The upload completion process will be discussed in the next step
this.onComplete(this.uploadParts);
}

uploadFileInParts(uploadUrlRep) {
// Get the chunk for the part
const start = (uploadUrlRep.partNumber - 1) * this.uploadParams.partSize;
const end = Math.min(start + this.uploadParams.partSize, this.file.size);
const chunk = this.file.slice(start, end);

// Upload the chunk using fetch
const uploadUrl = uploadUrlRep.partUrl.replaceAll('&amp;', '&');
const response = await fetch(uploadUrl, {
method: 'PUT',
body: chunk,
headers: {
'Content-Type': this.file.type
}
});

if (response.status === 200) {
// The upload completion process will be discussed in the next step
this.uploadParts.push({
partNumber: uploadUrlRep.partNumber,
eTag: response.headers.get('ETag'),
});
}
else{
//Handle the error here
reject();
}

resolve();
}
}
```
