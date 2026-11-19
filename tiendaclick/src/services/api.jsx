const API_URL = "https://devsapihub.com/api-ecommerce";

export async function request(endpoint = "", options = {}) {

  const url = `${API_URL}${endpoint}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  const res = await fetch(url, config);

  if (!res.ok) {
    throw new Error("Error al obtener datos");
  }

  return res.json();
}
