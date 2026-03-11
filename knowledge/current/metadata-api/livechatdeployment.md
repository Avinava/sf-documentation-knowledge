---
title: "LiveChatDeployment"
domain: metadata-api
topic: livechatdeployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.384Z
keywords: [LiveChatDeployment, File, Suffix, Directory, Location, Version, Fields, LiveChatDeploymentDomainWhiteList, Declarative, Metadata, Sample, Definition, Note, Wildcard, Support, Manifest]
---

# LiveChatDeployment

# LiveChatDeployment

Represents the configuration settings for a specific Chat deployment, such as the branding image for the deployment and whether or not chat transcripts are automatically saved.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

LiveChatDeployment values are stored in the <developer\_name>.liveChatDeployment file in the liveChatDeployments directory.

## Version

LiveChatDeployment is available in API version 28.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| brandingImage | string | Specifies the branding image for the deployment. |
| connectionTimeoutDuration | int | Indicates the amount of time before the chat times out, in seconds. |
| ConnectionWarningDuration | int | Indicates the amount of time before a time-out warning is displayed to the agent, in seconds. |
| displayQueuePosition | boolean | (Pilot) Determines whether a customer’s queue position is displayed in a standard chat window while the customer waits for an agent to respond to the chat request (true) or not (false). This field is available as a pilot in API version 32.0. To enable this field, contact Salesforce. |
| domainWhiteList | LiveChatDeploymentDomainWhiteList | Specifies the list of domains that can host the deployment. |
| enablePrechatApi | boolean | Indicates whether or not the pre-chat API is enabled for the deployment (true) or not (false). |
| enableTranscriptSave | boolean | Indicates whether chat transcripts are automatically saved after a chat ends (true) or not (false). |
| label | string | Specifies the name of the deployment. |
| mobileBrandingImage | string | Specifies the branding image for the deployment that appears when customers access the deployment on a mobile device. |
| site | string | Specifies the site that hosts the images for the deployment.NoteYou must have the CustomDomain permission enabled in your organization before you can use a Salesforce site with Chat. |
| windowTitle | string | Specifies the title of the window associated with the deployment. |

## LiveChatDeploymentDomainWhiteList

Represents a Chat deployment’s domain whitelist.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| domain | string | Specifies a domain that can host the deployment. |

## Declarative Metadata Sample Definition

This is a sample of a liveChatDeployment file.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If you update your deployment through the Metadata API, be sure to update all Web pages that use the same deployment code.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").