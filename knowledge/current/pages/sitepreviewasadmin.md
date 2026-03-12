---
title: "site:previewAsAdmin"
domain: pages
topic: sitepreviewasadmin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.133Z
estimatedTokens: 214
keywords: [site, previewAsAdmin, component, detailed, error, messages, administrator, preview, mode, recommend, add, right, closing, apex, tag]
---

# site:previewAsAdmin

> This component shows detailed error messages on a site in administrator preview mode. We recommend that you add it right before the closing apex:page tag. Note: The site:previewAsAdmin component contains the apex:messages tag, so if you have that tag elsewhere on your error pages, you will see the e

# site:previewAsAdmin

This component shows detailed error messages on a site in administrator preview mode. We recommend that you add it right before the closing apex:page tag. Note: The site:previewAsAdmin component contains the apex:messages tag, so if you have that tag elsewhere on your error pages, you will see the error message twice.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

## Code Examples

```
<!-- We recommend adding this component right before your closing apex:page tag. -->
	<site:previewAsAdmin/>
```

```
<span id="j_id0:j_id50">
<span id="j_id0:j_id50:j_id51:j_id52"> 
<div style="border-color:#FF9900; border-style:solid; border-width:1px; 
padding:5px 0px 5px 6px; background-color:#FFFFCC; font-size:10pt; 
margin-right:210px; margin-left:210px; margin-top:25px;">
	<table cellpadding="0" cellspacing="0"> 
	<tbody><tr> 
		<td><img src="/img/sites/warning.png" height="40" 
		style="padding:5px;margin:0px;" width="40" /></td> 
		<td> <strong><ul id="j_id0:j_id50:j_id51:msgs3" 
			style="margin:5px;"><li>Page not found:test </li></ul>
		</strong>
		<a href="/sites/servlet.SiteDebugMode?logout=1" 
		style="padding:40px;margin:15px;">Logout of Administrator Preview Mode</a>
		</td> 
	</tr> </tbody> 
	</table> 
</div>
</span>
</span>
```
