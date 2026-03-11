---
title: "Metadata API Edit Access"
domain: metadata-api
topic: metadata-api-edit-access
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.538Z
keywords: [Metadata, API, Edit, Access]
---

# Metadata API Edit Access

# Metadata API Edit Access

To use Metadata API, a user must have these things.

-   One of these editions: Enterprise, Unlimited, or Developer
-   Either the Modify Metadata Through Metadata API Functions OR Modify All Data permission
-   Permission that enables use of the feature supported by the metadata that they want to modify
-   Permission that enables their deployment tool, such as Salesforce CLI, or change sets

With the Modify Metadata Through Metadata API Functions permission, a user can access and edit metadata via Metadata API as long as the user has any additional permission needed to access certain metadata types. This additional permission information is listed in the Metadata API Developer Guide for each metadata type. With the Modify All Data permission, a user can access and edit all data.

The Modify Metadata Through Metadata API Functions permission doesn’t affect direct customization of metadata using Setup UI pages because those pages don’t use Metadata API for updates.

Some metadata, such as Apex, executes in system context, so be careful how you delegate the Modify Metadata Through Metadata API Functions permission. The Modify Metadata Through Metadata API Functions permission allows deployment of Apex metadata, but it doesn’t allow certain Apex development and debugging features that still require the Modify All Data permission.

The Modify Metadata Through Metadata API Functions permission is enabled automatically when either the Deploy Change Sets OR Author Apex permission is selected.

When the Manage Prompts user permission and the Modify Metadata Through Metadata API Functions permission are combined, users can manage In-App Guidance in Lightning Experience.