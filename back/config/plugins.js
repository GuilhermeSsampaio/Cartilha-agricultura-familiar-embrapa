module.exports = ({env}) => ({
  upload: {
    provider: 'minio',
    providerOptions: {
      endPoint: env('MINIO_ENDPOINT'),
      port: env('MINIO_PORT'),
      secure: env('MINIO_SECURE'),
      accessKey: env('MINIO_ACCESS_KEY'),
      secretKey: env('MINIO_SECRET_KEY'),
      params: {
        Bucket: env('MINIO_BUCKET_NAME'),
      },
    },
  },
  // upload: {
  //   config: {
  //     provider: 'cloudinary',
  //     providerOptions: {
  //       cloud_name: env('CLOUDINARY_NAME'),
  //       api_key: env('CLOUDINARY_KEY'),
  //       api_secret: env('CLOUDINARY_SECRET'),
  //     },
  //     actionOptions: {
  //       upload: {},
  //       show:{},
  //       delete: {},
  //     },
  //   },
  // },
  // email: {
  //   config: {
  //     provider: 'nodemailer',
  //     providerOptions: {
  //       host: env('SMTP_HOST'),
  //       port: env('SMTP_PORT'),
  //       auth: {
  //         user: env('SMTP_USERNAME'),
  //         pass: env('SMTP_PASSWORD'),
  //       },
  //       // ... any custom nodemailer options
  //     },
  //     settings: {
  //       defaultFrom: 'no-reply@strapi.io',
  //       defaultReplyTo: 'no-reply@strapi.io',
  //     },
  //   },
  // },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'guilherme.sampaio@estudante.ifms.edu.br',
        defaultReplyTo: 'guilherme.sampaio@estudante.ifms.edu.br',
      },
    },
  },
})
