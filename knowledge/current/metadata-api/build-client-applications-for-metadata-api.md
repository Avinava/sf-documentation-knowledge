---
title: "Build Client Applications for Metadata API"
domain: metadata-api
topic: build-client-applications-for-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.170Z
keywords: [Build, Client, Applications, Metadata, API]
---

# Build Client Applications for Metadata API

# Build Client Applications for Metadata API

Use Metadata API to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment. Metadata API is intended for managing customizations and for building tools that can manage the metadata model, not the data itself.

Salesforce CLI automates the underlying calls of Metadata API. However, you can use these calls directly with your own client application. This guide gives you all the information you require to start writing applications that directly use Metadata API to manage customizations for your organization. It shows you how to get started with File-Based Development. For an example of CRUD-Based Development, see [Java Sample for CRUD-Based Development with Synchronous Calls](atlas.en-us.api_meta.meta/api_meta/meta_calls_intro.htm#title_java_sample_code_SOAP_sync).