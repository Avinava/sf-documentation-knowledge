---
title: "Build Your Own Scratch Org Definition File"
domain: sfdx-dev
topic: build-your-own-scratch-org-definition-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.387Z
estimatedTokens: 2209
keywords: [Build, Own, Scratch, Org, Definition, File, blueprint, mimics, shape, development, lifecycle, sandbox, packaging, production, Options]
---

# Build Your Own Scratch Org Definition File

> The scratch org definition file is a blueprint for a scratch org. It mimics the shape of
    an org that you use in the development lifecycle, such as sandbox, packaging, or production.

# Build Your Own Scratch Org Definition File

The scratch org definition file is a blueprint for a scratch org. It mimics the shape of an org that you use in the development lifecycle, such as sandbox, packaging, or production.

The settings and configuration options associated with a scratch org determine its shape, including:

-   Edition—The Salesforce edition of the scratch org, such as Developer, Enterprise, Group, or Professional.
-   Add-on features—Functionality that isn’t included by default in an edition.
-   Settings—Org and feature settings used to configure Salesforce products, such as Field Service and Experience Cloud.

Setting up different scratch org definition files allows you to easily create scratch orgs with different shapes for testing. For example, you can turn Field Service on or off in a scratch org by setting the FieldService org preference in the definition file. If you want a scratch org with sample data and metadata like you’re used to, add this option: hasSampleData.

We recommend that you keep this file in your project and check it in to your version control system. For example, create a team version that you check in for all team members to use. Individual developers could also create their own local version that includes the scratch org definition parameters. Examples of these parameters include email and last name, which identify who is creating the scratch org.

## Scratch Org Definition File Name

You indicate the path to the scratch org configuration file when you create a scratch org with the org create scratch CLI command.

-   If you’re using Salesforce CLI on the command line, you can name this file whatever you like and locate it anywhere the CLI can access.
-   If you’re using Salesforce Extensions for VS Code, make sure that the scratch org definition file is located in the config folder of your Salesforce DX project. Its name must also end in scratch-def.json.

If you’re using a sample repo or creating a Salesforce DX project, the sample scratch org definition files are located in the config directory. You can create different configuration files for different org shapes or testing scenarios. For easy identification, name the file something descriptive, such as devEdition-scratch-def.json or packaging-org-scratch-def.json.

## Scratch Org Definition File Options

Here are the options you can specify in the scratch org definition file:

| Name | Required? | Default If Not Specified |
| --- | --- | --- |
| orgName | No | Company |
| country | No | Dev Hub's country. If you want to override this value, enter the two-character, upper-case ISO-3166 country code (Alpha-2 code). You can find a full list of these codes at several sites, such as: https://www.iso.org/obp/ui/#search. This value sets the locale of the scratch org. |
| username | No | test-unique_identifier@example.com |
| adminEmail | No | Email address of the Dev Hub user making the scratch org creation request |
| edition | Yes | None. Valid entries are Developer, Enterprise, Group, or Professional |
| description | No | None. 2000-character free-form text field.The description is a good way to document the scratch org’s purpose. You can view or edit the description in the Dev Hub. From App Launcher, select Scratch Org Info or Active Scratch Orgs, then click the scratch org number. |
| hasSampleData | No | Valid values are true and false. False is the default, which creates an org without sample data. |
| language | No | Default language for the country. To override the language set by the Dev Hub locale, see Supported Languages for the codes to use in this field. |
| features | No | None. See Scratch Org Features. |
| release | No | Same Salesforce release as the Dev Hub org. Options are preview or previous. You can use this option only during Salesforce release transition periods. |
| settings | No | None. See Scratch Org Settings for more information. |
| objectSettings | No | None. Use objectSettings to specify object-level sharing settings and default record types. To successfully install in a scratch org, some packages require that you define object-level sharing settings and default record types. The objectSettings option is a map. Each key is the lowercase name of an object, such as opportunity or account. The definition for each key is also a map with two possible values:sharingModel—Sets a sharing model. Different objects support different sharing models. Possible values of sharing models are:privatereadreadWritereadWriteTransferfullAccesscontrolledByParentcontrolledByCampaigncontrolledByLeadOrContentdefaultRecordType—Creates a record type. This setting is required before installing a package that creates record types. Specify an alphanumeric string that starts with a lowercase letter. |
| <custom field API name> | No | None. Useful for Dev Ops use cases where you want to track extra information on the ScratchOrgInfo object. First, create the custom field, and then reference it in the scratch org definition by its API name. |
| snapshot | No | None. Name of a snapshot, which is a point-in-time copy of a scratch org. You create the snapshot using the org create snapshot CLI command.Use only if you're using a snapshot to create your scratch org. See Scratch Org Snapshots. |
| sourceOrg | No | None. 15-character source org ID. Use only if you’re using Org Shape for Scratch Orgs to create your scratch org. See Create a Scratch Org Based on an Org Shape. |

## Sample Scratch Org Definition File

Here’s what the scratch org definition JSON file looks like. For more information on features and settings, see [Scratch Org Features](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#sfdx_dev_scratch_orgs_def_file_config_values "The scratch org definition file contains the configuration values that determine the shape of the scratch org. You can enable these supported add-on features in a scratch org.").

```

```

Some features, such as Experience Cloud, can require a combination of a feature and a setting to work correctly for scratch orgs. Experience Cloud uses the term Communities in its configuration. This code snippet sets both the feature and associated setting.

```

```

## Create a Custom Field for ScratchOrgInfo

You can add more options to the scratch org definition to manage your Dev Ops process. To do so, create a custom field on the [ScratchOrgInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_scratchorginfo.htm "HTML (New Window)") object. (ScratchOrgInfo tracks scratch org creation and deletion.)

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

If you’re making these changes directly in your production org, proceed with the appropriate level of caution. The ScratchOrgInfo object isn’t available in sandboxes or scratch orgs.

In the Dev Hub org, create the custom field.

-   From Setup, enter Object Manager in the Quick Find box, then select **Object Manager**.
-   Click **Scratch Org Info**.
-   In Fields & Relationships, click **New**.
-   Define the custom field, then click **Save**.

After you create the custom field, you can pass it a value in the scratch org definition file by referencing it with its API name. Let’s say you create two custom fields called workitem and release. Add the custom fields and associated values to the scratch org definition, then create the scratch org:

```

```

## Set Object-Level Sharing Settings and Default Record Types

To install successfully, some packages require that you define object-level sharing settings and default record types before installation. Set the sharing settings and default record types with objectSettings. In this sample scratch org definition file, we set a sharing model and a default record type for opportunity, and a default record type for account.

```

```

-   **[Scratch Org Features](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#sfdx_dev_scratch_orgs_def_file_config_values)**
    The scratch org definition file contains the configuration values that determine the shape of the scratch org. You can enable these supported add-on features in a scratch org.
-   **[Scratch Org Settings](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_settings.htm)**
    Scratch org settings are the format for defining org preferences in the scratch org definition. Because you can use all Metadata API settings, they’re the most comprehensive way to configure a scratch org. If a setting is supported in Metadata API, it’s supported in scratch orgs. Settings provide you with fine-grained control because you can define values for all fields for a setting, rather than just enabling or disabling it.

## Code Examples

```
{
  "orgName": "Acme",
  "edition": "Enterprise",
  "features": ["Communities", "ServiceCloud", "Chatbot"],
  "settings": {
      "communitiesSettings": {
          "enableNetworksEnabled": true
      },
      "mobileSettings": {
          "enableS1EncryptedStoragePref2": true
      },
      "omniChannelSettings": {
          "enableOmniChannel": true
      },
      "caseSettings": {
          "systemUserEmail": "support@acme.com"
      }
  }
}
```

```
"features": ["Communities"],
    "settings": {
        "communitiesSettings": {
          "enableNetworksEnabled": true
      },
        ...
```

```
{
     "orgName": "MyCompany",
     "edition": "Developer",
     "workitem__c": "W-12345678",
     "release__c": "June 2024 pilot",
     
     "settings": {
         "omniChannelSettings": {
              "enableOmniChannel": true
     }
           }
}
```

```apex
{
  "orgName": "MyCompany",
  "edition": "Developer",
  "features": ["Communities", "ServiceCloud", "Chatbot"],
  "settings": {
      "communitiesSettings": {
          "enableNetworksEnabled": true
      }
  }
  "objectSettings": {
     "opportunity": {
        "sharingModel": "private",
        "defaultRecordType": "default"
     },
     "account": {
        "defaultRecordType": "default"
     }
  }
}
```

## Related Topics

- Scratch Org Features (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
- Scratch Org Settings (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_settings.htm)
- Scratch Org Snapshots (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_intro.htm)
- Create a Scratch Org
                  Based on an Org Shape (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_intro.htm)
