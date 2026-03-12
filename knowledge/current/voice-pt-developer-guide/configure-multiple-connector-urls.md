---
title: "Configure Multiple Connector URLs"
domain: voice-pt-developer-guide
topic: configure-multiple-connector-urls
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:22.081Z
estimatedTokens: 681
keywords: [Configure, Multiple, Connector, URLs, add, corresponding, login, managed, package, admin, select, URL, contact, center, creation]
---

# Configure Multiple Connector URLs

> You can add multiple connector URLs and the corresponding login URLs in the managed
  package. The admin can select a connector URL during contact center creation or from the contact
  center details page.

# Configure Multiple Connector URLs

You can add multiple connector URLs and the corresponding login URLs in the managed package. The admin can select a connector URL during contact center creation or from the contact center details page.

1.  Set the CapabilitiesSupportsMultiVendorConfig field of the ConversationVendorInfo object to true.
2.  Implement the service\_cloud\_voice.VendorConfigProvider Apex interface and related classes.

    When the CapabilitiesSupportsMultiVendorConfig field is set to true, the service\_cloud\_voice.VendorConfigProvider Apex interface must be implemented. Otherwise, the ConversationVendorInfo object can’t be created or updated.


Use these sample code blocks as guides.

This sample interface definition implements the VendorConfigProvider Apex interface to send multiple connector and login URLs.

```

```

Implement the VendorConfigRequest Apex class to define the request payload for the getVendorConfigDetails method. This class definition represents the structure of the request containing information about the contact center. A sample implementation is:

```

```

Implement the VendorConfigResponse Apex class to define the list of configurations returned to the system. This class definition represents the format of the response returned from the getVendorConfigDetails method. A sample implementation is:

```

```

Implement the VendorConfigInfo Apex class to pair a connector URL with its corresponding login URL. This class definition represents the structure of individual entries in the selection list for admins. A sample implementation is:

```

```

Implement the VendorUrl Apex class to define a specific URL endpoint along with the display name shown to admins in the UI. This class definition represents the structure of individual URL entries. Each URL has the actual URL and a display name field shown to admins in the selection list. A sample implementation is:

```

```

An example implementation for the VendorConfigProvider apex interface is:

```

```

## Multiple Connector URL Considerations

When you implement the multiple connector URL feature, consider these:

-   The values of connector URL and login URL from the CVI are used as default values. If the admin doesn’t select a connector URL, the CVI defaults are used.
-   Do not send the default CVI URLs in the Apex response to avoid duplicate entries.
-   If no login URL is provided in the Apex response or if you provide a VendorURL object with a null login URL, the default login URL from the CVI is used.
-   Connector URL is mandatory. If not provided in the response, or if VendorURL objects contain a null connector URL, the entry is ignored and isn’t shown to the admin in the UI.

## Code Examples

```apex
global interface VendorConfigProvider {
/*
* @description Partners can use this interface implementation to support multiple connector urls for their CVI
* @param request This contains the request object of type VendorConfigRequest
* @see VendorConfigRequest
* @see VendorConfigResponse
* @since 258
*/
VendorConfigResponse getVendorConfigDetails(VendorConfigRequest request);
}
```

```apex
global with sharing class VendorConfigRequest {
private ContactCenterInfo contactCenterInfo;

/**
* Constructor for the VendorConfigRequest payload.
* @param contactCenterInfo - The contact center configuration used to determine the appropriate connector URLs.
*/
global VendorConfigRequest(ContactCenterInfo contactCenterInfo) {
this.contactCenterInfo = contactCenterInfo;
}

/**
* Returns the contact center information associated with this request.
*/
global ContactCenterInfo getContactCenterInfo() {
return this.contactCenterInfo;
}

/**
* Sets the contact center information for this request.
*/
global void setContactCenterInfo(ContactCenterInfo contactCenterInfo) {
this.contactCenterInfo = contactCenterInfo;
}
}
```

```apex
global with sharing class VendorConfigResponse extends PartnerResponse {
private List<VendorConfigInfo> vendorConfig;

/**
* Constructor for generating a VendorConfigResponse.
* @param vendorConfig - The list of connector and login URL configurations available for the admin.
*/
global VendorConfigResponse (boolean success, String errorMessage, List<VendorConfigInfo> vendorConfig) {
super(success, errorMessage);
this.vendorConfig = vendorConfig;
}

/**
* Returns the list of vendor configurations.
*/
global List<VendorConfigInfo> getVendorConfig() {
return this.vendorConfig;
}

/**
* Sets the list of vendor configurations.
*/
global void setVendorConfig(List<VendorConfigInfo> vendorConfig) {
this.vendorConfig = vendorConfig;
}
}
```

```apex
global with sharing class VendorConfigInfo {
private VendorUrl connectorUrl;
private VendorUrl loginUrl;

/**
* Constructor for pairing a connector URL with a login URL.
* @param connectorUrl - The required connector URL for the contact center.
* @param loginUrl - The optional login URL; if null, the system uses the default login URL from the CVI.
*/
global VendorConfigInfo(VendorUrl connectorUrl, VendorUrl loginUrl) {
this.connectorUrl = connectorUrl;
this.loginUrl = loginUrl;
}

/**
* Returns the connector URL object.
*/
global VendorUrl getConnectorUrl() {
return this.connectorUrl;
}

/**
* Returns the login URL object.
*/
global VendorUrl getLoginUrl() {
return this.loginUrl;
}

/**
* Sets the connector URL object.
*/
global void setConnectorUrl(VendorUrl connectorUrl) {
this.connectorUrl = connectorUrl;
}

/**
* Sets the login URL object.
*/
global void setLoginUrl(VendorUrl loginUrl) {
this.loginUrl = loginUrl;
}
}
```

```apex
global with sharing class VendorUrl {
private String url;
private String displayName;

/**
* Constructor for an individual URL endpoint entry.
* @param url - The actual endpoint URL string.
* @param displayName - The user-friendly label shown to admins in the UI.
*/
global VendorUrl(String url, String displayName) {
this.url = url;
this.displayName = displayName;
}

/**
* Returns the endpoint URL string.
*/
global String getUrl() {
return this.url;
}

/**
* Returns the display name of the URL entry.
*/
global String getDisplayName() {
return this.displayName;
}

/**
* Updates the endpoint URL string.
*/
global void setUrl(String url) {
this.url = url;
}

/**
* @param displayName - Sets the display name for the URL entry. Use a meaningful name to help admins select the correct option.
*/
global void setDisplayName(String displayName) {
this.displayName = displayName;
}
}
```
