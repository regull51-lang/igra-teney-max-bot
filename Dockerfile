FROM node:24-bookworm-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates curl \
    && curl -fsSL https://gu-st.ru/content/lending/russian_trusted_root_ca_pem.crt \
       -o /usr/local/share/ca-certificates/russian_trusted_root_ca.crt \
    && curl -fsSL https://gu-st.ru/content/lending/russian_trusted_sub_ca_pem.crt \
       -o /usr/local/share/ca-certificates/russian_trusted_sub_ca.crt \
    && cat /usr/local/share/ca-certificates/russian_trusted_root_ca.crt \
           /usr/local/share/ca-certificates/russian_trusted_sub_ca.crt \
       > /usr/local/share/max-russian-ca-bundle.pem \
    && update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY bot.js ./

ENV NODE_OPTIONS=--use-openssl-ca
ENV SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt

CMD ["node", "bot.js"]
