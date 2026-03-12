---
title: "site:googleAnalyticsTracking"
domain: pages
topic: sitegoogleanalyticstracking
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.129Z
estimatedTokens: 270
keywords: [site, googleAnalyticsTracking, standard, component, integrate, Google, Analytics, Force.com, sites, track, analyze, usage, Add, once, either]
---

# site:googleAnalyticsTracking

> The standard component used to integrate Google Analytics with Force.com sites to track and analyze site usage. Add this component just once, either on the site template for the pages you want to track, or the individual pages themselves. Don't set the component for both the template and the page. A

# site:googleAnalyticsTracking

The standard component used to integrate Google Analytics with Force.com sites to track and analyze site usage. Add this component just once, either on the site template for the pages you want to track, or the individual pages themselves. Don't set the component for both the template and the page. Attention: This component only works on pages used in a Force.com site. Sites must be enabled for your organization and the Analytics Tracking Code field must be populated. To get a tracking code, go to the Google Analytics website.

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
<!-- Google Analytics recommends adding the component at the bottom of the page to avoid increasing page load time. -->
	<site:googleAnalyticsTracking/>
```

```
<script type="text/javascript">
	var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
	document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
	</script>
	
	<script>
		try {
  			var pageTracker = _gat._getTracker("{!$Site.AnalyticsTrackingCode}");
		
  			if ({!isCustomWebAddressNull}) {
   				pageTracker._setCookiePath("{!$Site.Prefix}/");
 			}
 		
 			else if ({!isCustomWebAddress}) {
	    		pageTracker._setAllowLinker(true);
    			pageTracker._setAllowHash(false);
    		}
    	  
   			else {
     			pageTracker._setDomainName("none");
     			pageTracker._setAllowLinker(true);
     			pageTracker._setAllowHash(false);
   			}
			pageTracker._trackPageview();
 		}  
 		catch(err) {
 		}
	</script>
```
