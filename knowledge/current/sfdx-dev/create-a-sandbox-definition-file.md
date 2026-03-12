---
title: "Create a Sandbox Definition File"
domain: sfdx-dev
topic: create-a-sandbox-definition-file
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.358Z
estimatedTokens: 1140
keywords: [Sandbox, Definition, File, Salesforce, CLI, define, configuration, blueprint, different, files, development, process, Sample]
---

# Create a Sandbox Definition File

> Before you can create a sandbox using Salesforce CLI, define the configuration for it in
    a sandbox definition file. The sandbox definition file is a blueprint for the sandbox. You can
    create different definition files for each sandbox type that you use in the development
    process.

# Create a Sandbox Definition File

Before you can create a sandbox using Salesforce CLI, define the configuration for it in a sandbox definition file. The sandbox definition file is a blueprint for the sandbox. You can create different definition files for each sandbox type that you use in the development process.

## Sandbox Configuration Values

| Option | Required? | Description |
| --- | --- | --- |
| activationUserGroupId | No | A reference to the ID of a public group of Salesforce users who can access the sandbox. The user who created the sandbox is added to the group by default.You can specify either activationUserGroupId or activationUserGroupName but not both. |
| activationUserGroupName | No | The name of the public group of Salesforce users who can access the sandbox. The user who created the sandbox is added to the group by default.You can specify either activationUserGroupId or activationUserGroupName but not both. |
| apexClassId | No | A reference to the ID of an Apex class that runs after each copy of the sandbox. Allows you to perform business logic on the sandbox to prepare it for use.You can specify either apexClassId or apexClassName but not both. |
| apexClassName | No | The name of the Apex class that runs after each copy of the sandbox. Allows you to perform business logic on the sandbox to prepare it for use.You can specify either apexClassId or apexClassName but not both. |
| autoActivate | No | If true, you can activate a sandbox refresh immediately. |
| copyArchivedActivities | No | Full sandboxes only. This field is visible if your organization has purchased an option to copy archived activities for sandbox. To obtain this option, contact Salesforce Customer Support. |
| copyChatter | No | If true, archived Chatter data is copied to the sandbox. |
| description | No | A description of the sandbox (1000 or fewer characters), which helps you distinguish it from other sandboxes. |
| features | No | The add-on features to apply when creating or refreshing the sandbox. The features option is not needed when cloning a sandbox.Currently, there’s one valid value:['SandboxStorage']: Increases the data storage available for Developer sandboxes from 200 MB to 400 MB and Developer Pro sandboxes from 1 GB to 2 GB. You can’t use this feature with Partial Copy or Full sandboxes. |
| historyDays | No | Full sandboxes only. Represents the number of days of object history to be copied in the sandbox.Valid values:-1, which means all available days0 (default)1020306090120150180 |
| licenseType | Yes (for sandbox creation) | Valid values are Developer, Developer_Pro, Partial, and Full.You can specify only one of these options: licenseType, sourceSandboxName, or sourceId. |
| sandboxName | Yes | A unique alphanumeric string (10 or fewer characters) to identify the sandbox. You can’t reuse a name while a sandbox is in the process of being deleted. |
| sourceId | Yes (for sandbox cloning) | A reference to the ID of the sandbox being cloned.You can specify only one of these options: licenseType, sourceSandboxName, or sourceId. |
| sourceSandboxName | Yes (for sandbox cloning) | Name of the sandbox being cloned.You can specify only one of these options: licenseType, sourceSandboxName, or sourceId. |
| templateId | Yes (for Partial sandboxes) | Optional for Full sandboxes. Not available for Developer and Developer Pro sandboxes.A reference to the sandbox template as identified by the 15-character ID beginning with 1ps in the URL when viewing a sandbox template in a browser. A sandbox template lets you select which objects to copy in a sandbox. |

## Sample Sandbox Definition File

Although you can place the sandbox definition file anywhere, we recommend keeping it in your Salesforce DX project in the config directory. When naming the file, we suggest providing a descriptive name that ends in sandbox-def.json, for example, developer-sandbox-def.json.

Here's a sample definition file for creating a sandbox:

```

```

Here's a sample definition file for cloning a sandbox:

```

```

Here's a sample definition file for creating a sandbox with the features option:

```

```

#### See Also

-   [*Tooling API*: SandboxInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_sandboxinfo.htm "Tooling API: SandboxInfo - HTML (New Window)")

-   [*Salesforce Help*: Public and Personal Groups](https://help.salesforce.com/articleView?id=user_groups.htm&language=en_US "Salesforce Help: Public and Personal Groups - HTML (New Window)")

## Code Examples

```
{
     "sandboxName": "dev1",
     "licenseType": "Developer"
}
```

```
{
     "sandboxName": "dev1clone",
     "sourceSandboxName": "dev1"
}
```

```
{
      "sandboxName": "dev1",
      "licenseType": "Developer" or "Developer_Pro",
      "features": "['SandboxStorage']"
}
```
