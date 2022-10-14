/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		reactRemoveProperties: true,
		styledComponents: true,
	},
	images: {
		domains: ['spoonacular.com'],
	},
};

module.exports = nextConfig;
