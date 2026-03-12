---
title: "Create an Apex Trigger"
domain: sfdx-dev
topic: create-an-apex-trigger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.241Z
estimatedTokens: 474
keywords: [Apex, Trigger, triggers, perform, custom, actions, change, Salesforce, record, insertion, deletion, CLI, local, project, generated]
---

# Create an Apex Trigger

> Use Apex triggers to perform custom actions before or after a change to a Salesforce
  record, such as an insertion, update, or deletion. You can use Salesforce CLI to create Apex
  triggers in your local Salesforce DX project. The generated files live in a triggers directory in a package directory of your
  project.

# Create an Apex Trigger

Use Apex triggers to perform custom actions before or after a change to a Salesforce record, such as an insertion, update, or deletion. You can use Salesforce CLI to create Apex triggers in your local Salesforce DX project. The generated files live in a triggers directory in a package directory of your project.

1.  Open a terminal (macOS and Linux) or command prompt Windows and change to your Salesforce DX project directory.
2.  Create the triggers directory in the location you want to generate the Apex trigger. For example, if you want to generate it in the default package directory, create the force-app/main/default/triggers directory if it doesn’t exist.
3.  Generate the Apex trigger; specify the trigger name with the \--name flag and the triggers directory with the \--output-dir flag.

    ```

    ```

    By default, the generated trigger is for before insert events on the generic sObject. Use the \--event and \--sobject flags to change these default values. This example generates a trigger that fires before and after an insert into the Account object.

    ```

    ```


The command generates two files.

-   myTrigger.trigger-meta.xml—metadata file
-   myTrigger.trigger—Apex trigger source file

Use the project deploy start command to deploy the new Apex trigger to your org.

```

```

#### See Also

-   [*Apex Developer Guide*: Triggers](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_triggers.htm "Apex Developer Guide: Triggers - HTML (New Window)")

-   [*Trailhead*: Apex Triggers](https://trailhead.salesforce.com/en/modules/apex_triggers "Trailhead: Apex Triggers - HTML (New Window)")

-   [*VS Code Command*: SFDX: Create Apex Trigger](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/apex-overview.html "VS Code Command: SFDX: Create Apex Trigger  - HTML (New Window)")

## Code Examples

```
sf apex generate trigger --name myTrigger --output-dir force-app/main/default/triggers
```

```
sf apex generate trigger --name myTrigger --event 'before insert,after insert' --sobject Account --output-dir force-app/main/default/triggers
```

```
sf project deploy start --metadata ApexTrigger:myTrigger --target-org myscratch
```
