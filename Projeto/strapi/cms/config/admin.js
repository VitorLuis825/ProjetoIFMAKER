module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6c9dc453acfc5fc80b8c30ddfc850c44'),
  },
});
