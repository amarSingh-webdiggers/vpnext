browser.storage.local.get(data => {
    if(data.selectedServer)
    {
  if (data.selectedServer.proxyType !== 'direct') {
    chenageConnected(data.selectedServer);
  }
}
  if(data.email)
  {
    document.getElementById("getdata").style.display = "none";
    document.getElementById("viewServers").style.display = "block";
  }
});
var finaldata = [];  
var htmldata = "";
var isoCountries = {
    'AF' : 'Afghanistan',
    'AX' : 'Aland Islands',
    'AL' : 'Albania',
    'DZ' : 'Algeria',
    'AS' : 'American Samoa',
    'AD' : 'Andorra',
    'AO' : 'Angola',
    'AI' : 'Anguilla',
    'AQ' : 'Antarctica',
    'AG' : 'Antigua And Barbuda',
    'AR' : 'Argentina',
    'AM' : 'Armenia',
    'AW' : 'Aruba',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'AZ' : 'Azerbaijan',
    'BS' : 'Bahamas',
    'BH' : 'Bahrain',
    'BD' : 'Bangladesh',
    'BB' : 'Barbados',
    'BY' : 'Belarus',
    'BE' : 'Belgium',
    'BZ' : 'Belize',
    'BJ' : 'Benin',
    'BM' : 'Bermuda',
    'BT' : 'Bhutan',
    'BO' : 'Bolivia',
    'BA' : 'Bosnia And Herzegovina',
    'BW' : 'Botswana',
    'BV' : 'Bouvet Island',
    'BR' : 'Brazil',
    'IO' : 'British Indian Ocean Territory',
    'BN' : 'Brunei Darussalam',
    'BG' : 'Bulgaria',
    'BF' : 'Burkina Faso',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran, Islamic Republic Of',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Lao People\'s Democratic Republic',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libyan Arab Jamahiriya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia, Federated States Of',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestinian Territory, Occupied',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syrian Arab Republic',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Viet Nam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
};

function getCountryName (countryCode) {
    if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
    } else {
        return countryCode;
    }
}
function getnewservers(){
document.getElementById('proxylist').innerHTML = '';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var myArrdata = myArr.data;
        for(var i = 0; i<myArrdata.length;i++)
        {
            var countryname = getCountryName(myArrdata[i].country);
          var type = myArrdata[i].type;
          if(myArrdata[i].support.https)
          {
            type = 'HTTP,HTTPS';
          }


          htmldata+='<li data-ip="'+myArrdata[i].ip+'" data-port="'+myArrdata[i].port+'" data-country="'+countryname+'" data-type="'+type+'" class="setproxy">'+countryname+' <span style="float: right"> '+type+'</span></li>';
        }
        document.getElementById('proxylist').innerHTML = htmldata;
        var listhtml =  document.getElementById('proxylist').innerHTML;
        //console.log(listhtml)
        browser.storage.local.set({servers:listhtml});
        var proxyelem = document.getElementsByClassName('setproxy');

        var proxySetting = {};
        for(i = 0 ; i < proxyelem.length; i++){
          proxyelem[i].addEventListener("click",setproxy, false);
        }
        //myArrdata.forEach(setNewServers); 
      } 
    }; 
      xmlhttp.open("GET",
"http://pubproxy.com/api/proxy?limit=5&format=json&https=true", true);
xmlhttp.send();

document.getElementById('loading').style.display = "none";
}


//var country = serverData.country;
function setNewServers(serverData)
{
  //console.log()
  
  var xmlhttp1 = new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var proxycheckData = JSON.parse(this.responseText);
        var proxyResponse = Object.values(proxycheckData);
        if(proxyResponse[1].proxy == "yes")
        {
          htmldata+='<li data-ip="'+serverData.ip+'" data-port="'+serverData.port+'" data-country="'+serverData.country+'" data-type="'+proxyResponse[1].type+'" class="setproxy">'+serverData.country+' <span style="float: right"> '+proxyResponse[1].type+'</span></li>'; 

          //var listhtml =  document.getElementById('proxylist').innerHTML;
          document.getElementById('proxylist').innerHTML = htmldata;

          var proxyelem = document.getElementsByClassName('setproxy');

        var proxySetting = {};
        for(i = 0 ; i < proxyelem.length; i++){
          proxyelem[i].addEventListener("click",setproxy, false);
        }

        

        }
        
      }
    }
  xmlhttp1.open("GET", "http://proxycheck.io/v2/"+serverData.ip+"", true);
  xmlhttp1.send();


  //
}



function loadservers(data)
{
    document.getElementById('loading').style.display = "none";

    
     document.getElementById('proxylist').innerHTML = data;

     var proxyelem = document.getElementsByClassName('setproxy');


for(i = 0 ; i < proxyelem.length; i++)
{
  proxyelem[i].addEventListener("click",setproxy, false);
}

}

var removeproxybtn = document.getElementsByClassName("removeproxy");
for(i = 0 ; i < removeproxybtn.length; i++)
{
  removeproxybtn[i].addEventListener("click",removeproxy, false);
}

function onGot(item) {
   //getnewservers();
   //console.log(item);
if(item.servers == undefined || item.servers == '')
{
  getnewservers();
}
  else
  {
    loadservers(item.servers);
  }
}

function onError(error) {
  console.log(error)
  
}

let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

var proxySetting = {};
function setproxy()
{

  var ip = this.getAttribute("data-ip");
  var type = this.getAttribute("data-type");
  var port = this.getAttribute("data-port");

  proxySetting = {proxyType: type,
  ip: ip,
  port: port, 
  socksVersion: 5,};


//browser.proxy.settings.set({value: proxySetting});
browser.storage.local.set({selectedServer:proxySetting});
var listhtml =  document.getElementById('proxylist').innerHTML;
browser.storage.local.set({servers:listhtml});
document.getElementById('removeproxybtn').style.display = "block";
//checkConnection(proxySetting)


browser.storage.local.get(data => {
  if (data.selectedServer) {
document.getElementById("proxylistholder").style.display = "none";
document.getElementById("connectingProxy").style.display = "block";
document.getElementById("connectingserver").innerHTML = data.selectedServer.ip;
    fetch("https://www.example.com/", {cache: "no-store"})
    .then(resp => {createNotifi()})
    .catch(error => {failConnection()});
    function createNotifi()
    {
        chenageConnected(data.selectedServer);
        browser.storage.local.set({connection:'Connecteded'});
        var title = "Connected";
var content = "Connected to Proxy Server.";
browser.notifications.create({
  "type": "basic",
  "iconUrl": browser.extension.getURL("icons/icon.webp"),
  "title": title,
  "message": content
});
    }
    function failConnection()
    {
        console.log('Not Conneted');
        removeproxy();
        browser.storage.local.set({connection:'Disconnected'});
    }
    
  }
});
}

function chenageConnected(seletserver)
{
    document.getElementById("connectingProxy").style.display = "none";
    document.getElementById("proxylistholder").style.display = "none";
    document.getElementById("connectedProxy").style.display = "block";
    document.getElementById("connectedserver").innerHTML = seletserver.ip;

     
}

function removeproxy()
{
proxySetting = {
  proxyType: "direct",
};
//browser.proxy.settings.set({value: proxySetting});
browser.storage.local.set({selectedServer:proxySetting});
document.getElementById('removeproxybtn').style.display = "none";
document.getElementById("connectedProxy").style.display = "none";
    document.getElementById("connectingProxy").style.display = "none";
document.getElementById("proxylistholder").style.display = "block";

}

document.getElementById("reloadservers").addEventListener('click',getnewservers)
document.getElementById("submitemail").addEventListener('click',formsubmit)


function formsubmit()
{

    var email = document.getElementById("emailadd").value;
    let data = {email: email};
    console.log(email);
    var http = new XMLHttpRequest();
var url = 'http://webdiggers.in/vpnextData/savedata.php';
var params = 'email='+email+'&proxydatasave=true';
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        var resp = http.responseText;
        if(resp == 'invalid')
        {
            document.getElementById("emailadd").value = '';
            document.getElementById("message").innerHTML = 'Invalid Email Address'; 
        }
        else if(resp == 'duplicate')
        {
            document.getElementById("emailadd").value = '';
            document.getElementById("message").innerHTML = 'Email Already Registered Please Enter New Email'; 
        }
        else if(resp == 'inserted')
        {
            browser.storage.local.set({email:email});
            document.getElementById("getdata").style.display = "none";
            document.getElementById("viewServers").style.display = "block";
        }
    }
}
http.send(params);
}