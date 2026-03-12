---
title: "Scratch Org Definition for Org Shape"
domain: sfdx-dev
topic: scratch-org-definition-for-org-shape
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.606Z
estimatedTokens: 689
keywords: [Scratch, Org, Definition, Shape, creation, capture, features, settings, edition, licenses, limits, source, way, don’t, manually]
---

# Scratch Org Definition for Org Shape

> During org shape creation, we capture the features, settings, edition, licenses, and
        limits of the specified source org. This way, you don’t have to manually include these items
        in the scratch org definition file. You can create a scratch org based solely on the source
        org shape. Or you can add more features and settings in the scratch org definition file to
        include functionality not present in the source org.

# Scratch Org Definition for Org Shape

During org shape creation, we capture the features, settings, edition, licenses, and limits of the specified source org. This way, you don’t have to manually include these items in the scratch org definition file. You can create a scratch org based solely on the source org shape. Or you can add more features and settings in the scratch org definition file to include functionality not present in the source org.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

In the scratch org definition, indicate the 15-character sourceOrg instead of edition. The sourceOrg is the org ID for the org whose shape you created. Use only the first 15 characters rather than the full 18-character org ID.

## Simple Scratch Org Definition File

If your Dev Hub org, source org, and org shape are all on the same Salesforce version, you can use the simple scratch org definition.

```

```

## Scratch Org Definition File during Salesforce Release Transitions

During the Salesforce major release transition, your Dev Hub org and source org can be on different versions. If your Dev Hub org is on a different version than your source org, add the release option to your scratch org definition file to create scratch orgs using the org shape.

```

```

| Source Org/Org Shape Version | Dev Hub Version | Supported Scratch Org Version | Release Option to Use in Scratch Org Definition File |
| --- | --- | --- | --- |
| Current | Preview | Current version only | "release": "previous" |
| Preview | Current | Preview version only | "release": "preview" |

## Scratch Org Definition File for DevOps Center

If you create a scratch org based on an org shape with DevOps Center enabled, we still require that you add the DevOps Center feature and setting to the scratch org definition. We require that customers explicitly enable it for legal reasons as part of the DevOps Center terms and conditions.

```

```

## Scratch Org Definition File with Other Features and Settings

To add features not captured by org shape, or to test features that your source org doesn't have, you can add more scratch org features and Metadata API settings. Settings refer to the Settings metadata type, not all metadata types.

```

```

Next: [Create a scratch org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm "Easily spin up a scratch org and open it directly from the command line.") using the org shape scratch org definition file.

#### See Also

-   [*Metadata API Developer Guide*: Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "Metadata API Developer Guide: Settings - HTML (New Window)")

## Code Examples

```
{
  "orgName": "Acme",
  "sourceOrg": "00DB1230400Ifx5"
}
```

```
{
  "orgName": "Acme",
  "sourceOrg": "00DB1230400Ifx5",
  "release": "previous"
}
```

```
{
    "orgName": "Acme",
    "sourceOrg": "00DB1230400Ifx5",
    "features": ["DevOpsCenter"],
    "settings": {
        "devHubSettings": {
            "enableDevOpsCenterGA": true
            }  
        }  
    }
```

```
{
  "orgName": "Acme",
  "sourceOrg": "00DB1230000Ifx5",
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

## Related Topics

- Create a scratch org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm)
