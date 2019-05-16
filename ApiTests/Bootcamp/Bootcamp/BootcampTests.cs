using Microsoft.VisualStudio.TestTools.UnitTesting;
using RestSharp;

namespace RestSharpExample
{

    [TestClass]
    public class Weather
    {
        [TestMethod]
        public void GetWeatherInfoKelowna()
        {
            string city = "Kelowna";

            //Creating Client connection	
            RestClient restClient = new RestClient("http://restapi.demoqa.com/utilities/weather/city/");

            //Creating request to get data from server
            RestRequest restRequest = new RestRequest(city, Method.GET);

            // Executing request to server and checking server response to the it
            IRestResponse restResponse = restClient.Execute(restRequest);

            // Extracting output data from received response
            string response = restResponse.Content;

            // Verifiying reponse
            if (!response.Contains(city))
                Assert.Fail("There should be information here");

        }
        [TestMethod]
        public void GetWeatherInfoBlah()
        {
            string city = "Blah";

            //Creating Client connection	
            RestClient restClient = new RestClient("http://restapi.demoqa.com/utilities/weather/city/");

            //Creating request to get data from server
            RestRequest restRequest = new RestRequest(city, Method.GET);

            // Executing request to server and checking server response to the it
            IRestResponse restResponse = restClient.Execute(restRequest);

            // Extracting output data from received response
            string response = restResponse.Content;

            // Verifiying reponse
            if (response.Contains(city))
                Assert.Fail("There should be no city information here.");

        }

    }
}