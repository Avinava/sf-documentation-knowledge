---
title: "Configure Recipe Execution"
domain: bi-dev-guide-wave-templates
topic: configure-recipe-execution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.528Z
estimatedTokens: 393
keywords: [Configure, Recipe, Execution, Data, Prep, recipes, complex, add, app, creation, time, they, sync, execute, templated]
---

# Configure Recipe Execution

> Data Prep recipes can be complex and add to app creation time if they sync and execute
  while the templated app is generating. Recipes can also change the shape of your existing data.
  The executeCondition attribute for recipe entries allows you
  to specify if a templated recipe syncs and executes during templated app creation or
  not.

# Configure Recipe Execution

Data Prep recipes can be complex and add to app creation time if they sync and execute while the templated app is generating. Recipes can also change the shape of your existing data. The executeCondition attribute for recipe entries allows you to specify if a templated recipe syncs and executes during templated app creation or not.

To specify the execution selection for a recipe entry in template-info.json, add the executeCondition attribute. The valid values for this attribute are:

-   CreateOnly—Create the recipe during templated app creation, but don’t sync or execute it.
-   CreateExecute—Create and execute the recipe during templated app creation, but don’t sync it.
-   CreateSyncExecute—(Default) Create, sync, and execute the recipe during templated app creation.

The executeCondition attribute is optional. When not specified, the default behavior during templated app creation is to create, sync, and execute the recipe.

After app creation, all recipes created are visible in the Data Manager. You can verify a recipe was created correctly for your data, then configure it for data sync, execution, and scheduling.

Here are examples for recipe entries using executeCondition in template-info.json.

## Example

Specify a recipe that is created at templated app runtime, but data sync and recipe execution aren’t run.

```

```

## Example

Specify a recipe where the executeCondition is determined by an EL expression, like a variable value. The EL expression used must evaluate to one of the valid values.

```

```

## Code Examples

```
"recipes": [
  {
    "label": "Sentiment Analysis Recipe", 
    "name": "Sentiment_Analysis_Recipe",
    "file": "sentiment_analysis_recipe.json",
    "executeCondition": "CreateOnly"
  }
]
```

```
"recipes": [
  {
    "label": "Contact Import Recipe", 
    "name": "Contact_Import_Recipe",
    "file": "contact_import_recipe.json",
    "executeCondition": "${Variables.executionType}"
  }
]
```
