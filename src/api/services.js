export const getSuggestions = async (
  searchValue,
  location,
  maxSuggestions,
  countryCode,
  category
) => {
  const res = await fetch(
    `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=${searchValue}${
      location ? `&location=${location}` : ""
    }&maxSuggestions=${maxSuggestions}${
      countryCode !== "" ? `&countryCode=${countryCode}` : ""
    }${category !== "" ? `&category=${category}` : ""}`
  );
  const data = await res.json();

  return data?.suggestions || [];
};

export const getAddresses = async (
  searchValue,
  location,
  maxLocations,
  countryCode,
  category
) => {
  const res = await fetch(
    `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine=${searchValue}&f=pjson${
      location ? `&location=${location}` : ""
    }&maxLocations=${maxLocations}${
      countryCode !== "" ? `&countryCode=${countryCode}` : ""
    }${category !== "" ? `&category=${category}` : ""}`
  );
  const data = await res.json();

  return data?.candidates || [];
};
