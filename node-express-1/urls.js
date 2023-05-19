const fs = require("fs");
const process = require("process");
const axios = require("axios");
const { URL } = require("url");

function getBaseUrl(urlString) {
  const url = new URL(urlString);
  const baseUrl = url.hostname;

  return baseUrl;
}

function filePathName(url) {
  return `./${url}`;
}

async function cat(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    const urls = data.split("\n");

    const urlPromises = urls.map(async (url) => {
      try {
        const response = await axios.get(url);
        url = getBaseUrl(url);
        return { url, response };
      } catch (error) {
        console.error(`couldn't write to ${url}`);
        return null; // Return null for invalid URLs
      }
    });

    for (const respPromise of urlPromises) {
      const resp = await respPromise;
      if (resp != undefined) {
        fs.writeFile(
          filePathName(resp.url),
          resp.response.data,
          { flag: "w" },
          (err) => {
            if (err) {
              console.error(`Error writing to file: ${err}`);
            } else {
              console.log(`Data written to file: ${resp.url}`);
            }
          }
        );
      }
    }
  } catch (error) {
    console.error(`Error reading ${filePath}: ${error}`);
    process.exit(1);
  }
}

cat(process.argv[2]);
