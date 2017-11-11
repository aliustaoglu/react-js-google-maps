Simple React JS Google Maps API

# REQUIREMENTS
Google Maps API:

It needs to have 
`<script async defer src="https://maps.googleapis.com/maps/api/js?key=##MYKEY##"></script>`
in the index.html (or the file that runs the React App)

#PROPS and default values
Map could be initialized with below. All optinal. But default values will be used if opted out.

mapZoom: 4,
mapCenter: {lat: -8.7463596, lng: 115.1679037 },
mapId: "reactJsGoogleMap",
mapClassName: '',
mapStyle: {}