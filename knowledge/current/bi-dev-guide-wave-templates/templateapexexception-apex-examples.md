---
title: "TemplateApexException Apex Examples"
domain: bi-dev-guide-wave-templates
topic: templateapexexception-apex-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.391Z
estimatedTokens: 142
keywords: [TemplateApexException, Apex, Examples, handle, errors, cleanly, provide, clear, template, users, Report, error, user, database, exceptions]
---

# TemplateApexException Apex Examples

> Use the TemplateApexException class to handle
  errors cleanly and provide clear information to template users.

# TemplateApexException Apex Examples

Use the TemplateApexException class to handle errors cleanly and provide clear information to template users.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

Throwing an exception fails the configuration wizard. You can also create variables to track errors and report them to the user in the wizard without failing.

## Report an error to the user with a TemplateApexException:

```

```

## Handle database exceptions with a TemplateApexException

```

```

## Code Examples

```apex
public override void onConfigurationRetrieval(wavetemplate.WaveTemplateInfo template)
{
    // Run a query if Forecast History is enabled and report failure if isn't
    List<User> usersWithForecast = Database.query('SELECT Id FROM User WHERE ForecastEnabled = true LIMIT 1');
    if (usersWithForecast.isEmpty()) {
        // Report issue to user
        throw new TemplateApexException('Forecast history is not enabled. Please have your admin enable it.');
    }
}
```

```apex
public override void onConfigurationRetrieval(wavetemplate.WaveTemplateInfo template)
{
     String query = 'SELECT DeveloperName, MasterLabel, SplitField, SplitEntity FROM OpportunitySplitType WHERE IsActive = true AND SplitEntity = \'Opportunity\'';
     try {
         List<SObject> activeSplitTypes = Database.query(query);
         if (activeSplitTypes.isEmpty()) {
             template.getVariables().get('Has_OpportunitySplits').setComputedValue('No');
         }
         else {
             template.getVariables().get('Has_OpportunitySplits').setComputedValue('Yes');
         }
      }
      catch (Exception e) {
          throw new TemplateApexException('Database query to determine Opportunity Splits failed: ' + e.getMessage());
      }
}
```
