---
title: "describeKnowledge()"
domain: knowledge-dev
topic: describeknowledge
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.754Z
estimatedTokens: 231
keywords: [describeKnowledge, Retrieves, Knowledge, language, settings, organization, Usage, Sample, Code—Java, Code—C#]
---

# describeKnowledge()

> Retrieves the Knowledge language settings in the
  organization.

# describeKnowledge()

Retrieves the Knowledge language settings in the organization.

## Syntax

```

```

## Usage

Use this call to describe the existing Knowledge language settings, including the default Knowledge language, supported languages, and a list of Knowledge language information. You can also use KnowledgeSettings in the Metadata API to obtain similar information.

## Sample Code—Java

This sample shows how to retrieve the Knowledge language settings. It returns the default Knowledge language, a list of Knowledge supported language, including the language code and whether it’s an active Knowledge language.

```

```

## Sample Code—C#

This sample shows how to retrieve the Knowledge language settings. It returns the default Knowledge language, a list of Knowledge supported language, including the language code and whether it’s an active Knowledge language.

```

```

## Response

KnowledgeSettings

## Code Examples

```
KnowledgeSettings result = _connection.describeKnowledgeSettings();
```

```apex
public void describeKnowledgeSettingsSample() {
try {

// Make the describe call for KnowledgeSettings
KnowledgeSettings result = connection.describeKnowledgeSettings();

// Get the properties of KnowledgeSettings
System.out.println("Knowledge default language: " + result.getDefaultLanguage());
for (KnowledgeLanguageItem lang : result.getLanguages()) {
System.out.println("Language: " + lang.getName());
System.out.println("Active: " + lang.isActive());
}
} catch (ConnectionException ex) {
ex.printStackTrace();
}
}
```

```apex
public void describeKnowledgeSettingsSample() {
try {

// Make the describe call for KnowledgeSettings
KnowledgeSettings result = connection.describeKnowledgeSettings();

// Get the properties of KnowledgeSettings
Console.WriteLine("Knowledge default language: " + result.getDefaultLanguage());
for (KnowledgeLanguageItem lang : result.getLanguages()) {
Console.WriteLine("Language: " + lang.getName());
Console.WriteLine("Active: " + lang.isActive());
}
} catch (SoapException ex) {
ex.printStackTrace();
}
}
```
