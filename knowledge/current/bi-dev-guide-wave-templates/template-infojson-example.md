---
title: "template-info.json Example"
domain: bi-dev-guide-wave-templates
topic: template-infojson-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.681Z
estimatedTokens: 114
keywords: [template-info.json, two, files]
---

# template-info.json Example

> Here are two example template-info.json
    files.

# template-info.json Example

Here are two example template-info.json files.

## Example

```

```

## Example

```

```

#### See Also

-   [template-info.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template-info_json_attributes.htm "The template-info.json file is the main file that describes the template. It includes or references all the information required to create a downstream app.")

## Code Examples

```
{
	"templateType": "app",
	"label": "Generic Analytics",
	"name": "GenericAnalytics",
	"description": "The Generic Analytics template creates an app that visualizes business data. v1.0 #160",
	"assetVersion": 43,
	"releaseInfo": {
		"templateVersion": "1.0",
		"notesFile": "releaseNotes.html"
	},
	"variableDefinition": "variables.json",
	"uiDefinition": "ui.json",
	"readinessDefinition": "org-readiness.json",
	"apexCallback": {
		"namespace": "wavetemplate",
		"name": "GenericConfigurationModifier"
	},
	"icons": {
		"appBadge": {
			"name": "15.png"
		},
		"templateBadge": {
			"name": "Generic.png"
		},
		"templatePreviews": [{
			"name": "preview_Generic.jpg",
			"label": "Generic Analytics",
			"description": "Explore impact to sales."
		}]
	},
	"tags": [
		"Marketing",
		"Sales"
	],
	"customAttributes": [{
			"label": "Features",
			"values": [
				"Prebuilt Dashboard",
				"Mobile Ready",
				"Dataflow",
				"KPI Rich Datasets"
			]
		},
		{
			"label": "Salesforce Objects",
			"values": [
				"Customizable Generic Influence"
			]
		},
		{
			"label": "Publisher",
			"values": [
				"Analytics"
			]
		}
	],
	"rules": [{
			"type": "templateToApp",
			"file": "template-to-app-rules.json"
		},
		{
			"type": "appToTemplate",
			"file": "app-to-template-rules.json"
		}
	],
	"externalFiles": [],
	"lenses": [],
	"dashboards": [{
		"file": "dashboard/Generic_Influence.json",
		"name": "Generic_Influence",
		"label": "Generic Influence"
	}],
	"eltDataflows": [{
		"label": "GenericAnalyticsDataflow",
		"name": "GenericAnalyticsDataflow",
		"file": "dataflow/GenericAnalyticsDataflow.json"
	}],
	"datasetFiles": [{
			"label": "GenericInfluence",
			"name": "GenericInfluence",
			"userXmd": "dataset_files/GenericInfluence_XMD.json"
		},
		{
			"label": "Generic",
			"name": "Generic",
			"userXmd": "dataset_files/Generic_XMD.json"
		}
	],
	"imageFiles": [{
		"name": "GenericLogo",
		"file": "images/Generic_logo.png"
		"namespace": "${Org.Namespace}" //if org is namespaced
	}]
}
```

```
{
	"templateType": "app",
	"label": "Corporate Sales Results",
	"name": "My_Sales",
	"description": "Create an app from this template to get actionable insights about the sales team.",
	"assetVersion": 46.0,
	"variableDefinition": "variables.json",
	"uiDefinition": "ui.json",
	"rules": [{
			"type": "templateToApp",
			"file": "template-to-app-rules.json"
		},
		{
			"type": "appToTemplate",
			"file": "app-to-template-rules.json"
		}
	],
	"releaseInfo": {
		"templateVersion": "1.1",
		"notesFile": "releaseNotes.html"
	},
	"folderDefinition": "folder.json",
	"autoInstallDefinition": "auto-install.json",
	"externalFiles": [],
	"lenses": [],
	"dashboards": [{
			"label": "Sales",
			"name": "Sales_SAMPLE_tp",
			"condition": "${Variables.Overrides.createAllDashboards}",
			"file": "dashboards/DTC_Sales_SAMPLE.json"
		},
		{
			"label": "Opportunity Details",
			"name": "Opportunity_Details_tp",
			"condition": "${Variables.Overrides.createAllDashboards}",
			"file": "dashboards/Opportunity_Details.json"
		},
		{
			"label": "Regional Sales Results",
			"name": "Regional_Sales_SAMPLE_tp",
			"condition": "${Variables.Overrides.createAllDashboards}",
			"file": "dashboards/Regional_Sales_SAMPLE.json"
		},
		{
			"label": "Sales Performance with Selectable Measures",
			"name": "Sales_Performance_with_Selectable_Measures_Trailhead_tp",
			"condition": "${Variables.Overrides.createAllDashboards}",
			"file": "dashboards/Sales_Performance_with_Selectable_Measures_Trailhead.json"
		}
	],
	"recipes": [{
			"label": "Filter Accounts Recipe",
			"name": "Filter_Accounts_Recipe",
			"file": "recipes/Filter_Account_Recipe.json"
		}
	],
	"datasetFiles": [{
			"label": "Opportunity",
			"name": "Opportunity_SAMPLE_tp",
			"condition": "${Variables.Overrides.createAllDatasetFiles}",
			"userXmd": "dataset_files/Opportunity_SAMPLE_XMD.json"
		}
	],
	"components": [{
			"label": "Image Component",
			"name": "ImageComponent_tp",
			"condition": "${Variables.Overrides.createAllComponents}",
			"file": "components/ImageComponent.json"
		}
	],
	"imageFiles": [{
			"name": "LayingOutjpg",
			"condition": "${Variables.Overrides.createAllImages}",
			"file": "images/LayingOut.jpg"
			"namespace": "${Org.Namespace}" //if org is namespaced
		},
		{
			"name": "png1",
			"condition": "${Variables.Overrides.createAllImages}",
			"file": "images/head.png"
			"namespace": "${Org.Namespace}" //if org is namespaced
		}
	],
	"extendedTypes": {},
	"templateDependencies": [],
	"icons": {
		"appBadge": {
			"name": "3.png"
		},
		"templateBadge": {
			"name": "dtc_sales"
		},
		"templatePreviews": [{
				"name": "home_dashboard",
				"label": "The Sales Home Dashboard",
				"description": "Get an overview of your sales team and dig into the key performance indicators that matter most to you."
			},
			{
				"name": "sales_results",
				"label": "Sales Performance with Selectable Measures",
				"description": "Key metrics about your sales team's performance, including details for each team member."
			}
		]
	},
	"tags": [
		"Sales",
		"Team leaders",
		"Operations"
	],
	"customAttributes": [{
			"label": "Features",
			"values": [
				"Prebuilt apps",
				"External CSV data",
				"Mobile ready"
			]
		},
		{
			"label": "Data Source",
			"values": [
				"External CSV data",
				"Salesforce Opportunities Object"
			]
		},
		{
			"label": "Developer",
			"values": [
				"Manny"
			]
		}
	]
}
```

## Related Topics

- template-info.json Attributes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template-info_json_attributes.htm)
