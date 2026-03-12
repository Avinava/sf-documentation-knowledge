---
title: "Image Upload Basics"
domain: mobile-offline
topic: image-upload-basics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.069Z
estimatedTokens: 111
keywords: [Image, Upload, Basics, Uploading, LWC, features, offline, two-step, process, createContentDocumentAndVersion, file, adapter, creates, ContentDocument, ContentVersion]
---

# Image Upload Basics

> Uploading an image from an LWC using features supported offline is a two-step process.
  First, use createContentDocumentAndVersion to upload the
  image file. This adapter creates ContentDocument and ContentVersion records for the file upload. After the ContentDocument and ContentVersion exist, use createRecord to
  create the ContentDocumentLink record that relates the image
  upload to the record you want to attach it to.

# Image Upload Basics

Uploading an image from an LWC using features supported offline is a two-step process. First, use createContentDocumentAndVersion to upload the image file. This adapter creates ContentDocument and ContentVersion records for the file upload. After the ContentDocument and ContentVersion exist, use createRecord to create the ContentDocumentLink record that relates the image upload to the record you want to attach it to.
