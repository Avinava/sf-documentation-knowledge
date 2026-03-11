---
title: "Action Launcher Metadata Types"
domain: omnistudio
topic: action-launcher-metadata-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.358Z
keywords: [Action, Launcher, Metadata, Types]
---

# Action Launcher Metadata Types

# Action Launcher Metadata Types

Use the Action Launcher metadata types to set up your Action Launcher deployment.

-   **[RecordActionDeployment](atlas.en-us.industries_reference.meta/industries_reference/meta_recordactiondeployment.htm)**  
    Represents configuration settings for the Actions & Recommendations, Action Launcher, and Bulk Action Panel components. For example, you can have a deployment that specifies which types of actions to display, default actions for channels, and the actions that users can add at runtime. If the component shows Next Best Action recommendations, the deployment configures which strategies to use and how recommendations appear. This type extends the Metadata metadata type and inherits its fullName field.