---
title: "Retrieve the Email Folder Hierarchy"
domain: mc-apis
topic: retrieve-the-email-folder-hierarchy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:23.683Z
estimatedTokens: 305
keywords: [Retrieve, Email, Folder, Hierarchy, retrieving, Why, How, Sample, NET, Code, PHP, SOAP, Envelope, Items]
---

# Retrieve the Email Folder Hierarchy

> This page contains information  about retrieving the email folder hierarchy.

# Retrieve the Email Folder Hierarchy

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

This page contains information about retrieving the email folder hierarchy.

## Why Retrieve the Email Folder Hierarchy

This API call retrieves a collection of folders. Each folder has the following information:

-   ID - The ID of the folder

-   ParentID - The ID of the folder this folder is nested within (0 if this is a parent folder)

-   Name - The name of the folder

This call retrieves only the email folder hierarchy, not the actual email messages.

## How To Retrieve the Email Folder Hierarchy

Use the sample code below as an example to construct your own API calls.

### Sample .NET Code

### Sample PHP Code

To retrieve the email folder hierarchy in a single business unit, add the following lines of code to the example:

### SOAP Envelope

## Related Items

[REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
