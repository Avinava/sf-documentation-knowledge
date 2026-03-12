---
title: "Creating App Templates"
domain: lightning
topic: creating-app-templates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.021Z
estimatedTokens: 257
keywords: [Creating, App, Templates, template, bootstraps, loading, framework, Customize, app’s, component, extends, aura]
---

# Creating App Templates

> An app template bootstraps the loading of the framework and the app. Customize an
        app’s template by creating a component that extends the default aura:template template.

# Creating App Templates

An app template bootstraps the loading of the framework and the app. Customize an app’s template by creating a component that extends the default aura:template template.

A template must have the isTemplate system attribute in the <aura:component> tag set to true. This informs the framework to allow restricted items, such as <script> tags, which aren't allowed in regular components.

A component with the isTemplate system attribute set to true can’t be used on a site page. To use a component on a site page, the isTemplate system attribute can’t be set to true.

For example, a sample app has a np:template template that extends aura:template. np:template looks like:

```

```

Note how the component extends aura:template and sets the title attribute using aura:set.

The app points at the custom template by setting the template system attribute in <aura:application>.

```

```

A template can only extend a component or another template. A component or an application can't extend a template.

## Code Examples

```
<aura:component isTemplate="true" extends="aura:template">
    <aura:set attribute="title" value="My App"/>
    ...    
</aura:component>
```

```
<aura:application template="np:template">
    ...    
</aura:application>
```
