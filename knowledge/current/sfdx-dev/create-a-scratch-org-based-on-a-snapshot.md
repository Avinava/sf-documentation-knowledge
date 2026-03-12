---
title: "Create a Scratch Org Based on a Snapshot"
domain: sfdx-dev
topic: create-a-scratch-org-based-on-a-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.621Z
estimatedTokens: 1062
keywords: [Scratch, Org, Snapshot, belong, Dev, Hub, you’re, recommend, definition, file, references, although, directly, --snapshot, flag]
---

# Create a Scratch Org Based on a Snapshot

> The snapshot must belong to the Dev Hub that you’re using to create the scratch org. We
    recommend that you create a scratch org definition file that references the snapshot, although
    you can also reference it directly with the --snapshot flag
    of org create scratch.  Changing or deleting a scratch org
    has no effect on a snapshot.

# Create a Scratch Org Based on a Snapshot

The snapshot must belong to the Dev Hub that you’re using to create the scratch org. We recommend that you create a scratch org definition file that references the snapshot, although you can also reference it directly with the \--snapshot flag of org create scratch. Changing or deleting a scratch org has no effect on a snapshot.

## Create the Scratch Org Definition File

The scratch org definition file is the blueprint for your scratch org. It’s likely that your snapshot includes all the required features and settings to configure the scratch orgs created from it.

Using our Dreamhouse scratch org as an example, let’s create a scratch org definition file called dhsnapshot-scratch-def.json that contains only two entries: orgName and snapshot, which is the name you gave the snapshot when you created it.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

Be sure you use the snapshot option instead of edition in the scratch org definition file.

```

```

When creating the scratch org definition file, don’t include these options:

-   edition
-   features
-   hasSampleData
-   release
-   sourceOrg

## Add Settings to the Scratch Org Definition File to Override Default Snapshot Settings

Some scratch org settings aren’t inherited from the org snapshot. In these cases, you can add these settings in the scratch org definition file to achieve the desired scratch org configuration when creating a scratch org from a snapshot.

This example scratch org definition file illustrates adding some scratch org settings, in the event that these settings weren’t inherited from the scratch org snapshot.

```

```

## Create the Scratch Org Based On Your Snapshot

It can take Salesforce longer to create a scratch org from a snapshot, so we suggest you increase the \--wait value so the command doesn’t time out. Remember to set the \--target-dev-hub flag to the same Dev Hub org associated with the snapshot.

For example:

```

```

This example shows how to use the \--snapshot flag to directly reference the snapshot without using a defintion file.

```

```

You can indicate whether the scratch org you create from the snapshot has a namespace, which is important if you’re using scratch orgs for second-generation package development.

-   Define a namespace in the sfdx-project.json file. The resulting scratch org has a namespace, which means that any unpackaged metadata from the snapshot is now namespaced in the resulting scratch org.
-   Use the \--no-namespace flag to ensure the resulting scratch org doesn’t have a namespace, even if you have a namespace specified in the sfdx-project.json file.

Success! Development and testing with scratch orgs just got a whole lot easier.

## Determine the Release Version for the Resulting Scratch Org

Normally, a scratch org is created on the same release version as the Dev Hub org regardless of how the scratch org was created: using the standard method, an org shape, or a snapshot. However, during Salesforce Preview, a scratch org can be created on a different release version from the Dev Hub org, if the snapshot release version differs from the Dev Hub’s release version.

During the Salesforce release transition, release version differences can occur for these scenarios:

-   The Dev Hub org is on the current generally available Salesforce release, but the snapshot is created on the preview release version.
-   The Dev Hub has upgraded to the preview release, but the snapshot was created on the current release version.

In cases where the Dev Hub org and snapshot release versions differ, the resulting scratch org is created on the same release version as the snapshot, as illustrated in this table.

| Dev Hub Release Version | Snapshot Release Version | Resulting Scratch Org Release Version |
| --- | --- | --- |
| Current | Current | Current |
| Current | Preview | Preview |
| Preview | Current | Current |
| Preview | Preview | Preview |

## Snapshot Error Codes

See [Scratch Org Error Codes](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_error_codes.htm "HTML (New Window)") for details.

## Code Examples

```
{
  "orgName": "Salesforce",
  "snapshot": "dhsnapshot"
}
```

```
{
  "orgName": "Salesforce",
  "snapshot": "dhsnapshot",
  "settings": {
    "activitiesSettings": {
      "enableCalendarHomeLWC": false
    },
    "omniChannelSettings": {
      "enableOmniSkillRouting": true
      "enableOmniChannel": true
    },
    "experienceBundleSettings": {
      "enableExperienceBundleMetadata": true
    },
    "oauthOidcSettings": {
      "blockOAuthUnPwFlow": true
    },
    "mobileSettings": {
      "enableS1EncryptedStoragePref2": false
    },
    "securitySettings": {
      "lockerServiceNext": false
    }
  }
}
```

```
sf org create scratch --definition-file config/dhsnapshot-scratch-def.json \
--alias dh-scratch-ci --wait 10 --target-dev-hub my-dev-hub
```

```
sf org create scratch --snapshot dhsnapshot \
--alias dh-scratch-ci --wait 10 --target-dev-hub my-dev-hub
```
