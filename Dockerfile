## This file assumes that you have already built the next app from other server
## like, github actions. And you have copied all the files here


FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS runner
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

ENV NODE_ENV production

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder next.config.js ./
COPY --from=builder public ./public
COPY --from=builder package.json ./package.json
COPY --chown=nextjs:nodejs .next .next
RUN yarn add sharp

EXPOSE 3000
ENV PORT 3000

ENV NEXT_TELEMETRY_DISABLED 1
CMD ["yarn", "start"]