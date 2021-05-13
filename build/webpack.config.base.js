const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif|bmp)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            fallback: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]"
              }
            }
          }
        }
      },
      {
        test: /\.(mp4|ogg|mp3|wav)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            fallback: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]"
              }
            }
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "../src")
    },
    extensions: [
      ".js", ".json",".vue"
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}