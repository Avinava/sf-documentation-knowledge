---
title: "TemplateInterruptException Apex Example"
domain: bi-dev-guide-wave-templates
topic: templateinterruptexception-apex-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.393Z
estimatedTokens: 106
keywords: [TemplateInterruptException, Apex, handle, template, runtime, errors, cleanly, provide, clear, users, Report, error, user]
---

# TemplateInterruptException Apex Example

> Use the TemplateInterruptException class to handle
  template runtime errors cleanly and provide clear information to template users.

# TemplateInterruptException Apex Example

Use the TemplateInterruptException class to handle template runtime errors cleanly and provide clear information to template users.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

Throwing an exception fails the app creation process.

## Report an error to the user with a TemplateInterruptException:

```

```

## Code Examples

```apex
public override void beforeAppCreate(wavetemplate.WaveTemplateInfo template. wavetemplate.Answers answers)
{
 // Validate that an answer is present and has a value.
 String includeCasesAnswer = (String)answers.get('IncludeCases');
 if (includeCasesAnswer.isEmpty() || includeCasesAnswer == null) {
  // Report issue to user
  throw new TemplateInterruptException('You didn't answer "yes" to the question that asked if you use Cases. Go back to the wizard and answer this question.');
 }
}
```
