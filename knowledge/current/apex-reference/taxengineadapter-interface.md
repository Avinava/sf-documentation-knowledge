---
title: "TaxEngineAdapter Interface"
domain: apex-reference
topic: taxengineadapter-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.104Z
estimatedTokens: 1040
namespace: CommerceTax
keywords: [TaxEngineAdapter, processRequest, instance, TaxEngineContext, calculated, tax, TaxDetailsResponse, error, ErrorResponse, requestType, Implementation, Usage]
---

# TaxEngineAdapter Interface

> The processRequest method takes
      an instance of TaxEngineContext class and returns a
      response with the calculated tax details through the TaxDetailsResponse class or an error response through the ErrorResponse class.

**Namespace:** `CommerceTax`

# TaxEngineAdapter Interface

Retrieves information from the tax engine and evaluates the information to define tax details.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

-   **[TaxEngineAdapter Methods](atlas.en-us.apexref.meta/apexref/apex_interface_commercetax_TaxEngineAdapter.htm#apex_commercetax_TaxEngineAdapter_methods)**
    Learn more about the available methods with the TaxEngineAdapter class.
-   **[TaxEngineAdapter Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_commercetax_TaxEngineAdapter.htm#apex_interface_commercetax_TaxEngineAdapter_Example)**
    Refer to the example implementation of the TaxEngineAdapter interface to accept information from a tax engine and evaluate the information to define tax details.

## TaxEngineAdapter Methods

Learn more about the available methods with the TaxEngineAdapter class.

The TaxEngineAdapter class includes these methods.

-   **[processRequest(requestType)](atlas.en-us.apexref.meta/apexref/apex_interface_commercetax_TaxEngineAdapter.htm#apex_commercetax_TaxEngineAdapter_processRequest)**
    The processRequest method takes an instance of TaxEngineContext class and returns a response with the calculated tax details through the TaxDetailsResponse class or an error response through the ErrorResponse class.

### processRequest(requestType)

The processRequest method takes an instance of TaxEngineContext class and returns a response with the calculated tax details through the TaxDetailsResponse class or an error response through the ErrorResponse class.

#### Signature

global commercetax.TaxEngineResponse processRequest(commercetax.TaxEngineContext var1)

#### Parameters

var1

Type: [TaxEngineContext](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxEngineContext.htm#apex_class_commercetax_TaxEngineContext "Wrapper class that stores details about the type of a tax calculation request.")

Wrapper class that stores information about the type of a tax calculation request.

#### Return Value

Type: TaxEngineResponse

Generic interface representing a response from a tax engine.

## TaxEngineAdapter Example Implementation

Refer to the example implementation of the TaxEngineAdapter interface to accept information from a tax engine and evaluate the information to define tax details.

### Namespace

[commercetax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

### Usage

The TaxEngineAdapter interface accepts information from the tax engine through the TaxEngineContext class. The interface evaluates the information to define tax in the response with details, such as tax amount and addresses. The response is used to update and create entities in the Salesforce org.

Use these steps to build a sample tax adapter implementation. Each tax adapter implementation varies based on your implementation requirements. Customize this example to suit your business requirements.

### Example

-   The custom adapter class implements the TaxEngineAdapter interface. The processRequest method takes an instance of TaxEngineContext class and returns a response with the calculated tax details through the TaxDetailsResponse class or an error response through the ErrorResponse class.

    ```

    ```

-   This example shows the CalculateTaxService class.

    ```

    ```

-   In the HttpService class, replace the test value in the endpoint variable with the name of the TaxTypedNamedCredential record. This class contains the credentials that are required to access your Avalara account through Salesforce.

    ```

    ```

-   Parse the JsonSuccessParser response object by using the AvalaraJSONBuilder class to build the response for your adapter.

    This example shows the JsonSuccessParser class.

    ```

    ```

    Prepare your JSON request to call the Avalara endpoint by using the AvalaraJSONBuilder class.

    ```

    ```

-   Use the JsonErrorParser class to extract the error details, if any.

    ```

    ```

## Code Examples

```apex
global virtual class AvalaraAdapter implements commercetax.TaxEngineAdapter {
    global commercetax.TaxEngineResponse processRequest(commercetax.TaxEngineContext taxEngineContext) {
        commercetax.RequestType requestType = taxEngineContext.getRequestType();
        if(requestType == commercetax.RequestType.CalculateTax){
            return CalculateTaxService.getTax(taxEngineContext);
        }
        else 
            return null;
    }
}
```

```apex
global class CalculateTaxService {
    // ============================================================================
    // CONSTANT 
    // ============================================================================
    private static final String AVALARA_ENDPOINT_URL_SANDBOX = 'https://sandbox-rest.avatax.com/api/v2';
    // Avalara Endpoint URL Production
    private static final String AVALARA_ENDPOINT_URL_PRODUCTION = 'https://rest.avatax.com/api/v2';
    private static final String TEST_REQUEST_BODY = '{  "id": -1,  "code": "00000131",  "companyId": -1,  "date": "2017-02-03T00:00:00",  "taxDate": "2017-02-03T00:00:00",  "status": "Temporary",  "type": "SalesOrder",  "reconciled": false,  "totalAmount": 4000,  "totalExempt": 0,  "totalTax": 290,  "totalTaxable": 4000,  "totalTaxCalculated": 290,  "adjustmentReason": "NotAdjusted",  "locked": false,  "version": 1,  "modifiedDate": "2017-02-03T12:18:18.7347388Z",  "modifiedUserId": 53894,  "lines": [    {      "id": -1,      "transactionId": -1,      "lineNumber": "80241000000jNDCAA2",      "discountAmount": 0,      "exemptAmount": 0,      "exemptCertId": 0,      "isItemTaxable": true,      "lineAmount": 1000,      "reportingDate": "2017-02-03T00:00:00",      "tax": 72.5,      "taxableAmount": 1000,      "taxCalculated": 72.5,      "taxCode": "P0000000",      "taxDate": "2017-02-03T00:00:00",      "taxIncluded": false,      "details": [        {          "id": -1,          "transactionLineId": -1,          "transactionId": -1,          "country": "US",          "region": "CA",          "exemptAmount": 0,          "jurisCode": "06",          "jurisName": "CALIFORNIA",          "stateAssignedNo": "",          "jurisType": "STA",          "nonTaxableAmount": 0,          "rate": 0.06,          "tax": 60,          "taxableAmount": 1000,          "taxType": "Sales",          "taxName": "CA STATE TAX",          "taxAuthorityTypeId": 45,          "taxCalculated": 60,          "rateType": "General"        },        {          "id": -1,          "transactionLineId": -1,          "transactionId": -1,          "country": "US",          "region": "CA",          "exemptAmount": 0,          "jurisCode": "075",          "jurisName": "SAN FRANCISCO",          "stateAssignedNo": "",          "jurisType": "CTY",          "nonTaxableAmount": 0,          "rate": 0.0025,          "tax": 2.5,          "taxableAmount": 1000,          "taxType": "Sales",          "taxName": "CA COUNTY TAX",          "taxAuthorityTypeId": 45,          "taxCalculated": 2.5,          "rateType": "General"        },        {          "id": -1,          "transactionLineId": -1,          "transactionId": -1,          "country": "US",          "region": "CA",          "exemptAmount": 0,          "jurisCode": "EMTV0",          "jurisName": "SAN FRANCISCO CO LOCAL TAX SL",          "stateAssignedNo": "38",          "jurisType": "STJ",          "nonTaxableAmount": 0,          "rate": 0.01,          "tax": 10,          "taxableAmount": 1000,          "taxType": "Sales",          "taxName": "CA SPECIAL TAX",          "taxAuthorityTypeId": 45,          "taxCalculated": 10,          "rateType": "General"        }      ]    }  ]}';
    
    private static String getTestResponseString(){
    
     List<String> jsonResponse = new List<String> {
                                    '"id": 0',
                                    '"code": "testDocCode1231245984"',
                                    '"companyId": 468039',
                                    '"date": "2020-07-15"',
                                    '"paymentDate": "2020-07-15"',
                                    '"status": "Temporary"',
                                    '"type": "SalesOrder"',
                                    '"customerVendorCode": "testDocCode1234"',
                                    '"customerCode": "testDocCode1234"',
                                    '"reconciled": false',
                                    '"totalAmount": 232',
                                    '"totalExempt": 0',
                                    '"totalDiscount": 0',
                                    '"totalTax": 23.43',
                                    '"totalTaxable": 232',
                                    '"totalTaxCalculated": 23.43',
                                    '"adjustmentReason": "NotAdjusted"',
                                    '"locked": false',
                                    '"version": 1',
                                    '"exchangeRateEffectiveDate": "2020-07-15"',
                                    '"exchangeRate": 1',
                                    '"modifiedDate": "2020-08-13T11:19:20.4836636Z"',
                                    '"modifiedUserId": 53894',
                                    '"taxDate": "2020-07-15T00:00:00"',
                                    '"lines": [{"id": 0,"transactionId": 0,"lineNumber": "1","discountAmount": 0,"exemptAmount": 0,"exemptCertId": 0,"isItemTaxable": true,"itemCode": "","lineAmount": 232,"quantity": 1,"reportingDate": "2020-07-15","tax": 23.43,"taxableAmount": 232,"taxCalculated": 23.43,"taxCode": "P0000000","taxCodeId": 8087,"taxDate": "2020-07-15","taxOverrideType": "None","taxOverrideAmount": 0,"taxIncluded": false,"details": [{"id": 0,"transactionLineId": 0,"transactionId": 0,"country": "US","region": "WA","exemptAmount": 0,"jurisCode": "53","jurisName": "WASHINGTON","stateAssignedNo": "","jurisType": "STA","jurisdictionType": "State","nonTaxableAmount": 0,"rate": 0.065,"tax": 15.08,"taxableAmount": 232,"taxType": "Sales","taxSubTypeId": "S","taxName": "WA STATE TAX","taxAuthorityTypeId": 45,"taxCalculated": 15.08,"rateType": "General","rateTypeCode": "G","unitOfBasis": "PerCurrencyUnit","isNonPassThru": false,"isFee": false},{"id": 0,"transactionLineId": 0,"transactionId": 0,"country": "US","region": "WA","exemptAmount": 0,"jurisCode": "033","jurisName": "KING","stateAssignedNo": "1700","jurisType": "CTY","jurisdictionType": "County","nonTaxableAmount": 0,"rate": 0,"tax": 0,"taxableAmount": 232,"taxType": "Sales","taxSubTypeId": "S","taxName": "WA COUNTY TAX","taxAuthorityTypeId": 45,"taxCalculated": 0,"rateType": "General","rateTypeCode": "G","unitOfBasis": "PerCurrencyUnit","isNonPassThru": false,"isFee": false}],"nonPassthroughDetails": [],"hsCode": "","costInsuranceFreight": 0,"vatCode": "","vatNumberTypeId": 0}]',
                                    '"addresses": [{"id": 0,"transactionId": 0,"boundaryLevel": "Address","line1": "255 S. King Street","line2": "","line3": "","city": "Seattle","region": "WA","postalCode": "98104","country": "US","taxRegionId": 2109700,"latitude": "47.59821","longitude": "-122.33108"}]',
                                    '"summary": [{"country": "US","region": "WA","jurisType": "State","jurisCode": "53","jurisName": "WASHINGTON","taxAuthorityType": 45,"stateAssignedNo": "","taxType": "Sales","taxSubType": "S","taxName": "WA STATE TAX","rateType": "General","taxable": 232,"rate": 0.065,"tax": 15.08,"taxCalculated": 15.08,"nonTaxable": 0,"exemption": 0},{"country": "US","region": "WA","jurisType": "County","jurisCode": "033","jurisName": "KING","taxAuthorityType": 45,"stateAssignedNo": "1700","taxType": "Sales","taxSubType": "S","taxName": "WA COUNTY TAX","rateType": "General","taxable": 232,"rate": 0,"tax": 0,"taxCalculated": 0,"nonTaxable": 0,"exemption": 0}]'
                                };
            return '{' + String.join(jsonResponse, ',') + '}';
        }
    
    public static commercetax.TaxEngineResponse getTax(commercetax.TaxEngineContext taxEngineContext) 
    { 
        commercetax.CalculateTaxRequest request = (commercetax.CalculateTaxRequest)taxEngineContext.getRequest();
        commercetax.calculatetaxtype requestType = request.taxtype;
        string referenceEntity = request.ReferenceEntityId;
        try{
            List<commercetax.TaxLineItemRequest> listOfLines = request.lineItems;
            if(!listOfLines.isEmpty()){
                HttpService sendHttpRequest = new HttpService();
                sendHttpRequest.addHeader('Content-type', 'application/json');
                String requestBody = AvalaraJSONBuilder.getInstance().frameJsonForGetTaxOrderItem(request);
                sendHttpRequest.post('/transactions/create',requestBody);
                //system.debug('Request '+requestBody);
                String responseString = '';
                if(Test.isRunningTest()){
                    responseString = getTestResponseString();
                } else{
                    responseString = sendHttpRequest.getResponse().getBody();
                }
                //system.debug(sendHttpRequest.getResponse());
                //system.debug('response'+responseString);
                //responseString = TEST_REQUEST_BODY;
                system.debug('Heap size used ' +Limits.getHeapSize());
                
                if(!responseString.contains('error'))
                {
                    commercetax.CalculateTaxResponse response = new commercetax.CalculateTaxResponse();
                    JsonSuccessParser jsonSuccessParserClass = JsonSuccessParser.parse(responseString);
                    response.setTaxTransactionType(request.taxTransactionType);
                    response.setDocumentCode(jsonSuccessParserClass.code);
                    response.setReferenceDocumentCode(jsonSuccessParserClass.referenceCode);
                    if(jsonSuccessParserClass.status == 'Temporary')  {
                        response.setStatus(commercetax.TaxTransactionStatus.Uncommitted);
                    }
                    if(jsonSuccessParserClass.status == 'Committed') {
                        response.setStatus(commercetax.TaxTransactionStatus.Committed);
                    }
                    response.setTaxType(requestType);
                    commercetax.AmountDetailsResponse headerAmountResponse = new commercetax.AmountDetailsResponse();
                    headerAmountResponse.setTotalAmountWithTax(jsonSuccessParserClass.totalAmount + jsonSuccessParserClass.totaltax);
                    headerAmountResponse.setExemptAmount(jsonSuccessParserClass.totalExempt);
                    headerAmountResponse.setTotalAmount(jsonSuccessParserClass.totalAmount);
                    headerAmountResponse.setTaxAmount(jsonSuccessParserClass.totalTax);
                    response.setAmountDetails(headerAmountResponse);
                    response.setStatusDescription(jsonSuccessParserClass.adjustmentReason);
                    response.setEffectiveDate(date.valueof(jsonSuccessParserClass.taxDate));
                    response.setTransactionDate(date.valueof(jsonSuccessParserClass.transactionDate));
                    response.setReferenceEntityId(referenceEntity);
                    response.setTaxTransactionId(jsonSuccessParserClass.id);
                    response.setCurrencyIsoCode(request.currencyIsoCode);
                    List<commercetax.LineItemResponse> lineItemResponses = new List<commercetax.LineItemResponse>();
                    for(JsonSuccessParser.Lines linesToProcess: jsonSuccessParserClass.lines)
                    {
                        commercetax.LineItemResponse lineItemResponse = new commercetax.LineItemResponse();
                        Double rateCalculated = 0.0;
                        List<commercetax.TaxDetailsResponse> taxDetailsResponses = new List<commercetax.TaxDetailsResponse>();
                        for(JsonSuccessParser.details linesDetails : linesToProcess.details)
                        {
                            commercetax.TaxDetailsResponse taxDetailsResponse = new commercetax.TaxDetailsResponse();
                            if(linesDetails.exemptAmount != 0){
                                taxDetailsResponse.setExemptAmount(linesDetails.exemptAmount);
                                taxDetailsResponse.setExemptReason('Some reason we dont know');
                            }
                                commercetax.ImpositionResponse imposition = new commercetax.ImpositionResponse();
                                    imposition.setSubType(linesDetails.taxName);
                                    imposition.setType(linesDetails.ratetype);
                                    imposition.setSubType(linesDetails.taxName);
                                    taxDetailsResponse.setImposition(imposition);
                                commercetax.JurisdictionResponse jurisdiction = new commercetax.JurisdictionResponse();
                                    jurisdiction.setCountry(linesDetails.country);
                                    jurisdiction.setRegion(linesDetails.region);
                                    jurisdiction.setName(linesDetails.jurisName);
                                    jurisdiction.setStateAssignedNumber(linesDetails.stateAssignedNo);
                                    jurisdiction.setId(linesDetails.jurisCode);
                                    jurisdiction.setLevel(linesDetails.jurisType);
                                    taxDetailsResponse.setJurisdiction(jurisdiction);
                                    rateCalculated += linesDetails.rate; 
                                taxDetailsResponse.setRate(rateCalculated);
                                taxDetailsResponse.setTax(linesDetails.taxCalculated);
                                taxDetailsResponse.setTaxableAmount(linesDetails.taxableAmount);
                                taxDetailsResponse.setTaxAuthorityTypeId(String.valueOf(linesDetails.taxAuthorityTypeId));
                                taxDetailsResponse.setTaxId(linesDetails.id);
                                taxDetailsResponse.setTaxRegionId(linesDetails.region);
                                taxDetailsResponses.add(taxDetailsResponse);    
                            
                        }
                            lineItemResponse.setTaxes(taxDetailsResponses);
                            lineItemResponse.setEffectiveDate(date.valueof(linesToProcess.taxDate));
                            lineItemResponse.setIsTaxable(true);
                                commercetax.AmountDetailsResponse amountResponse = new commercetax.AmountDetailsResponse();
                                amountResponse.setTaxAmount(linesToProcess.taxCalculated);
                                amountResponse.setTotalAmount(linesToProcess.lineAmount);
                                amountResponse.setTotalAmountWithTax(linesToProcess.lineAmount+linesToProcess.taxCalculated);
                                amountResponse.setExemptAmount(linesToProcess.exemptAmount);
                                lineItemResponse.setAmountDetails(amountResponse);
                            lineItemResponse.setIsTaxable(linesToProcess.isItemTaxable);
                            lineItemResponse.setProductCode(linesToProcess.itemCode);
                            lineItemResponse.setTaxCode(linesToProcess.taxCode);
                            lineItemResponse.setLineNumber(linesToProcess.lineNumber);
                            lineItemResponse.setQuantity(linesToProcess.quantity);
                            lineItemResponses.add(lineItemResponse);
                    }
                    response.setLineItems(lineItemResponses);
                    return response;
                }
                else
                {
                    JsonErrorParser jsonErrorParserClass = JsonErrorParser.parse(responseString);
                    String message = null;
                    if(String.isNotBlank(jsonErrorParserClass.error.message))
                    {
                       message=jsonErrorParserClass.error.message;
                    }else{
                           String errorMessage = '';
                            for(JsonErrorParser.cls_details messageString : jsonErrorParserClass.error.details)
                            {
                                if(String.isNotBlank(messageString.message) )
                                {
                                    errorMessage = messageString.message;
                                }
                            }
                            message = errorMessage; 
                        }
                     return new commercetax.ErrorResponse(commercetax.resultcode.TaxEngineError, '501', message);

                }
            }else return null;
        }
        catch (Exception e) 
        {
            throw e; 
        }
    }
}
```

```apex
public with sharing class HttpService 
{   
    // Attribute to implement singleton pattern for Order Product Service class
    private static HttpService httpServiceInstance;
    
    // VARIABLES
    
    private HttpResponse httpResponse;
    private Map<String,String> mapOfHeaderParameter = new Map<String,String>();
    private enum Method {GET, POST}
    
    /**
    * @name getInstance
    * @description get an Instance of Service class
    * @params NA
    * @return Http Service Class Instance
    */ 
    public static HttpService getInstance() 
    {
        if (NULL == httpServiceInstance) 
        {
            httpServiceInstance =  new HttpService();  
        }
        return httpServiceInstance;
    }
    
    /**
    * @name get
    * @description Get Method to get a HTTP request
    */    
    public void get(String endPoint) 
    {
        send(newRequest(Method.GET, endPoint));
    }
    
    /**
    * @name post
    * @description Post Method to Post a HTTP request
    */ 
    public void post(String path, String requestBody)
    {
       String endPoint = 'callout:commerce.tax.TaxTypedNamedCredential:test'+path;
        send(newRequest(Method.POST, endPoint, requestBody));
    }
    
    /**
    * @name addHeader
    * @description addHeader Methods to add all the defualt Header's required fo rthe request
    */
    public void addHeader(String name, String value)
    {
        mapOfHeaderParameter.put(name, value);
    }
    
    /**
    * @name setHeader
    * @description setHeader Methods to set setHeader for the request
    */
    private void setHeader(HttpRequest request) 
    {
        for(String headerValue : mapOfHeaderParameter.keySet())
        {
            request.setHeader(headerValue, mapOfHeaderParameter.get(headerValue));
        }
    }
    /**
    * @name newRequest
    * @description newRequest Methods to make a new request
    */
    private HttpRequest newRequest(Method method, String endPoint)
    {
        return newRequest(method, endPoint, NULL);
    }
    
    /**
    * @name newRequest
    * @description newRequest Methods to make a new request
    */
    private HttpRequest newRequest(Method method, String endPoint, String requestBody) 
    {
        HttpRequest request = new HttpRequest();
        request.setMethod(Method.name());
        setHeader(request);
        request.setEndpoint(endPoint);
        if (String.isNotBlank(requestBody)) 
        {
            request.setBody(requestBody);
        }   
        request.setTimeout(120000);
        return request;
    }
    
    /**
    * @name send
    * @description send Methods to send a request
    */
    private void send(HttpRequest request) 
    {
        try 
        {
            Http http = new Http();
            httpResponse = http.send(request);
        }
        catch(System.CalloutException e) 
        {
            system.debug('callout exception happened' + e.getMessage());
        }
        catch(Exception e) 
        {
            system.debug('callout did not happen' + e.getMessage());
        }
    }
    
    /**
    * @name getResponse
    * @description getResponse Method to get the Response
    */
    public HttpResponse getResponse()
    {
        return httpResponse;
    }
    
    /**
    * @name getResponseToString
    * @description getResponse Method to get the Responses
    */
    public String getResponseToString()
    {
        return getResponse().toString();
    }
}
```

```apex
global with sharing class JsonSuccessParser
{
  public static void consumeObject(JSONParser parser)
  {
    Integer depth = 0;
    do {
      JSONToken curr = parser.getCurrentToken();
      if (curr == JSONToken.START_OBJECT ||
        curr == JSONToken.START_ARRAY) {
        depth++;
      } else if (curr == JSONToken.END_OBJECT ||
        curr == JSONToken.END_ARRAY) {
        depth--;
      }
    } while (depth > 0 && parser.nextToken() != null);
  }

    public class Addresses {
        public String id {get;set;}
        public String transactionId {get;set;}
        public String boundaryLevel {get;set;}
        public String line1 {get;set;}
        public String city {get;set;}
        public String region {get;set;}
        public String postalCode {get;set;}
        public String country {get;set;}
        public Integer taxRegionId {get;set;}

        public Addresses(JSONParser parser) {
            while (parser.nextToken() != JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != JSONToken.VALUE_NULL) {
                        if (text == 'id') {
                            id = parser.getText();
                        } else if (text == 'transactionId') {
                            transactionId = parser.getText();
                        } else if (text == 'boundaryLevel') {
                            boundaryLevel = parser.getText();
                        } else if (text == 'line1') {
                            line1 = parser.getText();
                        } else if (text == 'city') {
                            city = parser.getText();
                        } else if (text == 'region') {
                            region = parser.getText();
                        } else if (text == 'postalCode') {
                            postalCode = parser.getText();
                        } else if (text == 'country') {
                            country = parser.getText();
                        } else if (text == 'taxRegionId') {
                            taxRegionId = parser.getIntegerValue();
                        } else {
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public class Details {
        public String id {get;set;}
        public String transactionLineId {get;set;}
        public String transactionId {get;set;}
        public String country {get;set;}
        public String region {get;set;}
        public Integer exemptAmount {get;set;}
        public String jurisCode {get;set;}
        public String jurisName {get;set;}
        public String stateAssignedNo {get;set;}
        public String jurisType {get;set;}
        public Integer nonTaxableAmount {get;set;}
        public Double rate {get;set;}
        public Double tax {get;set;}
        public Integer taxableAmount {get;set;}
        public String taxType {get;set;}
        public String taxName {get;set;}
        public Integer taxAuthorityTypeId {get;set;}
        public Double taxCalculated {get;set;}
        public String rateType {get;set;}

        public Details(JSONParser parser) {
            while (parser.nextToken() != JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != JSONToken.VALUE_NULL) {
                        if (text == 'id') {
                            id = parser.getText();
                        } else if (text == 'transactionLineId') {
                            transactionLineId = parser.getText();
                        } else if (text == 'transactionId') {
                            transactionId = parser.getText();
                        } else if (text == 'country') {
                            country = parser.getText();
                        } else if (text == 'region') {
                            region = parser.getText();
                        } else if (text == 'exemptAmount') {
                            exemptAmount = parser.getIntegerValue();
                        } else if (text == 'jurisCode') {
                            jurisCode = parser.getText();
                        } else if (text == 'jurisName') {
                            jurisName = parser.getText();
                        } else if (text == 'stateAssignedNo') {
                            stateAssignedNo = parser.getText();
                        } else if (text == 'jurisType') {
                            jurisType = parser.getText();
                        } else if (text == 'nonTaxableAmount') {
                            nonTaxableAmount = parser.getIntegerValue();
                        } else if (text == 'rate') {
                            rate = parser.getDoubleValue();
                        } else if (text == 'tax') {
                            tax = parser.getDoubleValue();
                        } else if (text == 'taxableAmount') {
                            taxableAmount = parser.getIntegerValue();
                        } else if (text == 'taxType') {
                            taxType = parser.getText();
                        } else if (text == 'taxName') {
                            taxName = parser.getText();
                        } else if (text == 'taxAuthorityTypeId') {
                            taxAuthorityTypeId = parser.getIntegerValue();
                        } else if (text == 'taxCalculated') {
                            taxCalculated = parser.getDoubleValue();
                        } else if (text == 'rateType') {
                            rateType = parser.getText();
                        } else {
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public class Messages {
        public String summary {get;set;}
        public String details {get;set;}
        public String refersTo {get;set;}
        public String severity {get;set;}
        public String source {get;set;}

        public Messages(JSONParser parser) {
            while (parser.nextToken() != JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != JSONToken.VALUE_NULL) {
                        if (text == 'summary') {
                            summary = parser.getText();
                        } else if (text == 'details') {
                            details = parser.getText();
                        } else if (text == 'refersTo') {
                            refersTo = parser.getText();
                        } else if (text == 'severity') {
                            severity = parser.getText();
                        } else if (text == 'source') {
                            source = parser.getText();
                        } else {
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public String id {get;set;}
    public String code {get;set;}
    public String referenceCode {get;set;}
    public Integer companyId {get;set;}
    public String taxDate {get;set;}
    public String transactionDate {get;set;}
    public String status {get;set;}
    public String type_Z {get;set;} // in json: type
    public Boolean reconciled {get;set;}
    public Integer totalAmount {get;set;}
    public Integer totalExempt {get;set;}
    public Double totalTax {get;set;}
    public Integer totalTaxable {get;set;}
    public Double totalTaxCalculated {get;set;}
    public String adjustmentReason {get;set;}
    public Boolean locked {get;set;}
    public Integer version {get;set;}
    public String modifiedDate {get;set;}
    public Integer modifiedUserId {get;set;}
    public List<Lines> lines {get;set;}
    public List<Addresses> addresses {get;set;}
    public List<Summary> summary {get;set;}
    public List<Messages> messages {get;set;}

    public JsonSuccessParser(JSONParser parser) {
        while (parser.nextToken() != JSONToken.END_OBJECT) {
            if (parser.getCurrentToken() == JSONToken.FIELD_NAME) {
                String text = parser.getText();
                if (parser.nextToken() != JSONToken.VALUE_NULL) {
                    if (text == 'id') {
                        id = parser.getText();
                    } else if (text == 'code') {
                        code = parser.getText();
                    } else if (text == 'referenceCode'){
                        referenceCode = parser.getText();
                    } else if (text == 'companyId') {
                        companyId = parser.getIntegerValue();
                    } else if (text == 'taxDate') {
                        taxDate = parser.getText();
                    } else if (text == 'date') {
                        transactionDate = parser.getText();
                    } else if (text == 'status') {
                        status = parser.getText();
                    } else if (text == 'type') {
                        type_Z = parser.getText();
                    } else if (text == 'reconciled') {
                        reconciled = parser.getBooleanValue();
                    } else if (text == 'totalAmount') {
                        totalAmount = parser.getIntegerValue();
                    } else if (text == 'totalExempt') {
                        totalExempt = parser.getIntegerValue();
                    } else if (text == 'totalTax') {
                        totalTax = parser.getDoubleValue();
                    } else if (text == 'totalTaxable') {
                        totalTaxable = parser.getIntegerValue();
                    } else if (text == 'totalTaxCalculated') {
                        totalTaxCalculated = parser.getDoubleValue();
                    } else if (text == 'adjustmentReason') {
                        adjustmentReason = parser.getText();
                    } else if (text == 'locked') {
                        locked = parser.getBooleanValue();
                    } else if (text == 'version') {
                        version = parser.getIntegerValue();
                    } else if (text == 'modifiedDate') {
                        modifiedDate = parser.getText();
                    } else if (text == 'modifiedUserId') {
                        modifiedUserId = parser.getIntegerValue();
                    } else if (text == 'lines') {
                        lines = new List<Lines>();
                        while (parser.nextToken() != JSONToken.END_ARRAY) {
                            lines.add(new Lines(parser));
                        }
                    } else if (text == 'addresses') {
                        addresses = new List<Addresses>();
                        while (parser.nextToken() != JSONToken.END_ARRAY) {
                            addresses.add(new Addresses(parser));
                        }
                    } else if (text == 'summary') {
                        summary = new List<Summary>();
                        while (parser.nextToken() != JSONToken.END_ARRAY) {
                            summary.add(new Summary(parser));
                        }
                    } else if (text == 'messages') {
                        messages = new List<Messages>();
                        while (parser.nextToken() != JSONToken.END_ARRAY) {
                            messages.add(new Messages(parser));
                        }
                    } else {
                        consumeObject(parser);
                    }
                }
            }
        }
    }

    public class Summary {
        public String country {get;set;}
        public String region {get;set;}
        public String jurisType {get;set;}
        public String jurisCode {get;set;}
        public String jurisName {get;set;}
        public Integer taxAuthorityType {get;set;}
        public String stateAssignedNo {get;set;}
        public String taxType {get;set;}
        public String taxName {get;set;}
        public String taxGroup {get;set;}
        public String rateType {get;set;}
        public Integer taxable {get;set;}
        public Double rate {get;set;}
        public Double tax {get;set;}
        public Double taxCalculated {get;set;}
        public Integer nonTaxable {get;set;}
        public Integer exemption {get;set;}

        public Summary(JSONParser parser) {
            while (parser.nextToken() != JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != JSONToken.VALUE_NULL) {
                        if (text == 'country') {
                            country = parser.getText();
                        } else if (text == 'region') {
                            region = parser.getText();
                        } else if (text == 'jurisType') {
                            jurisType = parser.getText();
                        } else if (text == 'jurisCode') {
                            jurisCode = parser.getText();
                        } else if (text == 'jurisName') {
                            jurisName = parser.getText();
                        } else if (text == 'taxAuthorityType') {
                            taxAuthorityType = parser.getIntegerValue();
                        } else if (text == 'stateAssignedNo') {
                            stateAssignedNo = parser.getText();
                        } else if (text == 'taxType') {
                            taxType = parser.getText();
                        } else if (text == 'taxName') {
                            taxName = parser.getText();
                        } else if (text == 'taxGroup') {
                            taxGroup = parser.getText();
                        } else if (text == 'rateType') {
                            rateType = parser.getText();
                        } else if (text == 'taxable') {
                            taxable = parser.getIntegerValue();
                        } else if (text == 'rate') {
                            rate = parser.getDoubleValue();
                        } else if (text == 'tax') {
                            tax = parser.getDoubleValue();
                        } else if (text == 'taxCalculated') {
                            taxCalculated = parser.getDoubleValue();
                        } else if (text == 'nonTaxable') {
                            nonTaxable = parser.getIntegerValue();
                        } else if (text == 'exemption') {
                            exemption = parser.getIntegerValue();
                        } else {
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public class Lines {
        public String id {get;set;}
        public String transactionId {get;set;}
        public String lineNumber {get;set;}
        public Integer discountAmount {get;set;}
        public Integer exemptAmount {get;set;}
        public Integer exemptCertId {get;set;}
        public Boolean isItemTaxable {get;set;}
        public Integer lineAmount {get;set;}
        public Double quantity {get;set;}
        public String reportingDate {get;set;}
        public Double tax {get;set;}
        public Integer taxableAmount {get;set;}
        public Double taxCalculated {get;set;}
        public String taxCode {get;set;}
        public String taxDate {get;set;}
        public Boolean taxIncluded {get;set;}
        public List<Details> details {get;set;}
        public String itemCode {get;set;}
        public Lines(JSONParser parser) {
            while (parser.nextToken() != JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != JSONToken.VALUE_NULL) {
                        if (text == 'id') {
                            id = parser.getText();
                        } else if (text == 'transactionId') {
                            transactionId = parser.getText();
                        }else if (text == 'itemCode') {
                            itemCode = parser.getText();
                        }else if (text == 'lineNumber') {
                            lineNumber = parser.getText();
                        } else if (text == 'discountAmount') {
                            discountAmount = parser.getIntegerValue();
                        } else if (text == 'exemptAmount') {
                            exemptAmount = parser.getIntegerValue();
                        } else if (text == 'exemptCertId') {
                            exemptCertId = parser.getIntegerValue();
                        } else if (text == 'isItemTaxable') {
                            isItemTaxable = parser.getBooleanValue();
                        } else if (text == 'lineAmount') {
                            lineAmount = parser.getIntegerValue();
                        } else if (text == 'quantity') {
                            quantity = parser.getDoubleValue();
                        } else if (text == 'reportingDate') {
                            reportingDate = parser.getText();
                        } else if (text == 'tax') {
                            tax = parser.getDoubleValue();
                        } else if (text == 'taxableAmount') {
                            taxableAmount = parser.getIntegerValue();
                        } else if (text == 'taxCalculated') {
                            taxCalculated = parser.getDoubleValue();
                        } else if (text == 'taxCode') {
                            taxCode = parser.getText();
                        } else if (text == 'taxDate') {
                            taxDate = parser.getText();
                        } else if (text == 'taxIncluded') {
                            taxIncluded = parser.getBooleanValue();
                        } else if (text == 'details') {
                            details = new List<Details>();
                            while (parser.nextToken() != JSONToken.END_ARRAY) {
                                details.add(new Details(parser));
                            }
                        } else {
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }


    public static JsonSuccessParser parse(String json)
    {
        return new JsonSuccessParser(System.JSON.createParser(json));
    }
}
```

```apex
public with sharing class AvalaraJSONBuilder 
{
    private static AvalaraJSONBuilder avalaraJSONBuilderInstance;
    
    public static AvalaraJSONBuilder getInstance() 
    {
        if (NULL == avalaraJSONBuilderInstance) 
        {
            avalaraJSONBuilderInstance = new AvalaraJSONBuilder();
        }
        return avalaraJSONBuilderInstance;
    }
    
    public String frameJsonForGetTaxOrderItem(commercetax.CalculateTaxRequest calculateTaxRequest) 
    {
        try
        {
            Id accountid  = null;
            if(calculateTaxRequest.CustomerDetails.AccountId != null &&  calculateTaxRequest.CustomerDetails.AccountId != '')
               accountid = Id.valueof(calculateTaxRequest.CustomerDetails.AccountId);
            JSONGenerator jsonGeneratorInstance = JSON.createGenerator(true);
            jsonGeneratorInstance.writeStartObject();
            String type = null;
            if(calculateTaxRequest.taxtype == commercetax.CalculateTaxType.Actual)
                type ='SalesInvoice';
                else type = 'SalesOrder';
            jsonGeneratorInstance.writeStringField('type', type);
            if(calculateTaxRequest.SellerDetails != null)
                jsonGeneratorInstance.writeStringField('companyCode', calculateTaxRequest.SellerDetails.code);
            else 
                jsonGeneratorInstance.writeStringField('companyCode', 'billing2');
            if(calculateTaxRequest.isCommit != null) {
                jsonGeneratorInstance.writeBooleanField('commit', calculateTaxRequest.isCommit);
            }
            if(calculateTaxRequest.documentcode != null){
                jsonGeneratorInstance.writeStringField('code', calculateTaxRequest.documentcode);
            }else if(calculateTaxRequest.referenceEntityId != null) {
                jsonGeneratorInstance.writeStringField('code', calculateTaxRequest.referenceEntityId);
            }
            if(calculateTaxRequest.CustomerDetails.code == null && accountid !=null) {
                Account acc = [select id, name from account where id=:accountid];
                jsonGeneratorInstance.writeStringField('customerCode', acc.name);
            } else {
                jsonGeneratorInstance.writeStringField('customerCode', calculateTaxRequest.CustomerDetails.code);
            }
            if(calculateTaxRequest.EffectiveDate == null)
                jsonGeneratorInstance.writeDateField('date', system.today());
            else         
                jsonGeneratorInstance.writeDateTimeField('date', calculateTaxRequest.EffectiveDate);
            
            jsonGeneratorInstance.writeFieldName('lines');
            jsonGeneratorInstance.writeStartArray();
            for(integer i=0;i<1;i++){
                for(Commercetax.TaxLineItemRequest lineItem : calculateTaxRequest.LineItems)
                {
                    jsonGeneratorInstance.writeStartObject();
                    if(lineItem.linenumber != null){
                        jsonGeneratorInstance.writeStringField('number', lineItem.linenumber);
                    }
                    jsonGeneratorInstance.writeNumberField('quantity', lineItem.Quantity);
                    jsonGeneratorInstance.writeNumberField('amount', (lineItem.Amount));
                    jsonGeneratorInstance.writeStringField('taxCode',lineItem.taxCode);
                    
                    jsonGeneratorInstance.writeFieldName('addresses');
                    jsonGeneratorInstance.writeStartObject();  
                    jsonGeneratorInstance.writeFieldName('ShipFrom');
                    jsonGeneratorInstance.writeStartObject();
                    jsonGeneratorInstance.writeStringField('line1', lineItem.addresses.shipfrom.street);
                    jsonGeneratorInstance.writeStringField('line2', lineItem.addresses.shipfrom.street);
                    jsonGeneratorInstance.writeStringField('city', lineItem.addresses.shipfrom.city);
                    jsonGeneratorInstance.writeStringField('region', lineItem.addresses.shipfrom.state);
                    jsonGeneratorInstance.writeStringField('country', lineItem.addresses.shipfrom.country);
                    jsonGeneratorInstance.writeStringField('postalCode',lineItem.addresses.shipfrom.postalcode);              
                    jsonGeneratorInstance.writeEndObject();               

                    jsonGeneratorInstance.writeFieldName('ShipTo');
                    jsonGeneratorInstance.writeStartObject();
                    jsonGeneratorInstance.writeStringField('line1', lineItem.addresses.shipto.street);
                    jsonGeneratorInstance.writeStringField('line2', lineItem.addresses.shipto.street);
                    jsonGeneratorInstance.writeStringField('city', lineItem.addresses.shipto.city);
                    jsonGeneratorInstance.writeStringField('region', lineItem.addresses.shipto.state);
                    jsonGeneratorInstance.writeStringField('country', lineItem.addresses.shipto.country);
                    jsonGeneratorInstance.writeStringField('postalCode',lineItem.addresses.shipto.postalcode); 
                    jsonGeneratorInstance.writeEndObject();               

                    jsonGeneratorInstance.writeFieldName('pointOfOrderOrigin');
                    jsonGeneratorInstance.writeStartObject();
                    jsonGeneratorInstance.writeStringField('line1', lineItem.addresses.soldto.street);
                    jsonGeneratorInstance.writeStringField('line2', lineItem.addresses.soldto.street);
                    jsonGeneratorInstance.writeStringField('city', lineItem.addresses.soldto.city);
                    jsonGeneratorInstance.writeStringField('region', lineItem.addresses.soldto.state);
                    jsonGeneratorInstance.writeStringField('country', lineItem.addresses.soldto.country);
                    jsonGeneratorInstance.writeStringField('postalCode',lineItem.addresses.soldto.postalcode); 
                    jsonGeneratorInstance.writeEndObject(); 


                    if(lineItem.effectiveDate != null)    
                    {
                        jsonGeneratorInstance.writeFieldName('taxOverride');
                        jsonGeneratorInstance.writeStartObject();
                        jsonGeneratorInstance.writeDateTimeField('taxDate', lineItem.effectiveDate);             
                        jsonGeneratorInstance.writeEndObject();               
                    }
                    jsonGeneratorInstance.writeEndObject(); 
                    jsonGeneratorInstance.writeEndObject(); 
                }
            }
                jsonGeneratorInstance.writeEndArray();             
            jsonGeneratorInstance.writeEndObject();
            return jsonGeneratorInstance.getAsString();
        }
        catch (Exception e) 
        { 
             throw e;
        } 
    }
}
```

## Related Topics

- CommerceTax (atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm)
- TaxEngineAdapter Methods (atlas.en-us.apexref.meta/apexref/apex_interface_commercetax_TaxEngineAdapter.htm)
- TaxEngineAdapter Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_commercetax_TaxEngineAdapter.htm)
- processRequest(requestType) (atlas.en-us.apexref.meta/apexref/apex_interface_commercetax_TaxEngineAdapter.htm)
- TaxEngineContext (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxEngineContext.htm)
- commercetax (atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm)
