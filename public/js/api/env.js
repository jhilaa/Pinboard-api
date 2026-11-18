
export const ENV = {
  "local": { DEBUG: true, DATA_SRC: "local", API_BASE_URL: "/public/data/"},
  "dev": { DEBUG: true, DATA_SRC: "api", API_BASE_URL: "http://localhost:3000/api"},
  "test": { DEBUG: true, DATA_SRC: "api", API_BASE_URL: "https://pinboard-hqnx.onrender.com/api"},
  "prod": { DEBUG: false, DATA_SRC: "api", API_BASE_URL: "https://pinboard-hqnx.onrender.com/api"}
}

