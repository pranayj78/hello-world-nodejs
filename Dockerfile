FROM google/nodejs
 
WORKDIR /app
ADD package.json /app/
ADD app.js /app/
RUN npm install
ADD . /app
 
EXPOSE 8000
CMD []
ENTRYPOINT ["/nodejs/bin/npm", "start"]
