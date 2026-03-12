---
title: "Sync Ignored Fields Custom Metadata type"
domain: retail-api
topic: sync-ignored-fields-custom-metadata-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.062Z
estimatedTokens: 223
keywords: [Sync, Ignored, Custom, Metadata, specific, Salesforce, objects, omitted, synchronization, process, Version, Special, Access, Rules]
---

# Sync Ignored Fields Custom Metadata type

> Represents the specific fields of Salesforce objects omitted
			during the synchronization process.

# Sync Ignored Fields Custom Metadata type

Represents the specific fields of Salesforce objects omitted during the synchronization process.

## Version

Sync Ignored Fields custom metadata type components are available in API version 59.0 and later.

## Special Access Rules

To access this metadata type, you must enable the Consumer Goods license and install the Consumer Goods Cloud Mobile Sync package in your org.

## Fields

| Field Name | Description |
| --- | --- |
| Label | Field TypestringDescriptionLabel for the ignored field record. |
| Client_App_Id__c | Field TypestringDescriptionA unique client ID to differentiate between various syncing sources. |
| Field_Api_Name__c | Field TypestringDescriptionName of the field to ignore during sync process. |
| Object_Api_Name__c | Field TypestringDescriptionName of the object containing the field to ignore during sync process. |
