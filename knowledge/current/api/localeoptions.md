---
title: "LocaleOptions"
domain: api
topic: localeoptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.722Z
estimatedTokens: 379
keywords: [LocaleOptions, language, labels, API, Calls, Sample, Code—Java]
---

# LocaleOptions

> Specifies the language of the labels returned.

# LocaleOptions

Specifies the language of the labels returned.

## API Calls

[describeSObject()](atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm "Describes metadata (field list and object properties) for the specified object."), [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject()."), [describeDataCategoryGroups()](atlas.en-us.api.meta/api/sforce_api_calls_describedatacategorygroups.htm#sforce_api_calls_describedatacategorygroups "Retrieves available category groups for objects specified in the request."), [describeDataCategoryGroupStructures()](atlas.en-us.api.meta/api/sforce_api_calls_describedatacategorygroupstructures.htm#sforce_api_calls_describedatacategorygroupstructures "Retrieves available category groups along with their data category structure for objects specified in the request.")

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| language | string | Specifies the language of the labels returned. The value must be a valid user locale (language and country), such as de_DE or en_GB. For more information on locales, see the Language field on the CategoryNodeLocalization object. |

## Sample Code—Java

This sample sets the LocaleOptions header to the locale of the logged-in user, and then performs a describe on Account.

```

```

## Code Examples

```apex
public void localeOptionsExample() {
  try {
    connection.setLocaleOptions("en_US");
    connection.describeSObject("Account");
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- describeSObject() (atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- describeDataCategoryGroups() (atlas.en-us.api.meta/api/sforce_api_calls_describedatacategorygroups.htm)
- describeDataCategoryGroupStructures() (atlas.en-us.api.meta/api/sforce_api_calls_describedatacategorygroupstructures.htm)
