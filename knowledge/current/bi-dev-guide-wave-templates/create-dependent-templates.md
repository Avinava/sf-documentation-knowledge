---
title: "Create Dependent Templates"
domain: bi-dev-guide-wave-templates
topic: create-dependent-templates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.462Z
estimatedTokens: 252
keywords: [Dependent, Templates, Follow, steps, dependencies]
---

# Create Dependent Templates

> Follow these steps to create templates with dependencies.

# Create Dependent Templates

Follow these steps to create templates with dependencies.

1.  Create supporting app template. Supporting apps’ dashboards, lenses, and datasets can be reused by other apps.
2.  Add a line to your dependent app templates’ template-info.json file that refers to templates to include in the dependency:

    ```

    ```

3.  In your templatized asset JSON files (dashboard.json and so on) based on the dependent template, use the supporting app’s assets in context with the following:

    ```

    ```

    Examples:

    ```

    ```

4.  Load all templates into the same org.
5.  Create apps from the supporting templates.
6.  Create the app from the dependent template. The requirements for creating a dependent app are:
    -   The supporting app templates must exist in the org, and the user creating the dependent app must have access to them.
    -   At least one app from the supporting template at the right version and namespace must exist and have a Completed status.

## Code Examples

```
"templateDependencies" : [{
      "name" : "<Template_A_devname>", 
      "namespace" : "<Template_A_mynamespace>",  
      "templateVersion" : "1.0",
      // optional condition in which to include this dependency.
      "condition" : "${Variables.dependOnAnotherTemplate}" 
    }]
```

```
${Apps.<templatename>.<Dashboards|Lenses|Datasets>.<assetSourceName>.<Name|Label|Alias|Id>}:
```

```
"${Apps.namespacedone__SupportingDashboard.Dashboards.Comparision_tp.Name}"
	"${Apps.namespacedone__SupportingDashboard.Datasets.MyDataset.Alias}"
```
