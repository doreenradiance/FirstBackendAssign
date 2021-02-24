const express = require("express");
const server = express();

const handleAllTypesOfRequests = (req, res) => {
   res.send("Response from server.use")
}

const handleRegisterPutRequestType = (req, res) => {
   res.send("Responded to register with the method value put.")
}
const handleContactPostRequestType = (req, res) => {
   res.send("Responded to contact with the method value post.")
};
const handleSignupGetRequestType = (req, res) => {
   res.send("Responded to contact with the method value get.")
}

const middlewarefunction = (req, res, next) => {
   // console.log(req
   // 'This is the middleware function'
   // );
   // res.send('This is the middleware response')
   next();
}
const registerRouteSpecificMiddleWare = (req, res, next) => {
   console.log("The register route specific middle ware");
   next();
};
const contactRouteSpecificMiddleWare = (req, res, next) => {
   console.log("The contact route specific middle ware");
   next();
};
const signupRouteSpecificMiddleWare = (req, res, next) => {
   console.log("The signup route specific middle ware");
   next();
};


const RouteSpecificMiddleWare = (req, res, next) => {
   console.log("The contact route specific middle ware");
   next();
};

//middleware
// server.use(middlewarefunction);

//routes
server.post("/register", handleAllTypesOfRequests);
server.put("/register", registerRouteSpecificMiddleWare, handleRegisterPutRequestType);
server.post("/contact", contactRouteSpecificMiddleWare, handleContactPostRequestType);
server.get("/signup", signupRouteSpecificMiddleWare, handleSignupGetRequestType);
server.delete("/home", (req, res) => res.send("This is the home page with the method value delete."))
server.patch("/home", (req, res) => res.send("This is the home page with the method value patch"))

server.listen(4000, '127.0.0.1', () => console.log('ready to recieve a request'))