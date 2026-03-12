---
title: "Checking for Object Accessibility"
domain: pages
topic: checking-for-object-accessibility
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.412Z
estimatedTokens: 249
keywords: [Checking, Accessibility, user, insufficient, privileges, view, any, Visualforce, uses, controller, render, inaccessible, avoid, error, ensure]
---

# Checking for Object Accessibility

> If a user has insufficient privileges to view an object, any
		Visualforce page that uses a controller to render that object is
		inaccessible. To avoid this error, ensure that your Visualforce
		components only render if a user has access to the object associated
		with the controller.

# Checking for Object Accessibility

If a user has insufficient privileges to view an object, any Visualforce page that uses a controller to render that object is inaccessible. To avoid this error, ensure that your Visualforce components only render if a user has access to the object associated with the controller.

You can check for the accessibility of an object like this:

```

```

This expression returns a true or false value.

For example, to check if you have access to the standard Lead object, use the following code:

```

```

For custom objects, the code is similar:

```

```

where MyCustomObject\_\_c is the name of your custom object.

To ensure that a portion of your page will display only if a user has access to an object, use the rendered attribute on a component. For example, to display a page block if a user has access to the Lead object, you would do the following:

```

```

Provide an alternative message if a user can't access an object. For example:

```

```

## Code Examples

```
{!$ObjectType.objectname.accessible}
```

```
{!$ObjectType.Lead.accessible}
```

```
{!$ObjectType.MyCustomObject__c.accessible}
```

```
<apex:page standardController="Lead">
	<apex:pageBlock rendered="{!$ObjectType.Lead.accessible}">
		<p>This text will display if you can see the Lead object.</p>
	</apex:pageBlock>
</apex:page>
```

```
<apex:page standardController="Lead">
	<apex:pageBlock rendered="{!$ObjectType.Lead.accessible}">
		<p>This text will display if you can see the Lead object.</p>
	</apex:pageBlock>
	<apex:pageBlock rendered="{! NOT($ObjectType.Lead.accessible) }">
		<p>Sorry, but you cannot see the data because you do not have access to the Lead object.</p>
	</apex:pageBlock>
</apex:page>
```
