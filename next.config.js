/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,
    },
    basePath: "/nextjs-tailwindcss-blog",
    output: "export",
    reactStrictMode: true,
};

module.exports = withContentlayer({ ...nextConfig });
