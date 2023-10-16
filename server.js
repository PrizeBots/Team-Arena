const express = require('express');
const expressStaticGzip = require("express-static-gzip");
const path = require('path');
const app = express();
const PORT = 3000;  // Set this to your desired port number

// Serve the static files from the Build directory with gzip support
app.use('/', expressStaticGzip(path.join(__dirname), {
  enableBrotli: true, // Optional: Brotli compression
  orderPreference: ['gzip'], // Prefer gzip over Brotli
  serveStatic: {
    setHeaders: function(res, path) {
      if (path.endsWith('.gz')) {
        res.set('Content-Encoding', 'gzip');
      }
    }
  }
}));

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
