---
title: "Feature Parameters for Analytics Templates"
domain: bi-dev-guide-wave-templates
topic: feature-parameters-for-analytics-templates
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.536Z
estimatedTokens: 437
keywords: [Feature, Analytics, Templates, control, behavior, template-to-app, process, CRM, apps, defined, metadata, deployed, part, managed, package]
---

# Feature Parameters for Analytics Templates

> Feature parameters are available to control behavior in the template-to-app process for
  CRM Analytics apps. Feature parameters are defined as metadata that is deployed as part of the
  managed package. When feature parameters are deployed with the template, the parameter values are
  set using the LMA application.

# Feature Parameters for Analytics Templates

Feature parameters are available to control behavior in the template-to-app process for CRM Analytics apps. Feature parameters are defined as metadata that is deployed as part of the managed package. When feature parameters are deployed with the template, the parameter values are set using the LMA application.

For more information on feature parameters, see [Feature Parameter Metadata Types and Customs Objects](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_types_objects.htm) in the First-Generation Managed Packaging Developer Guide.

For implementation examples, view and clone the [Project Force App](https://github.com/forcedotcom/project-force) in Github.

## Analytics Template Metadata

For Analytics templates, the managed package component is WaveTemplateBundle. The template metadata reads feature parameter values set in the LMA application as EL expressions and uses them to control the behavior of app creation. The supported types of feature parameter values are Boolean, Date, and Integer.

## Example

Use an Integer Feature Parameter Value in Dashboard Creation

For this example, the feature parameter is deployed using /featureParameters/FinancingAmount.featureParameterInteger-meta.xml.

```

```

The feature parameter metadata is referenced in the template-to-app-rules.json file:

{ "constants":\[ { "name": "FinancingAmount", "value": "${sfdc\_fma:checkInteger('\[namespace\_\_FinancingAmount')}" } \], "rules": \[ { "name": "Use Feature Parameter", "appliesTo": \[ { "type": "dashboard" } \], "actions": \[ { "action": "set", "path": "$.state..text\_1.parameters.content.displayTemplate", "value": "${Constants.FinancingAmount}" } \] } \] }

## Code Examples

```
<FeatureParameterInteger xmlns="http://soap.sforce.com/2006/04/metadata">
   <dataflowDirection>LmoToSubscriber</dataflowDirection>
   <masterLabel>Amount Financed</masterLabel>
   <value>250000</value>
</FeatureParameterInteger>
```
