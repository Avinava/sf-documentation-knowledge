---
title: "Access
  Methods"
domain: bi-dev-guide-wave-templates
topic: access-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.384Z
estimatedTokens: 257
keywords: [Access, features]
---

# Access
  Methods

> Use the Access features with the
  following methods.

# Access Methods

Use the Access features with the following methods.

-   checkIntegUserAccessToArrayOfSObjectFields. Checks an array of sObjectFields from a template answer and returns a list of fields the Integration User doesn't have access to. Requires the variable name, WaveTemplateInfo, and Answers:

    ```

    ```

-   getCountOfRecordsAsIntegUser. Returns the number of records visible to the Integration User. Use this method to gauge if the number of records is high enough to continue with template processing. There’s a limit of 10K rows. Requires the sObject name to use for the count:

    ```

    ```

-   integUserHasAccessToSObjectField. Checks an sObjectField answer to verify that the Integration User has access to it. Requires the variable name, WaveTemplateInfo, and Answers:

    ```

    ```

-   integUserHasAccessToSObjectField. Checks a single sObject and one of its fields to verify that the Integration User has access to it. Requires the sObject name and WaveTemplateInfo:

    ```

    ```

## Code Examples

```apex
global static List<String> checkIntegUserAccessToArrayOfSObjectFields(String variableName, wavetemplate.WaveTemplateInfo template, wavetemplate.Answers answers)
```

```apex
global static Integer getCountOfRecordsAsIntegUser(String sObjectName)
```

```apex
global static boolean integUserHasAccesstoSObjectField(String variableName, wavetemplate.WaveTemplateInfo template, wavetemplate.Answers answers)
```

```apex
global static boolean integUserHasAccessToSObjectField(String sObjectName, wavetemplate.WaveTemplateInfo template)
```
