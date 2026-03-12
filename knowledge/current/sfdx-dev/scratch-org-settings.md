---
title: "Scratch Org Settings"
domain: sfdx-dev
topic: scratch-org-settings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.564Z
estimatedTokens: 373
keywords: [Scratch, Org, Settings, defining, preferences, definition, Because, Metadata, API, they’re, comprehensive, way, configure, setting, it’s]
---

# Scratch Org Settings

> Scratch org settings are the format for defining org preferences in the scratch org
        definition. Because you can use all Metadata API settings, they’re the most comprehensive
        way to configure a scratch org. If a setting is supported in Metadata API, it’s supported in
        scratch orgs. Settings provide you with fine-grained control because you can define values
        for all fields for a setting, rather than just enabling or disabling it.

# Scratch Org Settings

Scratch org settings are the format for defining org preferences in the scratch org definition. Because you can use all Metadata API settings, they’re the most comprehensive way to configure a scratch org. If a setting is supported in Metadata API, it’s supported in scratch orgs. Settings provide you with fine-grained control because you can define values for all fields for a setting, rather than just enabling or disabling it.

For information on Metadata API settings and their supported fields, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm) in Metadata API Developer Guide.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

Although the Settings are upper camel case in the Metadata API Developer Guide, be sure to indicate them as lower camel case in the scratch org definition.

```

```

Here’s an example of how to configure [SecuritySettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_securitysettings.htm) in your scratch org. In this case, to define session timeout, you nest the field values.

```

```

This example shows how to use [NameSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_namesettings.htm) to enable middle names and suffixes in your org for these person objects: Contact, Lead, Person Account, and User.

```

```

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
      "lightningExperienceSettings": {
          "enableS1DesktopEnabled": true
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
{
  "orgName": "Acme",
  "edition": "Enterprise",
  "features": [],
  "settings": {
       "mobileSettings": {
          "enableS1EncryptedStoragePref2": true
       },
      "securitySettings": {
          "sessionSettings":{
             "sessionTimeout": "TwelveHours"
          }  
      }
  }
}
```

```
{
  "orgName": "Acme",
  "edition": "Enterprise",
  "settings": {
      "mobileSettings": {
          "enableS1EncryptedStoragePref2": true
       },
       "nameSettings": {
          "enableMiddleName": true,
          "enableNameSuffix": true
      }
  }
}
```
