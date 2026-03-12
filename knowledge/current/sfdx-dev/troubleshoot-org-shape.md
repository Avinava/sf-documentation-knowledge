---
title: "Troubleshoot Org Shape"
domain: sfdx-dev
topic: troubleshoot-org-shape
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.599Z
estimatedTokens: 1031
keywords: [Troubleshoot, Org, Shape, issues, encounter, Scratch, Orgs, Features, Captured, Service, Aren't, Enabled, DevOps, Center, Isn’t]
---

# Troubleshoot Org Shape

> Here are some issues you can encounter when using Org Shape for Scratch Orgs.

# Troubleshoot Org Shape

Here are some issues you can encounter when using Org Shape for Scratch Orgs.

## Some Features Not Captured by Org Shape

**Description:** Some features and settings aren’t enabled in the org shape, in many cases by design due to security or legal reasons.

-   Chatbot
-   DevOpsCenter
-   MultiCurrency
-   PersonAccounts

**Workaround:** Add them to the scratch org definition.

```

```

## Some Field Service Features Aren't Enabled in Org Shape

**Description:** Even when the Field Service Enhanced Scheduling and Optimization, and Field Service Integration features are enabled in the source org in which the org shape is created, these features aren’t enabled when creating a scratch org based on the org shape.

**Workaround:** Manually add the missing Field Service Metadata API settings to the scratch org definition depending on which features are enabled in the source org.

Scenario 1: If the org shape included both the Field Service Enhanced Scheduling and Optimization, and Field Service Integration features, manually add the Field Service Enhanced Scheduling and Optimization Metadata API setting, o2EngineEnabled, in the scratch org definition file, which enables both features.

```

```

Scenario 2: If the org shape included only the Field Service Integration feature, manually add the Field Service Enhanced Scheduling and Optimization Metadata API setting optimizationServiceAccess, to the scratch org definition file.

```

```

## DevOps Center Isn’t Enabled in a Scratch Org Based on an Org Shape

**Description:** Although DevOps Center is enabled in the source org, the scratch org created from the source org’s shape doesn’t have DevOps Center enabled. The DevOps Center org preference is purposely toggled off. We require that customers explicitly enable it by indicating the feature and setting in the scratch org definition file for legal reasons as part of the DevOps Center terms and conditions.

**Workaround:** Add the DevOps Center feature and setting to the scratch org definition file. See [Scratch Org Definition for Org Shape](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_scratch_def.htm "During org shape creation, we capture the features, settings, edition, licenses, and limits of the specified source org. This way, you don’t have to manually include these items in the scratch org definition file. You can create a scratch org based solely on the source org shape. Or you can add more features and settings in the scratch org definition file to include functionality not present in the source org.") for details.

## ERROR running force:org:shape:list

**Description:** A trial org from which you created the org shape has expired. You could see either of these errors:

```

```

**Workaround:**

-   Use sf org logout to log out and remove the expired org.
-   Run sf org list shape again.

## Can't create a Digital Experience Cloud Site Using Org Shape

**Description:** When you try to create a scratch org from an org shape that contains an Experience Cloud Site, you get an error.

```

```

**Workaround:** None.

## Error While Creating Scratch Org Using a Shape

**Description:** You see this error when creating a scratch org using a shape.

```

```

**Workaround:** Generate a new shape using the org create shape command, then try again.

## Shift Status Picklists Aren’t Populated When Using a Shape With Field Service

**Description:** When you create a scratch org from a shape with Field Service enabled, the Status field picklist for Shifts is empty.

**Workaround:** Use an org shape with field service disabled, then enable field service in the scratch org definition file settings.

```

```

## Org Shape Feature Accepts Only 15-Character Org IDs

**Description:** You can use only 15-character org IDs when enabling Org Shape for Scratch Orgs and specifying the source org in the scratch org definition file. Org IDs are usually 18 characters long, which is what the org list command displays.

**Workaround:** Use only the first 15 characters of a standard 18-character org ID when working with the Org Shape feature.

## Code Examples

```
{
    "orgName": "Acme",
    "sourceOrg": "00DB1230400Ifx5",
    "features": [”Chatbot”, "MultiCurrency", "DevOpsCenter"],
    "settings": 
      {
       "botSettings": 
          "enableBots": true
      }
       "currencySettings": 
          "enableMultiCurrency": true
      }
       "devHubSettings": {
          "enableDevOpsCenterGA": true
      }
  }
```

```
"settings": 
    { 
     "fieldServiceSettings": 
      { 
        "fieldServiceOrgPref": true,
          "o2EngineEnabled": true
      }
    }
```

```
"settings": 
    { 
     "fieldServiceSettings": 
      { 
        "fieldServiceOrgPref": true,
           "optimizationServiceAccess": true
      }
    }
```

```
ERROR running org list shape: Error authenticating with the refresh token due to: inactive user
ERROR running org list shape: Error authenticating with the refresh token due to: expired access/refresh token
```

```
Required fields are missing: [Welcome Email Template, Change Password Email Template, Lost Password Template]
```

## Related Topics

- Scratch Org Definition for Org Shape (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_scratch_def.htm)
