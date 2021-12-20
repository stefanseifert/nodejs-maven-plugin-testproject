module.exports = {
  // default working directory (can be changed per 'cwd' in every asset option)
  context: __dirname,

  // path to the clientlib root folder (output)
  clientLibRoot: "target/content-packages/ui.apps/jcr_root/apps/nodejs-maven-plugin-testproject/clientlibs",

  // define all clientlib options here as array... (multiple clientlibs)
  libs: [
    {
      name: "nodejs-maven-plugin-testproject.app",
      serializationFormat: "xml",
      allowProxy: true,
      assets: {
        js: ["dist/static/js/app.js", "dist/static/js/app.js.map"],
        css: ["dist/static/styles/app.css", "dist/static/styles/app.css.map"],
        resources: {
          cwd: "./public/",
          flatten: false,
          files: ["**/*.*"]
        }
      }
    },
    {
      name: "nodejs-maven-plugin-testproject.all",
      serializationFormat: "xml",
      embed: [
        "core.wcm.components.commons.datalayer.v1",
        "core.wcm.components.commons.site.container",
        "core.wcm.components.image.v2",
        "core.wcm.components.carousel.v1",
        "core.wcm.components.tabs.v1",
        "core.wcm.components.accordion.v1",
        "nodejs-maven-plugin-testproject.app"
      ],
      jsProcessor: ["default:none", "min:gcc;compilationLevel=whitespace"],
      longCacheKey: "${project.version}-${buildNumber}",
      allowProxy: true,
      assets: {
        js: [],
        css: []
      }
    }
  ]
};
