---
title: "template-info.json Attributes"
domain: bi-dev-guide-wave-templates
topic: template-infojson-attributes
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:07.678Z
estimatedTokens: 3446
keywords: [template-info.json, Attributes, file, main, template, includes, references, downstream, app]
---

# template-info.json Attributes

> The template-info.json file is the main file that
    describes the template. It includes or references all the information required to create a
    downstream app.

# template-info.json Attributes

The template-info.json file is the main file that describes the template. It includes or references all the information required to create a downstream app.

| Attribute | Required | Description |
| --- | --- | --- |
| name | Yes | The unique developer name of the template. If changed, it creates a new template; if it’s changed to an existing template devName, it overwrites the existing template. |
| label | Yes | The template name visible to users in the Analytics template picker and wizard. |
| description | No | The template description. Shown in the app creation wizard template picker. |
| icons | No | Three types available:templateBadge defines the small icon that appears in the app picker and at the top of the template details window. Don’t use file extension with name attribute, for example "learn", not "learn.png".appBadge defines the icon shown by Analytics Studio for the app after creation. Must be "1.png" through "21.png". Use file extension with name attribute, for example "16.png", not "16"templatePreviews defines preview images displayed on the template details window during the app creation process. Supports multiple images. Don’t use file extension with name attribute, for example "preview_education", not "preview_education.png". Name of the icon image must use all lower case letters.If images are stored as static resources and org uses namespace, must also specify a namespace attribute for each icon. For example,"appBadge": {     "name": "15.png"     "namespace": "${Org.Namespace}" } |
| tags | No | Array of tags used in template search and shown on template details page. |
| asset​Version | Yes | Refers to the numbered API version to use when creating Analytics assets, such as dashboards, datasets, XMDs, and dataflows. Recipes are always on the current API version. To update this version, see Update an Existing Template. |
| release​Info | Yes | Container attribute only. |
| release​Info → template​Version | Yes | The version of the template, tracked for the upgrade process. Calling wave/templates PUT automatically increments this number, but it can be changed manually as well. The format is ##.##, although it’s a string. |
| release​Info → notes​File | No | A template dev defined HTML file to describe new release details. Basic HTML formatting is supported, but not links or javascript. Defaults to using the template description as release notes if file isn’t specified. |
| rules | No | Container attribute only - can contain 1 or more rule file definitions (loaded first to last and order matters for dependencies). |
| rules → type | Yes, if rules is used. | appToTemplate - rules to apply when updating the template from the source app (Rest API PUT call).templateToApp - rules to apply when creating an app from a template. |
| rules → file | Yes | Path to the rules file. |
| template​Type | Yes | Can specify either app, embeddedapp, data, or dashboard. |
| ui​Definition | No | Path the ui.json file. |
| variable​Definition | No | Path to the variables.json file. |
| folder​Definition | No | Path to the folder.json file. |
| auto​Install​Definition | Yes for auto-installed templates, No for templates that use the configuration wizard | Path to the auto-install.json file. Only specify this file for auto-install templates. |
| readiness​Definition | No | Path to the orgReadiness.json file. |
| apex​Callback | No | Container attribute only. Registers an Apex class that runs on wizard load, app create, and app upgrade. The Apex class examines the org and sets variable values. For example, the Sales Analytics template uses an Apex class to check whether the org uses the Products object. If it doesn’t, the has_product variable is set to no.ImportantMake sure the Apex class can be accessed by users in the organization with Manage Analytics Templated Apps user permission. Otherwise, trying to create an app from your template results in an error. In Setup, go to Apex Classes, click Security next to the class, then add the profile with the Manage Analytics Templated Apps user permission. |
| apex​Callback → namespace | Yes, if apexCallback is used and org uses namespace. | The namespace for the org, if it has one. Required for Apex classes in the development org or packaged with the template. |
| apex​Callback → name | Yes | The name of the Apex class to be used. |
| custom​Attributes | No | Specifies information describing your template in the app creation wizard, such as Salesforce objects used or notable features. Takes a label and an array of values. Example:customAttributes" : [   { "label" : "Features",     "values" : ["CUSTOM OBJECTS", "MOBILE READY"]   },   {"label": "Salesforce objects",   	"values" : ["ACCOUNT","PRODUCT","LEADS",”CASES”]   }], |
| dashboards | No | Container attribute only. Array of dashboard JSON files to be used, can be empty if there are no dashboard files. |
| dashboards → file | Yes, if dashboards is used. Otherwise no. | Path to the dashboard file. |
| dashboards → label | Yes, if dashboards is used. Otherwise no. | The dashboard label. Must match the “label” attribute in the dashboard file |
| dashboards → name | Yes, if dashboards is used. Otherwise no. | The dashboard name. Must match the “name” attribute in the dashboard file. |
| dashboards → condition | No | If condition is met, then the dashboard is created in the app; if the condition isn’t met, the dashboard isn’t created. Can include Overrides, which are defined in variables.json. See Complex variables.json Variable Types. |
| dashboards → overwrite​On​Upgrade | No | Indicates if asset is overwritten during the reset/upgrade process. Uses Always, IfDifferent, Never, or an expression that evaluates to one these values. Case sensitive. Example:"overwriteOnUpgrade": "${Variables.DontOverwriteQuota ? 'Never' : 'IfDifferent'}", |
| lenses | No | Container attribute only - array of dashboard JSON files to be used, can be empty if there are no dashboard files. |
| lenses → file | Yes, if lenses is used. Otherwise no. | Path to the lens file. |
| lenses → label | Yes, if lenses is used. Otherwise no. | The lens label. Must match the “label” attribute in the lens file. |
| lenses → name | Yes, if lenses is used. Otherwise no. | The lens name. Must match the “name” attribute in the lens file. |
| lenses → condition | No | If the condition is met, then the lens is created in the app; if the condition isn’t met, the dashboard isn’t created. Can include Overrides, which are defined in variables.json. See Complex variables.json Variable Types |
| lenses → overwrite​On​Upgrade | No | Indicates if asset is overwritten during the reset/upgrade process. Uses Always, IfDifferent, Never, or an expression that evaluates to one these values. Case sensitive. Example:"overwriteOnUpgrade": "${Variables.DontOverwriteQuota ? 'Never' : 'IfDifferent'}", |
| elt​Dataflows | No | Container attribute only – array of dataflow JSON files to be used, can be empty if there are no dataflow files. |
| elt​Dataflows → file | Yes, if eltDataflows is used. Otherwise no. | Path to the dataflow file. |
| elt​Dataflows → label | Yes, if eltDataflows is used. Otherwise no. | The dataflow label. Must match the sourceLabel attribute in dataflow file. |
| elt​Dataflows → name | Yes, if eltDataflows is used. Otherwise no. | The dataflow name. Must match the name attribute in the dataflow file. |
| elt​Dataflows → condition | No | If condition is met, then the dataflow is created in the app; if the condition isn’t met, the dataflow isn’t created. Can include Overrides, which are defined in variables.json. See Complex variables.json Variable Types |
| elt​Dataflows → overwriteOnUpgrade | No | Indicates if asset is overwritten during the reset/upgrade process. Uses Always, IfDifferent, Never, or an expression that evaluates to one these values. Case sensitive. Example:"overwriteOnUpgrade": "${Variables.DontOverwriteQuota ? 'Never' : 'IfDifferent'}", |
| recipes | No | Container attribute only – array of recipes JSON files to be used, can be empty if there are no recipe files. |
| recipes → file | Yes, if recipes is used. Otherwise no. | Path to the recipe file. |
| recipes → label | Yes, if recipes is used. Otherwise no. | The recipe label. |
| recipes → name | Yes, if recipes is used. Otherwise no. | The recipe name. |
| recipes → condition | No | If condition is met, then the recipe is created in the app; if the condition isn’t met the recipe isn’t created. Can include Overrides, which are defined in variables.json. See Complex variables.json Variable Types |
| recipes → overwrite​On​Upgrade | No | Indicates if asset is overwritten during the reset/upgrade process. Uses Always, IfDifferent, Never, or an expression that evaluates to one these values. Case sensitive. Example:"overwriteOnUpgrade": "${Variables.DontOverwriteQuota ? 'Never' : 'IfDifferent'}", |
| external​Files | Yes | Container attribute only - array of external files, CSV and descriptive files, to be used, can be empty if there are no external files. |
| external​Files → file | No | Path to the CSV file. |
| external​Files → name | Yes, if externalFiles is used. Otherwise no. | The externalFile name. |
| external​Files → rows | No | The number of rows to stub out in the dataset created from the CSV, before data upload. If not specified, defaults to 5. By default, a file has 5 rows until the user uploads their own version of the file. |
| external​Files → schema | No | Path to the schema file (describes the format of the data) |
| external​Files → userXmd | No | Path to the user XMD file (describes the display format of the data). |
| external​Files → type | Yes | Must be CSV. |
| external​Files → condition | No | If condition is met, then the external file is created in the app; if the condition isn’t met, the external file isn’t created. Can include Overrides, which are defined in variables.json. See Complex variables.json Variable Types |
| external​Files → overwrite​On​Upgrade | No | Indicates if asset is overwritten during the reset/upgrade process. Uses Always, IfDifferent, Never, or an expression that evaluates to one these values. Case sensitive. Example:"overwriteOnUpgrade": "${Variables.DontOverwriteQuota ? 'Never' : 'IfDifferent'}", |
| dataset​Files | No | Container attribute only – array of SFDC dataset to be used, can be empty if there are no SFDC dataset. |
| dataset​Files → user​Xmd | No | Path to the user XMD file, if it exists. |
| dataset​Files → label | Yes | The dataset label. |
| dataset​Files → name | Yes | The dataset name. |
| dataset​Files → condition | No | If condition is met, then the dataset is created in the app; if the condition isn’t met, the dataset isn’t created. Can include Overrides, which are defined in variables.json. See Complex variables.json Variable Types |
| dataset​Files → live​Connection | No | The container attribute for Snowflake connection live dataset settings. |
| dataset​Files → live​Connection → connection​Name | Yes, if liveConnection is used. Otherwise no. | The connection name for the Snowflake connector. This name must match the developer name of the connector in the consumer org. |
| dataset​Files → live​Connection → source​Object​Name | Yes, if liveConnection is used. Otherwise no. | The Snowflake source table name. |
| image​Files | No | Container attribute only: array of app images to be used. |
| image​Files → label | Yes, if imagesFiles is used. Otherwise no. | A label for the image. |
| image​Files → name | Yes, if imagesFiles is used. Otherwise no. | The image name. |
| image​Files → condition | No | If the condition is met, then the image is uploaded into the app; if the condition isn’t met, the image isn’t uploaded. |
| image​Files → namespace | Yes, if org uses a namespace. | Includes reference to namespace for static resources, for example ${Org.Namespace}. |
| extended​Types | No | Add extended type to a template. |
| extended​Types → discovery​Stories | No | Add Einstein Discovery story extended type to template. Uses label, name, file, condition. See Add an Einstein Discovery Story to an Analytics Template |
| template​Dependencies | No | Array of other templates the template is dependent on. See Share Analytics Assets Between Apps |
| template​Dependencies → name | Yes, if dependencies is used. Otherwise no. | Developer name of the template. |
| template​Dependencies → namespace | No | Namespace of the org, if used. |
| template​Dependencies → templateVersion | No | Number of the template version. |
| template​Dependencies → condition | No | Condition in which to include this dependency. |
| components | No | Container attribute only. Array of dashboard component JSON files to be used, can be empty if there are no dashboard components files. |
| components → file | Yes, if components is used. Otherwise no. | Path to the dashboard component file. |
| components → label | Yes, if components is used. Otherwise no. | A label for the dashboard component. |
| components → name | Yes, if components is used. Otherwise no. | The dashboard component name. |
| components → condition | No | If the condition is met, then the dashboard component is created in the app. If the condition isn’t met, the dashboard component isn’t created. |

#### See Also

-   [Edit template-info.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_template_info_json.htm "template-info.json describes the template. It references all the information required to create an app from the template.")

-   [template-info.json Example](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template-info_json_example.htm "Here are two example template-info.json files.")

## Code Examples

```
"appBadge": {
    "name": "15.png"
    "namespace": "${Org.Namespace}"
}
```

```
customAttributes" : [
  { "label" : "Features",
    "values" : ["CUSTOM OBJECTS", "MOBILE READY"]
  },
  {"label": "Salesforce objects",
  	"values" : ["ACCOUNT","PRODUCT","LEADS",”CASES”]
  }],
```

## Related Topics

- Update an Existing
              Template. (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_update_template.htm)
- Complex variables.json Variable Types (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_complex_var_types_variables_json.htm)
- Add an Einstein Discovery Story to
                an Analytics Template (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_discovery_story.htm)
- Share Analytics Assets Between
                Apps (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_share_assets.htm)
- Edit template-info.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_template_info_json.htm)
- template-info.json Example (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template-info_json_example.htm)
