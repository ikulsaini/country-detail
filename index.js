function getData() {
    const Request = new XMLHttpRequest()
    Request.open("get", "https://restcountries.com/v3.1/name/bharat")
    Request.send()
    Request.addEventListener('load', () => {

        var [data] = JSON.parse(Request.responseText)
    document.getElementById("name").innerHTML = data.name.official
    document.getElementById("Capital").innerHTML = data.capital[0]
    document.getElementById("flags").src = data.flags.svg
    document.getElementById("Borders").innerHTML = data.borders
    document.getElementById("TimeZone").innerHTML = data.timezones
    document.getElementById("Population").innerHTML = data.population
    document.getElementById("Area").innerHTML = data.area
    document.getElementById("Region").innerHTML = data.region
    document.getElementById("SubRegion").innerHTML = data.subregion
    document.getElementById("UNMember").innerHTML = data.unMember
    document.getElementById("Indepependent").innerHTML = data.independent
    document.getElementById("StartofWeek").innerHTML = data.startOfWeek
    document.getElementById("Landlocked").innerHTML = data.landlocked
    document.getElementById("maps").href = data.maps.googleMaps
    document.getElementById("coatOfArms").src = data.coatOfArms.svg
    document.getElementById("languages").innerHTML = data.language




})






}
getData()

function fun() {
    const Request = new XMLHttpRequest()
    var name = document.getElementById("search").value
    Request.open("get", "https://restcountries.com/v3.1/name/"+name)
    Request.send()
    Request.addEventListener('load', () => {

        var [data] = JSON.parse(Request.responseText)
    document.getElementById("name").innerHTML = data.name.official
    document.getElementById("Capital").innerHTML = data.capital[0]
    document.getElementById("flags").src = data.flags.svg
    document.getElementById("Borders").innerHTML = data.borders
    document.getElementById("TimeZone").innerHTML = data.timezones
    document.getElementById("Population").innerHTML = data.population
    document.getElementById("Area").innerHTML = data.area
    document.getElementById("Region").innerHTML = data.region
    document.getElementById("SubRegion").innerHTML = data.subregion
    document.getElementById("UNMember").innerHTML = data.unMember
    document.getElementById("Indepependent").innerHTML = data.independent
    document.getElementById("StartofWeek").innerHTML = data.startOfWeek
    document.getElementById("Landlocked").innerHTML = data.landlocked
    document.getElementById("maps").href = data.maps.googleMaps
    document.getElementById("coatOfArms").src = data.coatOfArms.svg





})

}