---
title: "List Available REST Resources"
domain: rest-api
topic: list-available-rest-resources
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:34.856Z
estimatedTokens: 227
keywords: [REST, Resources, Version, resource, API, URI, additional, Further]
---

# List Available REST Resources

> Use the Resources by Version resource to list the resources available for the
		specified API version. This provides the name and URI of each additional resource.

# List Available REST Resources

Use the [Resources by Version](atlas.en-us.api_rest.meta/api_rest/resources_discoveryresource.htm "Lists available resources for the specified API version, including resource name and URI.") resource to list the resources available for the specified API version. This provides the name and URI of each additional resource.

Example

```

```

Example request body

none required

Example JSON response body

```

```

Example XML response body

```

```

## Further Information

For information about the identity resource, see [Identity URLs](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_using_openid.htm&type=5&language=en_US "HTML (New Window)").

For the other resources, see [Reference](atlas.en-us.api_rest.meta/api_rest/resources_list.htm "The following table lists supported REST resources in the API and provides a brief description for each.").

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/ -H "Authorization: Bearer token"
```

```
{
   "tooling" : "/services/data/v66.0/tooling",
   "metadata" : "/services/data/v66.0/metadata",
   "eclair" : "/services/data/v66.0/eclair",
   "folders" : "/services/data/v66.0/folders",
   "prechatForms" : "/services/data/v66.0/prechatForms",
   "contact-tracing" : "/services/data/v66.0/contact-tracing",
   "jsonxform" : "/services/data/v66.0/jsonxform",
   "chatter" : "/services/data/v66.0/chatter",
   "payments" : "/services/data/v66.0/payments",
   "tabs" : "/services/data/v66.0/tabs",
   "appMenu" : "/services/data/v66.0/appMenu",
   "quickActions" : "/services/data/v66.0/quickActions",
   "queryAll" : "/services/data/v66.0/queryAll",
   "commerce" : "/services/data/v66.0/commerce",
   "wave" : "/services/data/v66.0/wave",
   "iot" : "/services/data/v66.0/iot",
   "analytics" : "/services/data/v66.0/analytics",
   "search" : "/services/data/v66.0/search",
   "smartdatadiscovery" : "/services/data/v66.0/smartdatadiscovery",
   "identity" : "https://MyDomainName.my.salesforce.com/id/
      00DRO0000008aXd2AI/005RO000000HfnkYAC",
   "composite" : "/services/data/v66.0/composite",
   "parameterizedSearch" : "/services/data/v66.0/parameterizedSearch",
   "fingerprint" : "/services/data/v66.0/fingerprint",
   "theme" : "/services/data/v66.0/theme",
   "nouns" : "/services/data/v66.0/nouns",
   "domino" : "/services/data/v66.0/domino",
   "event" : "/services/data/v66.0/event",
   "serviceTemplates" : "/services/data/v66.0/serviceTemplates",
   "recent" : "/services/data/v66.0/recent",
   "connect" : "/services/data/v66.0/connect",
   "licensing" : "/services/data/v66.0/licensing",
   "limits" : "/services/data/v66.0/limits",
   "process" : "/services/data/v66.0/process",
   "dedupe" : "/services/data/v66.0/dedupe",
   "async-queries" : "/services/data/v66.0/async-queries",
   "query" : "/services/data/v66.0/query",
   "jobs" : "/services/data/v66.0/jobs",
   "localizedvalue" : "/services/data/v66.0/localizedvalue",
   "mobile" : "/services/data/v66.0/mobile",
   "emailConnect" : "/services/data/v66.0/emailConnect",
   "consent" : "/services/data/v66.0/consent",
   "tokenizer" : "/services/data/v66.0/tokenizer",
   "compactLayouts" : "/services/data/v66.0/compactLayouts",
   "async" : "/services/data/v66.0/async",
"sobjects" : "/services/data/v66.0/sobjects",
   "actions" : "/services/data/v66.0/actions",
   "support" : "/services/data/v66.0/support"
}
```

```
<?xml version="1.0" encoding="UTF-8"?> 
<urls>
   <tooling>/services/data/v66.0/tooling</tooling>
   <metadata>/services/data/v66.0/metadata</metadata>
   <eclair>/services/data/v66.0/eclair</eclair>
   <folders>/services/data/v66.0/folders</folders>
   <prechatForms>/services/data/v66.0/prechatForms</prechatForms>
   <contact-tracing>/services/data/v66.0/contact-tracing</contact-tracing>
   <jsonxform>/services/data/v66.0/jsonxform</jsonxform>
   <chatter>/services/data/v66.0/chatter</chatter>
   <payments>/services/data/v66.0/payments</payments>
   <tabs>/services/data/v66.0/tabs</tabs>
   <appMenu>/services/data/v66.0/appMenu</appMenu>
   <quickActions>/services/data/v66.0/quickActions</quickActions>
   <queryAll>/services/data/v66.0/queryAll</queryAll>
   <commerce>/services/data/v66.0/commerce</commerce>
   <wave>/services/data/v66.0/wave</wave>
   <iot>/services/data/v66.0/iot</iot>
   <analytics>/services/data/v66.0/analytics</analytics>
   <search>/services/data/v66.0/search</search>
   <smartdatadiscovery>/services/data/v66.0/smartdatadiscovery</smartdatadiscovery>
   <identity>https://MyDomainName.my.salesforce.com/id/
      ​​​00DRO0000008aXd2BI/​005RO000000HfnkYAB</identity>
   <composite>/services/data/v66.0/composite</composite>
   <parameterizedSearch>/services/data/v66.0/parameterizedSearch</parameterizedSearch>
   <fingerprint>/services/data/v66.0/fingerprint</fingerprint>
   <theme>/services/data/v66.0/theme</theme>
   <nouns>/services/data/v66.0/nouns</nouns>
   <domino>/services/data/v66.0/domino</domino>
   <event>/services/data/v66.0/event</event>
   <serviceTemplates>/services/data/v66.0/serviceTemplates</serviceTemplates>
   <recent>/services/data/v66.0/recent</recent>
   <connect>/services/data/v66.0/connect</connect>
   <licensing>/services/data/v66.0/licensing</licensing>
   <limits>/services/data/v66.0/limits</limits>
   <process>/services/data/v66.0/process</process>
   <dedupe>/services/data/v66.0/dedupe</dedupe>
   <async-queries>/services/data/v66.0/async-queries</async-queries>
   <query>/services/data/v66.0/query</query>
   <jobs>/services/data/v66.0/jobs</jobs>
   <localizedvalue>/services/data/v66.0/localizedvalue</localizedvalue>
   <mobile>/services/data/v66.0/mobile</mobile>
   <emailConnect>/services/data/v66.0/emailConnect</emailConnect>
   <consent>/services/data/v66.0/consent</consent>
   <tokenizer>/services/data/v66.0/tokenizer</tokenizer>
   <compactLayouts>/services/data/v66.0/compactLayouts</compactLayouts>
      <async>/services/data/v66.0/sobjects</async>
   <sobjects>/services/data/v66.0/sobjects</sobjects>
   <actions>/services/data/v66.0/actions</actions>
   <support>/services/data/v66.0/support</support>
</urls>
```

## Related Topics

- Resources by Version (atlas.en-us.api_rest.meta/api_rest/resources_discoveryresource.htm)
- Reference (atlas.en-us.api_rest.meta/api_rest/resources_list.htm)
