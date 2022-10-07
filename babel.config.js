module.export = {
    "presets": [
        "@babel/preset-env",
        {
            corejs: { version: 3 },
            useBuiltIns: "usage",
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
                ie: "11",
            },
        },
    ],
    "plugins": [
        "@babel/transform-runtime", 
        "@babel/plugin-transform-spread", 
        "@babel/plugin-transform-arrow-functions"
    ]
}