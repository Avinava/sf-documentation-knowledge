---
title: "Add a Recipe to a CRM Analytics Template"
domain: bi-dev-guide-wave-templates
topic: add-a-recipe-to-a-crm-analytics-template
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.376Z
estimatedTokens: 759
keywords: [Add, Recipe, CRM, Analytics, Template, Data, prep, recipes, unique, asset, they, aren’t, stored, folders, dashboards]
---

# Add a Recipe to a CRM Analytics Template

> Data prep recipes are a unique CRM Analytics asset, as they aren’t stored in folders like
  dashboards, lenses, and datasets. The only way to connect a recipe to an app is via the
  relationship of the datasets in the folder to the recipes that consume or output those
  datasets.

# Add a Recipe to a CRM Analytics Template

Data prep recipes are a unique CRM Analytics asset, as they aren’t stored in folders like dashboards, lenses, and datasets. The only way to connect a recipe to an app is via the relationship of the datasets in the folder to the recipes that consume or output those datasets.

When a recipe creates a dataset for a CRM Analytics app, the dataset connects the recipe to the folder ID for the app. These recipes are automatically added to the app template when it’s created from the app. Only recipes that run successfully and create a dataset are added to the app template.

If a recipe doesn’t contain a dataset, like a recipe that reads and writes from a connector, there’s no way for the app framework to determine which app the recipe belongs to. To solve this issue, in v55.0 and above, the Connect REST API for creating and updating a template supports a list of recipe IDs in the request.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

Only the REST APIs and the Analytics CLI support creation with recipe IDs. Users can’t specify recipe IDs when creating a template from an app in Analytics Studio.

When the app framework adds recipes to a template, it doesn’t know the order in which the recipes must be run. On template creation, the app framework first adds any recipes specified in the request. Then the framework finds recipes used to create datasets for this app and adds them to the end of the list. If a duplicate recipe ID is specified, the app framework ignores it.

During app creation, the recipes are run in the order in which they’re defined in the template-info.json file. If the recipes must run in specific order, you must edit the template-info.json file manually to put the recipes in run order.

## Example

Use the Connect REST API

Use the template REST API to create a template from an app and include 2 recipes. In the POST request body, use the recipeIds parameter to specify any additional recipes to add to the app template.

```

```

When updating an existing template to add recipes, specify the recipeIds in the PUT request body.

```

```

This request adds another recipe to the existing template. If the recipe exists in the template, the PUT request does a no-op.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

The PUT only adds recipes to an existing template. If you need to remove a recipe, you must download the template and modify the template-info.json file manually.

## Example

Use the Analytics CLI Plugin

First, get a list of recipes in your org:

```

```

returning:

```

```

Then, create a template from an app and include the recipe IDs:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

When specifying multiple recipe IDs, they must be enclosed in quotes.

To add a recipe to an existing template:

```

```

## Code Examples

```
POST /wave/templates/
{
    "folderSource": {
        "id": "00lxx000000xxxxxx"
    },
    "name": "myAppTemplate",
    "label": "My App Template",
    "description": "My app template with recipes",
    "recipeIds": [
        "05vxx000000xxxxx1",
        "05vxx000000xxxxx2"
    ]
}
```

```
PUT /wave/templates/0Nk1k000000xxxxxx
{
     "folderSource": {
         "id": "00lxx000000xxxxxx"
     },
     "recipeIds": [
         "05vxx000000xxxxx3"
     ]
}
```

```
sf analytics recipe list
```

```
RECIPEID          NAME          NAMESPACE          LABEL          STATUS
_________________ _____________ __________________ ______________ _______
05vxx000000xxxxx1 Recipe_One                       Recipe One     New
05vxx000000xxxxx2 Recipe_Two                       Recipe Two     New
```

```
sf analytics template create -f 00lxx000000xxxxxx -l "My App Template" -r "05vxx000000xxxxx1, 05vxx000000xxxxx2"
```
