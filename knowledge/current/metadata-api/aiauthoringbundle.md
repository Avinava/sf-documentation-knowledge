---
title: "AiAuthoringBundle"
domain: metadata-api
topic: aiauthoringbundle
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:36.704Z
estimatedTokens: 1159
keywords: [AiAuthoringBundle, Represents, authoring, bundle, which, container, AI-related, content., example, Agentforce, agent, contains, Agent, Script, file, associated, metadata, Parent, Directory, Structure]
---

# AiAuthoringBundle

> Represents an AI authoring bundle, which is a container for AI-related authoring
    content. For example, an AI authoring bundle for an Agentforce agent contains an Agent Script
    file and the associated metadata content.

# AiAuthoringBundle

Represents an AI authoring bundle, which is a container for AI-related authoring content. For example, an AI authoring bundle for an Agentforce agent contains an Agent Script file and the associated metadata content.

AiAuthoringBundle packages and manages AI authoring artifacts with version control features. This metadata type provides a structured way to organize, version, and target AI-related content within your Salesforce org.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type.

## Directory Structure

AiAuthoringBundle agents are stored in an aiAuthoringBundles folder with a specific structure. Here’s an example of the structure.

```

```

The bundle includes the following resources:

-   A folder (1) for each agent. If the folder suffix contains an underscore followed by a number (for example, my\_service\_agent\_5), that number indicates the agent version. If there isn't a number in the suffix, the agent definition applies to the latest version of the agent.
-   Each agent folder contains a file that defines the agent (2). For example, this file can be an Agent Script definition. See [Agent Script in the Agentforce Developer Guide](https://developer.salesforce.com/docs/einstein/genai/guide/get-started.html) for details.
-   Each agent folder contains the metadata associated with the agent (3). Be sure to review the description for the target field to understand how to distinguish committed agent versions from uncommitted versions.

## Version

AiAuthoringBundle is available in API version 65.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| bundleType | AiAuthoringBundleType (enumeration of type string)DescriptionSpecifies the type or category of the AI authoring bundle, indicating the kind of AI authoring content contained within the bundle. Currently, this value must be AGENT, which represents an Agent Script agent. See Agent Script in the Agentforce Developer Guide for details. |
| target | stringDescriptionSpecifies the context or destination for the AI authoring bundle, defining how the bundle content should be applied or deployed.To commit an agent version, Agentforce agents must specify the developerName for the Bot and BotVersion components, separated by a period: {Bot}.{BotVersion}. For example, Agentforce_Service_Agent.v2. These two components tie the AI authoring bundle to a specific agent and a specific agent version.This field is automatically populated when you publish an agent with Agentforce DX. Publishing an agent with this field present is the equivalent to committing the agent in Agentforce Builder with the Commit Version button.If you want to deploy an agent to your org in draft state, omit this field. |
| versionDescription | stringDescriptionProvides a human-readable description of the bundle version, documenting what changes or features are included in this version of the AI authoring bundle. |
| versionTag | stringDescriptionDefines a version identifier or tag for the AI authoring bundle. This value can be used for version tracking and management of different bundle iterations. |

## Declarative Metadata Sample Definition

The following package.xml file is an example of an AiAuthoringBundle component.

```

```

In the .zip file for this bundle, each agent is nested in the aiAuthoringBundles folder. This example shows the directory structure in the .zip file for an agent named New\_Agent. Each agent bundle folder must contain an agent file and a metadata file.

```

```

To see an example of an Agent Script agent file, see [Agent Script in the Agentforce Developer Guide](https://developer.salesforce.com/docs/einstein/genai/guide/get-started.html).

This example shows the metadata XML for the agent in the file New\_Agent.bundle-meta.xml. The example commits the agent version because it contains a target value. Uncommitted versions don't contain this field.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
+--aiAuthoringBundles
    +--my_service_agent (1)
        +--my_service_agent.agent (2)
        +--my_service_agent.bundle-meta.xml (3)
    +--my_employee_agent (1)
        +--my_employee_agent.agent (2)
        +--my_employee_agent.bundle-meta.xml (3)
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>New_Agent</members>
        <name>AiAuthoringBundle</name>
    </types>
    <version>65.0</version>
</Package>
```

```
+--aiAuthoringBundles
    +--New_Agent
        +--New_Agent.agent
        +--New_Agent.bundle-meta.xml
```

```
<?xml version="1.0" encoding="UTF-8"?>
<AiAuthoringBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <bundleType>AGENT</bundleType>
    <target>Agentforce_Service_Agent.v2</target>
    <versionTag>DF 2026.3</versionTag>
</AiAuthoringBundle>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Bot (atlas.en-us.api_meta.meta/api_meta/meta_bot.htm)
- BotVersion (atlas.en-us.api_meta.meta/api_meta/meta_botversion.htm)
- Deploying and Retrieving Metadata with the
          Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
