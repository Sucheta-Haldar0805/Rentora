maptilersdk.config.apiKey = mapToken;

const defaultCoordinates = [77.2090, 28.6139]; // Delhi fallback

const map = new maptilersdk.Map({
  container: "map",
  style: maptilersdk.MapStyle.STREETS,
  center: defaultCoordinates,
  zoom: 3,
});

map.addControl(new maptilersdk.NavigationControl(), "top-right");

map.on("load", () => {

  if (
    typeof listing !== "undefined" &&
    listing.geometry &&
    listing.geometry.coordinates
  ) {

    const [lng, lat] = listing.geometry.coordinates;

    map.setCenter([lng, lat]);
    map.setZoom(10);

    const popup = new maptilersdk.Popup({ offset: 25 })
      .setHTML(`
        <h4>${listing.title}</h4>
        <p>${listing.location}</p>
      `);

    new maptilersdk.Marker({ color: "#FE424D" })
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(map);
  }

});