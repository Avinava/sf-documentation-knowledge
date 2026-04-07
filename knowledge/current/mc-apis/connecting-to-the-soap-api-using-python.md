---
title: "Connecting to the SOAP API using Python"
domain: mc-apis
topic: connecting-to-the-soap-api-using-python
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.753Z
estimatedTokens: 1156
keywords: [Connecting, SOAP, API, Python, connection, test, perform, various, tasks, sending, email, retrieving, Why, Connect, How, Generating, Client, Stubs, Sample, Code, namespaces, urn, above, surrounded, tag, mapping, original, mappings, ElementSOAP, insufficient, Running]
---

> Use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.

# Connecting to the SOAP API using Python

## Why Connect to the SOAP API Using Python

Use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.

## How to Connect to the SOAP API Using Python

Download both the latest version of Python Python and the Zolera SOAP infrastructure and follow the appropriate instructions to install the service on your computer. Marketing Cloud also provides a full Python SDK for use in connecting your environment and developing your projects:

-   [Python download](http://www.python.org/download/)
-   [Zolera SOAP infrastructure](http://pywebsvcs.sourceforge.net/)
-   [Python SDK](https://github.com/ExactTarget/FuelSDK-Python)

### Generating Client Stubs

Use the wsdl2py tool to generate Python stubs based on the Marketing Cloud WSDL.

[See the WSDL To Python Code section of ZSI's User Guide.](http://pywebsvcs.sourceforge.net/zsi.html)

When generating stubs for a service called PartnerAPI, the tool generates the necessary files using the command below:

```
wsdl2py -u https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl
```

## Sample Code

Use the client.py script below to generate the Python stubs, add security headers, and sends and receives a SOAP message by calling the PersonServices's getEmail() method. You must modify this code to interact with the SOAP API.

```
#!/usr/bin/python
from elementsoap.ElementSOAP import SoapHeader, SoapRequest, SoapService
import binascii
import random
import sha
import time
import xml.etree.cElementTree as CET
import xml.etree.ElementTree as ET
class EmailService(SoapService):
    url = 'https://devauth.utcc.utoronto.ca/wsbuild/services/1_0_0/PersonService'
    def getEmail(self, header, personId):
        action = ''
        request = SoapRequest(NS_PERSON_URN + 'getEmail')
        credentials = CET.SubElement(request, NS_PERSON_URN + 'credentials')
        elem = CET.SubElement(credentials, NS_VO_URN + 'personId')
        elem.text = personId
        return self.call(action, request, header = header)
PASSWORD_DIGEST_TYPE = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest"
RESPONSE_URN = '{http://person.vo.model.sis.utoronto.ca}'
# namespaces
NS_SOAP_ENV = 'http://schemas.xmlsoap.org/soap/envelope/'
NS_WS_SEC = \
'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'
NS_WS_UTIL = \
'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd'
NS_PERSON = 'http://service.ws.sis.utoronto.ca/1_0_0/PersonService'
NS_VO = 'http://vo.ws.sis.utoronto.ca'
# urn for above namespaces (surrounded by {})
NS_SOAP_ENV_URN = '{' + NS_SOAP_ENV + '}'
NS_WS_SEC_URN = '{' + NS_WS_SEC + '}'
NS_WS_UTIL_URN = '{' + NS_WS_UTIL + '}'
NS_PERSON_URN = '{' + NS_PERSON + '}'
NS_VO_URN = '{' + NS_VO + '}'
# namespace to tag mapping (the original mappings in ElementSOAP are
# insufficient)
MY_NAMESPACE_MAP = {
        NS_SOAP_ENV: 'soap',
        NS_PERSON: 'person',
        NS_VO: 'vo',
        NS_WS_SEC: 'wsse',
        NS_WS_UTIL: 'wsu',
}
ET._namespace_map.update(MY_NAMESPACE_MAP)
def SoapSecurity(parent):
    elem = CET.SubElement(parent, NS_WS_SEC_URN + 'Security')
    elem.set(NS_SOAP_ENV_URN + 'mustUnderstand', '1')
    return elem
def SoapUsernameToken(parent, user, password):
    nonce = sha.new(str(random.random())).digest()
    created = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime(time.time()))
    digest = sha.new(nonce + created + password).digest()
    ut = CET.SubElement(parent, NS_WS_SEC_URN + 'UsernameToken')
    elem = CET.SubElement(ut, NS_WS_SEC_URN + 'Username')
    elem.text = user
    elem = CET.SubElement(ut, NS_WS_SEC_URN + 'Password')
    elem.text = binascii.b2a_base64(digest)[:-1]
    elem.set('Type', PASSWORD_DIGEST_TYPE)
    elem = CET.SubElement(ut, NS_WS_SEC_URN + 'Nonce')
    elem.text = binascii.b2a_base64(nonce)[:-1]
    elem = CET.SubElement(ut, NS_WS_UTIL_URN + 'Created')
    elem.text = created
    return ut
header = SoapHeader()
SoapUsernameToken(SoapSecurity(header), 'YOUR_USERNAME_HERE', 'YOUR_PASSWORD_HERE')
personId = '9300002'
response = EmailService().getEmail(header, personId)
email = response.find('*//' + RESPONSE_URN + 'email')
valid = response.find('*//' + RESPONSE_URN + 'valid')
if email == None:
    print "Empty email"
else:
    print 'Email address for ' + personId + ' is: ' + email.text
    print 'Validity for ' + personId + ' is: ' + valid.text
```

## Running the Client

Use the following command to run the client:

```
python client.py
```
