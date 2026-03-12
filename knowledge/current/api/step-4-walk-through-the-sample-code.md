---
title: "Step 4: Walk Through the Sample Code"
domain: api
topic: step-4-walk-through-the-sample-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.886Z
estimatedTokens: 1577
keywords: [Step, Walk, Sample, Code, Once, imported, WSDL, file, begin, building, client, applications, API, Java]
---

# Step 4: Walk Through the Sample Code

> Once you have imported your WSDL file, you can begin building client
        applications that use the API.

# Step 4: Walk Through the Sample Code

Once you have imported your WSDL file, you can begin building client applications that use the API.

Use the following samples to create a basic client application. Comments embedded in the sample explain each section of code.

## Java Sample Code

This section walks through a sample Java client application that uses the WSC SOAP client. The purpose of this sample application is to show the required steps for logging into the login server and to demonstrate the invocation and subsequent handling of several API calls.

To run this sample, you must pass the authentication endpoint URL as an argument for your program. You can obtain this URL from the WSDL file. This sample application performs the following main tasks:

1.  Prompts the user for their Salesforce username and password.
2.  Calls [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session.") to log in to the single login server and, if the login succeeds, retrieves user information and writes it to the console along with session information.
3.  Calls [describeGlobal()](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm "Retrieves a list of available objects for your organization's data.") to retrieve a list of all available objects for the organization’s data. The describeGlobal method determines [the objects that are available to the logged in user](atlas.en-us.api.meta/api/calls.htm). This call should not be made more than once per session, since the data returned from the call is not likely to change frequently. The [DescribeGlobalResult](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal_describeglobalresult.htm "The describeGlobal() call returns a DescribeGlobalResult object.") is echoed to the console.
4.  Calls [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") to retrieve metadata (field list and object properties) for a specified object. The describeSObject method illustrates the type of metadata information that can be obtained for each object available to the user. The sample client application executes a describeSObjects() call on the object that the user specifies and then echoes the returned metadata information to the console. Object metadata information includes permissions, field types and lengths, and available values for picklist fields and types for referenceTo fields.
5.  Calls [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions."), passing a simple query string ("SELECT FirstName, LastName FROM Contact"), and iterating through the returned [QueryResult](atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm "A read-only SObject that contains query results and additional data about the query, returned in response to a query() or queryMore() call.").
6.  Calls [logout()](atlas.en-us.api.meta/api/sforce_api_calls_logout.htm "Ends the session of the logged-in user.") to the log the user out.

The following sample code uses try/catch blocks to handle exceptions that might be thrown by the API calls.

```

```

## C# Sample Code

This section walks through a sample C# client application. The purpose of this sample application is to show the required steps for logging in and to demonstrate the invocation and subsequent handling of several API calls.

This sample application performs the following main tasks:

1.  Prompts the user for their Salesforce username and password.
2.  Calls login() to log in to the single login server and, if the login succeeds:
    -   Sets the returned [sessionId](atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm#i1429237) into the session header, which is required for session authentication on subsequent API calls.
    -   Resets the Lightning Platform endpoint to the returned [serverUrl](atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm#i1429224), which is the target of subsequent API calls.

        All client applications that access the API must complete the tasks in this step before attempting any subsequent API calls.

    -   Retrieves user information and writes it to the console along with session information.
3.  Calls describeGlobal() to retrieve a list of all available objects for the organization’s data. The describeGlobal method determines the objects that are available to the logged in user. This call should not be made more than once per session, since the data returned from the call is not likely to change frequently. The [DescribeGlobalResult](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal_describeglobalresult.htm "The describeGlobal() call returns a DescribeGlobalResult object.") is echoed to the console.
4.  Calls describeSObjects() to retrieve metadata (field list and object properties) for a specified object. The describeSObject method illustrates the type of metadata information that can be obtained for each object available to the user. The sample client application executes a describeSObjects() call on the object that the user specifies and then echoes the returned metadata information to the console. Object metadata information includes permissions, field types and lengths, and available values for picklist fields and types for referenceTo fields.
5.  Calls query(), passing a simple query string ("SELECT FirstName, LastName FROM Contact"), and iterating through the returned [QueryResult](atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm "A read-only SObject that contains query results and additional data about the query, returned in response to a query() or queryMore() call.").
6.  Calls logout() to the log the user out.

The following sample code uses try/catch blocks to handle exceptions that might be thrown by the API calls.

The following code begins the sample C# client application.

```

```

The following C# example is the same as the previous C# example, except it uses .NET 3.0 SoapClient services instead of .NET 2.0 SforceService services.

```

```

## Code Examples

```apex
package com.example.samples;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.io.IOException;
import com.sforce.soap.enterprise.DeleteResult;
import com.sforce.soap.enterprise.DescribeGlobalResult;
import com.sforce.soap.enterprise.DescribeGlobalSObjectResult;
import com.sforce.soap.enterprise.DescribeSObjectResult;
import com.sforce.soap.enterprise.EnterpriseConnection;
import com.sforce.soap.enterprise.Error;
import com.sforce.soap.enterprise.Field;
import com.sforce.soap.enterprise.FieldType;
import com.sforce.soap.enterprise.GetUserInfoResult;
import com.sforce.soap.enterprise.LoginResult;
import com.sforce.soap.enterprise.PicklistEntry;
import com.sforce.soap.enterprise.QueryResult;
import com.sforce.soap.enterprise.SaveResult;
import com.sforce.soap.enterprise.sobject.Account;
import com.sforce.soap.enterprise.sobject.Contact;
import com.sforce.soap.enterprise.sobject.SObject;
import com.sforce.ws.ConnectorConfig;
import com.sforce.ws.ConnectionException;

public class QuickstartApiSample {

   private static BufferedReader reader = new BufferedReader(
         new InputStreamReader(System.in));

   EnterpriseConnection connection;
   String authEndPoint = "";

   public static void main(String[] args) {
      if (args.length < 1) {
         System.out.println("Usage: com.example.samples."
               + "QuickstartApiSamples <AuthEndPoint>");

         System.exit(-1);
      }

      QuickstartApiSample sample = new QuickstartApiSample(args[0]);
      sample.run();
   }

   public void run() {
      // Make a login call
      if (login()) {
         // Do a describe global
         describeGlobalSample();

         // Describe an object
         describeSObjectsSample();

         // Retrieve some data using a query
         querySample();

         // Log out
         logout();
      }
   }

   // Constructor
   public QuickstartApiSample(String authEndPoint) {
      this.authEndPoint = authEndPoint;
   }

   private String getUserInput(String prompt) {
      String result = "";
      try {
         System.out.print(prompt);
         result = reader.readLine();
      } catch (IOException ioe) {
         ioe.printStackTrace();
      }

      return result;
   }

   private boolean login() {
      boolean success = false;
      String username = getUserInput("Enter username: ");
      String password = getUserInput("Enter password: ");

      try {
         ConnectorConfig config = new ConnectorConfig();
         config.setUsername(username);
         config.setPassword(password);

         System.out.println("AuthEndPoint: " + authEndPoint);
         config.setAuthEndpoint(authEndPoint);

         connection = new EnterpriseConnection(config);
         printUserInfo(config);

         success = true;
      } catch (ConnectionException ce) {
         ce.printStackTrace();
      } 

      return success;
   }

   private void printUserInfo(ConnectorConfig config) {
      try {
         GetUserInfoResult userInfo = connection.getUserInfo();

         System.out.println("
Logging in ...
");
         System.out.println("UserID: " + userInfo.getUserId());
         System.out.println("User Full Name: " + userInfo.getUserFullName());
         System.out.println("User Email: " + userInfo.getUserEmail());
         System.out.println();
         System.out.println("SessionID: " + config.getSessionId());
         System.out.println("Auth End Point: " + config.getAuthEndpoint());
         System.out
               .println("Service End Point: " + config.getServiceEndpoint());
         System.out.println();
      } catch (ConnectionException ce) {
         ce.printStackTrace();
      }
   }

   private void logout() {
      try {
         connection.logout();
         System.out.println("Logged out.");
      } catch (ConnectionException ce) {
         ce.printStackTrace();
      }
   }

   /**
    * To determine the objects that are available to the logged-in user, the
    * sample client application executes a describeGlobal call, which returns
    * all of the objects that are visible to the logged-in user. This call
    * should not be made more than once per session, as the data returned from
    * the call likely does not change frequently. The DescribeGlobalResult is
    * simply echoed to the console.
    */
   private void describeGlobalSample() {
      try {
         // describeGlobal() returns an array of object results that
         // includes the object names that are available to the logged-in user.
         DescribeGlobalResult dgr = connection.describeGlobal();

         System.out.println("
Describe Global Results:
");
         // Loop through the array echoing the object names to the console
         for (int i = 0; i < dgr.getSobjects().length; i++) {
            System.out.println(dgr.getSobjects()[i].getName());
         }
      } catch (ConnectionException ce) {
         ce.printStackTrace();
      }
   }

   /**
    * The following method illustrates the type of metadata information that can
    * be obtained for each object available to the user. The sample client
    * application executes a describeSObject call on a given object and then
    * echoes the returned metadata information to the console. Object metadata
    * information includes permissions, field types and length and available
    * values for picklist fields and types for referenceTo fields.
    */
   private void describeSObjectsSample() {
      String objectToDescribe = getUserInput("
Type the name of the object to "
            + "describe (try Account): ");

      try {
         // Call describeSObjects() passing in an array with one object type
         // name
         DescribeSObjectResult[] dsrArray = connection
               .describeSObjects(new String[] { objectToDescribe });

         // Since we described only one sObject, we should have only
         // one element in the DescribeSObjectResult array.
         DescribeSObjectResult dsr = dsrArray[0];

         // First, get some object properties
         System.out.println("

Object Name: " + dsr.getName());

         if (dsr.getCustom())
            System.out.println("Custom Object");
         if (dsr.getLabel() != null)
            System.out.println("Label: " + dsr.getLabel());

         // Get the permissions on the object

         if (dsr.getCreateable())
            System.out.println("Createable");
         if (dsr.getDeletable())
            System.out.println("Deleteable");
         if (dsr.getQueryable())
            System.out.println("Queryable");
         if (dsr.getReplicateable())
            System.out.println("Replicateable");
         if (dsr.getRetrieveable())
            System.out.println("Retrieveable");
         if (dsr.getSearchable())
            System.out.println("Searchable");
         if (dsr.getUndeletable())
            System.out.println("Undeleteable");
         if (dsr.getUpdateable())
            System.out.println("Updateable");

         System.out.println("Number of fields: " + dsr.getFields().length);

         // Now, retrieve metadata for each field
         for (int i = 0; i < dsr.getFields().length; i++) {
            // Get the field
            Field field = dsr.getFields()[i];

            // Write some field properties
            System.out.println("Field name: " + field.getName());
            System.out.println("\tField Label: " + field.getLabel());

            // This next property indicates that this
            // field is searched when using
            // the name search group in SOSL
            if (field.getNameField())
               System.out.println("\tThis is a name field.");

            if (field.getRestrictedPicklist())
               System.out.println("This is a RESTRICTED picklist field.");

            System.out.println("\tType is: " + field.getType());

            if (field.getLength() > 0)
               System.out.println("\tLength: " + field.getLength());

            if (field.getScale() > 0)
               System.out.println("\tScale: " + field.getScale());

            if (field.getPrecision() > 0)
               System.out.println("\tPrecision: " + field.getPrecision());

            if (field.getDigits() > 0)
               System.out.println("\tDigits: " + field.getDigits());

            if (field.getCustom())
               System.out.println("\tThis is a custom field.");

            // Write the permissions of this field
            if (field.getNillable())
               System.out.println("\tCan be nulled.");
            if (field.getCreateable())
               System.out.println("\tCreateable");
            if (field.getFilterable())
               System.out.println("\tFilterable");
            if (field.getUpdateable())
               System.out.println("\tUpdateable");

            // If this is a picklist field, show the picklist values
            if (field.getType().equals(FieldType.picklist)) {
               System.out.println("\t\tPicklist values: ");
               PicklistEntry[] picklistValues = field.getPicklistValues();

               for (int j = 0; j < field.getPicklistValues().length; j++) {
                  System.out.println("\t\tValue: "
                        + picklistValues[j].getValue());
               }
            }

            // If this is a foreign key field (reference),
            // show the values
            if (field.getType().equals(FieldType.reference)) {
               System.out.println("\tCan reference these objects:");
               for (int j = 0; j < field.getReferenceTo().length; j++) {
                  System.out.println("\t\t" + field.getReferenceTo()[j]);
               }
            }
            System.out.println("");
         }
      } catch (ConnectionException ce) {
         ce.printStackTrace();
      }
   }

   private void querySample() {
      String soqlQuery = "SELECT FirstName, LastName FROM Contact";
      try {
         QueryResult qr = connection.query(soqlQuery);
         boolean done = false;

         if (qr.getSize() > 0) {
            System.out.println("
Logged-in user can see "
                  + qr.getRecords().length + " contact records.");

            while (!done) {
               System.out.println("");
               SObject[] records = qr.getRecords();
               for (int i = 0; i < records.length; ++i) {
                  Contact con = (Contact) records[i];
                  String fName = con.getFirstName();
                  String lName = con.getLastName();

                  if (fName == null) {
                     System.out.println("Contact " + (i + 1) + ": " + lName);
                  } else {
                     System.out.println("Contact " + (i + 1) + ": " + fName
                           + " " + lName);
                  }
               }

               if (qr.isDone()) {
                  done = true;
               } else {
                  qr = connection.queryMore(qr.getQueryLocator());
               }
            }
         } else {
            System.out.println("No records found.");
         }
      } catch (ConnectionException ce) {
         ce.printStackTrace();
      }
   }
}
```

```apex
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Services.Protocols;
using Walkthrough.sforce;

namespace Walkthrough
{

   class QuickstartApiSample
   {
      private SforceService binding;

      [STAThread]
      static void Main(string[] args)
      {
         QuickstartApiSample sample = new QuickstartApiSample();
         sample.run();
      }

      public void run()
      {
         // Make a login call 
         if (login())
         {
            // Do a describe global 
            describeGlobalSample();

            // Describe an account object 
            describeSObjectsSample();

            // Retrieve some data using a query 
            querySample();

            // Log out
            logout();
         }
      }

      private bool login()
      {
         Console.Write("Enter username: ");
         string username = Console.ReadLine();
         Console.Write("Enter password: ");
         string password = Console.ReadLine();

         // Create a service object 
         binding = new SforceService();

         // Timeout after a minute 
         binding.Timeout = 60000;

         // Try logging in   
         LoginResult lr;
         try
         {

            Console.WriteLine("
Logging in...
");
            lr = binding.login(username, password);
         }

         // ApiFault is a proxy stub generated from the WSDL contract when     
         // the web service was imported 
         catch (SoapException e)
         {
            // Write the fault code to the console 
            Console.WriteLine(e.Code);

            // Write the fault message to the console 
            Console.WriteLine("An unexpected error has occurred: " + e.Message);

            // Write the stack trace to the console 
            Console.WriteLine(e.StackTrace);

            // Return False to indicate that the login was not successful 
            return false;
         }



         // Check if the password has expired 
         if (lr.passwordExpired)
         {
            Console.WriteLine("An error has occurred. Your password has expired.");
            return false;
         }


         /** Once the client application has logged in successfully, it will use
          * the results of the login call to reset the endpoint of the service
          * to the virtual server instance that is servicing your organization
          */
         // Save old authentication end point URL
         String authEndPoint = binding.Url;
         // Set returned service endpoint URL
         binding.Url = lr.serverUrl;

         /** The sample client application now has an instance of the SforceService
          * that is pointing to the correct endpoint. Next, the sample client
          * application sets a persistent SOAP header (to be included on all
          * subsequent calls that are made with SforceService) that contains the
          * valid sessionId for our login credentials. To do this, the sample
          * client application creates a new SessionHeader object and persist it to
          * the SforceService. Add the session ID returned from the login to the
          * session header
          */
         binding.SessionHeaderValue = new SessionHeader();
         binding.SessionHeaderValue.sessionId = lr.sessionId;

         printUserInfo(lr, authEndPoint);

         // Return true to indicate that we are logged in, pointed  
         // at the right URL and have our security token in place.     
         return true;
      }

      private void printUserInfo(LoginResult lr, String authEP)
      {
         try
         {
            GetUserInfoResult userInfo = lr.userInfo;

            Console.WriteLine("
Logging in ...
");
            Console.WriteLine("UserID: " + userInfo.userId);
            Console.WriteLine("User Full Name: " +
                userInfo.userFullName);
            Console.WriteLine("User Email: " +
                userInfo.userEmail);
            Console.WriteLine();
            Console.WriteLine("SessionID: " +
                lr.sessionId);
            Console.WriteLine("Auth End Point: " +
                authEP);
            Console.WriteLine("Service End Point: " +
                lr.serverUrl);
            Console.WriteLine();
         }
         catch (SoapException e)
         {
            Console.WriteLine("An unexpected error has occurred: " + e.Message +
                " Stack trace: " + e.StackTrace);
         }
      }

      private void logout()
      {
         try
         {
            binding.logout();
            Console.WriteLine("Logged out.");
         }
         catch (SoapException e)
         {
            // Write the fault code to the console 
            Console.WriteLine(e.Code);

            // Write the fault message to the console 
            Console.WriteLine("An unexpected error has occurred: " + e.Message);

            // Write the stack trace to the console 
            Console.WriteLine(e.StackTrace);
         }
      }

      /**
      * To determine the objects that are available to the logged-in
      * user, the sample client application executes a describeGlobal
      * call, which returns all of the objects that are visible to
      * the logged-in user. This call should not be made more than
      * once per session, as the data returned from the call likely
      * does not change frequently. The DescribeGlobalResult is
      * simply echoed to the console.
      */
      private void describeGlobalSample()
      {
         try
         {
            // describeGlobal() returns an array of object results that  
            // includes the object names that are available to the logged-in user. 
            DescribeGlobalResult dgr = binding.describeGlobal();

            Console.WriteLine("
Describe Global Results:
");
            // Loop through the array echoing the object names to the console             
            for (int i = 0; i < dgr.sobjects.Length; i++)
            {
               Console.WriteLine(dgr.sobjects[i].name);
            }
         }
         catch (SoapException e)
         {
            Console.WriteLine("An exception has occurred: " + e.Message +
                "
Stack trace: " + e.StackTrace);
         }
      }

      /**
      * The following method illustrates the type of metadata
      * information that can be obtained for each object available
      * to the user. The sample client application executes a
      * describeSObject call on a given object and then echoes  
      * the returned metadata information to the console. Object
      * metadata information includes permissions, field types
      * and length and available values for picklist fields
      * and types for referenceTo fields.
      */
      private void describeSObjectsSample()
      {
         Console.Write("
Type the name of the object to " +
             "describe (try Account): ");
         string objectType = Console.ReadLine();
         try
         {

            // Call describeSObjects() passing in an array with one object type name 
            DescribeSObjectResult[] dsrArray =
                  binding.describeSObjects(new string[] { objectType });

            // Since we described only one sObject, we should have only
            // one element in the DescribeSObjectResult array.
            DescribeSObjectResult dsr = dsrArray[0];

            // First, get some object properties                  
            Console.WriteLine("

Object Name: " + dsr.name);

            if (dsr.custom) Console.WriteLine("Custom Object");
            if (dsr.label != null) Console.WriteLine("Label: " + dsr.label);

            // Get the permissions on the object 
            if (dsr.createable) Console.WriteLine("Createable");
            if (dsr.deletable) Console.WriteLine("Deleteable");
            if (dsr.queryable) Console.WriteLine("Queryable");
            if (dsr.replicateable) Console.WriteLine("Replicateable");
            if (dsr.retrieveable) Console.WriteLine("Retrieveable");
            if (dsr.searchable) Console.WriteLine("Searchable");
            if (dsr.undeletable) Console.WriteLine("Undeleteable");
            if (dsr.updateable) Console.WriteLine("Updateable");

            Console.WriteLine("Number of fields: " + dsr.fields.Length);

            // Now, retrieve metadata for each field
            for (int i = 0; i < dsr.fields.Length; i++)
            {
               // Get the field 
               Field field = dsr.fields[i];

               // Write some field properties
               Console.WriteLine("Field name: " + field.name);
               Console.WriteLine("\tField Label: " + field.label);

               // This next property indicates that this  
               // field is searched when using 
               // the name search group in SOSL 
               if (field.nameField)
                  Console.WriteLine("\tThis is a name field.");

               if (field.restrictedPicklist)
                  Console.WriteLine("This is a RESTRICTED picklist field.");

               Console.WriteLine("\tType is: " + field.type.ToString());

               if (field.length > 0)
                  Console.WriteLine("\tLength: " + field.length);

               if (field.scale > 0)
                  Console.WriteLine("\tScale: " + field.scale);

               if (field.precision > 0)
                  Console.WriteLine("\tPrecision: " + field.precision);

               if (field.digits > 0)
                  Console.WriteLine("\tDigits: " + field.digits);

               if (field.custom)
                  Console.WriteLine("\tThis is a custom field.");

               // Write the permissions of this field
               if (field.nillable) Console.WriteLine("\tCan be nulled.");
               if (field.createable) Console.WriteLine("\tCreateable");
               if (field.filterable) Console.WriteLine("\tFilterable");
               if (field.updateable) Console.WriteLine("\tUpdateable");

               // If this is a picklist field, show the picklist values   
               if (field.type.Equals(fieldType.picklist))
               {
                  Console.WriteLine("\tPicklist Values");
                  for (int j = 0; j < field.picklistValues.Length; j++)
                     Console.WriteLine("\t\t" + field.picklistValues[j].value);
               }

               // If this is a foreign key field (reference),     
               // show the values 
               if (field.type.Equals(fieldType.reference))
               {
                  Console.WriteLine("\tCan reference these objects:");
                  for (int j = 0; j < field.referenceTo.Length; j++)
                     Console.WriteLine("\t\t" + field.referenceTo[j]);
               }
               Console.WriteLine("");
            }
         }
         catch (SoapException e)
         {
            Console.WriteLine("An exception has occurred: " + e.Message +
                "
Stack trace: " + e.StackTrace);
         }
         Console.WriteLine("Press ENTER to continue...");
         Console.ReadLine();
      }

      private void querySample()
      {
         String soqlQuery = "SELECT FirstName, LastName FROM Contact";
         try
         {
            QueryResult qr = binding.query(soqlQuery);
            bool done = false;

            if (qr.size > 0)
            {
               Console.WriteLine("Logged-in user can see "
                     + qr.records.Length + " contact records.");

               while (!done)
               {
                  Console.WriteLine("");
                  sObject[] records = qr.records;
                  for (int i = 0; i < records.Length; i++)
                  {
                     Contact con = (Contact)records[i];
                     string fName = con.FirstName;
                     string lName = con.LastName;
                     if (fName == null)
                        Console.WriteLine("Contact " + (i + 1) + ": " + lName);
                     else
                        Console.WriteLine("Contact " + (i + 1) + ": " + fName
                               + " " + lName);
                  }

                  if (qr.done)
                  {
                     done = true;
                  }
                  else
                  {
                     qr = binding.queryMore(qr.queryLocator);
                  }
               }
            }
            else
            {
               Console.WriteLine("No records found.");
            }
         }
         catch (Exception ex)
         {
            Console.WriteLine("
Failed to execute query succesfully," +
                "error message was: 
{0}", ex.Message);
         }
         Console.WriteLine("
Press ENTER to continue...");
         Console.ReadLine();
      }
   }
}
```

```apex
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.ServiceModel;
using Walkthrough.sforce;

namespace Walkthrough
{
    class QuickstartApiSample
    {
        private static SoapClient loginClient; // for login endpoint
        private static SoapClient client; // for API endpoint
        private static SessionHeader header;
        private static EndpointAddress endpoint;

        static void Main(string[] args)
        {
            QuickstartApiSample sample = new QuickstartApiSample();
            sample.run();
        }

        public void run()
        {
            // Make a login call 
            if (login())
            {
                // Do a describe global 
                describeGlobalSample();

                // Describe an account object 
                describeSObjectsSample();

                // Retrieve some data using a query 
                querySample();

                // Log out
                logout();
            }
        }

        private bool login()
        {
            Console.Write("Enter username: ");
            string username = Console.ReadLine();
            Console.Write("Enter password: ");
            string password = Console.ReadLine();

            // Create a SoapClient specifically for logging in
            loginClient = new SoapClient();

            // (combine pw and token if necessary)
            LoginResult lr;
            try
            {
                Console.WriteLine("
Logging in...
");
                lr = loginClient.login(null, username, password);
            }
            catch (Exception e)
            {
                // Write the fault message to the console 
                Console.WriteLine("An unexpected error has occurred: " + e.Message);

                // Write the stack trace to the console 
                Console.WriteLine(e.StackTrace);
                return false;
            }

            // Check if the password has expired 
            if (lr.passwordExpired)
            {
                Console.WriteLine("An error has occurred. Your password has expired.");
                return false;
            }

            /** Once the client application has logged in successfully, it will use
             * the results of the login call to reset the endpoint of the service
             * to the virtual server instance that is servicing your organization
             */

            // On successful login, cache session info and API endpoint info
            endpoint = new EndpointAddress(lr.serverUrl);

            /** The sample client application now has a cached EndpointAddress
            * that is pointing to the correct endpoint. Next, the sample client
            * application sets a persistent SOAP header that contains the
            * valid sessionId for our login credentials. To do this, the sample
            * client application creates a new SessionHeader object. Add the session 
            * ID returned from the login to the session header
            */
            header = new SessionHeader();
            header.sessionId = lr.sessionId;

            // Create and cache an API endpoint client
            client = new SoapClient("Soap", endpoint);

            printUserInfo(lr, lr.serverUrl);

            // Return true to indicate that we are logged in, pointed  
            // at the right URL and have our security token in place. 
            return true;
        }

        private void printUserInfo(LoginResult lr, String authEP)
        {
            try
            {
                GetUserInfoResult userInfo = lr.userInfo;

                Console.WriteLine("
Logging in ...
");
                Console.WriteLine("UserID: " + userInfo.userId);
                Console.WriteLine("User Full Name: " +
                    userInfo.userFullName);
                Console.WriteLine("User Email: " +
                    userInfo.userEmail);
                Console.WriteLine();
                Console.WriteLine("SessionID: " +
                    lr.sessionId);
                Console.WriteLine("Auth End Point: " +
                    authEP);
                Console.WriteLine("Service End Point: " +
                    lr.serverUrl);
                Console.WriteLine();
            }
            catch (Exception e)
            {
                Console.WriteLine("An unexpected error has occurred: " + e.Message +
                    " Stack trace: " + e.StackTrace);
            }
        }

        private void logout()
        {
            try
            {
                client.logout(header);
                Console.WriteLine("Logged out.");
            }
            catch (Exception e)
            {
                // Write the fault message to the console 
                Console.WriteLine("An unexpected error has occurred: " + e.Message);

                // Write the stack trace to the console 
                Console.WriteLine(e.StackTrace);
            }
        }

        /**
        * To determine the objects that are available to the logged-in
        * user, the sample client application executes a describeGlobal
        * call, which returns all of the objects that are visible to
        * the logged-in user. This call should not be made more than
        * once per session, as the data returned from the call likely
        * does not change frequently. The DescribeGlobalResult is
        * simply echoed to the console.
        */
        private void describeGlobalSample()
        {
            try
            {
                // describeGlobal() returns an array of object results that  
                // includes the object names that are available to the logged-in user. 
                DescribeGlobalResult dgr = client.describeGlobal(
                          header, // session header
                          null // package version header
                          );

                Console.WriteLine("
Describe Global Results:
");
                // Loop through the array echoing the object names to the console             
                for (int i = 0; i < dgr.sobjects.Length; i++)
                {
                    Console.WriteLine(dgr.sobjects[i].name);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("An exception has occurred: " + e.Message +
                    "
Stack trace: " + e.StackTrace);
            }
        }

        /**
        * The following method illustrates the type of metadata
        * information that can be obtained for each object available
        * to the user. The sample client application executes a
        * describeSObject call on a given object and then echoes  
        * the returned metadata information to the console. Object
        * metadata information includes permissions, field types
        * and length and available values for picklist fields
        * and types for referenceTo fields.
        */
        private void describeSObjectsSample()
        {
            Console.Write("
Type the name of the object to " +
                 "describe (try Account): ");
            string objectType = Console.ReadLine();
            try
            {

                // Call describeSObjects() passing in an array with one object type name 
                DescribeSObjectResult[] dsrArray =
                      client.describeSObjects(
                        header, // session header
                        null, // package version header
                        null, // locale options
                        new string[] { objectType } // object name array
                        );

                // Since we described only one sObject, we should have only
                // one element in the DescribeSObjectResult array.
                DescribeSObjectResult dsr = dsrArray[0];

                // First, get some object properties                  
                Console.WriteLine("

Object Name: " + dsr.name);

                if (dsr.custom) Console.WriteLine("Custom Object");
                if (dsr.label != null) Console.WriteLine("Label: " + dsr.label);

                // Get the permissions on the object 
                if (dsr.createable) Console.WriteLine("Createable");
                if (dsr.deletable) Console.WriteLine("Deleteable");
                if (dsr.queryable) Console.WriteLine("Queryable");
                if (dsr.replicateable) Console.WriteLine("Replicateable");
                if (dsr.retrieveable) Console.WriteLine("Retrieveable");
                if (dsr.searchable) Console.WriteLine("Searchable");
                if (dsr.undeletable) Console.WriteLine("Undeleteable");
                if (dsr.updateable) Console.WriteLine("Updateable");

                Console.WriteLine("Number of fields: " + dsr.fields.Length);

                // Now, retrieve metadata for each field
                for (int i = 0; i < dsr.fields.Length; i++)
                {
                    // Get the field 
                    Field field = dsr.fields[i];

                    // Write some field properties
                    Console.WriteLine("Field name: " + field.name);
                    Console.WriteLine("\tField Label: " + field.label);

                    // This next property indicates that this  
                    // field is searched when using 
                    // the name search group in SOSL 
                    if (field.nameField)
                        Console.WriteLine("\tThis is a name field.");

                    if (field.restrictedPicklist)
                        Console.WriteLine("This is a RESTRICTED picklist field.");

                    Console.WriteLine("\tType is: " + field.type.ToString());

                    if (field.length > 0)
                        Console.WriteLine("\tLength: " + field.length);

                    if (field.scale > 0)
                        Console.WriteLine("\tScale: " + field.scale);

                    if (field.precision > 0)
                        Console.WriteLine("\tPrecision: " + field.precision);

                    if (field.digits > 0)
                        Console.WriteLine("\tDigits: " + field.digits);

                    if (field.custom)
                        Console.WriteLine("\tThis is a custom field.");

                    // Write the permissions of this field
                    if (field.nillable) Console.WriteLine("\tCan be nulled.");
                    if (field.createable) Console.WriteLine("\tCreateable");
                    if (field.filterable) Console.WriteLine("\tFilterable");
                    if (field.updateable) Console.WriteLine("\tUpdateable");

                    // If this is a picklist field, show the picklist values   
                    if (field.type.Equals(fieldType.picklist))
                    {
                        Console.WriteLine("\tPicklist Values");
                        for (int j = 0; j < field.picklistValues.Length; j++)
                            Console.WriteLine("\t\t" + field.picklistValues[j].value);
                    }

                    // If this is a foreign key field (reference),     
                    // show the values 
                    if (field.type.Equals(fieldType.reference))
                    {
                        Console.WriteLine("\tCan reference these objects:");
                        for (int j = 0; j < field.referenceTo.Length; j++)
                            Console.WriteLine("\t\t" + field.referenceTo[j]);
                    }
                    Console.WriteLine("");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("An exception has occurred: " + e.Message +
                    "
Stack trace: " + e.StackTrace);
            }
            Console.WriteLine("Press ENTER to continue...");
            Console.ReadLine();
        }

        private void querySample()
        {
            String soqlQuery = "SELECT FirstName, LastName FROM Contact";
            try
            {
                QueryResult qr = client.query(
                    header, // session header
                    null, // query options
                    null, // mru options
                    null, // package version header
                    soqlQuery // query string
                    );

                bool done = false;

                if (qr.size > 0)
                {
                    Console.WriteLine("Logged-in user can see "
                        + qr.records.Length + " contact records.");

                    while (!done)
                    {
                        Console.WriteLine("");
                        sObject[] records = qr.records;
                        for (int i = 0; i < records.Length; i++)
                        {
                            Contact con = (Contact)records[i];
                            string fName = con.FirstName;
                            string lName = con.LastName;
                            if (fName == null)
                                Console.WriteLine("Contact " + (i + 1) + ": " + lName);
                            else
                                Console.WriteLine("Contact " + (i + 1) + ": " + fName
                                   + " " + lName);
                        }

                        if (qr.done)
                        {
                            done = true;
                        }
                        else
                        {
                            qr = client.queryMore(
                                    header, // session header
                                    null, // query options
                                    qr.queryLocator // query locator
                                    );
                        }
                    }
                }
                else
                {
                   Console.WriteLine("No records found.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("
Failed to execute query succesfully," +
                    "error message was: 
{0}", ex.Message);
            }
            Console.WriteLine("
Press ENTER to continue...");
            Console.ReadLine();
        }
    }
}
```

## Related Topics

- login() (atlas.en-us.api.meta/api/sforce_api_calls_login.htm)
- describeGlobal() (atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm)
- the objects that are available to the logged in user (atlas.en-us.api.meta/api/calls.htm)
- DescribeGlobalResult (atlas.en-us.api.meta/api/sforce_api_calls_describeglobal_describeglobalresult.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
- QueryResult (atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm)
- logout() (atlas.en-us.api.meta/api/sforce_api_calls_logout.htm)
- sessionId (atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm)
- serverUrl (atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm)
