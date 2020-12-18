FROM node:12 AS build-stage

WORKDIR /react-app

COPY react-app/. .

# Build our React App
RUN npm install

RUN ls
RUN npm run build
RUN ls build

FROM python:3.8

# Setup Flask environment
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True

EXPOSE 8000

WORKDIR /var/www

COPY . .
# Copy build files from build-stage into app/static

# Install Python Dependencies
# add docker instructions

# Run flask environment
CMD gunicorn app:app
