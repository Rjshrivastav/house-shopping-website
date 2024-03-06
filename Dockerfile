#Step-1: node version that our project is using
FROM node:17-alpine 


# Step-2 Working directory for our project
WORKDIR /app

# step-3 copy package.json 
COPY package.json .

# step-4 install dependency that are present in package.json
RUN npm install

#step-5 copy `.` means current directory to another `.` means \app directory
COPY . .

#step-6 port in which we listen 
EXPOSE 3000

#step-7 command for starting the app.
# for eg. if cmd is "npm run dev" we write as ["npm", "run", "dev"]
CMD ["npm", "start"]